// ============ 底部 Dock — 输入栏 + 右下悬浮快捷发布 ============

/** 圆形语音图标（含音波弧线 — 参考附件还原） */
function DockVoiceCircleIco({size=22}){
  /* 三段同心弧，从左侧发射点向右辐射，粗描边 */
  const sw = 3.2;
  return (
    <svg viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.8"/>
      {/* 最小弧 r=5 */}
      <path d="M21.5 19.5 A6 6 0 0 1 21.5 28.5" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" fill="none"/>
      {/* 中弧 r=9 */}
      <path d="M24 15.5 A10 10 0 0 1 24 32.5" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" fill="none"/>
      {/* 大弧 r=13 */}
      <path d="M26.5 12 A14 14 0 0 1 26.5 36" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/** 圆形键盘图标（含圆点键位 + 空格条） */
function DockKbdCircleIco({size=22}){
  const R = 2.3;
  const row1 = [12,16.5,21,25.5,30,34.5];
  const row2 = [14.5,19,23.5,28,32.5];
  return (
    <svg viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true">
      <circle cx="24" cy="24" r="21.5" stroke="currentColor" strokeWidth="2.6"/>
      {row1.map(x=><circle key={x} cx={x} cy={18} r={R} fill="currentColor"/>)}
      {row2.map(x=><circle key={x} cx={x} cy={24.5} r={R} fill="currentColor"/>)}
      <rect x="15" y="29.5" width="18" height="3.5" rx="1.75" fill="currentColor"/>
    </svg>
  );
}

/** 方案 I · 卡片扇 — 4 项快捷发布
 *  布局：以加号为圆心，开口朝左上的 1/4 扇形，
 *  4 项按数组顺序均匀落在 -180°(左) → -90°(上) 区间，间隔 30°。
 *  角度约定：0° 朝右、逆时针为正（数学惯例），故 -180° 即 180°、-90° 即 90°。
 */
const QUICK_CARDS = [
  { id:'weight', label:'体重', hint:'±0.1 kg', title:'今日体重' },
  { id:'symptom', label:'症状', hint:'快速多选', title:'今日症状' },
  { id:'mood', label:'心情', hint:'5 档表情', title:'记录心情' },
  { id:'diet', label:'饮食', hint:'餐食速记', title:'今日饮食' },
];

const RADIAL_MENU = {
  stagger: 0.04,
  duration: 0.5,
  positions: [
    { x: -5, y: -158 },
    { x: -79.5, y: -136 },
    { x: -137, y: -79 },
    { x: -159, y: -4 },
  ],
};

function computeRadialCards(cards, config = RADIAL_MENU){
  const { positions = [], stagger: STAG } = config;
  return cards.map((card, i)=>{
    const pos = positions[i] || { x: 0, y: 0 };
    return {
      ...card,
      x: pos.x.toFixed(1),
      y: pos.y.toFixed(1),
      dOut: (i * STAG).toFixed(3) + 's',
      dIn: ((cards.length - 1 - i) * STAG).toFixed(3) + 's',
    };
  });
}

const QUICK_CARDS_RADIAL = computeRadialCards(QUICK_CARDS);

const DEMO_VOICE_LINE = '昨天下午来了姨妈，来之前，上午就开始头痛。';

const DOCK_PLACEHOLDER = '记录生活点滴';

function DockWavePlaceholder({show, focused}){
  if(!show) return null;

  return (
    <span
      className={'dock-float-ph'+(focused ? ' is-focused' : '')}
      aria-hidden="true"
    >
      <span className="dock-float-ph-char is-idle">{DOCK_PLACEHOLDER}</span>
    </span>
  );
}

function QuickCardFan({
  open, selected, closingToMood, onFabTap, onSelectCard, onMoodPick, onSymptomPick, onDietPick, onClose,
  onSymptomSubmit, onWeightSubmit, onFoodSubmit, weightPickerKey, fabGuidePulse = false, hideFab = false,
}){
  const QuickCardIcon = window.QuickCardIcon;
  const QuickSymptomPicker = window.QuickSymptomPicker;
  const QuickWeightPicker = window.QuickWeightPicker;
  const QuickFoodPicker = window.QuickFoodPicker;
  const [closing, setClosing] = React.useState(false);
  const wasOpenRef = React.useRef(false);

  React.useEffect(()=>{
    if(open){
      setClosing(false);
      wasOpenRef.current = true;
      return;
    }
    if(!wasOpenRef.current || selected) return;
    setClosing(true);
    const dur = closingToMood
      ? 0.22
      : RADIAL_MENU.duration * 0.8 + (QUICK_CARDS.length - 1) * RADIAL_MENU.stagger;
    const tm = setTimeout(()=>{
      setClosing(false);
      wasOpenRef.current = false;
    }, dur * 1000 + 80);
    return ()=>clearTimeout(tm);
  }, [open, selected, closingToMood]);

  const fanClosing = closing || (closingToMood && !open);

  return (
    <div
      className={'quick-card-fan'
        +(open ? ' is-open' : '')
        +(fanClosing ? ' is-closing' : '')
        +(closingToMood ? ' to-mood' : '')
        +(selected ? ' has-selected' : '')}
      style={{'--rm-duration': RADIAL_MENU.duration + 's'}}
    >
      {QUICK_CARDS_RADIAL.map((card)=>{
        const isSel = selected === card.id;
        const isOther = selected && !isSel;

        return (
          <div
            key={card.id}
            className={'quick-card-fan-item'
              +(isSel ? ' is-selected' : '')
              +(isOther ? ' is-faded' : '')}
            data-card={card.id}
            style={{
              '--x': card.x + 'px',
              '--y': card.y + 'px',
              '--d-out': card.dOut,
              '--d-in': card.dIn,
            }}
          >
            <button
              type="button"
              className="quick-card-fan-face"
              onPointerDown={(e)=>{
                if(!open || selected) return;
                if(card.id === 'diet'){
                  e.preventDefault();
                  e.stopPropagation();
                  onDietPick?.(e.currentTarget);
                } else if(card.id === 'mood'){
                  e.preventDefault();
                  e.stopPropagation();
                  onMoodPick?.();
                } else if(card.id === 'symptom'){
                  e.preventDefault();
                  e.stopPropagation();
                  onSymptomPick?.();
                }
              }}
              onClick={()=>{
                if(!open || selected) return;
                if(card.id !== 'mood' && card.id !== 'diet' && card.id !== 'symptom') onSelectCard(card.id);
              }}
              aria-label={card.label}
              tabIndex={open && !selected ? 0 : -1}
            >
              <span className="quick-card-fan-ico">
                <QuickCardIcon kind={card.id} size={24}/>
              </span>
              <span className="quick-card-fan-lbl">{card.label}</span>
            </button>

            <div className="quick-card-fan-panel" aria-hidden={!isSel}>
              {card.id !== 'weight' ? (
                <div className="quick-card-fan-panel-hd">
                  <span className="quick-card-fan-panel-title">{card.title}</span>
                  <button type="button" className="quick-card-fan-panel-close" onClick={onClose} aria-label="关闭">
                    ×
                  </button>
                </div>
              ) : null}
              <div className={'quick-card-fan-panel-body'+(card.id === 'weight' ? ' is-weight' : '')}>
                {card.id === 'symptom' ? (
                  <QuickSymptomPicker onSubmit={onSymptomSubmit}/>
                ) : card.id === 'diet' ? (
                  <QuickFoodPicker onSubmit={onFoodSubmit}/>
                ) : card.id === 'weight' ? (
                  <QuickWeightPicker key={weightPickerKey} onSubmit={onWeightSubmit}/>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

      {!hideFab ? <button
        type="button"
        className={'quick-card-fab'+(open ? ' is-open' : '')+(selected ? ' is-covered' : '')+(fabGuidePulse ? ' is-guide-pulse' : '')}
        onClick={onFabTap}
        aria-expanded={open}
        aria-label={open ? '收起快捷记录' : '快捷记录'}
      >
        {fabGuidePulse ? <span className="quick-card-fab-pulse-ring" aria-hidden="true"/> : null}
        <span className="quick-card-fab-gray" aria-hidden="true"/>
        <span className="quick-card-fab-plus" aria-hidden="true"/>
      </button> : null}
    </div>
  );
}

function BeverageQuickSheet({onClose, onPhoto, onWater}){
  const I = window.Icon;
  return (
    <div className="dock-sheet dock-beverage-sheet">
      <div className="dock-sheet-hd">
        <h3 className="dock-sheet-title">记录喝水</h3>
        <button type="button" className="dock-sheet-close" onClick={onClose} aria-label="关闭">
          <I name="x" size={20} stroke={1.8}/>
        </button>
      </div>
      <div className="dock-beverage-actions">
        <button type="button" className="dock-beverage-action" onClick={(event)=>onPhoto?.(event.currentTarget)}>
          <span className="dock-beverage-action-icon is-photo" aria-hidden="true">
            <I name="camera" size={25} stroke={1.8}/>
          </span>
          <span>
            <strong>拍照记录</strong>
            <small>识别奶茶、咖啡标签分析热量、咖啡因</small>
          </span>
          <I name="chevron-right" size={18} stroke={1.8}/>
        </button>
        <button type="button" className="dock-beverage-action" onClick={onWater}>
          <span className="dock-beverage-action-icon is-water" aria-hidden="true">
            <img src="assets/baby-feeding-icons/water.png" alt=""/>
          </span>
          <span>
            <strong>输入记录</strong>
            <small>记录饮水、饮品信息统计每日饮水量</small>
          </span>
          <I name="chevron-right" size={18} stroke={1.8}/>
        </button>
      </div>
    </div>
  );
}

function WaterQuickSheet({onClose, onSave}){
  const I = window.Icon;
  const categories = ['水', '奶茶', '咖啡', '果茶', '纯茶', '果汁', '果蔬汁', '纯奶饮品'];
  const iceOptions = ['热', '常温', '去冰', '少冰', '正常冰'];
  const sugarOptions = ['0%', '30%', '50%', '70%', '100%'];
  const [category, setCategory] = React.useState('水');
  const [capacityMl, setCapacityMl] = React.useState(300);
  const [brand, setBrand] = React.useState('');
  const [beverageName, setBeverageName] = React.useState('');
  const [iceLevel, setIceLevel] = React.useState('正常冰');
  const [sugarLevel, setSugarLevel] = React.useState('100%');
  const [calories, setCalories] = React.useState('');
  const [caffeineMg, setCaffeineMg] = React.useState('');
  const isWater = category === '水';
  const submit = ()=>onSave({
    beverageCategory:category,
    capacityMl,
    brand:isWater ? '' : brand.trim(),
    beverageName:isWater ? '白水' : (beverageName.trim() || category),
    iceLevel:isWater ? '' : iceLevel,
    sugarLevel:isWater ? '' : sugarLevel,
    calories:isWater ? 0 : (Number(calories) || 0),
    caffeineMg:isWater ? 0 : (Number(caffeineMg) || 0),
  });
  return (
    <div className="dock-sheet dock-water-sheet dock-water-entry-sheet">
      <div className="dock-sheet-hd">
        <h3 className="dock-sheet-title">记录喝水</h3>
        <button type="button" className="dock-sheet-close" onClick={onClose} aria-label="关闭">
          <I name="x" size={20} stroke={1.8}/>
        </button>
      </div>
      <div className="dock-water-entry-scroll">
        <section className="dock-water-entry-card">
          <label className="dock-water-entry-label">品类</label>
          <div className="dock-water-category-scroll" role="group" aria-label="喝水品类">
            {categories.map(option=>(
              <button
                type="button"
                className={category === option ? 'is-active' : ''}
                key={option}
                onClick={()=>setCategory(option)}
                aria-pressed={category === option}
              >
                {option}
              </button>
            ))}
          </div>

          {!isWater ? (
            <div className="dock-water-entry-fields">
              <label>
                <span>品牌</span>
                <input value={brand} onChange={(event)=>setBrand(event.target.value)} placeholder="例如：星巴克"/>
              </label>
              <label>
                <span>饮品名称</span>
                <input value={beverageName} onChange={(event)=>setBeverageName(event.target.value)} placeholder="例如：红茶咖啡拿铁鸳鸯"/>
              </label>
            </div>
          ) : null}

          <div className="dock-water-capacity">
            <div>
              <span>容量</span>
              <strong>{capacityMl} ml</strong>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={capacityMl}
              onChange={(event)=>setCapacityMl(Number(event.target.value))}
              aria-label="饮品容量"
            />
            <div className="dock-water-capacity-labels">
              <span>100</span><span>300</span><span>500</span><span>750</span><span>1000ml</span>
            </div>
          </div>

          {!isWater ? (
            <>
              <div className="dock-water-option-group">
                <span className="dock-water-entry-label">冰度</span>
                <div className="dock-water-option-row" role="group" aria-label="冰度">
                  {iceOptions.map(option=>(
                    <button
                      type="button"
                      className={iceLevel === option ? 'is-active' : ''}
                      key={option}
                      onClick={()=>setIceLevel(option)}
                      aria-pressed={iceLevel === option}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="dock-water-option-group">
                <span className="dock-water-entry-label">糖度</span>
                <div className="dock-water-option-row" role="group" aria-label="糖度">
                  {sugarOptions.map(option=>(
                    <button
                      type="button"
                      className={sugarLevel === option ? 'is-active' : ''}
                      key={option}
                      onClick={()=>setSugarLevel(option)}
                      aria-pressed={sugarLevel === option}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="dock-water-entry-fields is-nutrition">
                <label>
                  <span>热量</span>
                  <div><input value={calories} onChange={(event)=>setCalories(event.target.value)} inputMode="decimal"/><i>千卡</i></div>
                </label>
                <label>
                  <span>咖啡因</span>
                  <div><input value={caffeineMg} onChange={(event)=>setCaffeineMg(event.target.value)} inputMode="decimal"/><i>毫克</i></div>
                </label>
              </div>
            </>
          ) : null}
        </section>
      </div>
      <div className="dock-sheet-foot">
        <button type="button" className="dock-sheet-submit" onClick={submit}>保存记录</button>
      </div>
    </div>
  );
}

function DockPublisher({
  draft, onDraft, onSend, onQuickMark, onMoodConfirm, onSymptomConfirm, onWeightConfirm,
  onFoodConfirm, onDietCapture, onCameraRecord,
  onVoiceDone, onPhoto, onDockExpandedChange, onCameraActiveChange, activeTab, showScheme3Bubble,
  highlightScheme3Input, dockPlaceholder, defaultInputMode = 'voice',
  demoPhase, isDemoRunning, hideQuickFan = false, hideQuickFab = false,
  feedingQuickItems = null, feedingQuickLabel = '快捷记录', onFeedingQuickSelect,
  emptyPreviewGuideStep = 0, onEmptyPreviewGuideAdvance, onEmptyPreviewGuideDismiss, fabGuidePulse = false,
}){
  const I = window.Icon;
  const DockMoodPicker = window.DockMoodPicker;
  const DockSymptomPicker = window.DockSymptomPicker;
  const CameraTransition = window.CameraTransition;
  const QuickCardIcon = window.QuickCardIcon;
  const measureElementRect = window.measureElementRect;
  const [inputMode, setInputMode] = React.useState(defaultInputMode);
  const [quickOpen, setQuickOpen] = React.useState(false);
  const [quickSelected, setQuickSelected] = React.useState(null);
  const [closingToMood, setClosingToMood] = React.useState(false);
  const [moodPickerOpen, setMoodPickerOpen] = React.useState(false);
  const [symptomPickerOpen, setSymptomPickerOpen] = React.useState(false);
  const [dockSheet, setDockSheet] = React.useState(null);
  const [recording, setRecording] = React.useState(false);
  const [recSec, setRecSec] = React.useState(0);
  const [inputFocused, setInputFocused] = React.useState(false);
  const [cameraOpen, setCameraOpen] = React.useState(false);
  const [cameraSourceRect, setCameraSourceRect] = React.useState(null);
  const [cameraPreferredMode, setCameraPreferredMode] = React.useState(null);
  const [feedingExpanded, setFeedingExpanded] = React.useState(false);
  const recTimer = React.useRef(null);
  const prevTabRef = React.useRef(activeTab);
  const containerRef = React.useRef(null);
  const feedingDragStartY = React.useRef(null);

  React.useEffect(()=>{
    if(containerRef.current){
      const phone = containerRef.current.closest('.phone');
      if(phone) containerRef.current = phone;
    }
  }, []);

  React.useEffect(()=>{
    setInputMode(defaultInputMode);
  }, [defaultInputMode]);

  React.useEffect(()=>{
    if(activeTab === 'note' && prevTabRef.current !== 'note'){
      setQuickOpen(false);
      setQuickSelected(null);
      setDockSheet(null);
      setMoodPickerOpen(false);
      setSymptomPickerOpen(false);
      setClosingToMood(false);
    }
    prevTabRef.current = activeTab;
  }, [activeTab]);

  React.useEffect(()=>{
    if(!showScheme3Bubble) return;
    const tm = setTimeout(()=>window.markScheme3BubbleSeen?.(), 2400);
    return ()=>clearTimeout(tm);
  }, [showScheme3Bubble]);

  const [weightPickerKey, setWeightPickerKey] = React.useState(0);

  const handleSelectQuickCard = (id)=>{
    if(id === 'weight') setWeightPickerKey(k=>k + 1);
    setQuickSelected(id);
  };

  const closeQuick = ()=>{
    setQuickSelected(null);
    setQuickOpen(false);
    setClosingToMood(false);
  };

  const handleMoodFanTap = ()=>{
    setMoodPickerOpen(true);
    setClosingToMood(true);
    setQuickOpen(false);
    window.setTimeout(()=> setClosingToMood(false), 260);
  };

  const closeMoodPicker = ()=>{
    setMoodPickerOpen(false);
    setClosingToMood(false);
  };

  const handleMoodOverlaySubmit = (moods)=>{
    setMoodPickerOpen(false);
    setClosingToMood(false);
    setQuickOpen(false);
    setQuickSelected(null);
    onMoodConfirm?.(moods);
  };

  const handleSymptomFanTap = ()=>{
    setSymptomPickerOpen(true);
    setClosingToMood(true);
    setQuickOpen(false);
    window.setTimeout(()=> setClosingToMood(false), 260);
  };

  const closeSymptomPicker = ()=>{
    setSymptomPickerOpen(false);
    setClosingToMood(false);
  };

  const handleSymptomOverlaySubmit = (symptoms)=>{
    setSymptomPickerOpen(false);
    setClosingToMood(false);
    setQuickOpen(false);
    setQuickSelected(null);
    onSymptomConfirm?.(symptoms);
  };

  const handleFabTap = ()=>{
    if(emptyPreviewGuideStep === 2) onEmptyPreviewGuideAdvance?.();
    if(quickOpen) closeQuick();
    else setQuickOpen(true);
  };

  const notifyGuideDockInteract = ()=>{
    if(emptyPreviewGuideStep === 1) onEmptyPreviewGuideAdvance?.();
  };

  const dismissGuideForVoice = ()=>{
    if(emptyPreviewGuideStep === 1 || emptyPreviewGuideStep === 2) onEmptyPreviewGuideDismiss?.();
  };


  React.useEffect(()=>{
    if(recording){
      recTimer.current = setInterval(()=>setRecSec(s=>s+1), 1000);
    } else {
      clearInterval(recTimer.current);
      setRecSec(0);
    }
    return ()=>clearInterval(recTimer.current);
  }, [recording]);

  const startRec = ()=> setRecording(true);
  const stopRec = ()=>{
    if(!recording) return;
    setRecording(false);
    onVoiceDone(DEMO_VOICE_LINE, Math.max(recSec, 3));
  };

  const toggleMode = ()=>{
    setInputMode(m=>m==='text' ? 'voice' : 'text');
    closeQuick();
  };

  const closeDockSheet = ()=> setDockSheet(null);

  const handleQuickSymptomSubmit = (symptoms)=>{
    closeQuick();
    onSymptomConfirm?.(symptoms);
  };

  const handleQuickWeightSubmit = (payload)=>{
    closeQuick();
    onWeightConfirm?.(payload);
  };

  const handleQuickFoodSubmit = (foods)=>{
    closeQuick();
    onFoodConfirm?.(foods);
  };

  const handleMoodConfirm = (moods)=>{
    setDockSheet(null);
    onMoodConfirm?.(moods);
  };

  const handleSymptomConfirm = (symptoms)=>{
    setDockSheet(null);
    onSymptomConfirm?.(symptoms);
  };

  const openRecognitionCamera = (buttonEl, preferredMode = null)=>{
    if(!buttonEl) return;
    const phone = buttonEl.closest('.phone');
    if(!phone) return;
    containerRef.current = phone;
    const rect = measureElementRect?.(buttonEl, phone);
    setCameraSourceRect(rect);
    setCameraPreferredMode(preferredMode);
    setDockSheet(null);
    setQuickOpen(false);
    setQuickSelected(null);
    setCameraOpen(true);
  };

  const handleDietFanTap = (buttonEl)=>{
    openRecognitionCamera(buttonEl);
  };

  const handleCameraCaptureSuccess = (payload)=>{
    const normalized = {
      ...payload,
      type: payload?.type || 'capture',
      photoUrl: payload?.photoUrl || null,
      photo: payload?.photo,
      recognitionState: 'ready',
    };
    if(normalized.mode === 'diet') onDietCapture?.(normalized);
    else onCameraRecord?.(normalized);
  };

  const handleCameraClose = ()=>{
    setCameraOpen(false);
    setCameraPreferredMode(null);
  };

  React.useEffect(()=>{
    onDockExpandedChange?.(!!dockSheet || !!quickSelected);
  }, [dockSheet, quickSelected, onDockExpandedChange]);

  const isDockExpanded = !!dockSheet;
  const isQuickActive = quickOpen || !!quickSelected;
  const inputPlaceholder = dockPlaceholder || DOCK_PLACEHOLDER;
  const showFeedingQuick = Array.isArray(feedingQuickItems) && feedingQuickItems.length > 0;
  const feedingVisibleItems = showFeedingQuick && !feedingExpanded
    ? feedingQuickItems.slice(0, 6)
    : (feedingQuickItems || []);
  const MoodOverlay = window.MoodQuickOverlay || (()=>null);
  const SymptomOverlay = window.SymptomQuickOverlay || (()=>null);

  const startFeedingPanelDrag = (clientY)=>{
    if(!showFeedingQuick) return;
    feedingDragStartY.current = clientY;
  };

  const finishFeedingPanelDrag = (clientY)=>{
    if(!showFeedingQuick || feedingDragStartY.current == null) return;
    const dy = clientY - feedingDragStartY.current;
    feedingDragStartY.current = null;
    if(dy < -18) setFeedingExpanded(true);
    if(dy > 18) setFeedingExpanded(false);
  };

  const handleDockQuickItemSelect = (item)=>{
    if(item?.action === 'weight'){
      setWeightPickerKey(k=>k + 1);
      setQuickOpen(false);
      setQuickSelected('weight');
      return;
    }
    if(item?.action === 'symptom'){
      handleSymptomFanTap();
      return;
    }
    if(item?.action === 'mood'){
      handleMoodFanTap();
      return;
    }
    if(item?.action === 'diet'){
      setQuickOpen(false);
      setQuickSelected('diet');
      return;
    }
    if(item?.action === 'beverage'){
      setDockSheet('beverage');
      return;
    }
    onFeedingQuickSelect?.(item);
  };

  return (
    <>
      {!hideQuickFan && (
      <div className={'quick-float-wrap'+(isDockExpanded ? ' is-covered' : '')+(isQuickActive ? ' is-quick-active' : '')}>
        <QuickCardFan
          open={quickOpen}
          selected={quickSelected}
          closingToMood={closingToMood}
          onFabTap={handleFabTap}
          onSelectCard={handleSelectQuickCard}
          onMoodPick={handleMoodFanTap}
          onSymptomPick={handleSymptomFanTap}
          onDietPick={handleDietFanTap}
          onClose={closeQuick}
          onSymptomSubmit={handleQuickSymptomSubmit}
          onWeightSubmit={handleQuickWeightSubmit}
          onFoodSubmit={handleQuickFoodSubmit}
          weightPickerKey={weightPickerKey}
          fabGuidePulse={fabGuidePulse}
          hideFab={hideQuickFab}
        />
      </div>
      )}

      {CameraTransition && (
        <CameraTransition
          active={cameraOpen}
          sourceRect={cameraSourceRect}
          containerRef={containerRef}
          cardContent={
            <>
              <span className="quick-menu-item-icon">
                <I name="camera" size={22} stroke={1.7}/>
              </span>
              <span className="quick-menu-item-label">智能拍照</span>
            </>
          }
          onCaptureSuccess={handleCameraCaptureSuccess}
          onClose={handleCameraClose}
          onActiveChange={onCameraActiveChange}
          preferredRecognitionMode={cameraPreferredMode}
        />
      )}

      {ReactDOM.createPortal(
        <MoodOverlay
          open={moodPickerOpen}
          onSubmit={handleMoodOverlaySubmit}
          onClose={closeMoodPicker}
        />,
        document.body
      )}

      {ReactDOM.createPortal(
        <SymptomOverlay
          open={symptomPickerOpen}
          onSubmit={handleSymptomOverlaySubmit}
          onClose={closeSymptomPicker}
        />,
        document.body
      )}

      <div className={'dock-wrap'+(isDockExpanded?' is-mood-expanded':'')+(showFeedingQuick?' is-feeding-dock':'')+(feedingExpanded?' is-feeding-expanded':'')}>
        <div
          className={'dock-panel'
            +(!dockSheet ? ' is-path-dock' : '')
            +(isDockExpanded?' is-mood-expanded':'')
            +(showFeedingQuick?' is-feeding-dock':'')
            +(feedingExpanded?' is-feeding-expanded':'')}
          onPointerDown={showFeedingQuick ? (e)=>startFeedingPanelDrag(e.clientY) : undefined}
          onPointerUp={showFeedingQuick ? (e)=>finishFeedingPanelDrag(e.clientY) : undefined}
          onPointerCancel={showFeedingQuick ? ()=>{ feedingDragStartY.current = null; } : undefined}
        >
          {dockSheet === 'mood' ? (
            <DockMoodPicker
              onConfirm={handleMoodConfirm}
              onCancel={closeDockSheet}
            />
          ) : dockSheet === 'symptom' ? (
            <DockSymptomPicker
              onConfirm={handleSymptomConfirm}
              onCancel={closeDockSheet}
            />
          ) : dockSheet === 'beverage' ? (
            <BeverageQuickSheet
              onClose={closeDockSheet}
              onPhoto={(buttonEl)=>openRecognitionCamera(buttonEl, 'beverage')}
              onWater={()=>setDockSheet('water')}
            />
          ) : dockSheet === 'water' ? (
            <WaterQuickSheet
              onClose={closeDockSheet}
              onSave={(record)=>{
                closeDockSheet();
                onCameraRecord?.({mode:'water', ...record, source:'quick'});
              }}
            />
          ) : (
          <div className={'dock-bar is-path-dock'+(showFeedingQuick ? ' has-feeding-quick' : '')}>
            {showFeedingQuick ? (
              <div className="dock-feeding-quick" aria-label={feedingQuickLabel}>
                <button
                  type="button"
                  className="dock-feeding-handle"
                  aria-label={feedingExpanded ? '收起快捷记录面板' : '展开快捷记录面板'}
                  aria-expanded={feedingExpanded}
                  onClick={()=>setFeedingExpanded(v=>!v)}
                >
                  <span/>
                </button>
                <div className="dock-feeding-quick-scroll">
                  {feedingVisibleItems.map((item)=>(
                    <button
                      key={item.id}
                      type="button"
                      className="dock-feeding-quick-item"
                      onClick={()=>handleDockQuickItemSelect(item)}
                    >
                      <span className="dock-feeding-quick-icon" aria-hidden="true">
                        {item.iconNode || item.icon || '🍼'}
                      </span>
                      <span className="dock-feeding-quick-label">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="dock-input-row dock-input-pill">
              <button
                type="button"
                className="dock-mode-btn"
                onClick={()=>{
                  notifyGuideDockInteract();
                  toggleMode();
                }}
                aria-label={inputMode==='text'?'切换语音':'切换键盘'}
              >
                {inputMode==='text'
                  ? <DockVoiceCircleIco size={26}/>
                  : <DockKbdCircleIco size={26}/>}
              </button>

              {inputMode==='text' ? (
                <div className={'dock-text-field'
                  +(inputFocused?' is-focused':'')
                  +(highlightScheme3Input?' is-scheme3-highlight':'')}>
                  {showScheme3Bubble && !draft.trim() && !inputFocused ? (
                    <span className="dock-scheme3-bubble" aria-hidden="true">
                      ✏️ 记下第一刻
                    </span>
                  ) : null}
                  <DockWavePlaceholder
                    show={inputMode === 'text' && !draft.trim() && !showScheme3Bubble}
                    focused={inputFocused}
                  />
                  <textarea
                    rows="1"
                    placeholder=""
                    aria-label={inputPlaceholder}
                    value={draft}
                    onChange={(e)=>{
                      onDraft(e.target.value);
                      e.target.style.height='auto';
                      e.target.style.height = Math.min(e.target.scrollHeight, 72)+'px';
                    }}
                    onFocus={()=>{
                      notifyGuideDockInteract();
                      setInputFocused(true);
                    }}
                    onBlur={()=>setInputFocused(false)}
                    onKeyDown={(e)=>{
                      if(e.key==='Enter' && !e.shiftKey && draft.trim()){
                        e.preventDefault();
                        onSend();
                      }
                    }}
                  />
                </div>
              ) : (
                <div className={'dock-voice-wrap'+(recording?' is-recording':'')}>
                  {/* 演示浮层指示器 */}
                  {(recording || demoPhase === 'recognizing') && (
                    <div className={'dock-voice-float'+(demoPhase === 'recognizing' ? ' is-recognizing' : '')}>
                      <span className="dock-voice-float-text">
                        {demoPhase === 'recognizing' ? '识别中...' : '正在听...'}
                      </span>
                      {demoPhase === 'recognizing' && (
                        <span className="dock-voice-float-spinner"/>
                      )}
                    </div>
                  )}
                  <div className="dock-voice-stage" aria-hidden="true">
                    <span className="dock-voice-shimmer"/>
                  </div>
                  <button
                    type="button"
                    className={'dock-voice-btn'+(recording?' recording':'')}
                    onPointerDown={(e)=>{ e.preventDefault(); if(isDemoRunning) return; dismissGuideForVoice(); startRec(); }}
                    onPointerUp={stopRec}
                    onPointerLeave={recording ? stopRec : undefined}
                  >
                    {recording ? (
                      <>
                        <span className="dock-voice-waves" aria-hidden="true">
                          {[4,8,12,8,6,10,7].map((h,j)=><span key={j} style={{height:h+'px'}}/>)}
                        </span>
                        <span>松开 结束{recSec > 0 ? ' '+recSec+'s' : ''}</span>
                      </>
                    ) : (
                      <span className="dock-voice-label">按住 说话</span>
                    )}
                  </button>
                </div>
              )}

              {inputMode==='text' && draft.trim() ? (
                <button type="button" className="dock-send-btn" onClick={onSend} aria-label="发送">
                  <I name="send" size={16} stroke={2}/>
                </button>
              ) : null}

              <button
                type="button"
                className="dock-camera-btn"
                aria-label="智能拍照记录"
                onClick={(event)=>openRecognitionCamera(event.currentTarget)}
              >
                <I name="camera" size={22} stroke={1.7}/>
              </button>
            </div>

          </div>
          )}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { DockPublisher, CloudPublisher: DockPublisher });
