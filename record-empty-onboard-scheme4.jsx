// 新手引导 · 方案四 — 实验台 scheme=5（时间轴动画 + 白框包裹，循环播放）

const { useState, useEffect } = React;

const ONBOARD_S4_INPUT_TEXT = '今天体重52公斤，心情不错';
const ONBOARD_S4_WEIGHT_DATA = [
  { d:'周一', v:52.8 },
  { d:'周二', v:52.5 },
  { d:'周三', v:52.6 },
  { d:'周四', v:52.4 },
  { d:'周五', v:52.3 },
  { d:'周六', v:52.1 },
  { d:'今天', v:52.0, isToday:true },
];
const ONBOARD_S4_AI_NOTE = '近 7 天体重在 52 公斤附近小幅波动，整体比较平稳。今天同时记录到心情很好。';
const ONBOARD_S4_TYPE_MS = 66;
const ONBOARD_S4_START_DELAY = 280;
const ONBOARD_S4_INPUT_SENT = 2500;
const ONBOARD_S4_INPUT_HIDDEN = 3100;
const ONBOARD_S4_CARD_VISIBLE = 3100;
const ONBOARD_S4_CARD_TYPE_START = 3300;
const ONBOARD_S4_MARK_STEP_1 = 4700;
const ONBOARD_S4_MARK_STEP_2 = 5100;
const ONBOARD_S4_TAGS_VISIBLE = 5600;
const ONBOARD_S4_AI_VISIBLE = 6800;
const ONBOARD_S4_LOOP_MS = 9000;
const ONBOARD_S4_PALETTE = {
  primary: '#FF4D88',
  primarySoft: '#FFE0EC',
  accent: '#FF7AA8',
  ring: 'rgba(255,77,136,0.18)',
};

function buildOnboardS4DayBlock({
  cardText,
  tags,
  aiVisible,
}) {
  const now = new Date();
  const weekday = ['周日','周一','周二','周三','周四','周五','周六'][now.getDay()];
  return {
    type:'day',
    id:'onboard-s4-day',
    date:`${now.getMonth() + 1}/${now.getDate()}`,
    weekday,
    isToday:true,
    items:[{
      kind:'record-group',
      id:'onboard-s4-record',
      isNew:true,
      staggerReveal:false,
      aiDefaultOpen:true,
      onboardInlineAi:true,
      primary:{
        id:'onboard-s4-primary',
        time:'09:41',
        kind:'voice',
        duration:'0:04',
        text:cardText,
        tags,
      },
      ai: aiVisible ? {
        id:'onboard-s4-ai',
        time:'09:41',
        kind:'chart',
        title:'近7日体重趋势',
        chartType:'weightTrend',
        chartData:ONBOARD_S4_WEIGHT_DATA,
        weightUnit:'kg',
        note:ONBOARD_S4_AI_NOTE,
      } : null,
    }],
  };
}

function OnboardGuideScheme4CardText({
  cardTyped,
  cardDone,
  markStep,
  tagsVisible,
}) {
  if (!cardDone) {
    return (
      <>
        {cardTyped}
        <span className="ep-s4-inline-cursor" aria-hidden="true"/>
      </>
    );
  }
  const highlightActive = !tagsVisible;
  return (
    <>
      今天
      <span className={'ep-s4-card-hi is-weight' + (markStep >= 1 && highlightActive ? ' is-on' : '')}>体重52公斤</span>
      ，
      <span className={'ep-s4-card-hi is-mood' + (markStep >= 2 && highlightActive ? ' is-on' : '')}>心情不错</span>
    </>
  );
}

