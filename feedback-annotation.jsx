// ===== 反馈展示 · 方案三：图表批注浮层（对齐 demo v2）=====
// 点卡片 → 记录详情；点角标 → 浮层批注；浮层点图表 → 继续了解

function feedbackAnnotationIsActive(){
  return window.__FEEDBACK_DISPLAY_SCHEME === '方案三';
}

function FeedbackMiniChart({ values = [], width = 280, height = 122, big = false }){
  const pts = React.useMemo(()=>{
    let list = (values || []).map((v)=> Number(v)).filter((n)=> Number.isFinite(n));
    if(list.length < 2) list = [52.8, 52.0, 52.2, 52.5, 53.4, 52.8, 52.3];
    if(list.length > 7) list = list.slice(-7);
    while(list.length < 7) list = [list[0], ...list];
    return list.slice(0, 7);
  }, [values]);
  const w = big ? 300 : width;
  const h = big ? 180 : height;
  const pad = big ? 18 : 12;
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = Math.max(0.01, max - min);
  const x = (i)=> pad + i * (w - pad * 2) / 6;
  const y = (v)=> h - pad - ((v - min) / range) * (h - pad * 2);
  const poly = pts.map((v, i)=> `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const grid = [0.25, 0.5, 0.75].map((r, i)=>{
    const gy = (pad + (h - pad * 2) * r).toFixed(1);
    return <line key={i} x1={pad} y1={gy} x2={w - pad} y2={gy} stroke="#e6e1e4" strokeWidth="1"/>;
  });
  return (
    <svg
      className={big ? 'fb-anno-chart-svg is-big' : 'fb-anno-chart-svg'}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {grid}
      <polyline
        points={poly}
        fill="none"
        stroke="#aaa6ac"
        strokeWidth={big ? 2 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map((v, i)=>{
        const isLast = i === pts.length - 1;
        return (
          <circle
            key={i}
            cx={x(i)}
            cy={y(v)}
            r={isLast ? 3.8 : 2.7}
            fill={isLast ? '#ff4d88' : '#b8b4ba'}
          />
        );
      })}
    </svg>
  );
}

function enrichAnnotationMeta(payload){
  const kind = payload.kind || 'text';
  const values = payload.values || [];
  const base = { ...payload };
  if(kind === 'weight'){
    const nums = values.length ? values : [53.2, 53.5, 53.3, 53.6, 53.2, 53.5, 53.4];
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return {
      ...base,
      values: nums,
      title: base.title || '近7天体重',
      summary: base.summary || `记录在${min.toFixed(1)}—${max.toFixed(1)}kg之间，波动${(max - min).toFixed(1)}kg。`,
      source: base.source || '基于近7天的7条体重记录',
      kicker: base.kicker || '今天的体重处于近7天记录范围内。',
      rangeLabel: '记录范围',
      changeLabel: '整体波动',
      rangeMetric: `${min.toFixed(1)}—${max.toFixed(1)}kg`,
      changeMetric: `${(max - min).toFixed(1)}kg`,
      detailRange: '近7天 · 7条记录',
      detail: base.response?.text || base.summary || '近7天体重记录较为平稳。以上仅根据你的原始记录整理。',
      context: `体重趋势 · ${min.toFixed(1)}—${max.toFixed(1)}kg`,
      suggestions: base.suggestions || ['这周的波动幅度算大吗？', '帮我回顾影响体重的生活记录', '以后应该关注哪些变化？'],
    };
  }
  if(kind === 'calorie'){
    return {
      ...base,
      title: base.title || '近7天热量',
      summary: base.summary || '近7天热量有变化。',
      source: base.source || '基于近7天的饮食记录',
      kicker: base.kicker || '今天的热量记录已纳入近7天趋势。',
      rangeLabel: '今日摄入',
      changeLabel: '近7天',
      rangeMetric: values.length ? `${Math.round(values[values.length - 1])} kcal` : '—',
      changeMetric: '有波动',
      detailRange: '近7天饮食记录',
      detail: base.response?.text || base.summary || '近7天热量有变化。',
      context: '热量趋势 · 近7天',
      suggestions: base.suggestions || ['这周热量偏高吗？', '帮我看看哪几餐影响最大', '经期饮食要注意什么？'],
    };
  }
  if(kind === 'mood'){
    return {
      ...base,
      values: values.length ? values : [1.8, 2.5, 2.1, 3.0, 2.0, 2.4, 1.4],
      title: base.title || '近7天情绪',
      summary: base.summary || '记录有起伏，今天处于较低位置。',
      source: base.source || '基于近7天的5条情绪记录',
      kicker: base.kicker || '今天的情绪记录处于近7天较低位置。',
      rangeLabel: '记录数量',
      changeLabel: '变化情况',
      rangeMetric: '5条记录',
      changeMetric: '3次变化',
      detailRange: '近7天 · 5条记录',
      detail: base.response?.text || base.summary || '近7天情绪记录有起伏。这里只呈现记录变化，不对原因作自动推断。',
      context: '情绪趋势 · 近7天有起伏',
      suggestions: base.suggestions || ['帮我回顾这几天发生了什么', '只看与睡眠有关的记录', '我想继续记一段感受'],
    };
  }
  return {
    ...base,
    title: base.title || '点滴回应',
    summary: base.summary || '已记下你的这条记录。',
    source: base.source || '基于你的原始记录',
    kicker: base.kicker || '这条记录已收好。',
    rangeLabel: '记录',
    changeLabel: '状态',
    rangeMetric: '1条',
    changeMetric: '已记下',
    detailRange: '本次记录',
    detail: base.response?.text || base.summary || '收好了。想说的，我都听着。',
    context: '点滴回应',
    suggestions: base.suggestions || ['我想继续说一点感受', '帮我回顾相关记录', '这条要不要同步到日历？'],
  };
}

function buildAnnotationPayloadFromGroup({ primary, ai, entryId }){
  const p = primary || {};
  const a = ai || {};
  const chartType = a.chartType || '';
  const text = p.text || p.body || p.voiceText || '';
  const tags = (p.tags || []).map((t)=>{
    if(typeof t === 'string') return t;
    return t.cat || t.label || t.name || '';
  }).filter(Boolean);
  let kind = 'text';
  let title = a.title || '点滴回应';
  let values = [];
  let summary = a.note || '已根据你的记录整理反馈。';
  if(chartType === 'weightTrend'){
    kind = 'weight';
    title = a.title || '近7天体重';
    values = (a.chartData || []).map((d)=> Number(d?.v ?? d)).filter(Number.isFinite);
    if(!values.length) values = [53.2, 53.5, 53.3, 53.6, 53.2, 53.5, 53.4];
    summary = a.note || '本周体重较平稳。';
  } else if(chartType === 'caloriePanel'){
    kind = 'calorie';
    title = a.title || '近7天热量';
    const consumed = Number(a.chartData?.consumed);
    values = [920, 1050, 980, 1180, 1080, 1240, Number.isFinite(consumed) ? consumed : 1120];
    summary = a.note || '近7天热量有变化。';
  } else if(chartType === 'todayMoodWave' || chartType === 'moodWeek' || /心情|情绪/.test(title)){
    kind = 'mood';
    title = a.title || '近7天情绪';
    values = [1.8, 2.5, 2.1, 3.0, 2.0, 2.4, 1.4];
    summary = a.note || '近7天情绪有变化。';
  }
  return enrichAnnotationMeta({
    id: entryId || p.id || a.id || ('anno-' + Date.now()),
    kind,
    title,
    summary: String(summary).slice(0, 72),
    values,
    record: {
      time: p.time || a.time || '',
      dateLabel: '今天',
      text,
      tags: tags.length ? tags : (kind === 'weight' ? ['体重'] : kind === 'calorie' ? ['饮食'] : ['记录']),
    },
    response: {
      text: a.note || summary,
      chartType: a.chartType || null,
      title,
      values,
    },
  });
}

function buildAnnotationPayloadFromAiNote(entry){
  const text = entry?.voiceText || entry?.body || entry?.text || '';
  const tags = (entry?.tags || []).map((t)=>{
    if(typeof t === 'string') return t;
    return t.cat || t.label || t.name || '';
  }).filter(Boolean);
  const note = entry?.aiNote?.text || '';
  const isMood = /心情|情绪|提不起劲|不好/.test(text + note);
  return enrichAnnotationMeta({
    id: entry?.id || ('anno-' + Date.now()),
    kind: isMood ? 'mood' : 'text',
    title: isMood ? '近7天情绪' : '点滴回应',
    summary: note ? String(note).slice(0, 36) : '已记下你的这条记录。',
    values: isMood ? [1.8, 2.5, 2.1, 3.0, 2.0, 2.4, 1.4] : [2, 2.2, 2.1, 2.4, 2.3, 2.5, 2.2],
    record: {
      time: entry?.time || '',
      dateLabel: '今天',
      text,
      tags: tags.length ? tags : (isMood ? ['心情', '日记'] : ['记录']),
    },
    response: {
      text: note || '收好了。想说的，我都听着。',
      chartType: isMood ? 'mood' : null,
      title: isMood ? '近7天情绪' : '点滴回应',
      values: isMood ? [1.8, 2.5, 2.1, 3.0, 2.0, 2.4, 1.4] : [],
    },
  });
}

function buildAnnotationPayloadFromDietItem(item){
  const data = item?.dietData || {};
  const list = Array.isArray(data.items) ? data.items : [];
  const foods = (data.foods || list.map((food)=> (typeof food === 'string' ? food : (food?.name || food?.label || '')))).filter(Boolean);
  const names = foods.length ? foods.join('、') : (item?.sourceText || '饮食记录');
  const totalKcal = Number(data.totalKcal) || 0;
  const weekVals = (item?.userContext?.weekData || [])
    .map((d)=> Number(d?.kcal ?? d?.v ?? d))
    .filter(Number.isFinite);
  const fallback = [920, 1050, 980, 1180, 1080, 1240, totalKcal || 1120];
  let values = (weekVals.length >= 2 ? weekVals : fallback).slice(-7);
  while(values.length < 7) values = [values[0] || 1000, ...values];
  values = values.slice(-7);
  return enrichAnnotationMeta({
    id: item?.id || ('anno-' + Date.now()),
    kind: 'calorie',
    title: '近7天热量',
    summary: '近7天热量有变化。',
    values,
    record: {
      time: data.time || item?.time || '',
      dateLabel: '今天',
      text: names,
      tags: ['饮食'],
    },
    response: {
      text: '近7天热量有变化。',
      chartType: 'caloriePanel',
      title: '近7天热量',
      values,
    },
  });
}

function openFeedbackAnnotation(payload, anchorEl){
  if(!feedbackAnnotationIsActive() || !payload) return;
  let anchorRect = null;
  if(anchorEl && anchorEl.getBoundingClientRect){
    const rect = anchorEl.getBoundingClientRect();
    anchorRect = {
      left: rect.left, top: rect.top, width: rect.width, height: rect.height,
      right: rect.right, bottom: rect.bottom,
    };
  }
  window.dispatchEvent(new CustomEvent('openFeedbackAnnotation', {
    detail: { ...enrichAnnotationMeta(payload), anchorRect },
  }));
}

function openFeedbackRecordDetail(payload){
  if(!feedbackAnnotationIsActive() || !payload) return;
  window.dispatchEvent(new CustomEvent('openFeedbackRecordDetail', {
    detail: enrichAnnotationMeta(payload),
  }));
}

function FeedbackChartMarker({ payload, isNew = false, className = '', markerRef = null }){
  const [fresh, setFresh] = React.useState(!!isNew);
  React.useEffect(()=>{
    if(isNew) setFresh(true);
  }, [isNew]);
  if(!feedbackAnnotationIsActive() || !payload) return null;
  return (
    <button
      ref={markerRef}
      type="button"
      className={'fb-anno-marker' + (className ? ' ' + className : '')}
      data-new={fresh ? 'true' : 'false'}
      aria-label={'查看' + (payload.title || '反馈') + '批注'}
      onClick={(event)=>{
        event.preventDefault();
        event.stopPropagation();
        setFresh(false);
        openFeedbackAnnotation(payload, event.currentTarget);
      }}
    >
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <polyline
          points="2,13 6,9 10,12 14,6 18,10"
          fill="none"
          stroke="#8f8b91"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="10" r="2" fill="#ff4d88"/>
      </svg>
    </button>
  );
}

/** 方案三：图表在卡片外展示，再飞入卡内右上角标 */
function FeedbackChartFoldIn({ payload, isNew = false, children = null }){
  const enriched = React.useMemo(
    ()=> (payload ? enrichAnnotationMeta(payload) : null),
    [payload]
  );
  const [phase, setPhase] = React.useState(()=> (
    (isNew && feedbackAnnotationIsActive()) ? 'preview' : 'settled'
  ));
  const panelRef = React.useRef(null);
  const markerRef = React.useRef(null);

  React.useEffect(()=>{
    if(!isNew || !feedbackAnnotationIsActive()){
      setPhase('settled');
      return undefined;
    }
    setPhase('preview');
    const holdId = window.setTimeout(()=> setPhase('folding'), 1300);
    return ()=> window.clearTimeout(holdId);
  }, [isNew, enriched?.id]);

  React.useEffect(()=>{
    if(phase !== 'preview') return undefined;
    const run = ()=>{
      if(typeof window.scrollTimelineToBottom === 'function'){
        window.scrollTimelineToBottom('smooth');
      } else {
        window.scrollFeedContentIntoView?.(panelRef.current);
      }
    };
    const id = window.setTimeout(run, 80);
    return ()=> window.clearTimeout(id);
  }, [phase]);

  React.useEffect(()=>{
    if(phase !== 'folding') return undefined;
    const panel = panelRef.current;
    const marker = markerRef.current;
    if(!panel || !marker){
      setPhase('settled');
      return undefined;
    }
    const pr = panel.getBoundingClientRect();
    const mr = marker.getBoundingClientRect();
    const dx = (mr.left + mr.width / 2) - (pr.left + pr.width / 2);
    const dy = (mr.top + mr.height / 2) - (pr.top + pr.height / 2);
    const s = Math.max(0.08, Math.min(mr.width / Math.max(pr.width, 1), mr.height / Math.max(pr.height, 1)));
    panel.classList.add('is-folding');
    const anim = panel.animate(
      [
        { opacity: 1, transform: 'translate(0,0) scale(1)' },
        { opacity: 0.2, transform: `translate(${dx}px, ${dy}px) scale(${s})` },
      ],
      { duration: 560, easing: 'cubic-bezier(.45,.02,.25,1)', fill: 'forwards' }
    );
    let done = false;
    const finish = ()=>{
      if(done) return;
      done = true;
      setPhase('settled');
      marker.animate(
        [
          { transform: 'scale(.55)', opacity: 0.4 },
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 1 },
        ],
        { duration: 320, easing: 'cubic-bezier(.22,1,.36,1)' }
      );
    };
    anim.onfinish = finish;
    const fallback = window.setTimeout(finish, 620);
    return ()=>{
      window.clearTimeout(fallback);
      try{ anim.cancel(); }catch(_e){ /* ignore */ }
    };
  }, [phase]);

  if(!feedbackAnnotationIsActive() || !enriched) return children || null;
  const showPanel = phase === 'preview' || phase === 'folding';
  const marker = (
    <FeedbackChartMarker
      payload={enriched}
      isNew={isNew && phase === 'settled'}
      markerRef={markerRef}
      className={phase === 'settled' ? 'is-ready' : 'is-waiting'}
    />
  );

  // 有 children：卡片外包一层，图表在卡外；无 children：兼容旧用法（仅角标）
  if(!children){
    return (
      <>
        {showPanel ? (
          <div
            ref={panelRef}
            className={'fb-anno-fold-panel is-outside' + (phase === 'preview' ? ' is-in' : '')}
            aria-hidden="true"
          >
            <div className="fb-anno-fold-head">
              <span className="fb-anno-fold-spark" aria-hidden="true">✦</span>
              <span className="fb-anno-fold-title">{enriched.title}</span>
            </div>
            <div className="fb-anno-fold-chart">
              <FeedbackMiniChart values={enriched.values}/>
              <div className="fb-anno-axis"><span>近7天</span><span>今天</span></div>
            </div>
            <div className="fb-anno-fold-summary">{enriched.summary}</div>
          </div>
        ) : null}
        {marker}
      </>
    );
  }

  return (
    <div className={'fb-anno-fold-shell' + (showPanel ? ' is-previewing' : '')}>
      <div className="fb-anno-fold-card-host">
        {children}
        {marker}
      </div>
      {showPanel ? (
        <div
          ref={panelRef}
          className={'fb-anno-fold-panel is-outside' + (phase === 'preview' ? ' is-in' : '')}
          aria-hidden="true"
        >
          <div className="fb-anno-fold-head">
            <span className="fb-anno-fold-spark" aria-hidden="true">✦</span>
            <span className="fb-anno-fold-title">{enriched.title}</span>
          </div>
          <div className="fb-anno-fold-chart">
            <FeedbackMiniChart values={enriched.values}/>
            <div className="fb-anno-axis"><span>近7天</span><span>今天</span></div>
          </div>
          <div className="fb-anno-fold-summary">{enriched.summary}</div>
        </div>
      ) : null}
    </div>
  );
}

function FeedbackAnnotationPopover({ open, payload, onClose, onOpenChat }){
  const popRef = React.useRef(null);
  React.useEffect(()=>{
    if(!open || !payload || !popRef.current) return;
    const el = popRef.current;
    const a = payload.anchorRect;
    if(!a){
      el.animate(
        [{ opacity: 0, transform: 'translateX(-50%) scale(.92)' }, { opacity: 1, transform: 'translateX(-50%) scale(1)' }],
        { duration: 280, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' }
      );
      return;
    }
    const b = el.getBoundingClientRect();
    const dx = (a.left + a.width / 2) - (b.left + b.width * 0.88);
    const dy = (a.top + a.height / 2) - (b.top + b.height * 0.08);
    el.animate(
      [
        { opacity: 0, transform: `translateX(-50%) translate(${dx}px,${dy}px) scale(.12)` },
        { opacity: 1, transform: 'translateX(-50%) translate(0,0) scale(1)' },
      ],
      { duration: 360, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' }
    );
  }, [open, payload]);

  if(!payload) return null;
  return (
    <div className={'fb-anno-overlay' + (open ? ' is-open' : '')} aria-hidden={!open}>
      <button type="button" className="fb-anno-scrim" aria-label="关闭图表批注" onClick={onClose}/>
      <section
        ref={popRef}
        className={'fb-anno-popover' + (open ? ' is-visible' : '')}
        role="dialog"
        aria-modal="true"
        aria-label="记录批注"
      >
        <div className="fb-anno-pop-head">
          <div>
            <div className="fb-anno-eyebrow">记录批注</div>
            <div className="fb-anno-pop-title">{payload.title}</div>
          </div>
          <button type="button" className="fb-anno-close" aria-label="关闭" onClick={onClose}>×</button>
        </div>
        <button type="button" className="fb-anno-chart-btn" onClick={onOpenChat} aria-label="进入继续了解">
          <div className="fb-anno-chart-wrap">
            <FeedbackMiniChart values={payload.values}/>
            <div className="fb-anno-axis"><span>近7天</span><span>今天</span></div>
          </div>
          <div className="fb-anno-summary">{payload.summary}</div>
          <div className="fb-anno-source">{payload.source}</div>
          <div className="fb-anno-open-detail"><span>进入继续了解</span><span>›</span></div>
        </button>
      </section>
    </div>
  );
}

function FeedbackRecordDetailPage({ open, payload, onClose }){
  if(!payload) return null;
  const record = payload.record || {};
  const tags = record.tags || [];
  const showChart = (payload.values && payload.values.length > 1) || payload.kind !== 'text';
  return (
    <div className={'fb-anno-detail' + (open ? ' is-open' : '')} role="dialog" aria-modal="true" aria-label="记录详情">
      <div className="fb-anno-detail-nav is-title">
        <button type="button" className="fb-anno-back-txt" onClick={onClose}>‹ 返回</button>
        <div className="fb-anno-detail-title">记录详情</div>
        <div className="fb-anno-detail-actions" aria-hidden="true">✎　···</div>
      </div>

      <div className="fb-anno-detail-scroll">
        <section className="fb-anno-section">
          <div className="fb-anno-section-label">原始记录</div>
          <div className="fb-anno-record-card">
            <div className="fb-anno-record-time">{[record.dateLabel, record.time].filter(Boolean).join(' ')}</div>
            <div className="fb-anno-record-text">{record.text || '（无文字）'}</div>
          </div>
        </section>

        {tags.length > 0 && (
          <section className="fb-anno-section">
            <div className="fb-anno-section-label">识别标签</div>
            <div className="fb-anno-tags">
              {tags.map((tag)=> <span key={tag} className="fb-anno-tag">{tag}</span>)}
            </div>
          </section>
        )}

        <section className="fb-anno-section">
          <div className="fb-anno-section-label">点滴回响</div>
          <div className="fb-anno-feedback-card">
            <h2 className="fb-anno-feedback-title">{payload.title}</h2>
            <div className="fb-anno-feedback-range">{payload.detailRange}</div>
            {showChart ? (
              <div className="fb-anno-response-chart is-in-card">
                <FeedbackMiniChart values={payload.values} big/>
              </div>
            ) : null}
            <div className="fb-anno-metric-row">
              <div className="fb-anno-metric">
                <span>{payload.rangeLabel}</span>
                <strong>{payload.rangeMetric}</strong>
              </div>
              <div className="fb-anno-metric">
                <span>{payload.changeLabel}</span>
                <strong>{payload.changeMetric}</strong>
              </div>
            </div>
            <p className="fb-anno-feedback-summary">{payload.detail}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeedbackChatPage({ open, payload, onClose }){
  if(!payload) return null;
  const suggestions = payload.suggestions || [];
  return (
    <div className={'fb-anno-chat' + (open ? ' is-open' : '')} role="dialog" aria-modal="true" aria-label="继续了解">
      <div className="fb-anno-detail-nav is-title">
        <button type="button" className="fb-anno-back-txt" onClick={onClose}>‹ 返回</button>
        <div className="fb-anno-detail-title">继续了解</div>
        <span/>
      </div>
      <div className="fb-anno-chat-scroll">
        <div className="fb-anno-chat-context">
          <div className="fb-anno-chat-context-top">
            <span>引用记录</span>
            <span>近7天</span>
          </div>
          <strong>{payload.context || payload.title}</strong>
        </div>
        <p className="fb-anno-chat-guide">你可以围绕这段记录继续提问。原始记录不会被改写，回答与记录事实会保持区分。</p>
        <div className="fb-anno-suggestions">
          {suggestions.map((item)=> (
            <button type="button" key={item} className="fb-anno-suggestion">{item}</button>
          ))}
        </div>
      </div>
      <div className="fb-anno-chat-input">
        <div className="fb-anno-chat-input-inner">基于这段记录提问…</div>
      </div>
    </div>
  );
}

function FeedbackAnnotationHost(){
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [chatOrigin, setChatOrigin] = React.useState('detail');
  const [payload, setPayload] = React.useState(null);

  React.useEffect(()=>{
    const phone = document.querySelector('.phone');
    if(!phone) return undefined;
    const cover = detailOpen || chatOpen;
    phone.classList.toggle('is-fb-anno-cover', cover);
    return ()=> phone.classList.remove('is-fb-anno-cover');
  }, [detailOpen, chatOpen]);

  React.useEffect(()=>{
    const onOpenAnno = (event)=>{
      if(!feedbackAnnotationIsActive()) return;
      setPayload(enrichAnnotationMeta(event.detail || {}));
      setDetailOpen(false);
      setChatOpen(false);
      setPopoverOpen(true);
    };
    const onOpenDetail = (event)=>{
      if(!feedbackAnnotationIsActive()) return;
      setPayload(enrichAnnotationMeta(event.detail || {}));
      setPopoverOpen(false);
      setChatOpen(false);
      setDetailOpen(true);
    };
    const onCloseAll = ()=>{
      setPopoverOpen(false);
      setDetailOpen(false);
      setChatOpen(false);
    };
    window.addEventListener('openFeedbackAnnotation', onOpenAnno);
    window.addEventListener('openFeedbackRecordDetail', onOpenDetail);
    window.addEventListener('closeFeedbackAnnotation', onCloseAll);
    return ()=>{
      window.removeEventListener('openFeedbackAnnotation', onOpenAnno);
      window.removeEventListener('openFeedbackRecordDetail', onOpenDetail);
      window.removeEventListener('closeFeedbackAnnotation', onCloseAll);
    };
  }, []);

  React.useEffect(()=>{
    if(!popoverOpen && !detailOpen && !chatOpen) return undefined;
    const onKey = (event)=>{
      if(event.key !== 'Escape') return;
      if(chatOpen){
        setChatOpen(false);
        if(chatOrigin === 'detail') setDetailOpen(true);
      } else if(detailOpen){
        setDetailOpen(false);
      } else {
        setPopoverOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return ()=> document.removeEventListener('keydown', onKey);
  }, [popoverOpen, detailOpen, chatOpen, chatOrigin]);

  const openChat = (origin)=>{
    setChatOrigin(origin);
    setPopoverOpen(false);
    if(origin === 'timeline') setDetailOpen(false);
    setTimeout(()=> setChatOpen(true), 80);
  };

  const portalTarget = document.querySelector('.phone') || document.body;
  const node = (
    <>
      <FeedbackAnnotationPopover
        open={popoverOpen && !detailOpen && !chatOpen}
        payload={payload}
        onClose={()=> setPopoverOpen(false)}
        onOpenChat={()=> openChat('timeline')}
      />
      <FeedbackRecordDetailPage
        open={detailOpen && !chatOpen}
        payload={payload}
        onClose={()=> setDetailOpen(false)}
      />
      <FeedbackChatPage
        open={chatOpen}
        payload={payload}
        onClose={()=>{
          setChatOpen(false);
          if(chatOrigin === 'detail') setDetailOpen(true);
        }}
      />
    </>
  );
  if(window.ReactDOM?.createPortal){
    return window.ReactDOM.createPortal(node, portalTarget);
  }
  return node;
}

Object.assign(window, {
  feedbackAnnotationIsActive,
  FeedbackChartMarker,
  FeedbackChartFoldIn,
  FeedbackAnnotationHost,
  FeedbackMiniChart,
  buildAnnotationPayloadFromGroup,
  buildAnnotationPayloadFromAiNote,
  buildAnnotationPayloadFromDietItem,
  openFeedbackAnnotation,
  openFeedbackRecordDetail,
});