function OnboardGuideScheme4Screen({ onClose }) {
  const TimelineStream = window.TimelineStream;
  const OnboardGuideDockBottom = window.OnboardGuideDockBottom;
  const [cycle, setCycle] = useState(0);
  const [closing, setClosing] = useState(false);
  const [inputPhase, setInputPhase] = useState('typing');
  const [inputTypedCount, setInputTypedCount] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [cardTypedCount, setCardTypedCount] = useState(0);
  const [markStep, setMarkStep] = useState(0);
  const [tagsVisible, setTagsVisible] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);

  useEffect(() => {
    if (closing) return undefined;
    setInputPhase('typing');
    setInputTypedCount(0);
    setCardVisible(false);
    setCardTypedCount(0);
    setMarkStep(0);
    setTagsVisible(false);
    setAiVisible(false);

    let inputTimer = null;
    let cardTimer = null;
    const typeInput = setTimeout(() => {
      let i = 0;
      inputTimer = setInterval(() => {
        i += 1;
        setInputTypedCount(Math.min(i, ONBOARD_S4_INPUT_TEXT.length));
        if (i >= ONBOARD_S4_INPUT_TEXT.length) clearInterval(inputTimer);
      }, ONBOARD_S4_TYPE_MS);
    }, ONBOARD_S4_START_DELAY);
    const typeCard = setTimeout(() => {
      let i = 0;
      cardTimer = setInterval(() => {
        i += 1;
        setCardTypedCount(Math.min(i, ONBOARD_S4_INPUT_TEXT.length));
        if (i >= ONBOARD_S4_INPUT_TEXT.length) clearInterval(cardTimer);
      }, ONBOARD_S4_TYPE_MS);
    }, ONBOARD_S4_CARD_TYPE_START);
    const timers = [
      typeInput,
      setTimeout(() => setInputPhase('sent'), ONBOARD_S4_INPUT_SENT),
      setTimeout(() => setInputPhase('hidden'), ONBOARD_S4_INPUT_HIDDEN),
      setTimeout(() => setCardVisible(true), ONBOARD_S4_CARD_VISIBLE),
      typeCard,
      setTimeout(() => setMarkStep(1), ONBOARD_S4_MARK_STEP_1),
      setTimeout(() => setMarkStep(2), ONBOARD_S4_MARK_STEP_2),
      setTimeout(() => setTagsVisible(true), ONBOARD_S4_TAGS_VISIBLE),
      setTimeout(() => setAiVisible(true), ONBOARD_S4_AI_VISIBLE),
      setTimeout(() => setCycle((c) => c + 1), ONBOARD_S4_LOOP_MS),
    ];
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(inputTimer);
      clearInterval(cardTimer);
    };
  }, [cycle, closing]);

  const handleClose = () => {
    if (closing) return;
    setClosing(true);
  };

  useEffect(() => {
    if (!closing) return undefined;
    const tm = setTimeout(() => onClose?.(), 420);
    return () => clearTimeout(tm);
  }, [closing, onClose]);

  const inputTyped = ONBOARD_S4_INPUT_TEXT.slice(0, inputTypedCount);
  const cardTyped = ONBOARD_S4_INPUT_TEXT.slice(0, cardTypedCount);
  const cardDone = cardTypedCount >= ONBOARD_S4_INPUT_TEXT.length;
  const tags = tagsVisible ? [
    { cat:'体重', icon:'weight' },
    { cat:'心情', icon:'mood' },
  ] : [];

  const cardText = (
    <OnboardGuideScheme4CardText
      cardTyped={cardTyped}
      cardDone={cardDone}
      markStep={markStep}
      tagsVisible={tagsVisible}
    />
  );

  const blocks = cardVisible
    ? [buildOnboardS4DayBlock({ cardText, tags, aiVisible })]
    : [];

  return (
    <div className={'record-empty-root ep-onboard-s3 ep-onboard-s4' + (closing ? ' is-collapsing' : '')}>
      <div className="ep-onboard-s3-header">
        <h1 className="ep-onboard-s3-title">点滴</h1>
        <button
          type="button"
          className="ep-onboard-s3-close"
          aria-label="关闭"
          onClick={handleClose}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="ep-onboard-s4-body">
        {(inputPhase !== 'hidden' || cardVisible) ? (
          <div className={'ep-onboard-s4-frame record-empty-card'
            + (inputPhase !== 'hidden' ? ' has-input' : '')
            + (cardVisible ? ' has-card' : '')}>
            <div className="record-empty-card-hd">
              <div className="record-empty-card-label">
                <span className="record-empty-card-dot" aria-hidden="true"/>
                示例
              </div>
            </div>
            <div className="ep-onboard-s4-inner">
              {cardVisible ? (
                <div className="ep-onboard-s4-stream" key={'onboard-s4-stream-' + cycle}>
                  {TimelineStream ? (
                    <TimelineStream
                      blocks={blocks}
                      sisterPlayAnimation={0}
                      sisterCycleDone
                      hideTodayGuide
                      hideGapDivider
                      hideDayHeader
                    />
                  ) : null}
                </div>
              ) : null}
              {inputPhase !== 'hidden' ? (
                <div className={'ep-s4-dock-demo' + (inputPhase === 'sent' ? ' is-sent' : '')}>
                  <span className="ep-s4-dock-mic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="ep-s4-dock-text">
                    {inputPhase === 'sent' ? ONBOARD_S4_INPUT_TEXT : inputTyped}
                    {inputPhase === 'typing' ? <span className="ep-s4-inline-cursor" aria-hidden="true"/> : null}
                  </span>
                  <span className="ep-s4-dock-send" aria-hidden="true">→</span>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {OnboardGuideDockBottom ? (
        <OnboardGuideDockBottom className="ep-onboard-s4-dock"/>
      ) : null}
    </div>
  );
}

Object.assign(window, {
  OnboardGuideScheme4Screen,
});
