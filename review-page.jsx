function reviewFmt1(x){
  return (Math.round(x * 10) / 10).toFixed(1).replace(/\.0$/, '');
}

function reviewSmoothPath(points){
  if(points.length < 2) return '';
  let d = 'M' + points[0][0].toFixed(1) + ' ' + points[0][1].toFixed(1) + ' ';
  for(let i = 0; i < points.length - 1; i++){
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || points[i + 1];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += 'C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' '
      + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' '
      + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1) + ' ';
  }
  return d;
}

function ReviewDropletIcon(){
  return <svg viewBox="0 0 24 24"><path d="M12 3c3.2 3.4 5.2 6 5.2 8.6A5.2 5.2 0 1 1 6.8 11.6C6.8 9 8.8 6.4 12 3z"/></svg>;
}

function ReviewScaleIcon(){
  return <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M12 8.5v3l2.4-1.6"/><path d="M8.5 16.5h7"/></svg>;
}

function ReviewMoodIcon(){
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>;
}

function ReviewDietIcon(){
  return <svg viewBox="0 0 24 24"><path d="M6 3v7a3 3 0 0 0 6 0V3"/><path d="M9 3v18"/><path d="M17 3c-1.5 1-2.5 3-2.5 5.5S15.5 13 17 14v7"/></svg>;
}

function ReviewDietPhotoIcon(){
  return <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2"/><path d="M3.8 16.5l4.4-4.2a2 2 0 0 1 2.7 0L14 15.2l1.4-1.3a2 2 0 0 1 2.6 0l2.2 2"/></svg>;
}

function ReviewDietTargetIcon(){
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/></svg>;
}

function ReviewPeriodIcon(){
  return <svg viewBox="0 0 24 24"><path d="M12 3c3 3.3 4.8 5.8 4.8 8.3A4.8 4.8 0 1 1 7.2 11.3C7.2 8.8 9 6.3 12 3z"/><path d="M9.5 16c1.4.8 3.4.8 4.8-.2"/></svg>;
}

function ReviewSymptomIcon(){
  return <svg viewBox="0 0 24 24"><path d="M8.5 4.5a8 8 0 1 0 7 0"/><path d="M12 3v8M8 7h8"/><path d="M9 16c1.7-1.2 4.3-1.2 6 0"/></svg>;
}

function ReviewStoolIcon(){
  return <svg viewBox="0 0 24 24"><path d="M8 10c0-2 1.4-3.5 3.4-3.5.2-2 1.5-3.2 3.2-3.2 2 0 3.4 1.6 3.4 3.8 1.8.4 3 1.8 3 3.7 0 2.2-1.7 3.8-4 3.8H8.2c-2 0-3.5-1.5-3.5-3.4S6 8 8 8"/><path d="M7 18h10"/></svg>;
}

function ReviewLoveIcon(){
  return <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4.2 4.2 0 0 1 7-3.1A4.2 4.2 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>;
}

function ReviewBabyIcon({kind}){
  if(kind === 'sleep') return <svg viewBox="0 0 24 24"><path d="M20 15.2A8 8 0 0 1 8.8 4 8 8 0 1 0 20 15.2z"/></svg>;
  if(kind === 'diaper') return <svg viewBox="0 0 24 24"><path d="M5 5.5h14v5.8c0 4.5-2.7 7.2-7 7.2s-7-2.7-7-7.2z"/><path d="M5 9.5c2.2.2 3.8 1.2 4.8 3M19 9.5c-2.2.2-3.8 1.2-4.8 3"/></svg>;
  if(kind === 'food') return <svg viewBox="0 0 24 24"><path d="M5 13h14a7 7 0 0 1-14 0z"/><path d="M4 13h16M8 19.5h8"/><path d="M15.5 4.5l-4 8"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M9 3h6v3l2 2v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8l2-2z"/><path d="M9 9h6M9 14h3"/></svg>;
}

function ReviewFormulaRecordIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v3l1.8 2.2v9.3A3.5 3.5 0 0 1 14.3 21h-4.6a3.5 3.5 0 0 1-3.5-3.5V8.2L8 6z"/><path d="M8 9h8M9 14h3.5M17.8 12.5h1.1a2.1 2.1 0 0 1 0 4.2h-1.1"/></svg>;
}

function ReviewPlaceholderChart(){
  return (
    <div className="review-placeholder-chart" aria-label="图表占位">
      <span className="review-placeholder-grid is-top"></span>
      <span className="review-placeholder-grid is-middle"></span>
      <span className="review-placeholder-grid is-bottom"></span>
      <svg viewBox="0 0 340 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M10 112 C55 98 75 107 112 78 S176 92 213 59 S278 73 330 35"/>
      </svg>
    </div>
  );
}

function ReviewPlaceholderMetrics(){
  return (
    <>
      {['最近记录', '近期平均', '数据变化'].map((label)=>(
        <div className="review-metric review-placeholder-metric" key={label}>
          <span className="review-placeholder-value"></span>
          <div className="review-metric-label">{label}</div>
        </div>
      ))}
    </>
  );
}

function SleepReviewChart(){
  const days = [
    {date:'10.15', hours:16, minutes:44},
    {date:'10.16', hours:15, minutes:12},
    {date:'10.17', hours:14, minutes:24},
    {date:'10.18', hours:15, minutes:19},
    {date:'10.19', hours:15, minutes:40},
    {date:'10.20', hours:14, minutes:37},
    {date:'今天', hours:7, minutes:37, highlight:true},
  ];
  const W = 340, H = 168, padL = 28, padR = 12, padT = 14, padB = 27;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 18;
  const band = (x1 - x0) / days.length;
  const barWidth = 22;
  const X = i => x0 + band * i + band / 2;
  const Y = hours => y1 - hours / yMax * (y1 - y0);
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天睡眠总时长柱状图">
      {[8,12,16].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}h</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        const totalHours = day.hours + day.minutes / 60;
        const barY = Y(totalHours);
        return (
          <React.Fragment key={day.date}>
            <rect x={X(i) - barWidth / 2} y={barY} width={barWidth} height={y1 - barY} rx="10" fill="#b263e8"/>
            <text x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#a85ee0' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function SleepReviewMetric({major, majorUnit, minor, minorUnit, label, trend}){
  return (
    <div className="review-metric">
      <div className={'review-sleep-metric-value' + (trend ? ' is-trend' : '')}>
        {trend ? <><span className="review-sleep-trend-arrow">→</span><span>平稳</span></> : (
          <>
            <span className="review-sleep-metric-number">{major}</span><span className="review-sleep-metric-unit">{majorUnit}</span>
            <span className="review-sleep-metric-number is-secondary">{minor}</span><span className="review-sleep-metric-unit">{minorUnit}</span>
          </>
        )}
      </div>
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function SleepReviewCard(){
  return (
    <ReviewCard
      title="睡眠"
      iconClass="is-sleep"
      icon={<ReviewBabyIcon kind="sleep"/>}
      chart={<SleepReviewChart/>}
      legend={<span className="review-legend-item is-sleep"><i></i>睡眠总时长</span>}
      metrics={(
        <>
          <SleepReviewMetric major="1" majorUnit="小时" minor="2" minorUnit="分" label="最近记录"/>
          <SleepReviewMetric major="15" majorUnit="小时" minor="10" minorUnit="分钟" label="近7天平均"/>
          <SleepReviewMetric label="整体趋势" trend/>
        </>
      )}
      more="查看完整睡眠变化"
    />
  );
}

function DiaperReviewChart(){
  const days = [
    {date:'10.15', records:['pee','pee','poop','pee','both']},
    {date:'10.16', records:['pee','poop','pee','pee','pee']},
    {date:'10.17', records:['both','pee','pee','poop','pee','pee']},
    {date:'10.18', records:['pee','pee','both','pee','poop']},
    {date:'10.19', records:['poop','pee','pee','pee','both']},
    {date:'10.20', records:['pee','both','pee','poop','pee']},
    {date:'今天', records:['both','pee','pee','poop','pee','pee'], highlight:true},
  ];
  const W = 340, H = 168, padL = 28, padR = 12, padT = 14, padB = 27;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 6.8;
  const band = (x1 - x0) / days.length;
  const X = i => x0 + band * i + band / 2;
  const Y = count => y1 - count / yMax * (y1 - y0);
  const colors = {pee:'#f5b335', poop:'#45c978', both:'#4b91ed'};
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天换尿布分类次数图">
      {[2,4,6].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}次</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        const segments = ['pee','poop','both'].map(type=>(
          {type, count:day.records.filter(record=>record === type).length}
        )).filter(segment=>segment.count > 0);
        let stackedCount = 0;
        return (
          <React.Fragment key={day.date}>
            {segments.map(segment=>{
              const segmentBottom = Y(stackedCount);
              stackedCount += segment.count;
              const segmentTop = Y(stackedCount);
              return <rect key={segment.type} x={X(i) - 10} y={segmentTop + 1.5} width="20" height={segmentBottom - segmentTop - 3} rx="7" fill={colors[segment.type]}/>;
            })}
            <text x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#e8930f' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function DiaperReviewMetric({kind, label}){
  return (
    <div className="review-metric">
      {kind === 'empty' ? <div className="review-diaper-text-value">未记录</div> : null}
      {kind === 'average' ? (
        <div className="review-diaper-average-value"><b>5</b><span>次</span></div>
      ) : null}
      {kind === 'trend' ? (
        <div className="review-diaper-trend-value"><span>→</span><b>平稳</b></div>
      ) : null}
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function DiaperReviewCard(){
  return (
    <ReviewCard
      title="换尿布"
      iconClass="is-diaper"
      icon={<ReviewBabyIcon kind="diaper"/>}
      chart={<DiaperReviewChart/>}
      legend={(
        <>
          <span className="review-legend-item is-diaper-pee"><i></i>嘘嘘</span>
          <span className="review-legend-item is-diaper-poop"><i></i>臭臭</span>
          <span className="review-legend-item is-diaper-both"><i></i>嘘嘘+臭臭</span>
        </>
      )}
      metrics={(
        <>
          <DiaperReviewMetric kind="empty" label="最近记录"/>
          <DiaperReviewMetric kind="average" label="近7天平均"/>
          <DiaperReviewMetric kind="trend" label="整体趋势"/>
        </>
      )}
      more="查看完整换尿布变化"
    />
  );
}

function FoodReviewChart(){
  const days = [
    {date:'10.15', grams:600},
    {date:'10.16', grams:500},
    {date:'10.17', grams:600},
    {date:'10.18', grams:500},
    {date:'10.19', grams:600},
    {date:'10.20', grams:600},
    {date:'今天', grams:600, highlight:true},
  ];
  const W = 340, H = 168, padL = 32, padR = 12, padT = 14, padB = 27;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 700;
  const band = (x1 - x0) / days.length;
  const barWidth = 22;
  const X = i => x0 + band * i + band / 2;
  const Y = grams => y1 - grams / yMax * (y1 - y0);
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天辅食总量柱状图">
      {[200,400,600].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}g</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        const barY = Y(day.grams);
        return (
          <React.Fragment key={day.date}>
            <rect x={X(i) - barWidth / 2} y={barY} width={barWidth} height={y1 - barY} rx="10" fill="#ff8a4c"/>
            <text x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#e87635' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function FoodReviewMetric({kind, label}){
  return (
    <div className="review-metric">
      {kind === 'recent' ? <div className="review-food-amount-value"><b>600</b><span>g</span></div> : null}
      {kind === 'average' ? <div className="review-food-average-value"><b>600</b><span>g</span></div> : null}
      {kind === 'trend' ? <div className="review-food-trend-value"><span>→</span><b>平稳</b></div> : null}
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function FoodReviewCard(){
  return (
    <ReviewCard
      title="辅食"
      iconClass="is-food-review"
      icon={<ReviewBabyIcon kind="food"/>}
      chart={<FoodReviewChart/>}
      legend={<span className="review-legend-item is-food-review"><i></i>辅食总量</span>}
      metrics={(
        <>
          <FoodReviewMetric kind="recent" label="最近记录"/>
          <FoodReviewMetric kind="average" label="近7天平均"/>
          <FoodReviewMetric kind="trend" label="整体趋势"/>
        </>
      )}
      more="查看完整辅食变化"
    />
  );
}

function FeedingReviewChart(){
  const days = [
    {date:'10.15', breast:220, formula:300, minutes:48},
    {date:'10.16', breast:260, formula:350, minutes:42},
    {date:'10.17', breast:190, formula:280, minutes:37},
    {date:'10.18', breast:300, formula:380, minutes:50},
    {date:'10.19', breast:240, formula:300, minutes:44},
    {date:'10.20', breast:293, formula:380, minutes:39},
    {date:'今天', breast:580, formula:120, minutes:42, highlight:true},
  ];
  const W = 340, H = 168, padL = 32, padR = 12, padT = 14, padB = 27;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const amountMax = 720;
  const durationMax = 60;
  const band = (x1 - x0) / days.length;
  const barWidth = 22;
  const X = i => x0 + band * i + band / 2;
  const YAmount = amount => y1 - amount / amountMax * (y1 - y0);
  const YDuration = minutes => y1 - minutes / durationMax * (y1 - y0);
  const durationPoints = days.map((day, i)=>[X(i), YDuration(day.minutes)]);
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天喂奶总量与亲喂时长组合图">
      {[200,400,600].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={YAmount(tick)} x2={x1} y2={YAmount(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={YAmount(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}ml</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        const formulaTop = YAmount(day.formula);
        const totalTop = YAmount(day.formula + day.breast);
        return (
          <React.Fragment key={day.date}>
            <rect x={X(i) - barWidth / 2} y={formulaTop} width={barWidth} height={y1 - formulaTop} rx="9" fill="#ff9a45"/>
            <rect x={X(i) - barWidth / 2} y={totalTop} width={barWidth} height={formulaTop - totalTop - 2} rx="9" fill="#ff8fb3"/>
            <text x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#ff4d88' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          </React.Fragment>
        );
      })}
      <path d={reviewSmoothPath(durationPoints)} fill="none" stroke="#ff4d88" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {days.map((day, i)=>{
        const isHighest = day.minutes === 50;
        return (
          <React.Fragment key={day.date}>
            <circle cx={X(i)} cy={YDuration(day.minutes)} r={day.highlight ? 4 : 3.2} fill={day.highlight ? '#ff4d88' : '#fff'} stroke="#ff4d88" strokeWidth="2"/>
            {isHighest ? (
              <>
                <rect x={X(i) - 15} y={YDuration(day.minutes) - 22} width="30" height="15" rx="7.5" fill="rgba(255,255,255,0.96)" stroke="#ff8fb3" strokeWidth="0.8"/>
                <text x={X(i)} y={YDuration(day.minutes) - 12} textAnchor="middle" fontSize="9" fontWeight="600" fill="#c72f68" fontFamily="PingFang SC">50分</text>
              </>
            ) : null}
            {day.highlight ? (
              <>
                <rect x={X(i) - 15} y={YDuration(day.minutes) - 22} width="30" height="15" rx="7.5" fill="rgba(255,255,255,0.96)" stroke="#ff8fb3" strokeWidth="0.8"/>
                <text x={X(i)} y={YDuration(day.minutes) - 12} textAnchor="middle" fontSize="9" fontWeight="600" fill="#c72f68" fontFamily="PingFang SC">42分</text>
              </>
            ) : null}
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function FeedingReviewMetric({kind, label}){
  return (
    <div className="review-metric review-feeding-metric">
      {kind === 'recent' ? (
        <div className="review-feeding-recent-value"><span className="review-feeding-formula-icon" aria-label="瓶喂配方奶"><ReviewFormulaRecordIcon/></span><div><b>120</b><i>ml</i></div></div>
      ) : null}
      {kind === 'average' ? (
        <div className="review-feeding-average-value"><b>599</b><i>ml</i></div>
      ) : null}
      {kind === 'trend' ? (
        <div className="review-feeding-trend-value"><span>↕</span><b>波动</b></div>
      ) : null}
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function FeedingReviewCard(){
  return (
    <ReviewCard
      title="喂奶"
      iconClass="is-feeding"
      icon={<ReviewBabyIcon kind="feeding"/>}
      chart={<FeedingReviewChart/>}
      legend={(
        <>
          <span className="review-legend-item is-feeding-breast"><i></i>瓶喂母乳</span>
          <span className="review-legend-item is-feeding-formula"><i></i>瓶喂配方奶</span>
          <span className="review-legend-item is-feeding-direct"><i></i>亲喂时长</span>
        </>
      )}
      metrics={(
        <>
          <FeedingReviewMetric kind="recent" label="最近记录"/>
          <FeedingReviewMetric kind="average" label="近7天平均"/>
          <FeedingReviewMetric kind="trend" label="整体趋势"/>
        </>
      )}
      more="查看完整喂奶变化"
    />
  );
}

function BabyReviewCard({title, kind}){
  return (
    <ReviewCard
      title={title}
      iconClass="is-placeholder"
      icon={<ReviewBabyIcon kind={kind}/>}
      chart={<ReviewPlaceholderChart/>}
      legend={<span className="review-legend-item is-placeholder"><i></i>记录变化</span>}
      metrics={<ReviewPlaceholderMetrics/>}
      more={'查看完整' + title + '分析'}
    />
  );
}

function ReviewChevron(){
  return <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>;
}

function ReviewBackIcon(){
  return <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>;
}

function ReviewShareIcon(){
  return <svg viewBox="0 0 24 24"><path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M6 10H4.8A1.8 1.8 0 0 0 3 11.8v7.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8v-7.4a1.8 1.8 0 0 0-1.8-1.8H18"/></svg>;
}

function ReviewExpandIcon(){
  return <svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"/><path d="M3 8l6-6M21 8l-6-6M21 16l-6 6M3 16l6 6"/></svg>;
}

function ReviewWechatIcon(){
  return <svg viewBox="0 0 24 24"><path d="M10.2 5.2c-4 0-7.2 2.5-7.2 5.7 0 1.8 1 3.4 2.7 4.5l-.7 2.3 2.6-1.3c.8.2 1.7.3 2.6.3.4 0 .8 0 1.2-.1-.5-.7-.8-1.6-.8-2.5 0-2.9 2.7-5.3 6.2-5.3h.3c-1-2.1-3.7-3.6-6.9-3.6z"/><path d="M17 9.8c-3.3 0-6 2-6 4.6s2.7 4.6 6 4.6c.7 0 1.4-.1 2-.3l2.1 1-.5-1.9c1.5-.8 2.4-2 2.4-3.4 0-2.6-2.7-4.6-6-4.6z"/><path d="M7.5 9.5h.01M12.3 9.5h.01M15 13.7h.01M19 13.7h.01"/></svg>;
}

function ReviewFaceInviteIcon(){
  return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM18 14h3M14 19v2"/></svg>;
}

function ReviewCard({title, iconClass='', icon, chart, legend, metrics, more, moreBadge, headAction, sample, onOpen}){
  const isActionable = typeof onOpen === 'function';
  const handleKeyDown = (event)=>{
    if(!isActionable) return;
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      onOpen();
    }
  };
  return (
    <div
      className={'review-card' + (sample ? ' is-sample' : '') + (isActionable ? ' is-actionable' : '')}
      role={isActionable ? 'button' : undefined}
      tabIndex={isActionable ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="review-card-pad">
        <div className="review-card-head">
          <div className={'review-card-icon ' + iconClass} aria-hidden="true">{icon}</div>
          <div className="review-card-title">{title}</div>
          <div className="review-card-head-actions">
            {headAction}
          </div>
        </div>
        <div className="review-chart">{chart}</div>
        {legend ? <div className="review-legend">{legend}</div> : null}
        {metrics ? <div className="review-metrics">{metrics}</div> : null}
      </div>
      {more ? (
        <div className="review-card-more" role="button" aria-label={more}>
          {moreBadge ? <span className="review-card-more-badge">{moreBadge}</span> : null}
          <div className="review-card-more-main">{more}</div>
          <ReviewChevron/>
        </div>
      ) : null}
      {sample}
    </div>
  );
}

function PeriodHealthImageCard(){
  return (
    <div className="review-card review-health-image-card">
      <img src="assets/period-health-card.jpg" alt="经期健康度" />
    </div>
  );
}

const REVIEW_CYCLE_ALL_DATA = [
  ['22.1',33],['22.2',32],['22.4',29],['22.5',28],['22.6',31],['22.7',33],
  ['22.8',30],['22.9',32],['22.10',30],['22.11',33],['22.12',34],
  ['23.1',32],['23.2',33],['23.3',30],['23.4',29],['23.6',32],['23.7',31],
  ['23.8',33],['23.9',30],['23.10',32],['23.11',31],['23.12',33],
  ['24.1',31],['24.3',30],['24.4',29],['24.5',28],['24.6',29],['24.7',34],
  ['24.8',31],['24.9',30],['24.10',33],['24.11',31],['24.12',32],['25.1',36],
  ['25.2',31],['25.3',30],['25.4',32],['25.5',30],['25.6',31],['25.7',29],
  ['25.8',30],['25.9',31],['25.10',29],['25.11',30],['25.12',29],['26.1',31],
  ['26.2',30],['26.3',30],['26.4',28],['26.5',28],
];

function CycleDetailChart({range}){
  const slice = range === '1y' ? REVIEW_CYCLE_ALL_DATA.slice(-12) : (range === '3y' ? REVIEW_CYCLE_ALL_DATA.slice(-36) : REVIEW_CYCLE_ALL_DATA);
  const vals = slice.map(d=>d[1]);
  const n = vals.length;
  const normalMax = 35;
  const W = 340, H = 180, padL = 26, padR = 14, padT = 16, padB = 28;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 26, yMax = 37;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const sx = vals.reduce((s, _v, i)=>s + i, 0);
  const sy = vals.reduce((s, v)=>s + v, 0);
  const sxy = vals.reduce((s, v, i)=>s + i * v, 0);
  const sxx = vals.reduce((s, _v, i)=>s + i * i, 0);
  const b = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  const a = (sy - b * sx) / n;
  let anomalyIdx = -1, anomalyVal = 0;
  vals.forEach((v, i)=>{ if(v > normalMax && v > anomalyVal){ anomalyVal = v; anomalyIdx = i; } });
  const marks = [0, Math.round((n - 1) * 0.25), Math.round((n - 1) * 0.5), Math.round((n - 1) * 0.75), n - 1]
    .filter((v, i, arr)=>arr.indexOf(v) === i);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);

  return (
    <svg viewBox="0 0 340 180" preserveAspectRatio="xMidYMid meet" role="img" aria-label="月经周期长度趋势曲线">
      <rect x={x0} y={y0} width={x1 - x0} height={Y(normalMax) - y0} fill="rgba(255,149,0,0.06)"/>
      {[28,32,36].map(g=>(
        <React.Fragment key={g}>
          <line x1={x0} y1={Y(g)} x2={x1} y2={Y(g)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(g) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{g}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={Y(normalMax)} x2={x1} y2={Y(normalMax)} stroke="#ffb15a" strokeWidth="1" strokeDasharray="3 3"/>
      <text x={x1} y={Y(normalMax) - 4} textAnchor="end" fontSize="9" fill="#e8930f" fontFamily="PingFang SC">正常上限 35天</text>
      <line x1={X(0)} y1={Y(a)} x2={X(n - 1)} y2={Y(a + b * (n - 1))} stroke="#c2c2c8" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round"/>
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#ff4d88" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((v, i)=>{
        const isAnomaly = i === anomalyIdx;
        const isLast = i === n - 1;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(v)} r={isLast ? 4.5 : (isAnomaly ? 4 : 2.4)} fill={isAnomaly ? '#ff9500' : '#ff4d88'} stroke={isLast || isAnomaly ? '#fff' : 'none'} strokeWidth={isLast ? 2 : 1.5}/>
            {isAnomaly ? <text x={X(i)} y={Y(v) - 8} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#e8930f" fontFamily="PingFang SC">{anomalyVal}天</text> : null}
            {isLast ? <text x={X(i)} y={Y(v) + 15} textAnchor="end" fontSize="9.5" fontWeight="600" fill="#ff4d88" fontFamily="PingFang SC">{v}天</text> : null}
          </React.Fragment>
        );
      })}
      {marks.map(idx=>(
        <text key={idx} x={X(idx)} y={H - 9} textAnchor="middle" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{slice[idx][0]}</text>
      ))}
    </svg>
  );
}

function ReviewShareQr(){
  const modules = [];
  const isFinder = (x, y, ox, oy)=>x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
  const finderDark = (x, y, ox, oy)=>{
    const dx = x - ox, dy = y - oy;
    return dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4);
  };
  for(let y = 0; y < 25; y++){
    for(let x = 0; x < 25; x++){
      let dark = false;
      if(isFinder(x,y,0,0)) dark = finderDark(x,y,0,0);
      else if(isFinder(x,y,18,0)) dark = finderDark(x,y,18,0);
      else if(isFinder(x,y,0,18)) dark = finderDark(x,y,0,18);
      else dark = ((x * 7 + y * 11 + x * y) % 9 < 4) && !((x + y) % 7 === 0);
      if(dark) modules.push(<rect key={x + '-' + y} x={x + 2} y={y + 2} width="1" height="1" rx="0.08"/>);
    }
  }
  return <svg className="review-share-qr-svg" viewBox="0 0 29 29" role="img" aria-label="面对面邀请二维码"><rect width="29" height="29" rx="2" fill="#fff"/>{modules}</svg>;
}

function CycleSharePage({open, onClose, shared, onSharedChange}){
  const [faceInviteOpen, setFaceInviteOpen] = useState(false);
  const [wechatSent, setWechatSent] = useState(false);
  const [closeConfirmOpen, setCloseConfirmOpen] = useState(false);

  React.useEffect(()=>{
    if(!open){
      setFaceInviteOpen(false);
      setWechatSent(false);
      setCloseConfirmOpen(false);
    }
  }, [open]);

  const handleWechatInvite = ()=>{
    setWechatSent(true);
    onSharedChange?.(true);
    window.setTimeout(()=>setWechatSent(false), 1800);
  };

  const handleCloseSharing = ()=>{
    onSharedChange?.(false);
    setCloseConfirmOpen(false);
  };

  if(faceInviteOpen){
    return (
      <section className={'review-cycle-detail review-share-page' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="面对面邀请共享">
        <div className="review-detail-nav review-share-nav">
          <button type="button" className="review-detail-back" aria-label="返回" onClick={()=>setFaceInviteOpen(false)}><ReviewBackIcon/></button>
          <span className="review-detail-title">面对面邀请</span>
        </div>
        <div className="review-share-content is-face-invite">
          <div className="review-share-qr-wrap"><ReviewShareQr/></div>
          <h2 className="review-share-face-title">请TA打开微信扫码</h2>
          <p className="review-share-face-desc">扫码后即可接受你的月经周期数据共享邀请</p>
          <div className="review-share-expire">二维码 10 分钟内有效</div>
          <div className="review-share-privacy-note">仅共享月经日期、周期长度和周期预测</div>
        </div>
      </section>
    );
  }

  if(shared){
    return (
      <section className={'review-cycle-detail review-share-page' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="共享周期管理">
        <div className="review-detail-nav review-share-nav">
          <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}><ReviewBackIcon/></button>
          <span className="review-detail-title">共享周期</span>
        </div>
        <div className="review-share-content is-shared-state">
          <div className="review-share-manage-card">
            <div className="review-share-manage-head">
              <b>已共享的人</b>
              <span className="review-share-manage-live"><i></i>共享中</span>
            </div>
            <div className="review-share-member-row">
              <span className="review-share-member-avatar" aria-hidden="true">👨🏻</span>
              <span className="review-share-member-info"><b>男友</b><small>已接受你的周期共享邀请</small></span>
              <button type="button" className="review-share-member-close" onClick={()=>setCloseConfirmOpen(true)}>关闭共享</button>
            </div>
            <div className="review-share-info-block">
              <div className="review-share-info-title">共享的信息</div>
              <div className="review-share-active-items">
                <span>月经日期</span><span>周期长度</span><span>周期预测</span>
              </div>
              <div className="review-share-active-private">点滴、症状、心情等私人记录不会被共享</div>
            </div>
          </div>

          <div className="review-share-manage-card is-invite-more">
            <div className="review-share-manage-head"><b>继续邀请</b></div>
            <p className="review-share-invite-more-desc">还可以邀请闺蜜、家人，一起了解你的经期情况。</p>
            <div className="review-share-invite-more-actions">
              <button type="button" className="is-wechat" onClick={handleWechatInvite}>
                <ReviewWechatIcon/><span>微信邀请</span>
              </button>
              <button type="button" className="is-face" onClick={()=>setFaceInviteOpen(true)}>
                <ReviewFaceInviteIcon/><span>面对面邀请</span>
              </button>
            </div>
          </div>
        </div>

        <div className={'review-share-toast' + (wechatSent ? ' is-show' : '')} role="status">微信邀请已生成</div>

        {closeConfirmOpen ? (
          <div className="review-share-confirm-mask" role="presentation">
            <div className="review-share-confirm" role="dialog" aria-modal="true" aria-label="确认关闭共享">
              <div className="review-share-confirm-icon">!</div>
              <h3>确定关闭共享吗？</h3>
              <p>关闭后，男友将无法继续查看你的周期数据。</p>
              <div className="review-share-confirm-actions">
                <button type="button" className="is-keep" onClick={()=>setCloseConfirmOpen(false)}>继续共享</button>
                <button type="button" className="is-close" onClick={handleCloseSharing}>确认关闭</button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section className={'review-cycle-detail review-share-page' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="共享周期">
      <div className="review-detail-nav review-share-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}><ReviewBackIcon/></button>
        <span className="review-detail-title">共享周期</span>
      </div>
      <div className="review-share-content">
        <div className="review-share-hero" aria-hidden="true">
          <span className="review-share-person is-me">我</span>
          <span className="review-share-link"><i></i><b>♥</b><i></i></span>
          <span className="review-share-person is-partner">TA</span>
        </div>
        <h2 className="review-share-title">共享我的月经周期数据给TA</h2>
        <p className="review-share-desc">可以共享给男友、闺蜜、家人，邀请成功后对方可以了解你的经期情况，在经期前后获得更多关心和陪伴。</p>

        <div className="review-share-actions">
          <button type="button" className="review-share-btn is-wechat" onClick={handleWechatInvite}>
            <span className="review-share-btn-icon"><ReviewWechatIcon/></span>
            微信邀请共享
          </button>
          <button type="button" className="review-share-btn is-face" onClick={()=>setFaceInviteOpen(true)}>
            <span className="review-share-btn-icon"><ReviewFaceInviteIcon/></span>
            面对面邀请共享
          </button>
        </div>

        <div className="review-share-scope">
          <div className="review-share-scope-title">共享内容说明</div>
          <div className="review-share-scope-row is-allowed"><span>✓</span><p>可查看月经日期、周期长度和周期预测</p></div>
          <div className="review-share-scope-row is-private"><span>⌁</span><p>不会共享点滴、症状、心情等私人记录</p></div>
        </div>
        <p className="review-share-footnote">你可以随时停止共享</p>
      </div>
      <div className={'review-share-toast' + (wechatSent ? ' is-show' : '')} role="status">微信邀请已生成</div>
    </section>
  );
}

const REVIEW_CARD_SHARE_INFO = {
  '经期':['经期日期','经期天数','经期趋势'],
  '体重':['体重记录','体重趋势','变化分析'],
  '症状':['症状类型','记录时间','症状趋势'],
  '心情':['心情记录','心情趋势','变化分析'],
  '饮食':['饮食记录','热量摄入','饮食趋势'],
  '饮食图集':['饮食照片','记录日期','饮食回顾'],
  '热量目标':['每日目标','摄入热量','达标情况'],
  '便便':['记录时间','每日次数','规律趋势'],
  '爱爱':['记录日期','记录次数','变化趋势'],
  '喂奶':['喂奶时间','喂奶方式','喂奶量'],
  '睡眠':['睡眠时间','睡眠时长','睡眠趋势'],
  '换尿布':['更换时间','尿布类型','次数趋势'],
  '辅食':['辅食时间','辅食内容','摄入量'],
};

function ReviewCardSharePage({open, onClose, title, shared, onEnable}){
  const [toastMessage, setToastMessage] = useState('');
  const [faceInviteOpen, setFaceInviteOpen] = useState(false);
  const items = REVIEW_CARD_SHARE_INFO[title] || [title + '记录', title + '趋势', '变化分析'];

  React.useEffect(()=>{
    if(!open){
      setToastMessage('');
      setFaceInviteOpen(false);
    }
  }, [open, title]);

  const showToast = message=>{
    setToastMessage(message);
    window.setTimeout(()=>setToastMessage(''), 1800);
  };

  const handleEnable = ()=>{
    if(shared) return;
    onEnable?.();
    showToast('共享成功');
  };

  if(faceInviteOpen){
    return (
      <section className={'review-cycle-detail review-share-page' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="面对面邀请共享经期">
        <div className="review-detail-nav review-share-nav">
          <button type="button" className="review-detail-back" aria-label="返回" onClick={()=>setFaceInviteOpen(false)}><ReviewBackIcon/></button>
          <span className="review-detail-title">面对面邀请</span>
        </div>
        <div className="review-share-content is-face-invite">
          <div className="review-share-qr-wrap"><ReviewShareQr/></div>
          <h2 className="review-share-face-title">请TA打开微信扫码</h2>
          <p className="review-share-face-desc">扫码后即可接受你的经期数据共享邀请</p>
          <div className="review-share-expire">二维码 10 分钟内有效</div>
          <div className="review-share-privacy-note">仅共享经期日期、经期天数和经期趋势</div>
        </div>
      </section>
    );
  }

  return (
    <section className={'review-cycle-detail review-share-page' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label={title + '共享管理'}>
      <div className="review-detail-nav review-share-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}><ReviewBackIcon/></button>
        <span className="review-detail-title">{title}共享</span>
      </div>
      <div className="review-share-content is-card-share-state">
        <div className="review-share-manage-card">
          <div className="review-share-manage-head">
            <b>共享给</b>
            <span className="review-share-manage-live"><i></i>周期关系已连接</span>
          </div>
          <div className="review-share-member-row">
            <span className="review-share-member-avatar" aria-hidden="true">👨🏻</span>
            <span className="review-share-member-info"><b>男友</b><small>已共享月经周期数据</small></span>
            <button
              type="button"
              className={'review-share-member-enable' + (shared ? ' is-shared' : '')}
              disabled={shared}
              onClick={handleEnable}
            >
              {shared ? '已共享' : '开启共享'}
            </button>
          </div>
          <div className="review-share-info-block">
            <div className="review-share-info-title">共享的信息</div>
            <div className="review-share-active-items">
              {items.map(item=><span key={item}>{item}</span>)}
            </div>
            <div className="review-share-active-private">仅共享当前卡片的数据，其他私人记录不会被共享</div>
          </div>
        </div>
        {title === '经期' && shared ? (
          <div className="review-share-manage-card is-invite-more">
            <div className="review-share-manage-head"><b>继续邀请</b></div>
            <p className="review-share-invite-more-desc">还可以邀请闺蜜、家人，一起了解你的经期情况。</p>
            <div className="review-share-invite-more-actions">
              <button type="button" className="is-wechat" onClick={()=>showToast('微信邀请已生成')}>
                <ReviewWechatIcon/><span>微信邀请</span>
              </button>
              <button type="button" className="is-face" onClick={()=>setFaceInviteOpen(true)}>
                <ReviewFaceInviteIcon/><span>面对面邀请</span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className={'review-share-toast' + (toastMessage ? ' is-show' : '')} role="status">{toastMessage}</div>
    </section>
  );
}

const REVIEW_SHARE_HUB_ITEMS = [
  {title:'周期', desc:'月经日期、周期长度和周期预测'},
  {title:'经期', desc:'经期日期、经期天数和经期趋势'},
  {title:'体重', desc:'体重记录、体重趋势和变化分析'},
  {title:'症状', desc:'症状类型、记录时间和症状趋势'},
  {title:'心情', desc:'心情记录、心情趋势和变化分析'},
  {title:'饮食', desc:'饮食记录、热量摄入和饮食趋势'},
  {title:'便便', desc:'记录时间、每日次数和规律趋势'},
  {title:'爱爱', desc:'记录日期、记录次数和变化趋势'},
  {title:'喂奶', desc:'喂奶时间、喂奶方式和喂奶量'},
  {title:'睡眠', desc:'睡眠时间、睡眠时长和睡眠趋势'},
  {title:'换尿布', desc:'更换时间、尿布类型和次数趋势'},
  {title:'辅食', desc:'辅食时间、辅食内容和摄入量'},
];

function ReviewShareHubPage({open, onClose, cycleShared, onCycleManage, sharedCards, onToggleCard}){
  const [toastMessage, setToastMessage] = useState('');
  const sharedCount = (cycleShared ? 1 : 0) + Object.values(sharedCards || {}).filter(Boolean).length;

  React.useEffect(()=>{
    if(!open) setToastMessage('');
  }, [open]);

  const showToast = message=>{
    setToastMessage(message);
    window.setTimeout(()=>setToastMessage(''), 1800);
  };

  const handleItem = title=>{
    if(title === '周期' || !cycleShared){
      onCycleManage?.();
      return;
    }
    const nextShared = !Boolean(sharedCards?.[title]);
    onToggleCard?.(title, nextShared);
    showToast(nextShared ? title + '已开启共享' : title + '已停止共享');
  };

  return (
    <section className={'review-cycle-detail review-share-page review-share-hub' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="回顾共享管理">
      <div className="review-detail-nav review-share-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}><ReviewBackIcon/></button>
        <span className="review-detail-title">共享管理</span>
      </div>
      <div className="review-share-hub-content">
        <div className="review-share-hub-summary">
          <div>
            <h2>共享我的回顾</h2>
            <p>{cycleShared ? `已向男友共享 ${sharedCount} 项回顾` : '邀请信任的人，选择想让TA了解的回顾'}</p>
          </div>
          <span className={'review-share-hub-status' + (cycleShared ? ' is-connected' : '')}>{cycleShared ? '共享中' : '未连接'}</span>
        </div>

        <div className="review-share-manage-card review-share-hub-person">
          <div className="review-share-manage-head"><b>{cycleShared ? '已共享的人' : '共享给谁'}</b></div>
          <div className="review-share-member-row">
            <span className="review-share-member-avatar" aria-hidden="true">{cycleShared ? '👨🏻' : 'TA'}</span>
            <span className="review-share-member-info">
              <b>{cycleShared ? '男友' : '还没有共享对象'}</b>
              <small>{cycleShared ? '共享关系已连接，可随时调整共享内容' : '可以邀请男友、闺蜜或家人'}</small>
            </span>
            <button type="button" className="review-share-member-enable" onClick={onCycleManage}>{cycleShared ? '管理' : '邀请TA'}</button>
          </div>
        </div>

        <div className="review-share-manage-card review-share-hub-data">
          <div className="review-share-manage-head">
            <b>选择共享内容</b>
            <span>{sharedCount} 项已开启</span>
          </div>
          <div className="review-share-hub-list">
            {REVIEW_SHARE_HUB_ITEMS.map(item=>{
              const checked = item.title === '周期' ? cycleShared : Boolean(sharedCards?.[item.title]);
              return (
                <button key={item.title} type="button" className="review-share-hub-row" onClick={()=>handleItem(item.title)}>
                  <span className="review-share-hub-row-copy"><b>{item.title}</b><small>{item.desc}</small></span>
                  <span className={'review-share-switch' + (checked ? ' is-on' : '')} aria-label={checked ? '已开启' : '未开启'}><i></i></span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="review-share-hub-note">仅会共享你主动开启的内容，可以随时调整或停止共享。</p>
      </div>
      <div className={'review-share-toast' + (toastMessage ? ' is-show' : '')} role="status">{toastMessage}</div>
    </section>
  );
}

function CycleDetailPage({open, onClose}){
  const [range, setRange] = useState('3y');
  const ranges = [
    {key:'1y', label:'最近1年'},
    {key:'3y', label:'最近3年'},
    {key:'all', label:'全部'},
  ];
  const analysisCopy = {
    '1y': {
      items: [
        {
          tone:'is-good',
          title:'最近一年规律性：很好',
          text:<>最近 12 次周期都在 <b>28-31 天</b>之间，平均约 <b>29.7 天</b>，波动标准差约 <b>1.0 天</b>。每次都处于常见周期范围内，整体节奏稳定。</>,
        },
        {
          tone:'is-note',
          title:'近期有轻微缩短',
          text:<>前 6 次平均约 <b>30.0 天</b>，后 6 次平均约 <b>29.3 天</b>。变化幅度不到 1 天，属于轻微趋势，暂时不代表异常。</>,
        },
        {
          tone:'is-good',
          title:'波动范围正在收窄',
          text:<>这一年最长周期是 <b>31 天</b>，最短是 <b>28 天</b>，最大相差只有 3 天。最近几次大多集中在 28-30 天，周期表现比过去更集中。</>,
        },
        {
          tone:'is-note',
          title:'连续两次 28 天，建议继续观察',
          text:<>最近两个周期都是 <b>28 天</b>，是近一年里的低位，但仍在正常范围内。可以继续记录未来 2-3 次，看看是否稳定在新的节奏。</>,
        },
      ],
      summary:'近一年周期规律、波动小，近期有轻微缩短，但仍处于健康区间。继续保持记录即可；如果之后连续出现明显提前、推迟或伴随不适，再结合身体状态进一步关注。',
    },
    '3y': {
      items: [
        {
          tone:'is-good',
          title:'整体规律性：相当好',
          text:<>50 次里只有 2025 年 1 月那次 <b>36 天</b> 超出「正常上限」35 天，其余都在 28-34 天之间。周期间波动的标准差只有约 <b>1.9 天</b>。临床上通常认为同一年内波动小于 7-9 天就算「规律」，你远好于这个标准。</>,
        },
        {
          tone:'is-note',
          title:'最值得注意：周期在逐渐缩短',
          text:<>把 50 个周期拟合一条趋势线，斜率约 <b>-0.11 天/周期</b>，相当于每年缩短 1 天多，两年累计缩短约 2.5 天。最近两个周期都是 <b>28 天</b>，是整段记录里最短的，当前这次又「提前」来了。</>,
        },
        {
          tone:'is-good',
          title:'不只是变短，还变得更稳了',
          text:<>把前 12 个周期和后 12 个周期对比很明显：前半段在 <b>29-36 天</b> 之间跳，跨度 7 天；后半段收窄到 <b>28-31 天</b>，跨度只有 3 天。波动几乎减半，你的身体在向「28-31 天」这个更窄的区间收敛。</>,
        },
        {
          tone:'is-note',
          title:'季节的规律倾向',
          text:<>按月对比两年同月：4-5 月偏短（<b>28-29 天</b>），冬季 12-2 月偏长（<b>30-32 天</b>），看着像「春短冬长」。但只有两年数据，而且这个「季节性」和整体下降趋势混在一起、没法拆开，所以只能算一个值得继续观察的猜想。</>,
        },
      ],
      summary:'总的来说，你的周期完全在健康区间内，规律性还在变好，没有需要担心的异常。轻微、渐进的周期缩短很常见，可能和年龄、压力、作息、体重等很多因素相关。这是对记录的解读，不是医学诊断。',
    },
    'all': {
      items: [
        {
          tone:'is-good',
          title:'长期规律性：稳定',
          text:<>全部 50 次记录覆盖约 4 年，周期平均约 <b>30.9 天</b>，绝大多数集中在 28-34 天。长期波动标准差约 <b>1.8 天</b>，说明整体节奏一直比较规律。</>,
        },
        {
          tone:'is-note',
          title:'仅出现过一次偏长周期',
          text:<>只有 2025 年 1 月的一次周期为 <b>36 天</b>，略高于 35 天，其余记录均未超过正常上限。这次偏长是孤立波动，没有形成连续异常。</>,
        },
        {
          tone:'is-note',
          title:'长期趋势缓慢缩短',
          text:<>从全部记录看，早期周期更多分布在 <b>30-34 天</b>，近一年逐渐集中到 <b>28-31 天</b>。这是缓慢、渐进的变化，不是突然缩短。</>,
        },
        {
          tone:'is-good',
          title:'周期正在变得更集中',
          text:<>早期记录的高低跨度约 6 天，最近一年缩小到 <b>3 天</b>。虽然平均周期略有下降，但稳定性反而更好，身体正在形成更清晰的节奏。</>,
        },
      ],
      summary:'从全部记录看，你的周期长期规律，只有一次孤立的偏长记录。近几年周期缓慢缩短、波动范围同步收窄，目前没有明显异常信号。长期趋势适合持续观察，不用于替代医学诊断。',
    },
  };
  const currentAnalysis = analysisCopy[range];

  return (
    <section className={'review-cycle-detail is-cycle-ai-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="月经周期详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">月经周期AI趋势分析</span>
      </div>
      <div className="review-detail-content">
        <div className="review-segment" role="tablist" aria-label="时间范围">
          {ranges.map(item=>(
            <button
              key={item.key}
              type="button"
              className={range === item.key ? 'is-active' : ''}
              aria-selected={range === item.key}
              onClick={()=>setRange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="review-cycle-sample-area">
        <div className="review-detail-card">
          <div className="review-chart review-detail-chart"><CycleDetailChart range={range}/></div>
          <div className="review-legend">
            <span className="review-legend-item is-cycle"><i></i>周期天数</span>
            <span className="review-legend-item is-trend"><i></i>趋势</span>
            <span className="review-legend-item is-warning"><i></i>偏长周期</span>
          </div>
        </div>

        <div className="review-detail-card review-ai-insight-card">
          <div className="review-insight-head">
            <span className="review-ai-badge" aria-hidden="true">AI</span>
            <span>趋势分析</span>
          </div>
          <div className="review-insight-body">
            {currentAnalysis.items.map((item, index)=>(
              <div className={'review-insight-item ' + item.tone} key={index}>
                <span className="review-insight-dot"></span>
                <div>
                  <div className="review-insight-title">{item.title}</div>
                  <div className="review-insight-text">{item.text}</div>
                </div>
              </div>
            ))}
            <div className="review-insight-summary">
              <div className="review-summary-head">总结</div>
              <p className="review-summary-text">{currentAnalysis.summary}</p>
            </div>
          </div>
        </div>
        <div className="review-cycle-sample-mask" aria-hidden="true">
          <span>示例数据</span>
        </div>
        </div>
      </div>
      <div className="review-ai-floating-action">
        <button type="button" className="review-ai-unlock-btn">
          <span className="review-ai-unlock-vip">VIP</span>
          <span>查看分析</span>
        </button>
      </div>
    </section>
  );
}

function ReviewMetric({value, unit, label, trend}){
  return (
    <div className="review-metric">
      <div className={'review-metric-value' + (trend ? ' is-trend' : '')}>
        {value}{unit ? <span className="review-metric-unit">{unit}</span> : null}
      </div>
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function ReviewMoodValue({kind, word, trend}){
  const faces = {
    happy: <><circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.8 1.1 2 1.7 3.5 1.7s2.7-.6 3.5-1.7"/><path d="M9 9.5h.01M15 9.5h.01"/></>,
    calm: <><circle cx="12" cy="12" r="8.5"/><path d="M8.7 14.5h6.6"/><path d="M9 9.5h.01M15 9.5h.01"/></>,
    down: <><circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.3c.8-1.1 2-1.7 3.5-1.7s2.7.6 3.5 1.7"/><path d="M9 9.5h.01M15 9.5h.01"/></>,
  };
  return (
    <div className="review-mood-value">
      {kind ? <svg viewBox="0 0 24 24">{faces[kind]}</svg> : null}
      <span className={'review-mood-word' + (trend ? ' is-trend' : '')}>{word}</span>
    </div>
  );
}

function CycleChart(){
  const data = REVIEW_CYCLE_ALL_DATA.slice(-24);
  const vals = data.map(d=>d[1]);
  const n = vals.length;
  const normalMax = 35;
  const W = 340, H = 168, padL = 24, padR = 14, padT = 14, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 26, yMax = 37;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  const sx = vals.reduce((s, _v, i)=>s + i, 0);
  const sy = vals.reduce((s, v)=>s + v, 0);
  const sxy = vals.reduce((s, v, i)=>s + i * v, 0);
  const sxx = vals.reduce((s, _v, i)=>s + i * i, 0);
  const b = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  const a = (sy - b * sx) / n;
  let anomalyIdx = -1, anomalyVal = 0;
  vals.forEach((v, i)=>{ if(v > normalMax && v > anomalyVal){ anomalyVal = v; anomalyIdx = i; } });
  const lastVal = vals[n - 1];
  const labels = {0:'24.6', 7:'25.1', 13:'25.7', 19:'26.1', 23:'26.5'};
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="月经周期长度趋势曲线">
      <rect x={x0} y={y0} width={x1 - x0} height={Y(normalMax) - y0} fill="rgba(255,149,0,0.06)"/>
      {[28,32,36].map(g=>(
        <React.Fragment key={g}>
          <line x1={x0} y1={Y(g)} x2={x1} y2={Y(g)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(g) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{g}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={Y(normalMax)} x2={x1} y2={Y(normalMax)} stroke="#ffb15a" strokeWidth="1" strokeDasharray="3 3"/>
      <text x={x1} y={Y(normalMax) - 4} textAnchor="end" fontSize="9" fill="#e8930f" fontFamily="PingFang SC">正常上限 35天</text>
      <line x1={X(0)} y1={Y(a)} x2={X(n - 1)} y2={Y(a + b * (n - 1))} stroke="#c2c2c8" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round"/>
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#ff4d88" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((v, i)=>{
        const isAnomaly = i === anomalyIdx;
        const isLast = i === n - 1;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(v)} r={isLast ? 4.5 : (isAnomaly ? 4 : 2.4)} fill={isAnomaly ? '#ff9500' : '#ff4d88'} stroke={isLast || isAnomaly ? '#fff' : 'none'} strokeWidth={isLast ? 2 : 1.5}/>
            {isAnomaly ? <text x={X(i)} y={Y(v) - 8} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#e8930f" fontFamily="PingFang SC">{anomalyVal}天</text> : null}
            {isLast ? <text x={X(i)} y={Y(v) + 15} textAnchor="end" fontSize="9.5" fontWeight="600" fill="#ff4d88" fontFamily="PingFang SC">{lastVal}天</text> : null}
          </React.Fragment>
        );
      })}
      {Object.keys(labels).map(k=>(
        <text key={k} x={X(+k)} y={H - 8} textAnchor="middle" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{labels[k]}</text>
      ))}
    </svg>
  );
}

function ExpandedCycleChart(){
  const data = REVIEW_CYCLE_ALL_DATA;
  const vals = data.map(item=>item[1]);
  const n = vals.length;
  const W = Math.max(1160, n * 28);
  const H = 250;
  const padL = 36, padR = 34, padT = 18, padB = 32;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 26, yMax = 37, normalMax = 35;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  const sx = vals.reduce((sum, _value, i)=>sum + i, 0);
  const sy = vals.reduce((sum, value)=>sum + value, 0);
  const sxy = vals.reduce((sum, value, i)=>sum + i * value, 0);
  const sxx = vals.reduce((sum, _value, i)=>sum + i * i, 0);
  const b = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  const a = (sy - b * sx) / n;
  let anomalyIdx = -1;
  vals.forEach((value, i)=>{ if(value > normalMax && (anomalyIdx < 0 || value > vals[anomalyIdx])) anomalyIdx = i; });
  const labelIndexes = data.map((_item, i)=>i).filter(i=>i % 2 === 0 || i === n - 1);

  return (
    <svg
      viewBox={'0 0 ' + W + ' ' + H}
      style={{width:W + 'px'}}
      preserveAspectRatio="none"
      role="img"
      aria-label="全部月经周期趋势曲线"
    >
      <rect x={x0} y={y0} width={x1 - x0} height={Y(normalMax) - y0} fill="rgba(255,149,0,0.06)"/>
      {[28,32,36].map(value=>(
        <React.Fragment key={value}>
          <line x1={x0} y1={Y(value)} x2={x1} y2={Y(value)} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
          <text x={x0 - 8} y={Y(value) + 4} textAnchor="end" fontSize="10" fill="#aaaab0" fontFamily="PingFang SC">{value}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={Y(normalMax)} x2={x1} y2={Y(normalMax)} stroke="#ffb15a" strokeWidth="1" strokeDasharray="4 4"/>
      <text x={x1} y={Y(normalMax) - 6} textAnchor="end" fontSize="10" fill="#e8930f" fontFamily="PingFang SC">正常上限 35天</text>
      <line x1={X(0)} y1={Y(a)} x2={X(n - 1)} y2={Y(a + b * (n - 1))} stroke="#bfc0c5" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#ff4d88" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((value, i)=>{
        const isAnomaly = i === anomalyIdx;
        const isLast = i === n - 1;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(value)} r={isLast ? 4.5 : (isAnomaly ? 4 : 2.5)} fill={isAnomaly ? '#ff9500' : '#ff4d88'} stroke={isLast || isAnomaly ? '#fff' : 'none'} strokeWidth="2"/>
            {isAnomaly ? <text x={X(i)} y={Y(value) - 9} textAnchor="middle" fontSize="10" fontWeight="600" fill="#e8930f" fontFamily="PingFang SC">{value}天</text> : null}
            {isLast ? <text x={X(i)} y={Y(value) + 17} textAnchor="end" fontSize="10" fontWeight="600" fill="#ff4d88" fontFamily="PingFang SC">{value}天</text> : null}
          </React.Fragment>
        );
      })}
      {labelIndexes.map(i=>(
        <text key={i} x={X(i)} y={H - 9} textAnchor="middle" fontSize="9.5" fill="#aaaab0" fontFamily="PingFang SC">{data[i][0]}</text>
      ))}
    </svg>
  );
}

function CycleLandscapePage({open, onClose}){
  const scrollerRef = React.useRef(null);

  React.useEffect(()=>{
    if(!open) return undefined;
    const scroller = scrollerRef.current;
    if(scroller) scroller.scrollLeft = scroller.scrollWidth;
    const handleKeyDown = event=>{ if(event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return ()=>document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <section
      className={'review-cycle-landscape' + (open ? ' is-open' : '')}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="全部月经周期横屏图表"
    >
      <div className="review-cycle-landscape-surface">
        <header className="review-cycle-landscape-head">
          <div>
            <h2>全部月经周期</h2>
            <p>共 {REVIEW_CYCLE_ALL_DATA.length} 个周期 · 左右滑动查看</p>
          </div>
          <button type="button" className="review-cycle-landscape-close" aria-label="关闭横屏图表" onClick={onClose}>×</button>
        </header>
        <div className="review-cycle-landscape-legend">
          <span className="review-legend-item is-cycle"><i></i>周期天数</span>
          <span className="review-legend-item is-trend"><i></i>趋势</span>
          <span className="review-legend-item is-warning"><i></i>偏长周期</span>
          <span className="review-cycle-landscape-tip">← 滑动查看更多 →</span>
        </div>
        <div className="review-cycle-landscape-scroll" ref={scrollerRef}>
          <ExpandedCycleChart/>
        </div>
      </div>
    </section>
  );
}

function WeightChart(){
  const data = [103.3,98.2,101.4,97.6,98.6,97.5,97.9,97.3,96.5,99.4,102.0,100.6,101.6,99.9,101.0,102.1,100.7,101.3,101.9,100.6,101.5,102.0,101.4,101.1];
  const n = data.length;
  const W = 340, H = 168, padL = 28, padR = 14, padT = 16, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 96, yMax = 104;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const pts = data.map((v, i)=>[X(i), Y(v)]);
  const labels = {0:'25.12', 11:'26.3', 23:'26.6'};
  let maxI = 0, minI = 0;
  data.forEach((v, i)=>{ if(v > data[maxI]) maxI = i; if(v < data[minI]) minI = i; });
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="体重变化趋势曲线">
      {[98,100,102].map(g=>(
        <React.Fragment key={g}>
          <line x1={x0} y1={Y(g)} x2={x1} y2={Y(g)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(g) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{g}</text>
        </React.Fragment>
      ))}
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#4f7cae" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((v, i)=>{
        const isMax = i === maxI;
        const isMin = i === minI;
        const isLast = i === n - 1;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(v)} r={isMax || isMin ? 4 : (isLast ? 4.5 : 2.2)} fill="#4f7cae" stroke={isMax || isMin || isLast ? '#fff' : 'none'} strokeWidth={isLast ? 2 : 1.5}/>
            {isMax ? <text x={X(i) + 7} y={Y(v) + 3} textAnchor="start" fontSize="9.5" fontWeight="600" fill="#4f7cae" fontFamily="PingFang SC">{reviewFmt1(v)}斤 最高</text> : null}
            {isMin ? <text x={X(i)} y={Y(v) + 16} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#4f7cae" fontFamily="PingFang SC">{reviewFmt1(v)}斤 最低</text> : null}
            {isLast ? <text x={X(i)} y={Y(v) - 8} textAnchor="end" fontSize="9.5" fontWeight="600" fill="#4f7cae" fontFamily="PingFang SC">{reviewFmt1(v)}斤</text> : null}
          </React.Fragment>
        );
      })}
      {Object.keys(labels).map(k=>(
        <text key={k} x={X(+k)} y={H - 8} textAnchor="middle" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{labels[k]}</text>
      ))}
    </svg>
  );
}

const DIET_MEAL_COLORS = {
  breakfast: '#ffd699',
  lunch: '#ffa940',
  dinner: '#ff7a3d',
  snack: '#ffc4c4',
  drink: '#c9d9f0',
  other: '#d5d0c9',
};

const DIET_MEAL_ORDER = ['breakfast', 'lunch', 'dinner', 'snack', 'drink', 'other'];

const DIET_MEAL_LABELS = {
  breakfast: '早餐',
  lunch: '午餐',
  dinner: '晚餐',
  snack: '加餐',
  drink: '饮品',
  other: '其他',
};

// 餐次热量；缺项表示当天未记录该餐。柱图从上到下：早→午→晚→加餐→饮品→其他
const DIET_BALANCE_LOW = 1600;
const DIET_BALANCE_HIGH = 2000;

function buildDietAllDays(count = 120){
  let seed = 20260714;
  const rnd = ()=>{
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const days = [];
  const today = new Date(2026, 6, 13);
  for(let i = count - 1; i >= 0; i--){
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const label = (i === 0) ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate());
    const skip = rnd() < 0.08 && i !== 0;
    if(skip){
      days.push({date:label, total:0, meals:{}, empty:true, highlight:i === 0});
      continue;
    }
    const meals = {
      breakfast: rnd() < 0.16 ? 0 : Math.round(240 + rnd() * 180),
      lunch: Math.round(430 + rnd() * 260),
      dinner: rnd() < 0.06 ? 0 : Math.round(470 + rnd() * 280),
      snack: rnd() < 0.34 ? 0 : Math.round(70 + rnd() * 150),
      drink: rnd() < 0.22 ? 0 : Math.round(90 + rnd() * 170),
      other: rnd() < 0.52 ? 0 : Math.round(35 + rnd() * 75),
    };
    let total = DIET_MEAL_ORDER.reduce((sum, key)=>sum + (meals[key] || 0), 0);
    const target = Math.round(1680 + rnd() * 420);
    if(total > 0){
      const scale = target / total;
      DIET_MEAL_ORDER.forEach((key)=>{
        if(meals[key]) meals[key] = Math.max(Math.round(meals[key] * scale), 0);
      });
      total = DIET_MEAL_ORDER.reduce((sum, key)=>sum + (meals[key] || 0), 0);
    }
    days.push({date:label, total, meals, highlight:i === 0});
  }
  return days;
}

const REVIEW_DIET_ALL_DAYS = buildDietAllDays(120);
const DIET_CARD_DAYS = REVIEW_DIET_ALL_DAYS.slice(-30);
const DIET_STACK_DAYS = REVIEW_DIET_ALL_DAYS.slice(-7);

function reviewDietAvg(days){
  const recorded = days.filter(day=>!day.empty);
  if(!recorded.length) return 0;
  return Math.round(recorded.reduce((sum, day)=>sum + day.total, 0) / recorded.length);
}

function reviewDietDeltaText(delta){
  if(delta > 0) return '+' + delta;
  if(delta < 0) return String(delta);
  return '0';
}

const DIET_CARD_AVG = reviewDietAvg(DIET_CARD_DAYS);
const DIET_CARD_DELTA = reviewDietAvg(DIET_CARD_DAYS) - reviewDietAvg(REVIEW_DIET_ALL_DAYS.slice(-60, -30));
const DIET_CARD_RECORD_DAYS = DIET_CARD_DAYS.filter(day=>!day.empty).length;

function DietMealStackedChart({days, ariaLabel='热量分布堆叠柱状图'}){
  const W = 340, H = 188, padL = 34, padR = 10, padT = 22, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 2500;
  const band = (x1 - x0) / Math.max(days.length, 1);
  const barWidth = days.length > 14 ? 14 : 20;
  const gap = 2;
  const radius = 4;
  const X = i => x0 + band * i + band / 2;
  const Y = value => y1 - value / yMax * (y1 - y0);
  const stackFromBottom = [...DIET_MEAL_ORDER].reverse();
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      {[500,1000,1500,2000,2500].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        if(day.empty){
          return (
            <text key={day.date + '-' + i} x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#ff7a3d' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          );
        }
        let stacked = 0;
        const segments = stackFromBottom
          .map(type=>({type, value:day.meals[type] || 0}))
          .filter(segment=>segment.value > 0);
        return (
          <React.Fragment key={day.date + '-' + i}>
            <text x={X(i)} y={Y(day.total) - 6} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '500'} fill={day.highlight ? '#ff7a3d' : 'rgba(0,0,0,0.55)'} fontFamily="PingFang SC">{day.total}</text>
            {segments.map((segment)=>{
              const bottom = Y(stacked);
              stacked += segment.value;
              const top = Y(stacked);
              const height = Math.max(bottom - top - gap, 3);
              return (
                <rect
                  key={segment.type}
                  x={X(i) - barWidth / 2}
                  y={top}
                  width={barWidth}
                  height={height}
                  rx={radius}
                  fill={DIET_MEAL_COLORS[segment.type]}
                />
              );
            })}
            <text x={X(i)} y={H - 8} textAnchor="middle" fontSize="9" fontWeight={day.highlight ? '600' : '400'} fill={day.highlight ? '#ff7a3d' : '#bbbbbf'} fontFamily="PingFang SC">{day.date}</text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function DietCalorieLineChart({
  days,
  width = 340,
  height = 168,
  padL = 28,
  padR = 14,
  padT = 14,
  padB = 26,
  yMin = 1200,
  yMax = 2100,
  balanceLow = DIET_BALANCE_LOW,
  balanceHigh = DIET_BALANCE_HIGH,
  labelIndexes = null,
  ariaLabel = '每日热量趋势曲线',
  wide = false,
}){
  const points = days.filter(day=>!day.empty);
  const n = points.length;
  if(n < 2){
    return <svg viewBox={'0 0 ' + width + ' ' + height} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}/>;
  }
  const x0 = padL, x1 = width - padR, y0 = padT, y1 = height - padB;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const vals = points.map(day=>day.total);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  let maxI = 0, minI = 0;
  vals.forEach((v, i)=>{ if(v > vals[maxI]) maxI = i; if(v < vals[minI]) minI = i; });
  const lastI = n - 1;
  const marks = labelIndexes || [0, Math.round((n - 1) * 0.42), Math.round((n - 1) * 0.76), n - 1]
    .filter((value, index, arr)=>arr.indexOf(value) === index);
  const yTicks = [1200, 1500, 1800, 2100];

  return (
    <svg
      viewBox={'0 0 ' + width + ' ' + height}
      style={wide ? {width:width + 'px'} : undefined}
      preserveAspectRatio={wide ? 'none' : 'xMidYMid meet'}
      role="img"
      aria-label={ariaLabel}
    >
      <rect x={x0} y={Y(balanceHigh)} width={x1 - x0} height={Y(balanceLow) - Y(balanceHigh)} fill="rgba(255,149,0,0.08)"/>
      {yTicks.map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize={wide ? 10 : 9} fill="#bbbbbf" fontFamily="PingFang SC">{tick}</text>
        </React.Fragment>
      ))}
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#ff7a3d" strokeWidth={wide ? 2.2 : 2} strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((v, i)=>{
        const isMax = i === maxI;
        const isMin = i === minI;
        const isLast = i === lastI;
        const showDot = isMax || isMin || isLast;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(v)} r={showDot ? (wide ? 4 : 3.8) : (wide ? 2.5 : 1.8)} fill={isMax ? '#ff9500' : '#ff7a3d'} stroke={showDot ? '#fff' : 'none'} strokeWidth="1.5"/>
            {isMax ? <text x={X(i)} y={Y(v) - 8} textAnchor="middle" fontSize={wide ? 10 : 9.5} fontWeight="600" fill="#e8930f" fontFamily="PingFang SC">{v} kcal 最高</text> : null}
            {isMin ? <text x={X(i)} y={Y(v) + 16} textAnchor="middle" fontSize={wide ? 10 : 9.5} fontWeight="600" fill="#ff7a3d" fontFamily="PingFang SC">{v} kcal 最低</text> : null}
            {isLast && !isMax ? <text x={X(i)} y={Y(v) + 16} textAnchor="end" fontSize={wide ? 10 : 9.5} fontWeight="600" fill="#ff7a3d" fontFamily="PingFang SC">{v} kcal</text> : null}
          </React.Fragment>
        );
      })}
      {marks.map(idx=>(
        <text key={idx} x={X(idx)} y={height - 8} textAnchor="middle" fontSize={wide ? 9.5 : 9} fill="#bbbbbf" fontFamily="PingFang SC">{points[idx].date}</text>
      ))}
    </svg>
  );
}

function DietDistributionChart(){
  return <DietCalorieLineChart days={DIET_CARD_DAYS} ariaLabel="近30天每日热量趋势曲线"/>;
}

function ExpandedDietCalorieChart(){
  const days = REVIEW_DIET_ALL_DAYS.filter(day=>!day.empty);
  const n = days.length;
  const width = Math.max(1160, n * 22);
  const labelIndexes = days.map((_day, i)=>i).filter(i=>i % 4 === 0 || i === n - 1);
  return (
    <DietCalorieLineChart
      days={days}
      width={width}
      height={250}
      padL={36}
      padR={34}
      padT={18}
      padB={32}
      labelIndexes={labelIndexes}
      ariaLabel="全部饮食热量趋势曲线"
      wide={true}
    />
  );
}

function DietLandscapePage({open, onClose}){
  const scrollerRef = React.useRef(null);

  React.useEffect(()=>{
    if(!open) return undefined;
    const scroller = scrollerRef.current;
    if(scroller) scroller.scrollLeft = scroller.scrollWidth;
    const handleKeyDown = event=>{ if(event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return ()=>document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const recordedCount = REVIEW_DIET_ALL_DAYS.filter(day=>!day.empty).length;

  return (
    <section
      className={'review-cycle-landscape review-diet-landscape' + (open ? ' is-open' : '')}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="全部饮食热量横屏图表"
    >
      <div className="review-cycle-landscape-surface">
        <header className="review-cycle-landscape-head">
          <div>
            <h2>全部饮食热量</h2>
            <p>共 {recordedCount} 天记录 · 左右滑动查看</p>
          </div>
          <button type="button" className="review-cycle-landscape-close" aria-label="关闭横屏图表" onClick={onClose}>×</button>
        </header>
        <div className="review-cycle-landscape-legend">
          <span className="review-legend-item is-diet"><i></i>每日热量</span>
          <span className="review-legend-item is-diet-band"><i></i>均衡参考区间</span>
          <span className="review-cycle-landscape-tip">← 滑动查看更多 →</span>
        </div>
        <div className="review-cycle-landscape-scroll" ref={scrollerRef}>
          <ExpandedDietCalorieChart/>
        </div>
      </div>
    </section>
  );
}

const DIET_REVIEW_PHOTOS = [
  'assets/diet-meal-1.png',
  'assets/diet-meal-2.png',
  'assets/diet-meal-3.png',
  'assets/meal-519.png',
  'assets/gallery/IMG_9127-d09a43af-ea30-4eea-b165-d501765c5244.png',
  'assets/gallery/IMG_9128-7218d6e2-498b-4980-8a99-218909c9881d.png',
  'assets/gallery/IMG_9129-0b57a26b-182e-49cc-ad71-7b972274a436.png',
  'assets/gallery/IMG_9130-49592824-80e2-4ef5-a0c4-d094130b01d4.png',
  'assets/gallery/IMG_9137-a082d61f-1417-483d-9122-37c8ebcb2861.png',
  'assets/gallery/IMG_9139-a36f2639-6b62-453c-bdc1-2d7cd67b4d28.png',
  'assets/gallery/IMG_9140-a0794273-c982-414f-8516-52af2c4456e1.png',
  'assets/gallery/IMG_9144-803d342e-cc05-4834-943e-4c52e0bad0d3.png',
  'assets/gallery/IMG_9145_2-72cf62bb-2ea4-45fa-977a-78f80ac3da58.png',
  'assets/gallery/1779691515990-7a645e8f-02b5-44f1-8fe5-7c60f1f4cc40.png',
];

const DIET_CALENDAR_WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
// 2026-07-01 为周三；部分日期无记录（无图）
const DIET_CALENDAR_YEAR = 2026;
const DIET_CALENDAR_MONTH = 7;
const DIET_CALENDAR_DAYS_IN_MONTH = 31;
const DIET_CALENDAR_START_WEEKDAY = 3; // 0=周日
const DIET_CALENDAR_PHOTO_DAYS = new Set([1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 16, 17, 19, 20, 22, 23, 25]);

const DIET_TARGET_GOAL = 1237;
const DIET_TARGET_DAYS = [
  {date:'7.7', intake:980, burn:120},
  {date:'7.8', intake:1310, burn:0},
  {date:'7.9', intake:1050, burn:80},
  {date:'7.10', intake:1420, burn:40},
  {date:'7.11', intake:1100, burn:0},
  {date:'7.12', intake:1180, burn:160},
  {date:'今天', intake:898, burn:0, highlight:true},
].map((day)=>{
  const goal = DIET_TARGET_GOAL;
  const remain = Math.max(goal - day.intake + (day.burn || 0), 0);
  const over = day.intake > goal;
  const empty = day.intake <= 0;
  const ratio = goal > 0 ? Math.min(day.intake / goal, 1.15) : 0;
  return {...day, goal, remain, over, ratio, empty, met:false};
});

const DIET_DAILY_WEEK_LABEL = '7.7—7.13';

function DietBudgetHeadAction({goal = DIET_TARGET_GOAL}){
  return (
    <button
      type="button"
      className="review-card-head-btn is-budget"
      title="点击可修改热量目标"
      aria-label={'热量目标 ' + goal + '，点击可修改'}
      onClick={(event)=>event.stopPropagation()}
    >
      <span>热量目标 {goal}</span>
      <i className="review-diet-budget-tip" aria-hidden="true">!</i>
    </button>
  );
}

function DietDistributionCard({onOpen, onLandscapeOpen, title='饮食', more='查看饮食付费分析'}){
  return (
    <ReviewCard
      title={title}
      iconClass="is-diet"
      icon={<ReviewDietIcon/>}
      headAction={typeof onLandscapeOpen === 'function' ? (
        <button
          type="button"
          className="review-cycle-expand-btn"
          aria-label="横屏展开全部饮食热量"
          onKeyDown={event=>event.stopPropagation()}
          onClick={event=>{
            event.stopPropagation();
            onLandscapeOpen();
          }}
        >
          <ReviewExpandIcon/>
        </button>
      ) : null}
      chart={<DietDistributionChart/>}
      legend={(
        <>
          <span className="review-legend-item is-diet"><i></i>每日热量</span>
          <span className="review-legend-item is-diet-band"><i></i>均衡参考区间</span>
          <DietBudgetHeadAction goal={DIET_TARGET_GOAL}/>
        </>
      )}
      metrics={(
        <>
          <ReviewMetric value={String(DIET_CARD_AVG)} unit="kcal" label="近30天日均"/>
          <ReviewMetric value={reviewDietDeltaText(DIET_CARD_DELTA)} unit="kcal" label="较上月"/>
          <ReviewMetric value={String(DIET_CARD_RECORD_DAYS)} unit="天" label="达标天数"/>
        </>
      )}
      more={more}
      onOpen={onOpen}
    />
  );
}

function DietMealLegend(){
  return (
    <>
      {DIET_MEAL_ORDER.map(type=>(
        <span className={'review-legend-item is-diet-meal is-' + type} key={type}>
          <i style={{background:DIET_MEAL_COLORS[type]}}></i>{DIET_MEAL_LABELS[type]}
        </span>
      ))}
    </>
  );
}

const DIET_NUTRIENT_COLORS = {
  carb: '#5ec8a8',
  protein: '#ffb15a',
  fat: '#ff6b8a',
  fiber: '#a8b4c4',
  vitamin_c: '#7ec8ff',
  calcium: '#c4a8e8',
  iron: '#e8a87e',
  sodium: '#8fb4d8',
};

const DIET_DAILY_NUTRIENTS = {
  '7.7': {
    ring: [
      {key:'carb', label:'碳水化合物', pct:0.38, color:DIET_NUTRIENT_COLORS.carb},
      {key:'protein', label:'蛋白质', pct:0.28, color:DIET_NUTRIENT_COLORS.protein},
      {key:'fat', label:'脂肪', pct:0.34, color:DIET_NUTRIENT_COLORS.fat},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:186, intake:46.5, recommend:'150–190', status:'low', tip:'今天主食偏少，晚餐可补一小碗杂粮饭。'},
      {key:'protein', name:'蛋白质', kcal:137, intake:34.2, recommend:'55–90', status:'low', tip:'蛋白摄入偏低，午晚各加一份优质蛋白会更稳。'},
      {key:'fat', name:'脂肪', kcal:166, intake:18.4, recommend:'35–55', status:'ok', tip:'脂肪比例正常，继续优先选择少油烹饪。'},
      {key:'fiber', name:'膳食纤维', kcal:12, intake:6.0, recommend:'25–30', status:'low', tip:'纤维不足，加一份绿叶菜或水果会更好。'},
    ],
  },
  '7.8': {
    ring: [
      {key:'protein', label:'蛋白质', pct:0.52, color:DIET_NUTRIENT_COLORS.protein},
      {key:'fat', label:'脂肪', pct:0.33, color:DIET_NUTRIENT_COLORS.fat},
      {key:'carb', label:'碳水化合物', pct:0.15, color:DIET_NUTRIENT_COLORS.carb},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:197, intake:49.2, recommend:'150–190', status:'low', tip:'碳水占比很低，全天更像高蛋白高脂结构。'},
      {key:'protein', name:'蛋白质', kcal:681, intake:170.3, recommend:'55–90', status:'high', tip:'蛋白质明显偏高，肉蛋摄入可略减。'},
      {key:'fat', name:'脂肪', kcal:432, intake:48.0, recommend:'35–55', status:'high', tip:'脂肪也偏高，晚餐少油会更有助于压总量。'},
      {key:'sodium', name:'钠', kcal:0, intake:3.8, recommend:'<2.0', unit:'g', status:'high', tip:'外食或酱料偏多，注意控盐。'},
    ],
  },
  '7.9': {
    ring: [
      {key:'carb', label:'碳水化合物', pct:0.35, color:DIET_NUTRIENT_COLORS.carb},
      {key:'protein', label:'蛋白质', pct:0.30, color:DIET_NUTRIENT_COLORS.protein},
      {key:'fat', label:'脂肪', pct:0.35, color:DIET_NUTRIENT_COLORS.fat},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:184, intake:46.0, recommend:'150–190', status:'low', tip:'结构较均衡，但碳水总量仍略低。'},
      {key:'protein', name:'蛋白质', kcal:158, intake:39.5, recommend:'55–90', status:'ok', tip:'蛋白质落在推荐区间，维持即可。'},
      {key:'fat', name:'脂肪', kcal:184, intake:20.4, recommend:'35–55', status:'ok', tip:'脂肪比例正常，没有明显偏科。'},
      {key:'vitamin_c', name:'维生素C', kcal:0, intake:42, recommend:'60–100', unit:'mg', status:'low', tip:'维C偏低，补一份水果或彩椒沙拉。'},
    ],
  },
  '7.10': {
    ring: [
      {key:'fat', label:'脂肪', pct:0.48, color:DIET_NUTRIENT_COLORS.fat},
      {key:'protein', label:'蛋白质', pct:0.28, color:DIET_NUTRIENT_COLORS.protein},
      {key:'carb', label:'碳水化合物', pct:0.24, color:DIET_NUTRIENT_COLORS.carb},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:341, intake:85.2, recommend:'150–190', status:'low', tip:'虽然超量，但碳水占比仍不高，结构偏油。'},
      {key:'protein', name:'蛋白质', kcal:398, intake:99.5, recommend:'55–90', status:'high', tip:'蛋白也偏高，像是午晚两餐都偏丰盛。'},
      {key:'fat', name:'脂肪', kcal:681, intake:75.7, recommend:'35–55', status:'high', tip:'脂肪是主要推手，油炸和过油菜是重点。'},
      {key:'iron', name:'铁', kcal:0, intake:8.2, recommend:'12–20', unit:'mg', status:'low', tip:'铁摄入偏低，红肉或豆类可以适量补。'},
    ],
  },
  '7.11': {
    ring: [
      {key:'carb', label:'碳水化合物', pct:0.44, color:DIET_NUTRIENT_COLORS.carb},
      {key:'fat', label:'脂肪', pct:0.30, color:DIET_NUTRIENT_COLORS.fat},
      {key:'protein', label:'蛋白质', pct:0.26, color:DIET_NUTRIENT_COLORS.protein},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:484, intake:121, recommend:'150–190', status:'ok', tip:'碳水占比最高，主食记录比较完整。'},
      {key:'protein', name:'蛋白质', kcal:286, intake:71.5, recommend:'55–90', status:'ok', tip:'蛋白适中，和主食搭配较均衡。'},
      {key:'fat', name:'脂肪', kcal:330, intake:36.7, recommend:'35–55', status:'ok', tip:'脂肪没有明显超标，结构相对健康。'},
      {key:'calcium', name:'钙', kcal:0, intake:520, recommend:'700–1000', unit:'mg', status:'low', tip:'钙摄入不足，可加牛奶、酸奶或豆制品。'},
    ],
  },
  '7.12': {
    ring: [
      {key:'protein', label:'蛋白质', pct:0.34, color:DIET_NUTRIENT_COLORS.protein},
      {key:'carb', label:'碳水化合物', pct:0.33, color:DIET_NUTRIENT_COLORS.carb},
      {key:'fat', label:'脂肪', pct:0.33, color:DIET_NUTRIENT_COLORS.fat},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:389, intake:97.3, recommend:'150–190', status:'low', tip:'三大营养素较均衡，但总量接近目标上限。'},
      {key:'protein', name:'蛋白质', kcal:401, intake:100.3, recommend:'55–90', status:'high', tip:'蛋白略高，可把部分肉蛋换成蔬菜。'},
      {key:'fat', name:'脂肪', kcal:389, intake:43.2, recommend:'35–55', status:'ok', tip:'脂肪控制不错，是达标日里结构较好的一天。'},
      {key:'fiber', name:'膳食纤维', kcal:22, intake:11.0, recommend:'25–30', status:'low', tip:'纤维接近下限，再加半盘蔬菜会更稳。'},
    ],
  },
  '今天': {
    ring: [
      {key:'carb', label:'碳水化合物', pct:0.40, color:DIET_NUTRIENT_COLORS.carb},
      {key:'protein', label:'蛋白质', pct:0.35, color:DIET_NUTRIENT_COLORS.protein},
      {key:'fat', label:'脂肪', pct:0.25, color:DIET_NUTRIENT_COLORS.fat},
    ],
    rows: [
      {key:'carb', name:'碳水化合物', kcal:359, intake:89.8, recommend:'150–190', status:'low', tip:'还在进行中，晚餐适当补主食会更均衡。'},
      {key:'protein', name:'蛋白质', kcal:314, intake:78.5, recommend:'55–90', status:'ok', tip:'蛋白目前适中，不必额外加量。'},
      {key:'fat', name:'脂肪', kcal:224, intake:24.9, recommend:'35–55', status:'ok', tip:'脂肪占比最低，今天整体偏清淡。'},
      {key:'vitamin_c', name:'维生素C', kcal:0, intake:28, recommend:'60–100', unit:'mg', status:'low', tip:'维C偏少，下午可加一份水果。'},
    ],
  },
};

function getDietDailyNutrientData(dateKey){
  const raw = DIET_DAILY_NUTRIENTS[dateKey] || DIET_DAILY_NUTRIENTS['今天'];
  const rowMap = {};
  raw.rows.forEach((row)=>{ rowMap[row.key] = row; });
  return {
    ring: raw.ring.map((item)=>({
      ...item,
      kcal: rowMap[item.key] ? rowMap[item.key].kcal : 0,
    })),
    rows: raw.rows,
  };
}

function dietDayMacrosBalanced(dateKey){
  const data = DIET_DAILY_NUTRIENTS[dateKey];
  if(!data) return false;
  return ['carb', 'protein', 'fat'].every((key)=>{
    const row = data.rows.find((item)=> item.key === key);
    return row && row.status === 'ok';
  });
}

DIET_TARGET_DAYS.forEach((day)=>{
  day.met = dietDayMacrosBalanced(day.date);
});

function dietNutrientStatusIcon(status){
  if(status === 'ok') return '✓';
  if(status === 'high') return '↑';
  return '↓';
}

function DietNutrientComposeBar({ring}){
  if(!ring || !ring.length) return null;
  return (
    <div className="review-nutrient-compose" aria-label="热量构成">
      <div className="review-nutrient-compose-bar" role="img" aria-label="三大营养素热量占比">
        {ring.map((item)=>(
          <span
            key={item.key}
            className="review-nutrient-compose-seg"
            style={{flex: item.pct + ' 1 0%', background: item.color}}
          />
        ))}
      </div>
      <div className="review-nutrient-compose-legend">
        {ring.map((item)=>{
          const pct = Math.round(item.pct * 100);
          const short = item.label.length > 3 ? item.label.slice(0, 2) : item.label;
          return (
            <div className="review-nutrient-compose-item" key={item.key}>
              <span className="review-nutrient-compose-dot" style={{background:item.color}} aria-hidden="true"></span>
              <span className="review-nutrient-compose-name">{short}</span>
              <span className="review-nutrient-compose-meta">{pct}% · {item.kcal} kcal</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DietNutrientAnalysisSection({data}){
  if(!data) return null;
  const rowMap = {};
  data.rows.forEach((row)=>{ rowMap[row.key] = row; });
  const listRows = data.ring.map((item)=> rowMap[item.key]).filter(Boolean);
  return (
    <div className="review-nutrient-section">
      <div className="review-nutrient-head">
        <div className="review-nutrient-title-wrap">
          <span className="review-nutrient-title">关键营养素分析</span>
          <span className="review-card-more-badge">VIP</span>
        </div>
      </div>

      <DietNutrientComposeBar ring={data.ring}/>

      <div className="review-nutrient-list" aria-label="关键营养素摄入明细">
        {listRows.map((row)=>{
          const color = DIET_NUTRIENT_COLORS[row.key] || '#ccc';
          const unit = row.unit || 'g';
          const intakeText = typeof row.intake === 'number' && row.intake % 1 !== 0
            ? row.intake.toFixed(1)
            : String(row.intake);
          return (
            <div className="review-nutrient-item" key={row.key}>
              <div className="review-nutrient-item-main">
                <span className="review-nutrient-item-name">
                  <i style={{background:color}} aria-hidden="true"></i>
                  {row.name}
                </span>
                <span className={'review-nutrient-item-value is-' + row.status}>
                  <b>{intakeText}{unit}</b>
                  <em aria-hidden="true">{dietNutrientStatusIcon(row.status)}</em>
                </span>
                <span className="review-nutrient-item-rec">{row.recommend}{unit}</span>
              </div>
              <p className="review-nutrient-item-tip">{row.tip}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DietDailyIntakePanel({day}){
  const intakeRatio = day.goal > 0 ? Math.min(day.intake / day.goal, 1) : 0;
  const percent = day.empty ? 0 : Math.round((day.intake / day.goal) * 100);
  const ringColor = day.over ? '#ff9500' : '#ff4d88';
  const trackColor = day.over ? 'rgba(255,149,0,0.14)' : '#fce6ee';
  const remainOrOver = day.over ? (day.intake - day.goal) : day.remain;
  return (
    <div className={'review-diet-daily-intake' + (day.over ? ' is-over' : '')}>
      <div className="review-diet-daily-intake-ring">
        <DietTargetRing ratio={intakeRatio} size={64} stroke={6} color={ringColor} track={trackColor}/>
        <div className="review-diet-daily-intake-pct">{percent}%</div>
      </div>
      <div className="review-diet-daily-intake-meta">
        <div className="review-diet-daily-intake-lbl">今日已摄入</div>
        <div className="review-diet-daily-intake-val">
          {day.empty ? 0 : day.intake}
          <span>/ {day.goal} kcal</span>
        </div>
        <div className="review-diet-daily-intake-remain">
          {day.over ? '已超出 ' : '还可以吃 '}
          <b>{remainOrOver}</b>
          {' kcal'}
        </div>
      </div>
    </div>
  );
}

function DietDailyWeekStrip({selectedIndex, onSelect}){
  return (
    <div className="review-diet-daily-week" aria-label="近7天热量达标圆环">
      {DIET_TARGET_DAYS.map((day, index)=>(
        <button
          type="button"
          key={day.date}
          className={'review-diet-daily-day' + (index === selectedIndex ? ' is-selected' : '') + (day.highlight ? ' is-today' : '') + (day.empty ? ' is-empty' : '') + (day.over ? ' is-over' : '') + (day.met ? ' is-met' : '')}
          aria-label={day.date + (day.over ? ' 超量' : day.met ? ' 营养均衡' : '')}
          onClick={()=>onSelect(index)}
        >
          <span className="review-diet-daily-day-num">{day.date}</span>
          <span className="review-diet-daily-ring-wrap">
            <DietTargetRing
              ratio={day.empty ? 0 : Math.min(day.ratio, 1)}
              size={28}
              stroke={3}
              color={day.over ? '#ff9500' : '#ff8fb3'}
              track={day.over ? 'rgba(255,149,0,0.16)' : '#f0f0f2'}
            />
            {day.met ? <span className="review-diet-daily-star" aria-hidden="true">★</span> : null}
          </span>
        </button>
      ))}
    </div>
  );
}

function DietDailyReportCard(){
  const [selectedIndex, setSelectedIndex] = useState(DIET_TARGET_DAYS.length - 1);
  const selected = DIET_TARGET_DAYS[selectedIndex] || DIET_TARGET_DAYS[DIET_TARGET_DAYS.length - 1];
  const nutrientData = getDietDailyNutrientData(selected.date);
  return (
    <div className="review-detail-card review-diet-daily-card">
      <div className="review-diet-daily-head">
        <span className="review-diet-daily-icon is-diet" aria-hidden="true"><ReviewDietIcon/></span>
        <div className="review-diet-daily-head-copy">
          <div className="review-diet-daily-title">饮食日报</div>
          <div className="review-diet-daily-sub">{DIET_DAILY_WEEK_LABEL}</div>
        </div>
      </div>

      <DietDailyWeekStrip selectedIndex={selectedIndex} onSelect={setSelectedIndex}/>
      <DietDailyIntakePanel day={selected}/>

      <div className="review-diet-daily-divider" aria-hidden="true"></div>

      <DietNutrientAnalysisSection data={nutrientData}/>
    </div>
  );
}

function DietWeeklyAnalysisCard(){
  return (
    <div className="review-detail-card review-diet-weekly-card">
      <div className="review-diet-weekly-head">
        <div className="review-diet-weekly-title-wrap">
          <div className="review-diet-weekly-title">周饮食分析</div>
          <span className="review-card-more-badge">VIP</span>
        </div>
      </div>
      <div className="review-chart review-detail-chart">
        <DietMealStackedChart days={DIET_STACK_DAYS} ariaLabel="近7天热量分布堆叠柱状图"/>
      </div>
      <div className="review-legend"><DietMealLegend/></div>

      <div className="review-diet-weekly-divider" aria-hidden="true"></div>

      <div className="review-insight-body">
        <div className="review-insight-item is-good">
          <span className="review-insight-dot"></span>
          <div>
            <div className="review-insight-title">整体摄入：中高偏稳</div>
            <div className="review-insight-text">近 30 天有记录日日均约 <b>{DIET_CARD_AVG} kcal</b>，较上月{DIET_CARD_DELTA >= 0 ? '略升' : '略降'} <b>{Math.abs(DIET_CARD_DELTA)} kcal</b>。多数天数落在均衡参考区间内，波动不算大。</div>
          </div>
        </div>
        <div className="review-insight-item is-note">
          <span className="review-insight-dot"></span>
          <div>
            <div className="review-insight-title">最突出：午餐和晚餐占比偏高</div>
            <div className="review-insight-text">按餐次拆开后，午餐+晚餐合计大约占全天热量的 <b>65%-75%</b>。早餐偶有缺记，加餐和饮品则比较零散，这会让「傍晚后半段」更容易推高当日总量。</div>
          </div>
        </div>
        <div className="review-insight-item is-good">
          <span className="review-insight-dot"></span>
          <div>
            <div className="review-insight-title">记录习惯：覆盖率不错</div>
            <div className="review-insight-text">近 30 天记录了 <b>{DIET_CARD_RECORD_DAYS}</b> 天，连续记录能让餐次比例判断更可靠，也更容易看出「某几天突然冲高」是不是偶发。</div>
          </div>
        </div>
        <div className="review-insight-item is-note">
          <span className="review-insight-dot"></span>
          <div>
            <div className="review-insight-title">值得留意：周末更容易冲高</div>
            <div className="review-insight-text">样本里周末若干天更容易出现 <b>1900+</b> 的峰值，常常伴随着晚餐更高、或加餐/饮品叠加上去。如果目标更看重「稳」，周末的晚餐分量比早餐更值得先调。</div>
          </div>
        </div>
        <div className="review-insight-summary">
          <div className="review-summary-head">总结</div>
          <p className="review-summary-text">总体看，你最近的热量摄入并不失控，结构上更依赖午晚两餐。若想更贴合热量目标，优先把周末晚餐和加餐压一点，并尽量补齐早餐记录，波动会更可控。这是对记录的解读，不是营养处方。</p>
        </div>
      </div>
    </div>
  );
}

function DietDistributionDetailPage({open, onClose}){
  return (
    <section className={'review-cycle-detail is-fullscreen-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="饮食详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">饮食</span>
      </div>
      <div className="review-detail-content">
        <DietDailyReportCard/>
        <DietWeeklyAnalysisCard/>
      </div>
    </section>
  );
}

function DietMonthCalendar(){
  const cells = [];
  for(let i = 0; i < DIET_CALENDAR_START_WEEKDAY; i++){
    cells.push({key:'pad-' + i, empty:true});
  }
  for(let day = 1; day <= DIET_CALENDAR_DAYS_IN_MONTH; day++){
    const hasPhoto = DIET_CALENDAR_PHOTO_DAYS.has(day);
    cells.push({
      key:'day-' + day,
      day,
      photo: hasPhoto ? DIET_REVIEW_PHOTOS[(day - 1) % DIET_REVIEW_PHOTOS.length] : null,
    });
  }
  return (
    <div className="review-diet-calendar" aria-label={DIET_CALENDAR_YEAR + '年' + DIET_CALENDAR_MONTH + '月饮食日历'}>
      <div className="review-diet-calendar-weekdays">
        {DIET_CALENDAR_WEEKDAYS.map((label)=>(
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="review-diet-calendar-grid">
        {cells.map((cell)=> cell.empty ? (
          <div className="review-diet-calendar-cell is-pad" key={cell.key} aria-hidden="true"></div>
        ) : (
          <div className={'review-diet-calendar-cell' + (cell.photo ? ' has-photo' : ' is-empty')} key={cell.key}>
            {cell.photo ? <img src={cell.photo} alt="" loading="lazy"/> : null}
            <span className="review-diet-calendar-day">{cell.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DietTargetRing({ratio, size=96, stroke=8, color='#ff4d88', track='#fce6ee'}){
  const capped = Math.max(0, Math.min(ratio, 1));
  const r = (size / 2) - stroke;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - capped);
  return (
    <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size} aria-hidden="true">
      <g transform={'rotate(-90 ' + (size / 2) + ' ' + (size / 2) + ')'}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
        {capped > 0 ? (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        ) : null}
      </g>
    </svg>
  );
}

function DietTargetChart({selectedIndex, onSelect}){
  const selected = DIET_TARGET_DAYS[selectedIndex] || DIET_TARGET_DAYS[DIET_TARGET_DAYS.length - 1];
  const ringColor = selected.over ? '#ff9500' : '#ff4d88';
  const trackColor = selected.over ? 'rgba(255,149,0,0.14)' : '#fce6ee';
  const intakeRatio = selected.goal > 0 ? Math.min(selected.intake / selected.goal, 1) : 0;
  const percent = Math.round((selected.intake / selected.goal) * 100);
  const remainOrOver = selected.over ? (selected.intake - selected.goal) : selected.remain;
  return (
    <div className="review-diet-target">
      <div className="review-diet-days-strip-wrap">
        <div className="review-diet-days-strip">
          {DIET_TARGET_DAYS.map((day, index)=>(
            <button
              type="button"
              key={day.date}
              className={'review-diet-day-tile' + (index === selectedIndex ? ' is-selected' : '') + (day.highlight ? ' is-today' : '') + (day.empty ? ' is-empty' : '') + (day.over ? ' is-over' : '')}
              onClick={(event)=>{
                event.stopPropagation();
                onSelect(index);
              }}
            >
              <span className="review-diet-mini-ring">
                <DietTargetRing
                  ratio={day.empty ? 0 : day.ratio}
                  size={28}
                  stroke={3}
                  color={day.over ? '#ff9500' : '#ff8fb3'}
                  track={day.over ? 'rgba(255,149,0,0.16)' : '#f0f0f2'}
                />
              </span>
              <span className="review-diet-day-date">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="review-diet-target-detail is-intake">
        <div className="review-diet-big-ring">
          <DietTargetRing ratio={intakeRatio} size={104} stroke={10} color={ringColor} track={trackColor}/>
          <div className={'review-diet-big-ring-center is-percent' + (selected.over ? ' is-over' : '')}>{percent}%</div>
        </div>
        <div className="review-diet-target-info">
          <div className="review-diet-target-label">已摄入</div>
          <div className="review-diet-target-value">
            <b>{selected.intake}</b>
            <span>/ {selected.goal} kcal</span>
          </div>
          <div className="review-diet-target-desc">
            {selected.over ? '已超出 ' : '还可以吃 '}
            <b>{remainOrOver}</b>
            {' kcal'}
          </div>
        </div>
      </div>
    </div>
  );
}

function DietPhotoWallCard(){
  return (
    <ReviewCard
      title="饮食图集"
      iconClass="is-diet-photo"
      icon={<ReviewDietPhotoIcon/>}
      chart={<DietMonthCalendar/>}
    />
  );
}

function DietTargetCard(){
  const [selectedIndex, setSelectedIndex] = useState(DIET_TARGET_DAYS.length - 1);
  return (
    <ReviewCard
      title="热量目标"
      iconClass="is-diet-target"
      icon={<ReviewDietTargetIcon/>}
      headAction={<DietBudgetHeadAction goal={DIET_TARGET_GOAL}/>}
      chart={<DietTargetChart selectedIndex={selectedIndex} onSelect={setSelectedIndex}/>}
      metrics={(
        <>
          <ReviewMetric value="18" unit="/30天" label="本月记录天数"/>
          <ReviewMetric value="6" unit="天" label="超量"/>
          <ReviewMetric value="12" unit="天" label="达标"/>
        </>
      )}
      more="查看完整热量目标"
    />
  );
}

const MOOD_AXIS_LABELS = ['很消极', '偏消极', '中性', '偏积极', '很积极'];
const MOOD_WORD_BY_LEVEL = ['好伤心', '不开心', '中性', '挺开心', '超开心'];
const MOOD_MONTH_VALS = [3,4,3,2,3,4,3,4,3,3,4,3,2,4,3,4,4,3,4,4,3,4,4,3,4,5,4,4,4,4];
const MOOD_CYCLE_VALS = [3,4,3,2,3,4,3,4,3,3,4,3,2,4,3,4,4,3,4,4,3,4,4,3,4,5,4,4];
const MOOD_TODAY_PTS = [
  {time:'08:30', label:'兴奋', level:5, face:'🤩', via:'语音'},
  {time:'13:10', label:'中性', level:3, face:'😐', via:'快捷'},
  {time:'18:45', label:'挺开心', level:4, face:'😊', via:'文字'},
];

function buildMoodYearSeries(count = 365){
  let seed = 20260722;
  const rnd = ()=>{
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const today = new Date(2026, 6, 13);
  const vals = [];
  const dates = [];
  for(let i = count - 1; i >= 0; i--){
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const month = d.getMonth();
    // 夏秋略偏积极，冬春略低；整体仅轻微向好
    const seasonal = (month >= 4 && month <= 8) ? 0.3 : -0.15;
    const progress = ((count - 1 - i) / (count - 1)) * 0.35;
    const wave = Math.sin((count - 1 - i) / 18) * 0.3;
    const v = Math.max(1, Math.min(5, Math.round(3.05 + progress + seasonal + wave + (rnd() - 0.5) * 1.6)));
    vals.push(v);
    dates.push(i === 0 ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate()));
  }
  const xLabels = {};
  [0, 0.25, 0.5, 0.75, 1].forEach(t=>{
    const i = Math.round((count - 1) * t);
    if(i === count - 1){
      xLabels[i] = '今天';
      return;
    }
    const d = new Date(today);
    d.setDate(today.getDate() - (count - 1 - i));
    xLabels[i] = String(d.getFullYear()).slice(2) + '.' + (d.getMonth() + 1);
  });
  return {vals, dates, xLabels};
}

const MOOD_YEAR_SERIES = buildMoodYearSeries(365);
const MOOD_YEAR_VALS = MOOD_YEAR_SERIES.vals;
const MOOD_YEAR_DATES = MOOD_YEAR_SERIES.dates;
const MOOD_YEAR_XLABELS = MOOD_YEAR_SERIES.xLabels;

function moodWordFromAvg(avg){
  const level = Math.max(1, Math.min(5, Math.round(avg)));
  return MOOD_WORD_BY_LEVEL[level - 1];
}

function moodColorAtLevel(v){
  // 1消极红 → 3中性蓝 → 5积极黄（详情页五档）
  const t = Math.max(0, Math.min(1, (v - 1) / 4));
  const stops = [
    {t:0, c:[255,107,107]},   // #FF6B6B 消极
    {t:0.5, c:[127,176,236]}, // #7FB0EC 中性
    {t:1, c:[255,179,71]},    // #FFB347 积极
  ];
  let a = stops[0], b = stops[stops.length - 1];
  for(let i = 0; i < stops.length - 1; i++){
    if(t >= stops[i].t && t <= stops[i + 1].t){ a = stops[i]; b = stops[i + 1]; break; }
  }
  const span = (b.t - a.t) || 1;
  const u = (t - a.t) / span;
  const r = Math.round(a.c[0] + (b.c[0] - a.c[0]) * u);
  const g = Math.round(a.c[1] + (b.c[1] - a.c[1]) * u);
  const bl = Math.round(a.c[2] + (b.c[2] - a.c[2]) * u);
  return 'rgb(' + r + ',' + g + ',' + bl + ')';
}

// 回顾/内页三档：消极40% / 中性20% / 积极40%；再亮一点、略浓一点
const MOOD_TRI_NEG = '#FF9EB0';
const MOOD_TRI_NEU = '#FFD966';
const MOOD_TRI_POS = '#8EC4F8';
const MOOD_TRI_AXIS = [
  {label:'消极', t:0.2},
  {label:'中性', t:0.5},
  {label:'积极', t:0.8},
];

function moodTriFraction(v){
  const x = Math.max(1, Math.min(5, v));
  if(x <= 2.5) return ((x - 1) / 1.5) * 0.4;
  if(x <= 3.5) return 0.4 + ((x - 2.5) / 1) * 0.2;
  return 0.6 + ((x - 3.5) / 1.5) * 0.4;
}

function moodColorAtTri(v){
  if(v > 3.5) return MOOD_TRI_POS;
  if(v < 2.5) return MOOD_TRI_NEG;
  return MOOD_TRI_NEU;
}

function collectMoodDotIndexes(vals, step = 2){
  const n = vals.length;
  const idx = new Set();
  if(!n) return idx;
  const stride = Math.max(1, step);
  for(let i = 0; i < n; i += stride) idx.add(i);
  idx.add(0);
  idx.add(n - 1);
  for(let i = 1; i < n - 1; i++){
    const a = vals[i] - vals[i - 1];
    const b = vals[i + 1] - vals[i];
    if(a === 0 && b === 0) continue;
    // 拐点：方向改变 / 局部峰谷 / 平台边缘
    if(a * b < 0) idx.add(i);
    else if(a === 0 || b === 0) idx.add(i);
    else if(Math.abs(a) >= 1 && Math.abs(b - a) >= 1) idx.add(i);
  }
  return idx;
}

function moodTriGradientStops(y0, y1, id, fill){
  // 自上而下：淡蓝 → 暖黄 → 柔粉，保留柔和过渡
  if(fill){
    return (
      <linearGradient id={id} x1="0" y1={y0} x2="0" y2={y1} gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={MOOD_TRI_POS} stopOpacity="0.06"/>
        <stop offset="0.45" stopColor={MOOD_TRI_NEU} stopOpacity="0.035"/>
        <stop offset="1" stopColor={MOOD_TRI_NEG} stopOpacity="0.02"/>
      </linearGradient>
    );
  }
  return (
    <linearGradient id={id} x1="0" y1={y0} x2="0" y2={y1} gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor={MOOD_TRI_POS}/>
      <stop offset="0.28" stopColor={MOOD_TRI_POS}/>
      <stop offset="0.42" stopColor="#B8C988"/>
      <stop offset="0.5" stopColor={MOOD_TRI_NEU}/>
      <stop offset="0.58" stopColor="#EFB58A"/>
      <stop offset="0.72" stopColor={MOOD_TRI_NEG}/>
      <stop offset="1" stopColor={MOOD_TRI_NEG}/>
    </linearGradient>
  );
}

function buildMoodMonthDates(count = 30){
  const today = new Date(2026, 6, 13); // 与饮食卡对齐：2026-07-13
  const dates = [];
  for(let i = count - 1; i >= 0; i--){
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(i === 0 ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate()));
  }
  return dates;
}

const MOOD_MONTH_DATES = buildMoodMonthDates(MOOD_MONTH_VALS.length);
const MOOD_CYCLE_DATES = buildMoodMonthDates(MOOD_CYCLE_VALS.length);

function buildMoodCyclePhases(dayCount){
  const phases = [];
  for(let i = 0; i < dayCount; i++){
    const d = i + 1;
    if(d <= 5) phases.push('menstrual');
    else if(d <= 13) phases.push('follicular');
    else if(d === 14) phases.push('ovulationDay');
    else if(d <= 17) phases.push('ovulation');
    else phases.push('luteal');
  }
  return phases;
}

const MOOD_CYCLE_PHASES = buildMoodCyclePhases(MOOD_CYCLE_VALS.length);

function moodPhaseBandFill(phase){
  const map = {
    menstrual: 'rgba(255, 77, 136, 0.05)',
    follicular: 'rgba(0, 204, 153, 0.04)',
    luteal: 'rgba(0, 204, 153, 0.04)',
    ovulation: 'rgba(179, 136, 232, 0.06)',
    ovulationDay: 'rgba(179, 136, 232, 0.10)',
  };
  return map[phase] || 'transparent';
}

function buildMoodAllRecords(count = 120){
  let seed = 20260721;
  const rnd = ()=>{
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const today = new Date(2026, 6, 13);
  const records = [];
  for(let daysAgo = count - 1; daysAgo >= 0; daysAgo--){
    const d = new Date(today);
    d.setDate(today.getDate() - daysAgo);
    const date = daysAgo === 0 ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate());
    let level;
    if(daysAgo < MOOD_MONTH_VALS.length){
      level = MOOD_MONTH_VALS[MOOD_MONTH_VALS.length - 1 - daysAgo];
    } else {
      const progress = 1 - daysAgo / count;
      level = Math.max(1, Math.min(5, Math.round(2.9 + progress * 0.45 + rnd() * 1.5 + (rnd() < 0.08 ? -1 : 0))));
    }
    records.push({date, level});
  }
  return records;
}

const MOOD_ALL_RECORDS = buildMoodAllRecords(120);

function MoodLineChart({
  vals = MOOD_MONTH_VALS,
  dates = MOOD_MONTH_DATES,
  xLabels,
  height = 168,
  gradientId = 'moodGrad',
  showDots = false,
  dotStep = 1,
  markToday = false,
  phaseBands = null,
  compact = false,
  triScale = false,
  showTrend = true,
  ariaLabel = '本月心情波动折线图',
}){
  const n = vals.length;
  const W = 340, H = height;
  const padL = compact ? 40 : (triScale ? 36 : 48);
  const padR = compact ? 10 : 12;
  const padT = compact ? 10 : 14;
  const padB = (xLabels || dates) ? (compact ? 20 : 24) : 16;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  const X = i => x0 + (n <= 1 ? 0 : (x1 - x0) * (i / (n - 1)));
  const Y = v => triScale
    ? (y1 - moodTriFraction(v) * plotH)
    : (y1 - ((v - 1) / 4) * plotH);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  const path = reviewSmoothPath(pts);
  const area = path
    ? path + ' L' + pts[pts.length - 1][0].toFixed(1) + ' ' + y1.toFixed(1)
      + ' L' + pts[0][0].toFixed(1) + ' ' + y1.toFixed(1) + ' Z'
    : '';
  const last = pts[pts.length - 1];
  const lastVal = vals[n - 1];
  const lastColor = triScale ? moodColorAtTri(lastVal) : moodColorAtLevel(lastVal);
  const strokeW = compact ? 1.9 : (triScale ? 2.6 : 2.6);
  const axisLabels = xLabels || (()=>{
    if(!dates || !dates.length) return null;
    const marks = [0, Math.round((n - 1) * 0.42), Math.round((n - 1) * 0.76), n - 1]
      .filter((v, i, arr)=>arr.indexOf(v) === i);
    const map = {};
    marks.forEach(i=>{ map[i] = dates[i]; });
    return map;
  })();
  const yLevels = compact ? [1, 3, 5] : [1, 2, 3, 4, 5];
  const colorAt = triScale ? moodColorAtTri : moodColorAtLevel;
  const step = Math.max(1, dotStep);
  const dotIndexes = showDots ? collectMoodDotIndexes(vals, step) : null;
  const dotR = compact ? 1.6 : (triScale ? 1.9 : 2.2);
  const lastR = compact ? 2.2 : (triScale ? 2.6 : 3.2);
  let trendA = 0;
  let trendB = 0;
  if(showTrend && n >= 2){
    const sx = vals.reduce((s, _v, i)=>s + i, 0);
    const sy = vals.reduce((s, v)=>s + v, 0);
    const sxy = vals.reduce((s, v, i)=>s + i * v, 0);
    const sxx = vals.reduce((s, _v, i)=>s + i * i, 0);
    const denom = n * sxx - sx * sx;
    trendB = denom ? (n * sxy - sx * sy) / denom : 0;
    trendA = (sy - trendB * sx) / n;
  }

  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      <defs>
        {triScale ? (
          <>
            {moodTriGradientStops(y0, y1, gradientId, false)}
            {moodTriGradientStops(y0, y1, gradientId + 'Fill', true)}
          </>
        ) : (
          <>
            <linearGradient id={gradientId} x1="0" y1={y0} x2="0" y2={y1} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFB347"/>
              <stop offset="0.5" stopColor="#7FB0EC"/>
              <stop offset="1" stopColor="#FF6B6B"/>
            </linearGradient>
            <linearGradient id={gradientId + 'Fill'} x1="0" y1={y0} x2="0" y2={y1} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFB347" stopOpacity={compact ? '0.08' : '0.14'}/>
              <stop offset="0.5" stopColor="#7FB0EC" stopOpacity={compact ? '0.04' : '0.08'}/>
              <stop offset="1" stopColor="#FF6B6B" stopOpacity={compact ? '0.02' : '0.04'}/>
            </linearGradient>
          </>
        )}
      </defs>
      {phaseBands && phaseBands.length === n ? vals.map((_, i)=>{
        const xLeft = i === 0 ? x0 : (X(i - 1) + X(i)) / 2;
        const xRight = i === n - 1 ? x1 : (X(i) + X(i + 1)) / 2;
        return (
          <rect
            key={'ph' + i}
            x={xLeft}
            y={y0}
            width={Math.max(0.5, xRight - xLeft)}
            height={plotH}
            fill={moodPhaseBandFill(phaseBands[i])}
          />
        );
      }) : null}
      {triScale ? (
        <>
          {[0.4, 0.6].map(t=>(
            <line
              key={'band' + t}
              x1={x0}
              y1={y1 - t * plotH}
              x2={x1}
              y2={y1 - t * plotH}
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ))}
          {MOOD_TRI_AXIS.map(item=>(
            <text
              key={item.label}
              x={x0 - 4}
              y={y1 - item.t * plotH + 3.5}
              textAnchor="end"
              fontSize="10"
              fill="#bbbbbf"
              fontFamily="PingFang SC"
            >{item.label}</text>
          ))}
        </>
      ) : yLevels.map(level=>{
        const y = Y(level);
        return (
          <React.Fragment key={level}>
            <line x1={x0} y1={y} x2={x1} y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
            <text x={x0 - 4} y={y + 3.5} textAnchor="end" fontSize={compact ? '9' : '10'} fill="#999999" fontFamily="PingFang SC">{MOOD_AXIS_LABELS[level - 1]}</text>
          </React.Fragment>
        );
      })}
      {area ? <path d={area} fill={'url(#' + gradientId + 'Fill)'}/> : null}
      {showTrend && n >= 2 ? (
        <line
          x1={X(0)}
          y1={Math.max(y0, Math.min(y1, Y(trendA)))}
          x2={X(n - 1)}
          y2={Math.max(y0, Math.min(y1, Y(trendA + trendB * (n - 1))))}
          stroke="#c2c2c8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
      ) : null}
      <path d={path} fill="none" stroke={'url(#' + gradientId + ')'} strokeWidth={strokeW} strokeLinejoin="round" strokeLinecap="round"/>
      {showDots && dotIndexes ? pts.map((p, i)=>{
        if(markToday && i === n - 1) return null;
        if(!dotIndexes.has(i)) return null;
        return (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={dotR}
            fill={colorAt(vals[i])}
            opacity="0.92"
          />
        );
      }) : null}
      {last && markToday && !compact ? (
        <circle cx={last[0]} cy={last[1]} r={lastR} fill={lastColor}/>
      ) : last && !compact ? (
        <circle cx={last[0]} cy={last[1]} r={dotR} fill={lastColor}/>
      ) : last && compact ? (
        <circle cx={last[0]} cy={last[1]} r={lastR} fill={lastColor}/>
      ) : null}
      {axisLabels ? Object.keys(axisLabels).map(k=>(
        <text
          key={k}
          x={X(+k)}
          y={H - 4}
          textAnchor="middle"
          fontSize={compact ? '9' : '10'}
          fill="#bbbbbf"
          fontFamily="PingFang SC"
        >{axisLabels[k]}</text>
      )) : null}
    </svg>
  );
}

function buildMoodYearWeeklyVals(dailyVals){
  const out = [];
  for(let i = 0; i < dailyVals.length; i += 7){
    const slice = dailyVals.slice(i, Math.min(i + 7, dailyVals.length));
    const avg = slice.reduce((s, v)=>s + v, 0) / slice.length;
    out.push(Math.round(avg * 10) / 10);
  }
  return out;
}

const MOOD_YEAR_WEEK_VALS = buildMoodYearWeeklyVals(MOOD_YEAR_VALS);
const MOOD_YEAR_WEEK_XLABELS = (()=>{
  const n = MOOD_YEAR_WEEK_VALS.length;
  const map = {};
  const keys = [0, Math.round((n - 1) * 0.25), Math.round((n - 1) * 0.5), Math.round((n - 1) * 0.75), n - 1];
  const labels = ['25.7', '25.10', '26.1', '26.4', '今天'];
  keys.forEach((k, i)=>{ map[k] = labels[i]; });
  return map;
})();

function MoodBarChart({vals = MOOD_MONTH_VALS, height = 150, ariaLabel = '本月心情柱状图'}){
  const n = vals.length;
  const W = 340, H = height;
  const padL = 48, padR = 12, padT = 14, padB = 16;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const band = (x1 - x0) / n;
  const gap = band * 0.28;
  const bw = Math.max(2, band - gap);
  const Y = v => y1 - ((v - 1) / 4) * (y1 - y0);
  const colorOf = v => (v >= 4 ? '#FFB347' : v >= 3 ? '#7FB0EC' : '#FF6B6B');
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      {[1,3,5].map(level=>{
        const y = Y(level);
        return (
          <React.Fragment key={level}>
            <line x1={x0} y1={y} x2={x1} y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
            <text x={x0 - 4} y={y + 3.5} textAnchor="end" fontSize="10" fill="#999999" fontFamily="PingFang SC">{MOOD_AXIS_LABELS[level - 1]}</text>
          </React.Fragment>
        );
      })}
      {vals.map((v, i)=>{
        const x = x0 + i * band + gap / 2;
        const yTop = Y(v);
        const h = Math.max(4, y1 - yTop);
        return <rect key={i} x={x} y={yTop} width={bw} height={h} rx="2" fill={colorOf(v)}/>;
      })}
    </svg>
  );
}

const MOOD_PHASE_DIST = [
  {label:'月经期', pos:2, neu:1, neg:2},
  {label:'卵泡期', pos:4, neu:0, neg:0},
  {label:'排卵期', pos:4, neu:1, neg:2},
  {label:'黄体期', pos:2, neu:0, neg:2},
];
const MOOD_PHASE_COLORS = {
  pos:MOOD_TRI_POS,
  neu:MOOD_TRI_NEU,
  neg:MOOD_TRI_NEG,
  miss:'#D8D8DE',
};
const MOOD_PHASE_LEGEND = [
  {key:'pos', label:'积极', color:MOOD_PHASE_COLORS.pos},
  {key:'neu', label:'中性', color:MOOD_PHASE_COLORS.neu},
  {key:'neg', label:'消极', color:MOOD_PHASE_COLORS.neg},
  {key:'miss', label:'未记录', color:MOOD_PHASE_COLORS.miss},
];

function MoodPhaseStackChart(){
  const W = 340, H = 196;
  const padL = 44, padR = 12, padT = 12, padB = 28;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  const items = MOOD_PHASE_DIST;
  const maxTotal = Math.max(1, ...items.map(d=>d.pos + d.neu + d.neg));
  const maxY = Math.max(6, Math.ceil(maxTotal / 2) * 2);
  const n = items.length;
  const band = (x1 - x0) / n;
  const bw = Math.max(28, band * 0.42);
  const Y = v => y1 - (Math.max(0, Math.min(maxY, v)) / maxY) * plotH;
  const ticks = [];
  for(let t = 0; t <= maxY; t += 2) ticks.push(t);
  const yMid = (y0 + y1) / 2;
  return (
    <div className="review-mood-phase-chart">
      <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="按周期阶段心情分布">
        <defs>
          {items.map((col, i)=>{
            const total = col.pos + col.neu + col.neg;
            const x = x0 + i * band + (band - bw) / 2;
            const h = Math.max(0, y1 - Y(total));
            return (
              <clipPath key={'clip' + i} id={'moodPhaseClip' + i}>
                <rect x={x} y={Y(total)} width={bw} height={Math.max(1, h)} rx="10" ry="10"/>
              </clipPath>
            );
          })}
        </defs>
        <text
          x="12"
          y={yMid}
          textAnchor="middle"
          fontSize="10"
          fill="#999999"
          fontFamily="PingFang SC"
          transform={'rotate(-90 12 ' + yMid + ')'}
        >记录次数</text>
        {ticks.map(tick=>{
          const y = Y(tick);
          return (
            <React.Fragment key={tick}>
              <line x1={x0} y1={y} x2={x1} y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
              <text x={x0 - 6} y={y + 3.5} textAnchor="end" fontSize="10" fill="#999999" fontFamily="PingFang SC">{tick}</text>
            </React.Fragment>
          );
        })}
        <line x1={x0} y1={y0} x2={x0} y2={y1} stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
        <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
        {items.map((col, i)=>{
          const x = x0 + i * band + (band - bw) / 2;
          // 自下而上：消极 → 中性 → 积极
          const order = [
            {key:'neg', count:col.neg, color:MOOD_PHASE_COLORS.neg},
            {key:'neu', count:col.neu, color:MOOD_PHASE_COLORS.neu},
            {key:'pos', count:col.pos, color:MOOD_PHASE_COLORS.pos},
          ].filter(s=>s.count > 0);
          let cursor = 0;
          return (
            <g key={col.label}>
              <g clipPath={'url(#moodPhaseClip' + i + ')'}>
                {order.map(seg=>{
                  const yBottom = Y(cursor);
                  cursor += seg.count;
                  const yTop = Y(cursor);
                  const h = Math.max(0.5, yBottom - yTop);
                  return (
                    <rect
                      key={seg.key}
                      x={x}
                      y={yTop}
                      width={bw}
                      height={h}
                      fill={seg.color}
                    />
                  );
                })}
              </g>
              {(()=>{
                let base = 0;
                return order.map(seg=>{
                  const yBottom = Y(base);
                  base += seg.count;
                  const yTop = Y(base);
                  const h = yBottom - yTop;
                  if(h < 12) return null;
                  return (
                    <text
                      key={'lbl' + seg.key}
                      x={x + bw / 2}
                      y={yTop + h / 2 + 4}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="500"
                      fill="#fff"
                      fontFamily="PingFang SC"
                    >{seg.count}</text>
                  );
                });
              })()}
              <text
                x={x + bw / 2}
                y={H - 8}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(0,0,0,0.55)"
                fontFamily="PingFang SC"
              >{col.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="review-mood-phase-stack-legend" aria-hidden="true">
        {MOOD_PHASE_LEGEND.map(it=>(
          <span key={it.key}><i style={{background:it.color}}/>{it.label}</span>
        ))}
      </div>
    </div>
  );
}

function moodCapsuleTone(level){
  return moodColorAtTri(level);
}

function buildMoodCapsuleRanges(vals){
  let seed = 20260722;
  const rnd = ()=>{
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return vals.map(v=>{
    const spread = 0.35 + rnd() * 0.9;
    const low = Math.max(1, v - spread);
    const high = Math.min(5, v + spread);
    let avg = v + (rnd() - 0.5) * 0.25;
    avg = Math.max(low + 0.1, Math.min(high - 0.1, avg));
    return {low, high, avg};
  });
}

function MoodCapsuleRangeChart({
  vals = MOOD_CYCLE_VALS,
  dates = MOOD_CYCLE_DATES,
  phaseBands = MOOD_CYCLE_PHASES,
  dayCount = 7,
  height = 168,
  ariaLabel = '近7天心情胶囊分布',
}){
  const sliceFrom = Math.max(0, vals.length - dayCount);
  const viewVals = vals.slice(sliceFrom);
  const viewDates = dates ? dates.slice(sliceFrom) : null;
  const viewPhases = phaseBands ? phaseBands.slice(sliceFrom) : null;
  const ranges = React.useMemo(()=>buildMoodCapsuleRanges(viewVals), [viewVals.join(',')]);
  const n = viewVals.length;
  const W = 340, H = height;
  const padL = 36, padR = 16, padT = 14, padB = 24;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  // 7 天分散排布，两侧留白更宽
  const X = i => x0 + (n <= 1 ? (x1 - x0) / 2 : (x1 - x0) * ((i + 0.5) / n));
  const Y = v => y1 - moodTriFraction(v) * plotH;
  const bandW = n <= 1 ? (x1 - x0) : (x1 - x0) / n;

  return (
    <svg className="review-mood-capsule-chart" viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      {viewPhases && viewPhases.length === n ? viewVals.map((_, i)=>{
        const xLeft = X(i) - bandW / 2;
        return (
          <rect
            key={'ph' + i}
            x={xLeft}
            y={y0}
            width={bandW}
            height={plotH}
            fill={moodPhaseBandFill(viewPhases[i])}
          />
        );
      }) : null}
      {[0.4, 0.6].map(t=>(
        <line
          key={'band' + t}
          x1={x0}
          y1={y1 - t * plotH}
          x2={x1}
          y2={y1 - t * plotH}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}
      {MOOD_TRI_AXIS.map(item=>(
        <text
          key={item.label}
          x={x0 - 4}
          y={y1 - item.t * plotH + 3.5}
          textAnchor="end"
          fontSize="10"
          fill="#bbbbbf"
          fontFamily="PingFang SC"
        >{item.label}</text>
      ))}
      {ranges.map((item, i)=>{
        const cx = X(i);
        const yHi = Y(item.high);
        const yLo = Y(item.low);
        const yAvg = Y(item.avg);
        const tone = moodCapsuleTone(item.avg);
        return (
          <g key={i}>
            <line x1={cx} y1={yHi} x2={cx} y2={yLo} stroke={tone} strokeWidth="6" strokeLinecap="round" opacity="0.45"/>
            <circle cx={cx} cy={yHi} r="3.4" fill={tone}/>
            <circle cx={cx} cy={yLo} r="3.4" fill={tone}/>
            <circle cx={cx} cy={yAvg} r="5.5" fill="#fff" stroke={tone} strokeWidth="2.2"/>
          </g>
        );
      })}
      {viewDates ? viewDates.map((d, i)=>(
        <text
          key={i}
          x={X(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize="10"
          fill="#bbbbbf"
          fontFamily="PingFang SC"
        >{d}</text>
      )) : null}
    </svg>
  );
}

const MOOD_LEVEL_STACK_COLORS = [
  {key:'pos', label:'积极', color:MOOD_TRI_POS},
  {key:'neu', label:'中性', color:MOOD_TRI_NEU},
  {key:'neg', label:'消极', color:MOOD_TRI_NEG},
];

const MOOD_TIME_PERIODS = [
  {key:'morning', name:'早晨', range:'6-9时', icon:'sunrise'},
  {key:'am', name:'上午', range:'9-12时', icon:'sun'},
  {key:'pm', name:'下午', range:'12-18时', icon:'cloud'},
  {key:'eve', name:'晚上', range:'18-21时', icon:'moon'},
  {key:'night', name:'夜间', range:'21-6时', icon:'boat'},
];

// 各时段 [积极, 中性, 消极]，合计 100
const MOOD_TIME_GRID_DATA = [
  [72, 18, 10],
  [57, 25, 18],
  [52, 26, 22],
  [42, 18, 40],
  [20, 28, 52],
];

// 按年：全年按时段汇总（示例数据）
const MOOD_TIME_GRID_DATA_YEAR = [
  [68, 20, 12],
  [55, 27, 18],
  [48, 28, 24],
  [38, 22, 40],
  [18, 30, 52],
];

const MOOD_TIME_ROWS = [
  {key:'pos', label:'积极', face:'🤩', bg:'#EAF3FC', hiTone:'pos', hiIndexes:[0]},
  {key:'neu', label:'中性', face:'😐', bg:'#FFF6DD', hiTone:null, hiIndexes:[]},
  {key:'neg', label:'消极', face:'😞', bg:'#FFE8EE', hiTone:'neg', hiIndexes:[3, 4]},
];

function MoodTimePeriodIcon({type}){
  if(type === 'sunrise'){
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 22h20" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 22c2.2-4.8 5.2-7.2 8-7.2S21.8 17.2 24 22" fill="none" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16 10v2.2M10.2 12.4l1.5 1.5M21.8 12.4l-1.5 1.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 25c2.5-1.2 5.5-1.2 8 0s5.5 1.2 8 0 5.5-1.2 8 0" fill="none" stroke="#7EC8E8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  if(type === 'sun'){
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="5.2" fill="none" stroke="#F5A623" strokeWidth="1.7"/>
        <path d="M16 6.5v2.2M16 23.3v2.2M6.5 16h2.2M23.3 16h2.2M9.2 9.2l1.6 1.6M21.2 21.2l1.6 1.6M22.8 9.2l-1.6 1.6M10.8 21.2l-1.6 1.6" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  if(type === 'cloud'){
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="20" cy="12" r="4" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
        <path d="M20 6.8v1.6M24.8 12h1.6M23.4 8.6l1.1 1.1" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9.5 22.5h11.2a3.6 3.6 0 0 0 .4-7.2 5 5 0 0 0-9.6 1.4 3.4 3.4 0 0 0-2 5.8z" fill="none" stroke="#A8B4C4" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    );
  }
  if(type === 'moon'){
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M19.5 8.2a6.8 6.8 0 1 0 4.8 11.8 7.4 7.4 0 1 1-4.8-11.8z" fill="none" stroke="#8FA0C8" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M23.2 9.2l.5 1.1 1.2.2-1 .8.3 1.2-1-.6-1 .6.3-1.2-1-.8 1.2-.2z" fill="#F5C76A"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M20.5 8.5a5.8 5.8 0 1 0 3.2 9.8 6.4 6.4 0 1 1-3.2-9.8z" fill="none" stroke="#8FA0C8" strokeWidth="1.5"/>
      <path d="M7 23.5c1.8-3.2 4.4-4.8 7-4.8s5.2 1.6 7 4.8" fill="none" stroke="#7DB7D8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11.2 20.2 14 14.5l2.2 4.2 1.6-2.6 2.4 4.4" fill="none" stroke="#C9A07A" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M13.8 14.8l.8-1.6.8 1.6h1.7l-1.4 1 .5 1.6-1.6-1-1.6 1 .5-1.6-1.4-1z" fill="#F5C76A"/>
    </svg>
  );
}

function MoodTimeGrid({data = MOOD_TIME_GRID_DATA}){
  return (
    <div className="review-mood-time-grid" role="table" aria-label="按时段心情分布">
      <div className="review-mood-time-grid-row is-head" role="row">
        <div className="review-mood-time-grid-corner" role="columnheader"/>
        {MOOD_TIME_PERIODS.map(period=>(
          <div className="review-mood-time-grid-period" role="columnheader" key={period.key}>
            <MoodTimePeriodIcon type={period.icon}/>
            <span>{period.range}</span>
          </div>
        ))}
      </div>
      {MOOD_TIME_ROWS.map((row, ri)=>(
        <div className={'review-mood-time-grid-row is-' + row.key} role="row" key={row.key} style={{'--row-bg': row.bg}}>
          <div className="review-mood-time-grid-label" role="rowheader">
            <em aria-hidden="true">{row.face}</em>
            <span>{row.label}</span>
          </div>
          {MOOD_TIME_PERIODS.map((period, ci)=>{
            const pct = data[ci][ri];
            const hi = row.hiIndexes.indexOf(ci) >= 0;
            const hiStart = hi && row.hiIndexes[0] === ci;
            const hiEnd = hi && row.hiIndexes[row.hiIndexes.length - 1] === ci;
            const hiSolo = hi && row.hiIndexes.length === 1;
            return (
              <div
                key={period.key}
                role="cell"
                className={
                  'review-mood-time-grid-cell'
                  + (hi ? ' is-hi is-hi-' + row.hiTone : '')
                  + (hiSolo ? ' is-hi-solo' : '')
                  + (hiStart && !hiSolo ? ' is-hi-start' : '')
                  + (hiEnd && !hiSolo ? ' is-hi-end' : '')
                  + (hi && !hiStart && !hiEnd && !hiSolo ? ' is-hi-mid' : '')
                }
              >
                <span>{pct}%</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function MoodTimeDistributionCard({range = 'cycle'}){
  const isYear = range === 'year';
  const gridData = isYear ? MOOD_TIME_GRID_DATA_YEAR : MOOD_TIME_GRID_DATA;
  const bestPct = gridData[0][0];
  const lowPct = gridData[4][2];
  return (
    <div className="review-detail-card review-mood-time-card">
      <div className="review-mood-detail-head">按时段心情分布</div>
      <MoodTimeGrid data={gridData}/>
      <div className="review-mood-time-summary">
        <div className="review-mood-time-summary-card">
          <span>最佳时段</span>
          <div className="review-mood-time-summary-main">
            <MoodTimePeriodIcon type="sunrise"/>
            <b>早晨</b>
          </div>
          <em>积极心情占比最高 <i>{bestPct}%</i></em>
        </div>
        <div className="review-mood-time-summary-card">
          <span>低谷时段</span>
          <div className="review-mood-time-summary-main">
            <MoodTimePeriodIcon type="boat"/>
            <b>夜间</b>
          </div>
          <em>消极心情占比最高 <i className="is-neg">{lowPct}%</i></em>
        </div>
      </div>
      <p className="review-mood-time-tip">
        {isYear
          ? '这一年夜间更容易出现低落情绪，建议睡前放松一下，给自己 10 分钟的安静时光 🌙'
          : '夜间更容易出现低落情绪，建议睡前放松一下，给自己 10 分钟的安静时光 🌙'}
      </p>
    </div>
  );
}

const MOOD_MONTH_STACK_COLORS = MOOD_LEVEL_STACK_COLORS;

// 每月 [积极, 中性, 消极]，合计 100；柱内自下而上：消极→中性→积极
const MOOD_MONTH_STACK_DATA = [
  {label:'1月', show:true, segs:[42, 33, 25]},
  {label:'2月', show:false, segs:[38, 34, 28]},
  {label:'3月', show:true, segs:[28, 30, 42]},
  {label:'4月', show:false, segs:[40, 32, 28]},
  {label:'5月', show:true, segs:[55, 28, 17]},
  {label:'6月', show:false, segs:[48, 30, 22]},
  {label:'7月', show:true, segs:[50, 28, 22]},
  {label:'8月', show:false, segs:[46, 31, 23]},
  {label:'9月', show:true, segs:[44, 30, 26]},
  {label:'10月', show:false, segs:[36, 34, 30]},
  {label:'11月', show:true, segs:[33, 35, 32]},
  {label:'12月', show:false, segs:[40, 33, 27]},
];

function MoodMonthStackChart({items = MOOD_MONTH_STACK_DATA}){
  const W = 340, H = 168;
  const padL = 28, padR = 8, padT = 10, padB = 24;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const n = items.length;
  const band = (x1 - x0) / n;
  const gap = 4;
  const bw = Math.max(12, band - gap);
  const Y = pct => y1 - (pct / 100) * (y1 - y0);
  return (
    <svg className="review-mood-month-stack-chart" viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="按月心情分布">
      {[0, 50, 100].map(pct=>{
        const y = Y(pct);
        return (
          <React.Fragment key={pct}>
            <line x1={x0} y1={y} x2={x1} y2={y} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
            <text x={x0 - 6} y={y + 3.5} textAnchor="end" fontSize="10" fill="#999999" fontFamily="PingFang SC">{pct}</text>
          </React.Fragment>
        );
      })}
      {items.map((it, i)=>{
        const x = x0 + i * band + (band - bw) / 2;
        // segs: [积极, 中性, 消极] → 自下而上画：消极、中性、积极
        const order = [
          {pct:it.segs[2], color:MOOD_MONTH_STACK_COLORS[2].color},
          {pct:it.segs[1], color:MOOD_MONTH_STACK_COLORS[1].color},
          {pct:it.segs[0], color:MOOD_MONTH_STACK_COLORS[0].color},
        ];
        let yCursor = y1;
        return (
          <g key={it.label}>
            {order.map((seg, si)=>{
              const h = (y1 - y0) * seg.pct / 100;
              const y = yCursor - h;
              yCursor = y;
              const isTop = si === order.length - 1;
              return (
                <rect
                  key={si}
                  x={x}
                  y={y}
                  width={bw}
                  height={Math.max(0.5, h)}
                  rx={isTop ? 3 : 0}
                  ry={isTop ? 3 : 0}
                  fill={seg.color}
                />
              );
            })}
            {it.show ? (
              <text x={x + bw / 2} y={H - 6} textAnchor="middle" fontSize="10" fill="#999999" fontFamily="PingFang SC">{it.label}</text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function MoodMonthDistributionCard(){
  return (
    <div className="review-detail-card review-mood-month-dist-card">
      <div className="review-mood-detail-head">按月分布</div>
      <MoodMonthStackChart/>
      <div className="review-mood-stack-legend is-left" aria-hidden="true">
        {MOOD_MONTH_STACK_COLORS.map(it=>(
          <span key={it.key}><i style={{background:it.color}}/>{it.label}</span>
        ))}
      </div>
      <div className="review-mood-time-insight-grid">
        <div className="review-mood-time-insight">
          <span>最积极月份</span>
          <b>5月</b>
        </div>
        <div className="review-mood-time-insight">
          <span>心情满电日</span>
          <b>5月21日</b>
        </div>
        <div className="review-mood-time-insight">
          <span>最易消极月份</span>
          <b>3月</b>
        </div>
        <div className="review-mood-time-insight">
          <span>记录最多月份</span>
          <b>7月</b>
        </div>
      </div>
      <p className="review-mood-time-tip">
        你在春季更容易出现低落情绪，5月的积极状态最多。情绪没有好坏之分，试着找到属于自己的调节方式，让每一天都更舒服一些 ✨
      </p>
    </div>
  );
}

function MoodCyclePhaseLegend(){
  return (
    <div className="review-mood-cycle-phase-legend" aria-hidden="true">
      <span><i className="is-menstrual"/>月经期</span>
      <span><i className="is-foll-luteal"/>卵泡期 / 黄体期</span>
      <span><i className="is-ovulation"/>排卵期</span>
      <span><i className="is-ovulation-day"/>排卵日</span>
    </div>
  );
}

function MoodChartLegend(){
  return (
    <div className="review-legend review-mood-chart-legend">
      <span className="review-legend-item is-mood"><i></i>每日心情</span>
      <span className="review-legend-item is-trend"><i></i>趋势</span>
      <span className="review-legend-item is-mood-pos"><i></i>积极</span>
      <span className="review-legend-item is-mood-neu"><i></i>中性</span>
      <span className="review-legend-item is-mood-neg"><i></i>消极</span>
    </div>
  );
}

function computeMoodMonthStats(vals, dates){
  const n = vals.length || 1;
  let pos = 0;
  let neu = 0;
  let neg = 0;
  vals.forEach(v=>{
    if(v >= 4) pos += 1;
    else if(v === 3) neu += 1;
    else neg += 1;
  });
  const positiveRate = Math.round(vals.reduce((s, v)=>s + v, 0) / (5 * n) * 100);
  let bestIdx = 0;
  let worstIdx = 0;
  vals.forEach((v, i)=>{
    if(v > vals[bestIdx]) bestIdx = i;
    if(v < vals[worstIdx]) worstIdx = i;
  });
  const posNeuCount = pos + neu;
  const trendPct = 8;
  const trendUp = true;
  return {
    positiveRate,
    trendPct,
    trendUp,
    bestPct: Math.round(vals[bestIdx] / 5 * 100),
    bestDate: dates[bestIdx] || '',
    worstPct: Math.round(vals[worstIdx] / 5 * 100),
    worstDate: dates[worstIdx] || '',
    posNeuCount,
    posNeuPct: Math.round(posNeuCount / n * 100),
    negCount: neg,
    negPct: Math.round(neg / n * 100),
  };
}

function MoodMonthAnalysisPanel({vals = MOOD_MONTH_VALS, dates = MOOD_MONTH_DATES}){
  const s = computeMoodMonthStats(vals, dates);
  return (
    <div className="review-mood-month-stats">
      <div className="review-mood-stat-grid">
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">平均值</span>
          <div className="review-mood-stat-row">
            <b className="review-mood-stat-value">{s.positiveRate}%</b>
            <span className="review-mood-stat-sub">正向比例</span>
          </div>
        </div>
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">波动趋势</span>
          <div className="review-mood-stat-row">
            <b className={'review-mood-stat-value' + (s.trendUp ? ' is-up' : ' is-down')}>{s.trendPct}%</b>
            <span className="review-mood-stat-sub">{s.trendUp ? '较上月上升' : '较上月下降'}</span>
          </div>
        </div>
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">最佳状态</span>
          <div className="review-mood-stat-row">
            <b className="review-mood-stat-value">{s.bestPct}%</b>
            <span className="review-mood-stat-sub">{s.bestDate}</span>
          </div>
        </div>
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">最差状态</span>
          <div className="review-mood-stat-row">
            <b className="review-mood-stat-value">{s.worstPct}%</b>
            <span className="review-mood-stat-sub">{s.worstDate}</span>
          </div>
        </div>
      </div>
      <p className="review-mood-range-banner">
        你的心理情绪正常范围是 <em>60% - 70%</em>
      </p>
      <div className="review-mood-stat-grid is-half">
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">积极 / 中性</span>
          <div className="review-mood-stat-row">
            <b className="review-mood-stat-value">{s.posNeuCount}<small> 天</small></b>
            <span className="review-mood-stat-sub">占比 {s.posNeuPct}%</span>
          </div>
        </div>
        <div className="review-mood-stat-card">
          <span className="review-mood-stat-label">消极</span>
          <div className="review-mood-stat-row">
            <b className="review-mood-stat-value">{s.negCount}<small> 天</small></b>
            <span className="review-mood-stat-sub">占比 {s.negPct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOOD_TRI_LEVEL_SHARE = [
  {level:1, label:'消极', face:'😞', color:MOOD_TRI_NEG, bg:'#ffe8ee', count:5, pct:33},
  {level:2, label:'中性', face:'😐', color:MOOD_TRI_NEU, bg:'#fff6dd', count:4, pct:27},
  {level:3, label:'积极', face:'😄', color:MOOD_TRI_POS, bg:'#e8f2fc', count:6, pct:40},
];

const MOOD_SHARE_BAR_ROWS = [
  MOOD_TRI_LEVEL_SHARE[2],
  MOOD_TRI_LEVEL_SHARE[1],
  MOOD_TRI_LEVEL_SHARE[0],
];

function MoodShareBarList({title = '本周期心情占比', items = MOOD_SHARE_BAR_ROWS}){
  return (
    <div className="review-mood-share-bars">
      {title ? <div className="review-mood-share-bars-title">{title}</div> : null}
      <div className="review-mood-share-bars-list">
        {items.map(it=>(
          <div className="review-mood-share-bar-row" key={it.level}>
            <div className="review-mood-share-bar-face" style={{background:it.bg}} aria-hidden="true">{it.face}</div>
            <div className="review-mood-share-bar-main">
              <div className="review-mood-share-bar-meta">
                <span>{it.label}</span>
                <b>{it.pct}%</b>
              </div>
              <div className="review-mood-share-bar-track">
                <i style={{width:it.pct + '%', background:it.color}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoodPhaseHormoneBlock(){
  return (
    <div className="review-detail-card review-mood-phase-hormone-card">
      <div className="review-mood-detail-head">按周期阶段分布</div>
      <MoodPhaseStackChart/>
      <div className="review-mood-phase-summary">
        <div className="review-mood-phase-summary-card">
          <span>最积极阶段</span>
          <div className="review-mood-phase-summary-main">
            <i className="review-mood-phase-summary-face is-pos" aria-hidden="true">😊</i>
            <b>排卵期</b>
          </div>
          <em>积极心情占比 <i>70%</i></em>
        </div>
        <div className="review-mood-phase-summary-card">
          <span>最易消极阶段</span>
          <div className="review-mood-phase-summary-main">
            <i className="review-mood-phase-summary-face is-neg" aria-hidden="true">😞</i>
            <b>月经期</b>
          </div>
          <em>消极心情占比 <i className="is-neg">50%</i></em>
        </div>
      </div>
      <div className="review-mood-phase-hormone-divider" role="presentation"/>
      <div className="review-mood-hormone-subtitle">激素变化与心情的关系</div>
      <img
        className="review-mood-hormone-img"
        src="assets/mood-hormone-chart.png"
        alt="本周期激素趋势：雌激素、孕激素、睾酮"
      />
      <p className="review-mood-hormone-copy">
        月经期间雌、孕激素水平较低，雌激素水平低会影响多巴胺的合成，孕激素水平低让大脑对负面情绪更敏感。你可能会感到情绪低落，敏感易怒或伤心。不过随着经期结束就会恢复的，现在先好好照顾自己吧！
      </p>
    </div>
  );
}

const MOOD_RECORD_ROWS = [
  {label:'惊喜', face:'😲', bg:'#ffe6a8', count:3},
  {label:'兴奋', face:'🤩', bg:'#ffe6a8', count:2},
  {label:'害怕', face:'😰', bg:'#ffd0dc', count:2},
  {label:'冷漠', face:'😑', bg:'#cfe3fb', count:2},
  {label:'挺开心', face:'😊', bg:'#ffe6a8', count:2},
  {label:'平静', face:'😐', bg:'#cfe3fb', count:1},
  {label:'超开心', face:'😄', bg:'#ffe6a8', count:1},
  {label:'易怒', face:'😠', bg:'#ffd0dc', count:1},
  {label:'满足', face:'😌', bg:'#dff8f0', count:2},
  {label:'自信', face:'😎', bg:'#ffe6a8', count:1},
];
const MOOD_RECORD_DATES = ['7/6','7/7','7/8','7/9','7/10','7/11','7/12'];
const MOOD_RECORD_PHASES = [
  {from:0, to:1, fill:'rgba(0, 204, 153, 0.04)'},
  {from:1, to:5, fill:'rgba(255, 77, 136, 0.05)'},
  {from:5, to:7, fill:'rgba(0, 204, 153, 0.04)'},
];
const MOOD_RECORD_POINTS = [
  {date:0, row:3},
  {date:2, row:0},
  {date:2, row:1},
  {date:2, row:4},
  {date:2, row:8},
  {date:2, row:9},
  {date:3, row:2},
  {date:3, row:7},
];

function MoodRecordScatterChart(){
  const rows = MOOD_RECORD_ROWS;
  const dates = MOOD_RECORD_DATES;
  const rowH = 28;
  const labelW = 44;
  const countW = 36;
  const padT = 8;
  const padB = 28;
  const plotW = 220;
  const W = labelW + plotW + countW;
  const H = padT + rows.length * rowH + padB;
  const x0 = labelW;
  const x1 = labelW + plotW;
  const y0 = padT;
  const colW = plotW / dates.length;
  return (
    <svg className="review-mood-record-scatter" viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="心情记录三点分布">
      {MOOD_RECORD_PHASES.map((ph, i)=>(
        <rect
          key={i}
          x={x0 + ph.from * colW}
          y={y0}
          width={(ph.to - ph.from) * colW}
          height={rows.length * rowH}
          fill={ph.fill}
        />
      ))}
      {rows.map((row, ri)=>{
        const y = y0 + ri * rowH;
        return (
          <React.Fragment key={row.label}>
            <line x1={x0} y1={y + rowH} x2={x1} y2={y + rowH} stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="3 3"/>
            <text x={labelW - 6} y={y + rowH / 2 + 4} textAnchor="end" fontSize="11" fill="rgba(0,0,0,0.45)" fontFamily="PingFang SC, -apple-system, sans-serif">{row.label}</text>
            <text x={W - 2} y={y + rowH / 2 + 4} textAnchor="end" fontSize="11" fill="rgba(0,0,0,0.45)" fontFamily="PingFang SC, -apple-system, sans-serif">{row.count}次</text>
          </React.Fragment>
        );
      })}
      {dates.map((_, di)=>(
        <line key={'v'+di} x1={x0 + di * colW} y1={y0} x2={x0 + di * colW} y2={y0 + rows.length * rowH} stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="3 3"/>
      ))}
      <line x1={x1} y1={y0} x2={x1} y2={y0 + rows.length * rowH} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {MOOD_RECORD_POINTS.map((pt, i)=>{
        const row = rows[pt.row];
        const cx = x0 + (pt.date + 0.5) * colW;
        const cy = y0 + (pt.row + 0.5) * rowH;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill={row.bg}/>
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11">{row.face}</text>
          </g>
        );
      })}
      {dates.map((d, di)=>(
        <text key={d} x={x0 + (di + 0.5) * colW} y={H - 14} textAnchor="middle" fontSize="10" fill="rgba(0,0,0,0.4)" fontFamily="PingFang SC, -apple-system, sans-serif">{d}</text>
      ))}
      <text x={x0 + 0.5 * colW} y={H - 2} textAnchor="middle" fontSize="10" fill="rgba(0,0,0,0.35)" fontFamily="PingFang SC, -apple-system, sans-serif">2026</text>
    </svg>
  );
}

function MoodRecordCard(){
  return (
    <div className="review-detail-card review-mood-record-card">
      <div className="review-mood-detail-head">心情记录</div>
      <div className="review-mood-record-bubbles">
        <img
          className="review-mood-record-bubbles-img"
          src="assets/mood-share-jar-row.png"
          alt="本周期共5种心情：兴奋1次、挺开心1次、惊喜1次"
        />
      </div>
      <div className="review-mood-record-divider" role="presentation"/>
      <MoodRecordScatterChart/>
      <MoodCyclePhaseLegend/>
    </div>
  );
}

const MOOD_KIND_TOP = [
  {label:'兴奋', count:2},
  {label:'惊喜', count:2},
  {label:'满足', count:2},
];

function moodZoneFromLevel(level){
  if(level <= 2) return 'neg';
  if(level === 3) return 'neu';
  return 'pos';
}

function moodKnobCenterByZone(zone){
  if(zone === 'neg') return 16;
  if(zone === 'neu') return 50;
  return 84;
}

const MOOD_TRI_SCALE_LABELS = ['消极', '中性', '积极'];

const MOOD_TODAY_TAG_COUNTS = [
  {key:'pos', label:'积极', count:2, color:MOOD_TRI_POS, bg:'#EAF3FC'},
  {key:'neu', label:'平静', count:1, color:MOOD_TRI_NEU, bg:'#FFF8E6'},
  {key:'neg', label:'低落', count:1, color:MOOD_TRI_NEG, bg:'#FFE8EE'},
];

function MoodSpectrumBar({zone, playKey}){
  const target = moodKnobCenterByZone(zone);
  const [pos, setPos] = React.useState(0);
  React.useEffect(()=>{
    setPos(0);
    let inner;
    const outer = requestAnimationFrame(()=>{
      inner = requestAnimationFrame(()=> setPos(target));
    });
    return ()=>{
      cancelAnimationFrame(outer);
      if(inner) cancelAnimationFrame(inner);
    };
  }, [target, playKey]);
  return (
    <>
      <div className="review-mood-spectrum-wrap" role="img" aria-label="今日心情区间">
        <div className="review-mood-spectrum is-tri" aria-hidden="true"/>
        <i
          className={'review-mood-spectrum-knob is-' + zone}
          style={{left:pos + '%'}}
          aria-hidden="true"
        />
      </div>
      <div className="review-mood-scale-lbl">
        {MOOD_TRI_SCALE_LABELS.map((label, i)=>{
          const key = i === 0 ? 'neg' : (i === 1 ? 'neu' : 'pos');
          return (
            <span
              key={label}
              className={zone === key ? ('is-active is-' + key) : ''}
            >{label}</span>
          );
        })}
      </div>
    </>
  );
}

function MoodTodayEmotionCard({playKey}){
  const todayLevel = MOOD_MONTH_VALS[MOOD_MONTH_VALS.length - 1];
  const zone = moodZoneFromLevel(todayLevel);
  const title = zone === 'neg' ? '情绪低落' : zone === 'neu' ? '状态中性' : '心情不错';
  const face = zone === 'neg' ? '😞' : zone === 'neu' ? '😐' : '😄';
  return (
    <div className="review-detail-card review-mood-today-emotion">
      <div className="review-mood-trend-title review-mood-section-title">今日状态</div>
      <div className="review-mood-emotion-main">
        <div className={'review-mood-emotion-avatar is-' + zone} aria-hidden="true">
          <span>{face}</span>
          <i className="review-mood-emotion-check">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3.8 8.2 6.6 11l5.6-6.2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </i>
        </div>
        <div className="review-mood-emotion-copy">
          <div className="review-mood-emotion-title">{title}</div>
          <div className="review-mood-emotion-tags">
            {MOOD_TODAY_TAG_COUNTS.map(tag=>(
              <span
                key={tag.key}
                className={'review-mood-emotion-tag is-' + tag.key}
                style={{background:tag.bg}}
              >
                <i style={{background:tag.color}}/>
                {tag.label} {tag.count} 次
              </span>
            ))}
          </div>
        </div>
      </div>
      <MoodSpectrumBar zone={zone} playKey={playKey}/>
    </div>
  );
}

function MoodCycleTrendCard({range = 'cycle', periodOffset = 0}){
  const [chartMode, setChartMode] = React.useState('line');
  const isYear = range === 'year';
  const isCapsule = !isYear && chartMode === 'capsule';
  const recordDaysMain = isYear ? '286' : '15';
  const recordDaysTotal = isYear ? '365' : '28';
  const streakDays = isYear ? 42 : 12;
  const periodMoodVals = isYear ? MOOD_YEAR_VALS : MOOD_CYCLE_VALS;
  const periodMoodAvg = periodMoodVals.reduce((s, v)=>s + v, 0) / periodMoodVals.length;
  const periodMoodWord = moodWordFromAvg(periodMoodAvg);
  const periodMoodLabel = '记录最多的是';
  const compareLabel = '最常出现在';
  const compareValue = isYear ? '夏季' : '黄体期';
  const periodMoodFace = periodMoodWord === '超开心' ? '😄'
    : periodMoodWord === '挺开心' ? '😊'
    : periodMoodWord === '中性' ? '😐'
    : periodMoodWord === '不开心' ? '😞'
    : periodMoodWord === '好伤心' ? '😢'
    : '';
  return (
    <div className="review-detail-card review-mood-trend-card">
      <div className="review-mood-trend-head">
        <div className="review-mood-trend-title review-mood-section-title">
          心情趋势
        </div>
        {isYear ? null : (
          <button
            type="button"
            className={'review-mood-trend-switch' + (isCapsule ? ' is-capsule' : '')}
            aria-label={isCapsule ? '切换为折线图' : '切换为胶囊图'}
            aria-pressed={isCapsule}
            onClick={()=>setChartMode(isCapsule ? 'line' : 'capsule')}
          >
            <i className="is-line" aria-hidden="true"/>
            <i className="is-capsule" aria-hidden="true"/>
          </button>
        )}
      </div>
      <div className={'review-chart review-detail-chart review-mood-trend-chart' + (isYear ? ' is-compact' : '')}>
        {isYear ? (
          <MoodLineChart
            vals={MOOD_YEAR_WEEK_VALS}
            xLabels={MOOD_YEAR_WEEK_XLABELS}
            height={132}
            gradientId="moodDetailTrendYear"
            compact
            triScale
            showDots
            dotStep={2}
            ariaLabel="近一年心情趋势"
          />
        ) : isCapsule ? (
          <MoodCapsuleRangeChart
            vals={MOOD_CYCLE_VALS}
            dates={MOOD_CYCLE_DATES}
            phaseBands={MOOD_CYCLE_PHASES}
            dayCount={7}
            height={168}
            ariaLabel="本周期近7天心情胶囊分布"
          />
        ) : (
          <MoodLineChart
            vals={MOOD_CYCLE_VALS}
            dates={MOOD_CYCLE_DATES}
            height={168}
            gradientId="moodDetailTrend"
            markToday={periodOffset === 0}
            showDots
            dotStep={2}
            triScale
            phaseBands={MOOD_CYCLE_PHASES}
            ariaLabel="本周期心情趋势"
          />
        )}
      </div>
      {isYear ? null : <MoodCyclePhaseLegend/>}
      <div className="review-mood-insight-grid">
        <div className="review-mood-insight">
          <span>记录心情天数</span>
          <b>{recordDaysMain}<small>/{recordDaysTotal}天</small></b>
        </div>
        <div className="review-mood-insight">
          <span>连续记录天数</span>
          <b>{streakDays}<small>天</small></b>
        </div>
      </div>
      <MoodShareBarList title={isYear ? '本年心情占比' : '本周期心情占比'}/>
      <div className="review-mood-insight-grid">
        <div className="review-mood-insight">
          <span>{periodMoodLabel}</span>
          <b>{periodMoodWord}{periodMoodFace ? <span className="review-mood-insight-face">{periodMoodFace}</span> : null}</b>
        </div>
        <div className="review-mood-insight">
          <span>{compareLabel}</span>
          <b>{compareValue}</b>
        </div>
      </div>
    </div>
  );
}

function MoodKindOverviewCard({periodPrefix, kindCount = 20, items = MOOD_KIND_TOP}){
  return (
    <div className="review-detail-card review-mood-kind-card">
      <div className="review-mood-kind-visual" aria-hidden="true">
        <img src="assets/mood-bubble-jar.png" alt=""/>
      </div>
      <div className="review-mood-kind-copy">
        <p className="review-mood-kind-title">
          <span>{periodPrefix}</span>
          <b>{kindCount}</b>
          <span>种心情</span>
        </p>
        {items.map(it=>(
          <p className="review-mood-kind-row" key={it.label}>
            <span>{it.label}</span>
            <b>{it.count}</b>
            <span>次</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function MoodDetailBody({range, playKey, periodOffset = 0}){
  const isCycle = range === 'cycle';
  const isCurrent = periodOffset === 0;
  return (
    <>
      {isCycle && isCurrent ? <MoodTodayEmotionCard playKey={playKey}/> : null}
      <MoodCycleTrendCard range={range} periodOffset={periodOffset}/>
      {isCycle ? <MoodPhaseHormoneBlock/> : null}
      {isCycle ? null : <MoodMonthDistributionCard/>}
      <MoodTimeDistributionCard range={range}/>
      <MoodRecordCard/>
    </>
  );
}

const MOOD_CYCLE_PERIODS = [
  {title:'当前周期', sub:'6/16 — 今天'},
  {title:'5/19 — 6/15'},
  {title:'4/21 — 5/18'},
  {title:'3/24 — 4/20'},
  {title:'2/24 — 3/23'},
  {title:'1/27 — 2/23'},
];

const MOOD_YEAR_PERIODS = [
  {title:'2026年'},
  {title:'2025年'},
  {title:'2024年'},
  {title:'2023年'},
];

function MoodPeriodNav({range, offset, onChange}){
  const periods = range === 'year' ? MOOD_YEAR_PERIODS : MOOD_CYCLE_PERIODS;
  const max = periods.length - 1;
  const safe = Math.max(0, Math.min(max, offset));
  const current = periods[safe];
  const canPrev = safe < max;
  const canNext = safe > 0;
  return (
    <div className="review-mood-period-nav" role="group" aria-label={range === 'year' ? '年份切换' : '周期切换'}>
      <button
        type="button"
        className={'review-mood-period-arrow is-prev' + (canPrev ? '' : ' is-disabled')}
        aria-label={range === 'year' ? '上一年' : '上一周期'}
        disabled={!canPrev}
        onClick={()=> canPrev && onChange(safe + 1)}
      />
      <div className={'review-mood-period-meta' + (current.sub ? '' : ' is-single')}>
        <div className="review-mood-period-title">{current.title}</div>
        {current.sub ? <div className="review-mood-period-sub">{current.sub}</div> : null}
      </div>
      <button
        type="button"
        className={'review-mood-period-arrow is-next' + (canNext ? '' : ' is-disabled')}
        aria-label={range === 'year' ? '下一年' : '下一周期'}
        disabled={!canNext}
        onClick={()=> canNext && onChange(safe - 1)}
      />
    </div>
  );
}

function MoodDetailPage({open, onClose}){
  const [range, setRange] = React.useState('cycle');
  const [periodOffset, setPeriodOffset] = React.useState(0);
  const ranges = [
    {key:'cycle', label:'按周期'},
    {key:'year', label:'按年'},
  ];
  const switchRange = (key)=>{
    setRange(key);
    setPeriodOffset(0);
  };
  return (
    <section className={'review-cycle-detail is-fullscreen-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="心情详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">心情</span>
      </div>
      <div className="review-detail-content">
        <div className="review-segment" role="tablist" aria-label="时间范围">
          {ranges.map(item=>(
            <button
              key={item.key}
              type="button"
              className={range === item.key ? 'is-active' : ''}
              aria-selected={range === item.key}
              onClick={()=>switchRange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <MoodPeriodNav range={range} offset={periodOffset} onChange={setPeriodOffset}/>
        <MoodDetailBody
          range={range}
          periodOffset={periodOffset}
          playKey={open ? (range + '-' + periodOffset) : 0}
        />
      </div>
    </section>
  );
}

function MoodReviewCard({onOpen, onLandscapeOpen}){
  const cycleAvg = MOOD_CYCLE_VALS.reduce((s, v)=>s + v, 0) / MOOD_CYCLE_VALS.length;
  const lastLevel = MOOD_CYCLE_VALS[MOOD_CYCLE_VALS.length - 1];

  return (
    <ReviewCard
      title="心情"
      iconClass="is-mood"
      icon={<ReviewMoodIcon/>}
      headAction={typeof onLandscapeOpen === 'function' ? (
        <button
          type="button"
          className="review-cycle-expand-btn"
          aria-label="横屏展开全部心情"
          onKeyDown={event=>event.stopPropagation()}
          onClick={event=>{
            event.stopPropagation();
            onLandscapeOpen();
          }}
        >
          <ReviewExpandIcon/>
        </button>
      ) : null}
      chart={<MoodLineChart vals={MOOD_CYCLE_VALS} dates={MOOD_CYCLE_DATES} gradientId="moodCardGrad" markToday showDots dotStep={2} triScale ariaLabel="本周期心情波动折线图"/>}
      legend={<MoodChartLegend/>}
      metrics={(
        <>
          <div className="review-metric">
            <ReviewMoodValue word={MOOD_WORD_BY_LEVEL[lastLevel - 1]}/>
            <div className="review-metric-label">最近心情</div>
          </div>
          <div className="review-metric">
            <ReviewMoodValue word={moodWordFromAvg(cycleAvg)}/>
            <div className="review-metric-label">本周期心情</div>
          </div>
          <div className="review-metric">
            <ReviewMoodValue word="↗ 更积极" trend/>
            <div className="review-metric-label">较上周期</div>
          </div>
        </>
      )}
      more="查看完整心情变化"
      onOpen={onOpen}
    />
  );
}

function ExpandedMoodChart(){
  const records = MOOD_ALL_RECORDS;
  const vals = records.map(r=>r.level);
  const n = vals.length;
  const W = Math.max(1160, n * 22);
  const H = 250;
  const padL = 40, padR = 34, padT = 18, padB = 32;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  const X = i => x0 + (n <= 1 ? 0 : (x1 - x0) * (i / (n - 1)));
  const Y = v => y1 - moodTriFraction(v) * plotH;
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  const path = reviewSmoothPath(pts);
  const area = path
    ? path + ' L' + pts[pts.length - 1][0].toFixed(1) + ' ' + y1.toFixed(1)
      + ' L' + pts[0][0].toFixed(1) + ' ' + y1.toFixed(1) + ' Z'
    : '';
  const last = pts[pts.length - 1];
  const lastVal = vals[n - 1];
  const lastColor = moodColorAtTri(lastVal);
  const lastWord = lastVal > 3.5 ? '积极' : (lastVal < 2.5 ? '消极' : '中性');
  const labelIndexes = records.map((_r, i)=>i).filter(i=>i % 5 === 0 || i === n - 1);
  const dotIndexes = collectMoodDotIndexes(vals, 3);
  const sx = vals.reduce((s, _v, i)=>s + i, 0);
  const sy = vals.reduce((s, v)=>s + v, 0);
  const sxy = vals.reduce((s, v, i)=>s + i * v, 0);
  const sxx = vals.reduce((s, _v, i)=>s + i * i, 0);
  const denom = n * sxx - sx * sx;
  const trendB = denom ? (n * sxy - sx * sy) / denom : 0;
  const trendA = (sy - trendB * sx) / n;

  return (
    <svg
      viewBox={'0 0 ' + W + ' ' + H}
      style={{width:W + 'px'}}
      preserveAspectRatio="none"
      role="img"
      aria-label="全部心情记录趋势曲线"
    >
      <defs>
        {moodTriGradientStops(y0, y1, 'moodLandscapeGrad', false)}
        {moodTriGradientStops(y0, y1, 'moodLandscapeFill', true)}
      </defs>
      {[0.4, 0.6].map(t=>(
        <line
          key={'band' + t}
          x1={x0}
          y1={y1 - t * plotH}
          x2={x1}
          y2={y1 - t * plotH}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}
      {MOOD_TRI_AXIS.map(item=>(
        <text
          key={item.label}
          x={x0 - 6}
          y={y1 - item.t * plotH + 3.5}
          textAnchor="end"
          fontSize="10"
          fill="#bbbbbf"
          fontFamily="PingFang SC"
        >{item.label}</text>
      ))}
      {area ? <path d={area} fill="url(#moodLandscapeFill)"/> : null}
      {n >= 2 ? (
        <line
          x1={X(0)}
          y1={Math.max(y0, Math.min(y1, Y(trendA)))}
          x2={X(n - 1)}
          y2={Math.max(y0, Math.min(y1, Y(trendA + trendB * (n - 1))))}
          stroke="#c2c2c8"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
      ) : null}
      <path d={path} fill="none" stroke="url(#moodLandscapeGrad)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((v, i)=>{
        const isLast = i === n - 1;
        if(!isLast && !dotIndexes.has(i)) return null;
        return (
          <circle
            key={i}
            cx={X(i)}
            cy={Y(v)}
            r={isLast ? 2.6 : 1.8}
            fill={isLast ? lastColor : moodColorAtTri(v)}
            opacity="0.92"
          />
        );
      })}
      {last ? (
        <text x={last[0]} y={last[1] + 16} textAnchor="end" fontSize="10" fontWeight="500" fill={lastColor} fontFamily="PingFang SC">{lastWord}</text>
      ) : null}
      {labelIndexes.map(i=>(
        <text key={i} x={X(i)} y={H - 9} textAnchor="middle" fontSize="9.5" fill="#aaaab0" fontFamily="PingFang SC">{records[i].date}</text>
      ))}
    </svg>
  );
}

function MoodLandscapePage({open, onClose}){
  const scrollerRef = React.useRef(null);

  React.useEffect(()=>{
    if(!open) return undefined;
    const scroller = scrollerRef.current;
    if(scroller) scroller.scrollLeft = scroller.scrollWidth;
    const handleKeyDown = event=>{ if(event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return ()=>document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <section
      className={'review-cycle-landscape' + (open ? ' is-open' : '')}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="全部心情记录横屏图表"
    >
      <div className="review-cycle-landscape-surface">
        <header className="review-cycle-landscape-head">
          <div>
            <h2>全部心情记录</h2>
            <p>共 {MOOD_ALL_RECORDS.length} 天 · 左右滑动查看</p>
          </div>
          <button type="button" className="review-cycle-landscape-close" aria-label="关闭横屏图表" onClick={onClose}>×</button>
        </header>
        <div className="review-cycle-landscape-legend">
          <span className="review-legend-item is-mood"><i></i>每日心情</span>
          <span className="review-legend-item is-trend"><i></i>趋势</span>
          <span className="review-legend-item is-mood-pos"><i></i>积极</span>
          <span className="review-legend-item is-mood-neu"><i></i>中性</span>
          <span className="review-legend-item is-mood-neg"><i></i>消极</span>
          <span className="review-cycle-landscape-tip">← 滑动查看更多 →</span>
        </div>
        <div className="review-cycle-landscape-scroll" ref={scrollerRef}>
          <ExpandedMoodChart/>
        </div>
      </div>
    </section>
  );
}

function PeriodLengthChart(){
  const values = [6,7,6,7,8,7,6,7];
  const labels = ['11月','12月','1月','2月','3月','4月','5月','本次'];
  const W = 340, H = 156, padL = 28, padR = 14, padT = 18, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const X = i => x0 + (x1 - x0) * (i / (values.length - 1));
  const Y = v => y1 - (v - 4) / 6 * (y1 - y0);
  const points = values.map((value, i)=>[X(i), Y(value)]);
  return (
    <svg viewBox="0 0 340 156" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近8次经期长度趋势">
      <rect x={x0} y={Y(8)} width={x1 - x0} height={Y(5) - Y(8)} rx="8" fill="rgba(255,77,136,0.06)"/>
      {[5,7,9].map(value=><line key={value} x1={x0} y1={Y(value)} x2={x1} y2={Y(value)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>)}
      <path d={reviewSmoothPath(points)} fill="none" stroke="#ff6f9f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {values.map((value, i)=>(
        <React.Fragment key={labels[i]}>
          <circle cx={X(i)} cy={Y(value)} r={i === values.length - 1 ? 4.5 : 3} fill="#ff6f9f" stroke="#fff" strokeWidth="1.5"/>
          {i === values.length - 1 ? <text x={X(i) - 2} y={Y(value) - 10} textAnchor="end" fontSize="10" fontWeight="600" fill="#e7447c" fontFamily="PingFang SC">7天</text> : null}
          <text x={X(i)} y={H - 7} textAnchor="middle" fontSize="9" fill={i === values.length - 1 ? '#e7447c' : '#bbbbbf'} fontFamily="PingFang SC">{labels[i]}</text>
        </React.Fragment>
      ))}
    </svg>
  );
}

function PeriodReviewCard(){
  return (
    <ReviewCard
      title="经期"
      iconClass="is-period"
      icon={<ReviewPeriodIcon/>}
      chart={<PeriodLengthChart/>}
      legend={<span className="review-legend-item is-period"><i></i>经期天数</span>}
      metrics={(
        <>
          <ReviewMetric value="7" unit="天" label="最近经期"/>
          <ReviewMetric value="6.8" unit="天" label="近半年平均"/>
          <ReviewMetric value="→ 稳定" label="整体趋势" trend/>
        </>
      )}
      more="查看完整经期变化"
    />
  );
}

function SymptomReviewChart(){
  const days = [
    {label:'周一', values:[1,0,0]}, {label:'周二', values:[1,1,0]}, {label:'周三', values:[0,1,1]},
    {label:'周四', values:[2,1,0]}, {label:'周五', values:[1,0,1]}, {label:'周六', values:[0,1,0]},
    {label:'今天', values:[1,1,1]},
  ];
  const colors = ['#ff729f','#7aa8e8','#f6b24d'];
  const W = 340, H = 156, padL = 28, padR = 12, padT = 14, padB = 26;
  const x0 = padL, x1 = W - padR, y1 = H - padB;
  const band = (x1 - x0) / days.length;
  const X = i => x0 + band * i + band / 2;
  const unit = 25;
  return (
    <svg viewBox="0 0 340 156" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天症状记录构成">
      {[1,2,3].map(v=><line key={v} x1={x0} y1={y1 - v * unit} x2={x1} y2={y1 - v * unit} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>)}
      {days.map((day, i)=>{
        let offset = 0;
        return (
          <React.Fragment key={day.label}>
            {day.values.map((value, idx)=>{
              if(!value) return null;
              const height = value * unit - 3;
              const y = y1 - offset - value * unit + 1.5;
              offset += value * unit;
              return <rect key={idx} x={X(i) - 10} y={y} width="20" height={height} rx="7" fill={colors[idx]}/>;
            })}
            <text x={X(i)} y={H - 7} textAnchor="middle" fontSize="9" fontWeight={i === days.length - 1 ? '600' : '400'} fill={i === days.length - 1 ? '#e7447c' : '#bbbbbf'} fontFamily="PingFang SC">{day.label}</text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function SymptomReviewCard(){
  return (
    <ReviewCard
      title="症状"
      iconClass="is-symptom"
      icon={<ReviewSymptomIcon/>}
      chart={<SymptomReviewChart/>}
      legend={(
        <>
          <span className="review-legend-item is-symptom-pain"><i></i>腹痛</span>
          <span className="review-legend-item is-symptom-back"><i></i>腰酸</span>
          <span className="review-legend-item is-symptom-tired"><i></i>疲惫</span>
        </>
      )}
      metrics={(
        <>
          <ReviewMetric value="腹痛" label="最近症状"/>
          <ReviewMetric value="9" unit="次" label="近7天记录"/>
          <ReviewMetric value="↘ 减少" label="较上周" trend/>
        </>
      )}
      more="查看完整症状变化"
    />
  );
}

/** 近 28 天每日次数：6/3 — 今天；多为 1–2 次，中段有一次 3 次峰值 */
const STOOL_CARD_VALUES = [
  1,1,2,1,1,2,1,
  1,2,3,2,1,1,2,
  1,0,1,1,2,1,1,
  2,1,1,2,1,1,1,
];
const STOOL_CARD_START = new Date(2026, 5, 3); // 6/3
const STOOL_CARD_LABEL_INDEXES = [0, 7, 14, 21, 27]; // 6/3 · 6/10 · 6/17 · 6/24 · 今天

const STOOL_CARD_RECORDS = STOOL_CARD_VALUES.map((count, i)=>{
  const d = new Date(STOOL_CARD_START);
  d.setDate(STOOL_CARD_START.getDate() + i);
  const isLast = i === STOOL_CARD_VALUES.length - 1;
  return {
    count,
    date: isLast ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate()),
  };
});

/** 横屏滑动：近 2 个月每日次数（末 28 天与列表卡对齐） */
const STOOL_ALL_RECORDS = (()=>{
  const seed = [
    1,1,0,1,2,1,1, 1,0,1,1,2,1,0, 1,1,1,0,2,1,1,
    1,2,1,0,1,1,1, 0,1,2,1,1,1,0,
  ];
  const values = seed.concat(STOOL_CARD_VALUES);
  const start = new Date(2026, 4, 6); // 5/6
  return values.map((count, i)=>{
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const isLast = i === values.length - 1;
    return {
      count,
      date: isLast ? '今天' : ((d.getMonth() + 1) + '/' + d.getDate()),
    };
  });
})();

function StoolReviewChart({
  values = STOOL_CARD_VALUES,
  records = STOOL_CARD_RECORDS,
  labelIndexes = STOOL_CARD_LABEL_INDEXES,
  phaseBands = null,
  height = 168,
  gradientId = 'stoolCardFill',
  ariaLabel = '近28天便便次数折线图',
}){
  const n = values.length;
  const W = 340, H = height;
  const padL = 34, padR = 16, padT = 22, padB = 24;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  const yMax = 3;
  const X = i => x0 + (n <= 1 ? 0 : (x1 - x0) * (i / (n - 1)));
  const Y = v => y1 - (v / yMax) * plotH;
  const pts = values.map((v, i)=>[X(i), Y(v)]);
  const linePath = pts.map((p, i)=>(i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const areaPath = linePath
    + ' L' + pts[n - 1][0].toFixed(1) + ' ' + y1.toFixed(1)
    + ' L' + pts[0][0].toFixed(1) + ' ' + y1.toFixed(1)
    + ' Z';
  const stoolColor = '#8264bd';
  const bands = phaseBands && phaseBands.length === n ? phaseBands : null;

  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stoolColor} stopOpacity="0.28"/>
          <stop offset="55%" stopColor={stoolColor} stopOpacity="0.1"/>
          <stop offset="100%" stopColor={stoolColor} stopOpacity="0.02"/>
        </linearGradient>
      </defs>
      {bands ? values.map((_, i)=>{
        const xLeft = i === 0 ? x0 : (X(i - 1) + X(i)) / 2;
        const xRight = i === n - 1 ? x1 : (X(i) + X(i + 1)) / 2;
        return (
          <rect
            key={'ph' + i}
            x={xLeft}
            y={y0}
            width={Math.max(0.5, xRight - xLeft)}
            height={plotH}
            fill={moodPhaseBandFill(bands[i])}
          />
        );
      }) : null}
      {[0, 1, 2, 3].map(tick=>(
        <React.Fragment key={tick}>
          <line
            x1={x0}
            y1={Y(tick)}
            x2={x1}
            y2={Y(tick)}
            stroke="rgba(130,100,189,0.16)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x={x0 - 6}
            y={Y(tick) + 3}
            textAnchor="end"
            fontSize="9"
            fill="#bbbbbf"
            fontFamily="PingFang SC"
          >
            {tick}次
          </text>
        </React.Fragment>
      ))}
      <path d={areaPath} fill={'url(#' + gradientId + ')'}/>
      <path d={linePath} fill="none" stroke={stoolColor} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {values.map((value, i)=>{
        const isLast = i === n - 1;
        return (
          <circle
            key={i}
            cx={X(i)}
            cy={Y(value)}
            r={isLast ? 4.5 : 2.2}
            fill={stoolColor}
            stroke={isLast ? '#fff' : 'none'}
            strokeWidth={isLast ? 2 : 0}
          />
        );
      })}
      {labelIndexes.map(i=>(
        <text
          key={i}
          x={X(i)}
          y={H - 7}
          textAnchor="middle"
          fontSize="9"
          fill={i === n - 1 ? stoolColor : '#bbbbbf'}
          fontFamily="PingFang SC"
        >
          {records[i].date}
        </text>
      ))}
    </svg>
  );
}

const STOOL_CYCLE_PHASES = buildMoodCyclePhases(STOOL_CARD_VALUES.length);

function StoolBarChart({
  values = STOOL_CARD_VALUES,
  records = STOOL_CARD_RECORDS,
  labelIndexes = STOOL_CARD_LABEL_INDEXES,
  phaseBands = null,
  height = 168,
  ariaLabel = '近28天便便次数柱状图',
}){
  const n = values.length;
  const W = 340, H = height;
  const padL = 34, padR = 16, padT = 22, padB = 24;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const plotH = y1 - y0;
  const yMax = 3;
  const band = (x1 - x0) / n;
  const barW = Math.min(7.5, band * 0.55);
  const X = i => x0 + band * i + band / 2;
  const Y = v => y1 - (v / yMax) * plotH;
  const barColor = '#c4b0e0';
  const todayColor = '#8264bd';
  const lastVal = values[n - 1];
  const bands = phaseBands && phaseBands.length === n ? phaseBands : null;

  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={ariaLabel}>
      {bands ? values.map((_, i)=>{
        const xLeft = i === 0 ? x0 : (X(i - 1) + X(i)) / 2;
        const xRight = i === n - 1 ? x1 : (X(i) + X(i + 1)) / 2;
        return (
          <rect
            key={'ph' + i}
            x={xLeft}
            y={y0}
            width={Math.max(0.5, xRight - xLeft)}
            height={plotH}
            fill={moodPhaseBandFill(bands[i])}
          />
        );
      }) : null}
      {[0, 1, 2, 3].map(tick=>(
        <React.Fragment key={tick}>
          <line
            x1={x0}
            y1={Y(tick)}
            x2={x1}
            y2={Y(tick)}
            stroke="rgba(130,100,189,0.14)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x={x0 - 6}
            y={Y(tick) + 3}
            textAnchor="end"
            fontSize="9"
            fill="#bbbbbf"
            fontFamily="PingFang SC"
          >
            {tick}次
          </text>
        </React.Fragment>
      ))}
      {values.map((value, i)=>{
        const isLast = i === n - 1;
        const cx = X(i);
        if(value <= 0){
          return (
            <circle
              key={i}
              cx={cx}
              cy={y1}
              r="3"
              fill="#fff"
              stroke="#d4d0d8"
              strokeWidth="1.4"
            />
          );
        }
        const barY = Y(value);
        return (
          <rect
            key={i}
            x={cx - barW / 2}
            y={barY}
            width={barW}
            height={Math.max(2, y1 - barY)}
            rx={Math.min(4, barW / 2)}
            fill={isLast ? todayColor : barColor}
          />
        );
      })}
      {lastVal > 0 ? (
        <text
          x={X(n - 1)}
          y={Y(lastVal) - 6}
          textAnchor="middle"
          fill={todayColor}
          fontFamily="PingFang SC"
        >
          <tspan fontSize="11" fontWeight="500">{lastVal}</tspan>
          <tspan fontSize="9" fontWeight="400">次</tspan>
        </text>
      ) : null}
      {labelIndexes.map(i=>(
        <text
          key={i}
          x={X(i)}
          y={H - 7}
          textAnchor="middle"
          fontSize="9"
          fill={i === n - 1 ? todayColor : '#bbbbbf'}
          fontFamily="PingFang SC"
        >
          {records[i].date}
        </text>
      ))}
    </svg>
  );
}

const STOOL_INTERVAL_COLORS = [
  {ring:'#D9CFF5'},
  {ring:'#AE97E8'},
  {ring:'#7C5FD3'},
  {ring:'#452C93'},
];

const STOOL_INTERVAL_ROWS = [
  {label:'不到1天', count:12},
  {label:'1~2天', count:5},
  {label:'2~3天', count:3},
  {label:'3天以上', count:1},
];

const STOOL_YEAR_INTERVAL_ROWS = [
  {label:'不到1天', count:210},
  {label:'1~2天', count:96},
  {label:'2~3天', count:40},
  {label:'3天以上', count:14},
];

const STOOL_PHASE_SHARE = [
  {label:'月经期', days:5, count:8, color:'rgba(255,77,136,0.55)'},
  {label:'卵泡期', days:6, count:5, color:'rgba(0,204,153,0.55)'},
  {label:'排卵期', days:5, count:4, color:'rgba(179,136,232,0.55)'},
  {label:'黄体期', days:12, count:5, color:'rgba(0,204,153,0.55)'},
];

function stoolFmtAvg(v){
  return v.toFixed(1);
}

function StoolPhaseShareList({title = '各阶段日均便便次数', items = STOOL_PHASE_SHARE}){
  const data = items.map(it=>({...it, avg: it.count / it.days}));
  const maxAvg = Math.max(...data.map(d=>d.avg), 0.0001);
  return (
    <div className="review-mood-share-bars review-stool-phase-share">
      {title ? <div className="review-mood-share-bars-title">{title}</div> : null}
      <div className="review-mood-share-bars-list">
        {data.map((it)=>(
          <div className="review-stool-phase-row" key={it.label}>
            <div className="review-stool-phase-top">
              <span>{it.label}</span>
              <b>{stoolFmtAvg(it.avg)}<em>次/天</em></b>
            </div>
            <div className="review-mood-share-bar-track">
              <i style={{width:(it.avg / maxAvg * 100) + '%', background:it.color}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoolCycleTrendCard({range = 'cycle'}){
  const [chartMode, setChartMode] = React.useState('line');
  const isYear = range === 'year';
  const isBar = !isYear && chartMode === 'bar';
  const yearValues = STOOL_ALL_RECORDS.map(r=>r.count);
  const yearRecords = STOOL_ALL_RECORDS;
  const yearLabelIndexes = yearRecords
    .map((_r, i)=>i)
    .filter(i=>i % Math.max(1, Math.floor((yearRecords.length - 1) / 4)) === 0 || i === yearRecords.length - 1)
    .slice(0, 4)
    .concat([yearRecords.length - 1])
    .filter((v, i, arr)=>arr.indexOf(v) === i);

  return (
    <div className="review-detail-card review-mood-trend-card review-stool-trend-card">
      <div className="review-mood-trend-head">
        <div className="review-mood-trend-title review-mood-section-title">便便次数</div>
        {isYear ? null : (
          <button
            type="button"
            className={'review-mood-trend-switch' + (isBar ? ' is-capsule' : '')}
            aria-label={isBar ? '切换为折线图' : '切换为柱状图'}
            aria-pressed={isBar}
            onClick={()=>setChartMode(isBar ? 'line' : 'bar')}
          >
            <i className="is-line" aria-hidden="true"/>
            <i className="is-capsule" aria-hidden="true"/>
          </button>
        )}
      </div>
      <div className={'review-chart review-detail-chart review-mood-trend-chart' + (isYear ? ' is-compact' : '')}>
        {isYear ? (
          <StoolReviewChart
            values={yearValues}
            records={yearRecords}
            labelIndexes={yearLabelIndexes}
            height={132}
            gradientId="stoolDetailTrendYear"
            ariaLabel="近一年便便次数"
          />
        ) : isBar ? (
          <StoolBarChart
            phaseBands={STOOL_CYCLE_PHASES}
            height={168}
            ariaLabel="本周期便便次数柱状图"
          />
        ) : (
          <StoolReviewChart
            phaseBands={STOOL_CYCLE_PHASES}
            height={168}
            gradientId="stoolDetailTrend"
            ariaLabel="本周期便便次数"
          />
        )}
      </div>
      {isYear ? null : <MoodCyclePhaseLegend/>}
      <div className="review-mood-insight-grid">
        <div className="review-mood-insight">
          <span>记录便便天数</span>
          <b>{isYear ? '286' : '19'}<small>/{isYear ? '365' : '28'}天</small></b>
        </div>
        <div className="review-mood-insight">
          <span>日均便便次数</span>
          <b>0.8<small>次</small></b>
        </div>
      </div>
      {isYear ? null : (
        <>
          {(()=>{
            const data = STOOL_PHASE_SHARE.map(it=>({...it, avg: it.count / it.days}));
            const most = data.reduce((a, b)=>b.avg > a.avg ? b : a);
            const least = data.reduce((a, b)=>b.avg < a.avg ? b : a);
            return (
              <div className="review-mood-time-summary review-stool-phase-summary">
                <div className="review-mood-time-summary-card">
                  <span>便便最多阶段</span>
                  <div className="review-mood-time-summary-main">
                    <b>{most.label}</b>
                  </div>
                  <em>日均 <i style={{color:most.color}}>{stoolFmtAvg(most.avg)}次</i></em>
                </div>
                <div className="review-mood-time-summary-card">
                  <span>便便最少阶段</span>
                  <div className="review-mood-time-summary-main">
                    <b>{least.label}</b>
                  </div>
                  <em>日均 <i style={{color:least.color}}>{stoolFmtAvg(least.avg)}次</i></em>
                </div>
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
}

function StoolIntervalCard({range = 'cycle'}){
  const isYear = range === 'year';
  const rows = isYear ? STOOL_YEAR_INTERVAL_ROWS : STOOL_INTERVAL_ROWS;
  const total = rows.reduce((s, r)=>s + r.count, 0) || 1;
  const avgText = isYear
    ? [{n:'1', u:'天'}, {n:'10', u:'小时'}]
    : [{n:'1', u:'天'}, {n:'6', u:'小时'}];
  const maxText = isYear
    ? [{n:'5', u:'天'}, {n:'2', u:'小时'}]
    : [{n:'3', u:'天'}, {n:'4', u:'小时'}];
  const minText = isYear
    ? [{n:'8', u:'小时'}]
    : [{n:'5', u:'小时'}];

  const CX = 75, R = 64, SW = 22, GAP = 3;
  const C = 2 * Math.PI * R;
  let acc = 0;
  const segs = rows.map((row, i)=>{
    const frac = row.count / total;
    const full = frac * C;
    const vis = Math.max(full - GAP, 0.5);
    const seg = {
      color: STOOL_INTERVAL_COLORS[i % STOOL_INTERVAL_COLORS.length].ring,
      dash: vis,
      offset: -acc,
    };
    acc += full;
    return seg;
  });

  return (
    <div className="review-detail-card review-stool-interval-card">
      <div className="review-mood-detail-head">便便间隔</div>
      <div className="review-stool-donut-wrap">
        <div className="review-stool-donut">
          <svg viewBox="0 0 150 150" role="img" aria-label="便便间隔占比环形图">
            {segs.map((s, i)=>(
              <circle
                key={i}
                cx={CX}
                cy={CX}
                r={R}
                fill="none"
                stroke={s.color}
                strokeWidth={SW}
                strokeDasharray={s.dash.toFixed(2) + ' ' + (C - s.dash).toFixed(2)}
                strokeDashoffset={s.offset.toFixed(2)}
                transform={'rotate(-90 ' + CX + ' ' + CX + ')'}
              />
            ))}
          </svg>
          <div className="review-stool-donut-center">
            <span>平均间隔</span>
            <b>{avgText.map((t, i)=>(<React.Fragment key={i}>{t.n}<small>{t.u}</small></React.Fragment>))}</b>
          </div>
        </div>
        <div className="review-stool-donut-legend">
          {rows.map((row, i)=>{
            const c = STOOL_INTERVAL_COLORS[i % STOOL_INTERVAL_COLORS.length];
            return (
              <div className="review-stool-donut-row" key={row.label}>
                <i style={{background:c.ring}}/>
                <span>{row.label}</span>
                <em>{row.count}次</em>
              </div>
            );
          })}
        </div>
      </div>
      <div className="review-mood-insight-grid">
        <div className="review-mood-insight">
          <span>最长间隔</span>
          <b>{maxText.map((t, i)=>(<React.Fragment key={i}>{t.n}<small>{t.u}</small></React.Fragment>))}</b>
        </div>
        <div className="review-mood-insight">
          <span>最短间隔</span>
          <b>{minText.map((t, i)=>(<React.Fragment key={i}>{t.n}<small>{t.u}</small></React.Fragment>))}</b>
        </div>
      </div>
    </div>
  );
}

const STOOL_FORM_PHASES = [
  {key:'menstrual', label:'月经期', days:5, arc:'rgba(255,77,136,0.28)', fill:'rgba(255,77,136,0.09)', text:'#f2799a', pos:{top:'25%', left:'67%'}},
  {key:'follicular', label:'卵泡期', days:6, arc:'rgba(0,204,153,0.26)', fill:'rgba(0,204,153,0.06)', text:'#22b487', pos:{top:'66%', left:'88%'}},
  {key:'ovulation', label:'排卵期', days:5, arc:'rgba(179,136,232,0.40)', fill:'rgba(179,136,232,0.14)', text:'#9a6fd4', pos:{top:'92%', left:'50%'}},
  {key:'luteal', label:'黄体期', days:12, arc:'rgba(0,204,153,0.26)', fill:'rgba(0,204,153,0.06)', text:'#22b487', pos:{top:'49%', left:'9%'}},
];

const STOOL_SHAPE_TYPES = {
  t1:{color:'#7a4e26', label:'硬球状'},
  t2:{color:'#966326', label:'凹凸香肠状'},
  t3:{color:'#af7c33', label:'裂纹香肠状'},
  t4:{color:'#c68f36', label:'平滑香蕉状'},
  t5:{color:'#cf9a4a', label:'软块状'},
  t6:{color:'#cfa05c', label:'糊状'},
  t7:{color:'#c6a465', label:'水液状'},
};

const STOOL_STATE_VOLUME = {
  tiny:{color:'#cf9a3f', label:'非常少量', size:3.5},
  small:{color:'#c6862c', label:'少量', size:5},
  mid:{color:'#b57327', label:'一般量', size:6.5},
  big:{color:'#9c6018', label:'大量', size:8},
};

const STOOL_STATE_FEELING = {
  smooth:{color:'#e0a92a', icon:'#f4cf5e', label:'舒畅'},
  residual:{color:'#d9701f', icon:'#f0a866', label:'有残便感'},
  hard:{color:'#e2455e', icon:'#f2899b', label:'排便困难'},
};

const STATE_SHAPE_BY_DAY = {2:'t4',3:'t4',7:'t4',12:'t4',16:'t4',21:'t4',1:'t3',6:'t3',13:'t3',23:'t3',17:'t1',19:'t1',25:'t1',4:'t5',8:'t5',11:'t5',9:'t2',14:'t6',27:'t7'};
const STATE_VOLUME_BY_DAY = {1:'small',2:'mid',3:'mid',6:'small',7:'mid',8:'mid',9:'tiny',10:'big',12:'mid',13:'small',14:'tiny',16:'mid',17:'mid',19:'big',20:'small',21:'mid',25:'mid',26:'small'};
const STATE_FEELING_BY_DAY = {1:'smooth',2:'smooth',3:'smooth',4:'residual',6:'smooth',7:'smooth',8:'smooth',9:'residual',10:'hard',11:'residual',12:'smooth',13:'smooth',14:'residual',16:'smooth',17:'hard',19:'hard',21:'smooth',23:'residual',25:'smooth',26:'smooth',27:'hard'};

const STOOL_STATE_DIMS = [
  {
    key:'shape', tab:'形状', name:'形状', marker:'glyph', cats:STOOL_SHAPE_TYPES, byDay:STATE_SHAPE_BY_DAY, order:['t1','t2','t3','t4','t5','t6','t7'],
    modules:[
      {title:'稀便最集中', phase:'月经期', phaseColor:'#ef6f8f', desc:'记录 3 次偏稀'},
      {title:'硬便最集中', phase:'黄体期', phaseColor:'#3ec19a', desc:'记录 4 次偏硬'},
    ],
    modulesYear:[
      {title:'稀便最集中', phase:'3月', desc:'记录 6 次偏稀'},
      {title:'硬便最集中', phase:'11月', desc:'记录 7 次偏硬'},
    ],
  },
  {
    key:'volume', tab:'分量', name:'分量', marker:'size', cats:STOOL_STATE_VOLUME, byDay:STATE_VOLUME_BY_DAY, order:['tiny','small','mid','big'],
    modules:[
      {title:'排得最多', phase:'月经期', phaseColor:'#ef6f8f', desc:'记录 4 次一般~大量'},
      {title:'排得最少', phase:'黄体期', phaseColor:'#3ec19a', desc:'记录 4 次少量及以下'},
    ],
    modulesYear:[
      {title:'排得最多', phase:'6月', desc:'记录 9 次一般~大量'},
      {title:'排得最少', phase:'2月', desc:'记录 8 次少量及以下'},
    ],
  },
  {
    key:'feeling', tab:'感受', name:'感受', marker:'dot', cats:STOOL_STATE_FEELING, byDay:STATE_FEELING_BY_DAY, order:['smooth','residual','hard'],
    modules:[
      {title:'最舒畅', phase:'卵泡期', phaseColor:'#3ec19a', desc:'记录 5 次舒畅'},
      {title:'最费力', phase:'黄体期', phaseColor:'#3ec19a', desc:'记录 4 次排便困难'},
    ],
    modulesYear:[
      {title:'最舒畅', phase:'4月', desc:'记录 9 次舒畅'},
      {title:'最费力', phase:'12月', desc:'记录 6 次排便困难'},
    ],
  },
];

const STOOL_STATE_TOTAL = 22;

const STOOL_STATE_YEAR = {
  shape:  ['t4','t3','t4','t1','t4','t3','t4','t5','t4','t3','t1','t4'],
  volume: ['mid','mid','small','mid','big','mid','small','mid','mid','big','small','mid'],
  feeling:['smooth','smooth','residual','smooth','smooth','hard','smooth','residual','smooth','smooth','hard','smooth'],
};

const STOOL_STATE_YEAR_TICKS = [[0,'1月'],[3,'4月'],[6,'7月'],[9,'10月'],[11,'今']];

function StoolStateScatter({dim, months}){
  const cols = months.length;
  const counts = {};
  months.forEach(m=>{ counts[m] = (counts[m] || 0) + 1; });
  const rows = dim.order.filter(k=>counts[k]);
  const W = 340, rowH = 46, padTop = 10, padBottom = 26, labelW = 78, countW = 34;
  const plotX0 = labelW, plotX1 = W - countW;
  const H = padTop + rows.length * rowH + padBottom;
  const colX = i => plotX0 + (i + 0.5) / cols * (plotX1 - plotX0);
  const rowY = idx => padTop + idx * rowH + rowH / 2;
  return (
    <svg className="review-stool-scatter" viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label={dim.name + '散点分布'}>
      <rect x={plotX0} y={padTop} width={(plotX1 - plotX0).toFixed(1)} height={(rows.length * rowH).toFixed(1)} rx="10" fill="#f7f6fb"/>
      {months.map((m, i)=>(
        <line key={'v' + i} x1={colX(i).toFixed(1)} y1={padTop + 6} x2={colX(i).toFixed(1)} y2={padTop + rows.length * rowH - 6} stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="2 3"/>
      ))}
      {rows.map((k, idx)=>{
        const cat = dim.cats[k];
        const y = rowY(idx);
        return (
          <g key={k}>
            <text x={0} y={(y + 4).toFixed(1)} textAnchor="start" fontSize="13" fill="rgba(0,0,0,0.6)" fontFamily="PingFang SC">{cat.label}</text>
            {months.map((m, i)=> m === k ? (
              <g key={i} transform={'translate(' + colX(i).toFixed(1) + ' ' + y.toFixed(1) + ')'}>
                <StoolStateMarker dim={dim} catKey={k}/>
              </g>
            ) : null)}
            <text x={W - 4} y={(y + 4).toFixed(1)} textAnchor="end" fontSize="13" fontWeight="500" fill="rgba(0,0,0,0.7)" fontFamily="PingFang SC">{counts[k]}次</text>
          </g>
        );
      })}
      {STOOL_STATE_YEAR_TICKS.map(([i, label])=>(
        <text key={label} x={colX(i).toFixed(1)} y={H - 8} textAnchor="middle" fontSize="12" fill="rgba(0,0,0,0.4)" fontFamily="PingFang SC">{label}</text>
      ))}
    </svg>
  );
}

function StoolShapeGlyph({type}){
  const c = (STOOL_SHAPE_TYPES[type] || STOOL_SHAPE_TYPES.t4).color;
  if(type === 't1'){
    return <g fill={c}><circle cx={-3.8} cy={-1} r={3.3}/><circle cx={3.8} cy={-1.4} r={3.1}/><circle cx={0} cy={4} r={3.2}/></g>;
  }
  if(type === 't2'){
    return <path fill={c} d="M-8 0.5 Q-8 -3 -5 -3.2 Q-4.6 -5 -2 -4.6 Q-0.5 -6 2 -4.8 Q3.6 -5.6 5 -3.6 Q8 -3.4 8 0.5 Q8 4 4 4.2 Q0 5 -4 4.2 Q-8 4 -8 0.5 Z"/>;
  }
  if(type === 't3'){
    return (
      <g>
        <rect x={-8} y={-3.6} width={16} height={7.2} rx={3.6} fill={c}/>
        <g stroke="rgba(255,255,255,0.55)" strokeWidth={0.9} strokeLinecap="round">
          <path d="M-3.4 -2.6 L-4 2.6"/>
          <path d="M1.4 -2.6 L2 2.6"/>
        </g>
      </g>
    );
  }
  if(type === 't4'){
    return <path d="M -7 3 A 9 9 0 0 1 7 -2" fill="none" stroke={c} strokeWidth={5} strokeLinecap="round"/>;
  }
  if(type === 't5'){
    return <g fill={c}><path d="M-7 1 Q-7 -3 -3.6 -3 Q-1.2 -3.4 -1.2 0.2 Q-1.2 3.6 -4.2 3.5 Q-7 3.4 -7 1Z"/><path d="M1 -0.6 Q1 -4.3 4.6 -3.9 Q7.4 -3.5 7 0.2 Q6.7 3.6 3.4 3.3 Q0.7 3 1 -0.6Z"/></g>;
  }
  if(type === 't6'){
    return <path fill={c} d="M-7 1 Q-8 -2 -5 -2.6 Q-5 -5 -2 -4.4 Q-1 -6 1.5 -4.8 Q3 -5.8 4.6 -3.8 Q7.6 -3.6 7.4 -0.6 Q8.4 2 5.6 3 Q4.8 5 2 4.2 Q0 5.4 -2.4 4 Q-5.6 4.8 -7 1Z"/>;
  }
  return <g fill={c}><path d="M-7 2 Q-5 -1 -2 1 Q0 -2 2.5 0.4 Q5 -1.4 7 2 Q3.5 5 -1 4.2 Q-5 5 -7 2Z"/><circle cx={-4} cy={-3.4} r={1.1}/><circle cx={3} cy={-4} r={1}/></g>;
}

function StoolFeelingFace({type}){
  const s = 'rgba(0,0,0,0.5)';
  if(type === 'smooth'){
    return (
      <g fill="none" stroke={s} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M-4 -1 Q-3 -2.6 -2 -1"/>
        <path d="M2 -1 Q3 -2.6 4 -1"/>
        <path d="M-3.4 2 Q0 5 3.4 2"/>
      </g>
    );
  }
  if(type === 'residual'){
    return (
      <g>
        <circle cx={-3} cy={-1.3} r={0.95} fill={s}/>
        <circle cx={3} cy={-1.3} r={0.95} fill={s}/>
        <path d="M-3 2.6 H3" fill="none" stroke={s} strokeWidth={1.3} strokeLinecap="round"/>
      </g>
    );
  }
  return (
    <g fill="none" stroke={s} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M-4.6 -2.6 L-2 -1.2 L-4.6 0.2"/>
      <path d="M4.6 -2.6 L2 -1.2 L4.6 0.2"/>
      <path d="M-3.4 3.2 Q0 0.6 3.4 3.2"/>
    </g>
  );
}

function StoolCatIcon({dimKey, catKey, cat}){
  if(dimKey === 'feeling'){
    return (
      <svg className="review-stool-comp-icon" viewBox="0 0 26 26" aria-hidden="true">
        <circle cx={13} cy={13} r={13} fill={cat.icon || cat.color}/>
        <g transform="translate(13 13)"><StoolFeelingFace type={catKey}/></g>
      </svg>
    );
  }
  return (
    <svg className="review-stool-comp-icon" viewBox="0 0 26 26" aria-hidden="true">
      <circle cx={13} cy={13} r={13} fill="#f4ecdb"/>
      <g transform="translate(13 13)">
        {dimKey === 'volume'
          ? <circle r={cat.size + 2.5} fill={cat.color}/>
          : <StoolShapeGlyph type={catKey}/>}
      </g>
    </svg>
  );
}

function StoolStateMarker({dim, catKey}){
  const cat = dim.cats[catKey];
  if(dim.marker === 'glyph'){
    return (
      <>
        <circle r={13} fill="#fff" stroke="rgba(0,0,0,0.06)" strokeWidth={1}/>
        <StoolShapeGlyph type={catKey}/>
      </>
    );
  }
  if(dim.marker === 'size'){
    return <circle r={cat.size} fill={cat.color}/>;
  }
  return (
    <>
      <circle r={9} fill={cat.icon || cat.color}/>
      <StoolFeelingFace type={catKey}/>
    </>
  );
}

function StoolCompositionList({rows, total, dimKey}){
  const max = Math.max(...rows.map(r=>r.count), 1);
  return (
    <div className="review-stool-comp-list">
      {rows.map((r, i)=>{
        const pct = Math.round(r.count / total * 100);
        return (
          <div className="review-stool-comp-row" key={r.label}>
            <StoolCatIcon dimKey={dimKey} catKey={r.key} cat={r.cat}/>
            <span className="review-stool-comp-label">{dimKey === 'shape' ? (i + 1) + ' ' : ''}{r.label}</span>
            <div className="review-stool-comp-track">
              <i style={{width:(r.count / max * 100) + '%', background:r.color}}/>
            </div>
            <b className="review-stool-comp-pct">{pct}%</b>
            <em className="review-stool-comp-count">{r.count}次</em>
          </div>
        );
      })}
    </div>
  );
}

function StoolStateCard({range = 'cycle'}){
  const isYear = range === 'year';
  const [dimKey, setDimKey] = React.useState('shape');
  const dim = STOOL_STATE_DIMS.find(d=>d.key === dimKey) || STOOL_STATE_DIMS[0];
  const CX = 170, RING = 150, RSW = 7, REC = 124, WEDGE = 147, HOLE = 86;
  const RC = 2 * Math.PI * RING;
  const step = 360 / 28;

  const yearMonths = STOOL_STATE_YEAR[dimKey] || [];
  const catCount = {};
  if(isYear){
    yearMonths.forEach(m=>{ catCount[m] = (catCount[m] || 0) + 1; });
  } else {
    Object.keys(dim.byDay).forEach(d=>{ const c = dim.byDay[d]; catCount[c] = (catCount[c] || 0) + 1; });
  }
  const recorded = isYear ? yearMonths.length : Object.keys(dim.byDay).length;
  let topKey = dim.order[0], topN = 0;
  dim.order.forEach(k=>{ if((catCount[k] || 0) > topN){ topN = catCount[k] || 0; topKey = k; } });
  const topCat = dim.cats[topKey] || {};
  const topPct = Math.round(topN / recorded * 100);

  const compRows = dim.order.map(k=>({key:k, label:dim.cats[k].label, count:catCount[k] || 0, color:dim.cats[k].color, cat:dim.cats[k]}));

  const posFor = (angleDeg, radius)=>{
    const r = angleDeg * Math.PI / 180;
    return {x: CX + radius * Math.cos(r), y: CX + radius * Math.sin(r)};
  };

  const gap = (3 / 360) * RC;
  let dayStart = 0;
  const arcs = STOOL_FORM_PHASES.map(ph=>{
    const startDeg = -90 + dayStart * step;
    const endDeg = -90 + (dayStart + ph.days) * step;
    const len = (ph.days / 28) * RC;
    const vis = Math.max(len - gap, 1);
    const offset = -((dayStart / 28) * RC + gap / 2);
    const p0 = posFor(startDeg, WEDGE);
    const p1 = posFor(endDeg, WEDGE);
    const large = (endDeg - startDeg) > 180 ? 1 : 0;
    const wedge = 'M ' + CX + ' ' + CX
      + ' L ' + p0.x.toFixed(2) + ' ' + p0.y.toFixed(2)
      + ' A ' + WEDGE + ' ' + WEDGE + ' 0 ' + large + ' 1 ' + p1.x.toFixed(2) + ' ' + p1.y.toFixed(2)
      + ' Z';
    dayStart += ph.days;
    return {vis, offset, color:ph.arc, fill:ph.fill, wedge};
  });

  let bAcc = 0;
  const boundaries = STOOL_FORM_PHASES.map(ph=>{
    const a = -90 + bAcc * step;
    bAcc += ph.days;
    return a;
  });

  const markers = [];
  for(let d = 1; d <= 28; d++){
    const ang = -90 + (d - 0.5) * step;
    markers.push({...posFor(ang, REC), cat:dim.byDay[d]});
  }

  return (
    <div className="review-detail-card review-stool-state-card">
      <div className="review-stool-form-head">
        <div className="review-mood-detail-head">便便状态</div>
        <div className="review-stool-form-toggle" role="tablist" aria-label="便便状态维度">
          {STOOL_STATE_DIMS.map(d=>(
            <button
              key={d.key}
              type="button"
              className={d.key === dimKey ? 'is-active' : ''}
              aria-selected={d.key === dimKey}
              onClick={()=>setDimKey(d.key)}
            >{d.tab}</button>
          ))}
        </div>
      </div>
      {isYear ? (
        <StoolStateScatter dim={dim} months={yearMonths}/>
      ) : (
      <div className="review-stool-form-wrap">
        <svg viewBox="0 0 340 340" role="img" aria-label="便便状态分布图">
          {arcs.map((a, i)=>(
            <path key={'wedge' + i} d={a.wedge} fill={a.fill}/>
          ))}
          <circle cx={CX} cy={CX} r={HOLE} fill="#fff"/>
          {arcs.map((a, i)=>(
            <circle
              key={'arc' + i}
              cx={CX}
              cy={CX}
              r={RING}
              fill="none"
              stroke={a.color}
              strokeWidth={RSW}
              strokeDasharray={a.vis.toFixed(2) + ' ' + (RC - a.vis).toFixed(2)}
              strokeDashoffset={a.offset.toFixed(2)}
              transform={'rotate(-90 ' + CX + ' ' + CX + ')'}
            />
          ))}
          {boundaries.map((a, i)=>{
            const p = posFor(a, RING);
            return <circle key={'bd' + i} cx={p.x.toFixed(2)} cy={p.y.toFixed(2)} r={3} fill="rgba(0,0,0,0.16)"/>;
          })}
          {markers.map((m, i)=> m.cat ? (
            <g key={'m' + i} transform={'translate(' + m.x.toFixed(2) + ' ' + m.y.toFixed(2) + ')'}>
              <StoolStateMarker dim={dim} catKey={m.cat}/>
            </g>
          ) : (
            <circle key={'g' + i} cx={m.x.toFixed(2)} cy={m.y.toFixed(2)} r={2.6} fill="rgba(0,0,0,0.12)"/>
          ))}
        </svg>
        <div className="review-stool-form-center">
          <span>最常见</span>
          <b style={{color:topCat.color}}>{topCat.label}</b>
        </div>
        {STOOL_FORM_PHASES.map(ph=>(
          <span
            key={ph.key}
            className="review-stool-form-label"
            style={{top:ph.pos.top, left:ph.pos.left, color:ph.text}}
          >{ph.label}</span>
        ))}
      </div>
      )}
      <div className="review-stool-state-divider"/>
      <div className="review-stool-comp-head">{dim.name}构成</div>
      <StoolCompositionList rows={compRows} total={recorded} dimKey={dimKey}/>
      <div className="review-mood-time-summary review-stool-state-modules">
        {(isYear ? dim.modulesYear : dim.modules).map(m=>(
          <div className="review-mood-time-summary-card" key={m.title}>
            <span>{m.title}</span>
            <div className="review-stool-state-main">
              {m.phaseColor ? <i style={{background:m.phaseColor}}/> : null}
              <b>{m.phase}</b>
            </div>
            <em>{m.desc}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoolBarList({items}){
  const max = Math.max(...items.map(it=>it.count), 1);
  return (
    <div className="review-mood-share-bars review-stool-phase-share">
      <div className="review-mood-share-bars-list">
        {items.map(it=>(
          <div className="review-stool-phase-row" key={it.label}>
            <div className="review-stool-phase-top">
              <span>{it.label}</span>
              <b>{it.count}<em>次</em></b>
            </div>
            <div className="review-mood-share-bar-track">
              <i style={{width:(it.count / max * 100) + '%', background:it.color}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const STOOL_TIME_DENSITY = [0.02,0.01,0.01,0.01,0.02,0.05,0.16,0.55,0.95,0.62,0.32,0.16,0.10,0.12,0.20,0.30,0.22,0.14,0.12,0.16,0.24,0.32,0.20,0.08,0.03];

const STOOL_TIME_BARS = [
  {label:'小于5分钟', count:4, color:'#d9cff5', textLight:false},
  {label:'5-10分钟', count:7, color:'#ae97e8', textLight:true},
  {label:'10-20分钟', count:3, color:'#7c5fd3', textLight:true},
  {label:'大于20分钟', count:2, color:'#452c93', textLight:true},
];

const STOOL_TIME_BARS_YEAR = [
  {label:'小于5分钟', count:62, color:'#d9cff5', textLight:false},
  {label:'5-10分钟', count:110, color:'#ae97e8', textLight:true},
  {label:'10-20分钟', count:48, color:'#7c5fd3', textLight:true},
  {label:'大于20分钟', count:30, color:'#452c93', textLight:true},
];

function StoolTimeWave(){
  const W = 340, H = 148;
  const padL = 14, padR = 14, padT = 30, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = Math.max(...STOOL_TIME_DENSITY);
  const X = h => x0 + (h / 24) * (x1 - x0);
  const Y = v => y1 - (v / yMax) * (y1 - y0);
  const pts = STOOL_TIME_DENSITY.map((v, i)=>[X(i), Y(v)]);
  const line = reviewSmoothPath(pts);
  const area = line + ' L' + X(24).toFixed(1) + ' ' + y1.toFixed(1) + ' L' + X(0).toFixed(1) + ' ' + y1.toFixed(1) + ' Z';
  const ticks = [0, 6, 12, 18, 24];
  const bandX0 = X(7), bandX1 = X(9);
  return (
    <svg className="review-stool-time-wave" viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="排便时段分布">
      <defs>
        <linearGradient id="stoolTimeWaveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,95,211,0.30)"/>
          <stop offset="100%" stopColor="rgba(124,95,211,0.02)"/>
        </linearGradient>
      </defs>
      <rect x={bandX0.toFixed(1)} y={y0} width={(bandX1 - bandX0).toFixed(1)} height={(y1 - y0).toFixed(1)} rx="6" fill="rgba(124,95,211,0.14)"/>
      <path d={area} fill="url(#stoolTimeWaveFill)"/>
      <path d={line} fill="none" stroke="#7c5fd3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x={X(8).toFixed(1)} y={y0 - 9} textAnchor="middle" fontSize="13" fontWeight="500" fill="#7c5fd3" fontFamily="PingFang SC">7-9点</text>
      {ticks.map(t=>(
        <text key={t} x={X(t).toFixed(1)} y={H - 6} textAnchor={t === 0 ? 'start' : t === 24 ? 'end' : 'middle'} fontSize="12" fill="rgba(0,0,0,0.4)" fontFamily="PingFang SC">{t}点</text>
      ))}
    </svg>
  );
}

function StoolTimeBars({bars = STOOL_TIME_BARS}){
  const total = bars.reduce((s, b)=>s + b.count, 0) || 1;
  const max = Math.max(...bars.map(b=>b.count), 1);
  return (
    <div className="review-stool-time-list">
      {bars.map(b=>{
        const pct = Math.round(b.count / total * 100);
        return (
          <div className="review-stool-time-row" key={b.label}>
            <span className="review-stool-time-label">{b.label}</span>
            <div className="review-stool-time-track">
              <div
                className="review-stool-time-fill"
                style={{width:(b.count / max * 100) + '%', background:b.color}}
              >
                <em style={{color:b.textLight ? '#fff' : 'rgba(0,0,0,0.55)'}}>{b.count}次</em>
              </div>
            </div>
            <b className="review-stool-time-pct">{pct}%</b>
          </div>
        );
      })}
    </div>
  );
}

function StoolTimeCard({range = 'cycle'}){
  const bars = range === 'year' ? STOOL_TIME_BARS_YEAR : STOOL_TIME_BARS;
  const topBar = bars.reduce((a, b)=>b.count > a.count ? b : a);
  return (
    <div className="review-detail-card review-stool-time-card">
      <div className="review-mood-detail-head">排便时间</div>
      <StoolTimeWave/>
      <div className="review-stool-state-divider"/>
      <div className="review-stool-comp-head">单次用时</div>
      <StoolTimeBars bars={bars}/>
      <div className="review-mood-time-summary review-stool-state-modules">
        <div className="review-mood-time-summary-card">
          <span>最常便便时段</span>
          <div className="review-stool-state-main">
            <b>早上</b>
          </div>
        </div>
        <div className="review-mood-time-summary-card">
          <span>最常便便用时</span>
          <div className="review-stool-state-main">
            <b>{topBar.label}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoolReviewMetric({segments, label}){
  return (
    <div className="review-metric">
      <div className="review-stool-metric-value">
        {segments.map((seg, i)=>(
          <React.Fragment key={i}>
            {seg.value != null ? (
              <span className={'review-stool-metric-number' + (i > 0 && seg.value != null ? ' is-secondary' : '')}>
                {seg.value}
              </span>
            ) : null}
            {seg.unit ? <span className="review-stool-metric-unit">{seg.unit}</span> : null}
          </React.Fragment>
        ))}
      </div>
      <div className="review-metric-label">{label}</div>
    </div>
  );
}

function ExpandedStoolChart(){
  const records = STOOL_ALL_RECORDS;
  const values = records.map(r=>r.count);
  const n = values.length;
  const W = Math.max(1160, n * 22);
  const H = 250;
  const padL = 44, padR = 34, padT = 18, padB = 32;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 3;
  const X = i => x0 + (n <= 1 ? 0 : (x1 - x0) * (i / (n - 1)));
  const Y = v => y1 - (v / yMax) * (y1 - y0);
  const pts = values.map((v, i)=>[X(i), Y(v)]);
  const linePath = pts.map((p, i)=>(i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const areaPath = linePath
    + ' L' + pts[n - 1][0].toFixed(1) + ' ' + y1.toFixed(1)
    + ' L' + pts[0][0].toFixed(1) + ' ' + y1.toFixed(1)
    + ' Z';
  const labelIndexes = records.map((_r, i)=>i).filter(i=>i % 5 === 0 || i === n - 1);
  const stoolColor = '#8264bd';
  const gradId = 'stoolLandscapeFill';

  return (
    <svg
      viewBox={'0 0 ' + W + ' ' + H}
      style={{width:W + 'px'}}
      preserveAspectRatio="none"
      role="img"
      aria-label="全部便便记录次数折线图"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stoolColor} stopOpacity="0.28"/>
          <stop offset="55%" stopColor={stoolColor} stopOpacity="0.1"/>
          <stop offset="100%" stopColor={stoolColor} stopOpacity="0.02"/>
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map(tick=>(
        <React.Fragment key={tick}>
          <line
            x1={x0}
            y1={Y(tick)}
            x2={x1}
            y2={Y(tick)}
            stroke="rgba(130,100,189,0.16)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <text
            x={x0 - 8}
            y={Y(tick) + 4}
            textAnchor="end"
            fontSize="10"
            fill="#aaaab0"
            fontFamily="PingFang SC"
          >
            {tick}次
          </text>
        </React.Fragment>
      ))}
      <path d={areaPath} fill={'url(#' + gradId + ')'}/>
      <path d={linePath} fill="none" stroke={stoolColor} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
      {values.map((value, i)=>{
        const isLast = i === n - 1;
        return (
          <circle
            key={i}
            cx={X(i)}
            cy={Y(value)}
            r={isLast ? 4.5 : 2.2}
            fill={stoolColor}
            stroke={isLast ? '#fff' : 'none'}
            strokeWidth={isLast ? 2 : 0}
          />
        );
      })}
      {labelIndexes.map(i=>(
        <text
          key={i}
          x={X(i)}
          y={H - 9}
          textAnchor="middle"
          fontSize="9.5"
          fill={i === n - 1 ? stoolColor : '#aaaab0'}
          fontFamily="PingFang SC"
        >
          {records[i].date}
        </text>
      ))}
    </svg>
  );
}

function StoolLandscapePage({open, onClose}){
  const scrollerRef = React.useRef(null);

  React.useEffect(()=>{
    if(!open) return undefined;
    const scroller = scrollerRef.current;
    if(scroller) scroller.scrollLeft = scroller.scrollWidth;
    const handleKeyDown = event=>{ if(event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return ()=>document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <section
      className={'review-cycle-landscape' + (open ? ' is-open' : '')}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="全部便便记录横屏图表"
    >
      <div className="review-cycle-landscape-surface">
        <header className="review-cycle-landscape-head">
          <div>
            <h2>全部便便记录</h2>
            <p>共 {STOOL_ALL_RECORDS.length} 天 · 左右滑动查看</p>
          </div>
          <button type="button" className="review-cycle-landscape-close" aria-label="关闭横屏图表" onClick={onClose}>×</button>
        </header>
        <div className="review-cycle-landscape-legend">
          <span className="review-legend-item is-stool"><i></i>便便次数</span>
          <span className="review-cycle-landscape-tip">← 滑动查看更多 →</span>
        </div>
        <div className="review-cycle-landscape-scroll" ref={scrollerRef}>
          <ExpandedStoolChart/>
        </div>
      </div>
    </section>
  );
}

function StoolDetailBody({range, periodOffset = 0}){
  void periodOffset;
  return (
    <>
      <StoolCycleTrendCard range={range}/>
      <StoolStateCard range={range}/>
      <StoolIntervalCard range={range}/>
      <StoolTimeCard range={range}/>
    </>
  );
}

function StoolDetailPage({open, onClose}){
  const [range, setRange] = React.useState('cycle');
  const [periodOffset, setPeriodOffset] = React.useState(0);
  const ranges = [
    {key:'cycle', label:'按周期'},
    {key:'year', label:'按年'},
  ];
  const switchRange = (key)=>{
    setRange(key);
    setPeriodOffset(0);
  };
  return (
    <section className={'review-cycle-detail is-fullscreen-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="便便详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">便便</span>
      </div>
      <div className="review-detail-content">
        <div className="review-segment" role="tablist" aria-label="时间范围">
          {ranges.map(item=>(
            <button
              key={item.key}
              type="button"
              className={range === item.key ? 'is-active' : ''}
              aria-selected={range === item.key}
              onClick={()=>switchRange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <MoodPeriodNav range={range} offset={periodOffset} onChange={setPeriodOffset}/>
        <StoolDetailBody range={range} periodOffset={periodOffset}/>
      </div>
    </section>
  );
}

function StoolReviewCard({onOpen, onLandscapeOpen}){
  return (
    <ReviewCard
      title="便便"
      iconClass="is-stool"
      icon={<ReviewStoolIcon/>}
      headAction={typeof onLandscapeOpen === 'function' ? (
        <button
          type="button"
          className="review-cycle-expand-btn"
          aria-label="横屏展开全部便便"
          onKeyDown={event=>event.stopPropagation()}
          onClick={event=>{
            event.stopPropagation();
            onLandscapeOpen();
          }}
        >
          <ReviewExpandIcon/>
        </button>
      ) : null}
      chart={<StoolReviewChart/>}
      legend={<span className="review-legend-item is-stool"><i></i>便便次数</span>}
      metrics={(
        <>
          <StoolReviewMetric
            label="最近记录"
            segments={[
              {value:'8', unit:'小时'},
              {value:'2', unit:'分'},
              {unit:'前'},
            ]}
          />
          <StoolReviewMetric
            label="平均每日便便"
            segments={[{value:'1.2', unit:'次'}]}
          />
          <StoolReviewMetric
            label="便便总次数"
            segments={[{value:'23', unit:'次'}]}
          />
        </>
      )}
      more="查看完整便便变化"
      onOpen={onOpen}
    />
  );
}

function LoveReviewChart(){
  const values = [3,4,2,5,3,4];
  const labels = ['1月','2月','3月','4月','5月','6月'];
  const W = 340, H = 156, padL = 28, padR = 12, padT = 14, padB = 26;
  const x0 = padL, x1 = W - padR, y1 = H - padB;
  const band = (x1 - x0) / values.length;
  const X = i => x0 + band * i + band / 2;
  const Y = v => y1 - v / 6 * 100;
  return (
    <svg viewBox="0 0 340 156" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近6个月爱爱记录次数">
      {[2,4,6].map(v=><line key={v} x1={x0} y1={Y(v)} x2={x1} y2={Y(v)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>)}
      {values.map((value, i)=>(
        <React.Fragment key={labels[i]}>
          <rect x={X(i) - 13} y={Y(value)} width="26" height={y1 - Y(value)} rx="12" fill={i === values.length - 1 ? '#ef6f83' : '#f3a4b0'}/>
          <text x={X(i)} y={Y(value) - 6} textAnchor="middle" fontSize="10" fill="#dc5c72" fontFamily="PingFang SC">{value}</text>
          <text x={X(i)} y={H - 7} textAnchor="middle" fontSize="9" fill={i === values.length - 1 ? '#dc5c72' : '#bbbbbf'} fontFamily="PingFang SC">{labels[i]}</text>
        </React.Fragment>
      ))}
    </svg>
  );
}

function LoveReviewCard(){
  return (
    <ReviewCard
      title="爱爱"
      iconClass="is-love"
      icon={<ReviewLoveIcon/>}
      chart={<LoveReviewChart/>}
      legend={<span className="review-legend-item is-love"><i></i>每月记录次数</span>}
      metrics={(
        <>
          <ReviewMetric value="4" unit="次" label="本月记录"/>
          <ReviewMetric value="3.5" unit="次" label="近半年月均"/>
          <ReviewMetric value="→ 平稳" label="整体趋势" trend/>
        </>
      )}
      more="查看完整爱爱记录"
    />
  );
}

function ReviewPage({mode='经期', shareState, onShareStateChange, onOpenPartnerPreview}){
  const [reviewSearchOpen, setReviewSearchOpen] = useState(false);
  const [shareFlowOpen, setShareFlowOpen] = useState(false);
  const [cycleDetailOpen, setCycleDetailOpen] = useState(false);
  const [cycleLandscapeOpen, setCycleLandscapeOpen] = useState(false);
  const [dietDistDetailOpen, setDietDistDetailOpen] = useState(false);
  const [dietLandscapeOpen, setDietLandscapeOpen] = useState(false);
  const [moodDetailOpen, setMoodDetailOpen] = useState(false);
  const [moodLandscapeOpen, setMoodLandscapeOpen] = useState(false);
  const [stoolDetailOpen, setStoolDetailOpen] = useState(false);
  const [stoolLandscapeOpen, setStoolLandscapeOpen] = useState(false);
  const isPeriodMode = mode === '经期';
  const cycleData = [29,34,31,30,33,31,32,36,31,30,32,30,31,29,30,31,29,30,29,31,30,30,28,28];
  const cycleLast12 = cycleData.slice(-12);
  const cycleAvg = cycleLast12.reduce((s, x)=>s + x, 0) / cycleLast12.length;
  const weightData = [103.3,98.2,101.4,97.6,98.6,97.5,97.9,97.3,96.5,99.4,102.0,100.6,101.6,99.9,101.0,102.1,100.7,101.3,101.9,100.6,101.5,102.0,101.4,101.1];
  const weightAvg = weightData.reduce((s, x)=>s + x, 0) / weightData.length;
  const weightDelta = weightData[weightData.length - 1] - weightData[0];
  const I = window.Icon;
  const ReviewSearchOverlay = window.ReviewSearchOverlay;
  const ReviewShareFlow = window.ReviewShareFlow;
  const shareStatus = shareState?.status || 'idle';
  const shareActive = shareStatus === 'invited' || shareStatus === 'accepted';

  return (
    <main className={'review-page' + (reviewSearchOpen ? ' is-review-search-open' : '')} aria-label="回顾">
      <div className="review-nav">
        <button
          type="button"
          className="review-nav-search"
          aria-label="搜索"
          aria-pressed={reviewSearchOpen}
          onClick={()=>setReviewSearchOpen(true)}
        >
          <I name="search" size={20} stroke={1.7}/>
        </button>
        <span className="review-nav-title">回顾</span>
        <button
          type="button"
          className={'review-nav-share' + (shareActive ? ' is-shared' : '')}
          aria-label="共享回顾"
          onClick={()=>setShareFlowOpen(true)}
        >
          <ReviewShareIcon/>
          <span>{shareStatus === 'accepted' ? '共享中' : shareStatus === 'invited' ? '待接受' : '共享'}</span>
          {shareActive ? <span className="review-nav-share-avatar" aria-hidden="true">👨🏻</span> : null}
        </button>
      </div>
      <div className="review-content">
        <p className="review-page-greeting">已记录 <b>350 天</b>，共 <b>{isPeriodMode ? 9 : 5} 项</b>可回顾</p>

      {isPeriodMode ? <PeriodHealthImageCard/> : null}

      <ReviewCard
        title={isPeriodMode ? '周期' : '月经周期'}
        icon={<ReviewDropletIcon/>}
        headAction={(
          <button
            type="button"
            className="review-cycle-expand-btn"
            aria-label="横屏展开全部周期"
            onKeyDown={event=>event.stopPropagation()}
            onClick={event=>{
              event.stopPropagation();
              setCycleLandscapeOpen(true);
            }}
          >
            <ReviewExpandIcon/>
          </button>
        )}
        chart={<CycleChart/>}
        legend={(
          <>
            <span className="review-legend-item is-cycle"><i></i>周期天数</span>
            <span className="review-legend-item is-trend"><i></i>趋势</span>
            <span className="review-legend-item is-warning"><i></i>偏长周期</span>
          </>
        )}
        metrics={(
          <>
            <ReviewMetric value={cycleData[cycleData.length - 1]} unit="天" label="最近周期"/>
            <ReviewMetric value={reviewFmt1(cycleAvg)} unit="天" label="近一年平均"/>
            <ReviewMetric value="↘ 缩短" label="整体趋势" trend/>
          </>
        )}
        more="查看AI趋势分析"
        moreBadge="VIP"
        onOpen={()=>{
          setCycleDetailOpen(true);
        }}
      />

      {isPeriodMode ? <PeriodReviewCard/> : null}

      <ReviewCard
        title="体重"
        iconClass="is-weight"
        icon={<ReviewScaleIcon/>}
        chart={<WeightChart/>}
        legend={<span className="review-legend-item is-weight"><i></i>体重（斤）</span>}
        metrics={(
          <>
            <ReviewMetric value={reviewFmt1(weightData[weightData.length - 1])} unit="斤" label="最近体重"/>
            <ReviewMetric value={reviewFmt1(weightAvg)} unit="斤" label="半年均值"/>
            <ReviewMetric value={(weightDelta > 0 ? '+' : '') + reviewFmt1(weightDelta)} unit="斤" label="较半年前"/>
          </>
        )}
        more="查看完整体重变化"
      />

      <DietDistributionCard
        onOpen={()=>setDietDistDetailOpen(true)}
        onLandscapeOpen={()=>setDietLandscapeOpen(true)}
      />
      {!isPeriodMode ? <DietPhotoWallCard/> : null}

      {isPeriodMode ? <SymptomReviewCard/> : null}

      <MoodReviewCard
        onOpen={()=>setMoodDetailOpen(true)}
        onLandscapeOpen={()=>setMoodLandscapeOpen(true)}
      />

      {isPeriodMode ? (
        <StoolReviewCard
          onOpen={()=>setStoolDetailOpen(true)}
          onLandscapeOpen={()=>setStoolLandscapeOpen(true)}
        />
      ) : null}
      {isPeriodMode ? <LoveReviewCard/> : null}

      </div>
      <CycleDetailPage
        open={cycleDetailOpen}
        onClose={()=>setCycleDetailOpen(false)}
      />
      {ReviewShareFlow ? <ReviewShareFlow open={shareFlowOpen} shareState={shareState} onShareStateChange={onShareStateChange} onClose={()=>setShareFlowOpen(false)} onOpenPartnerPreview={onOpenPartnerPreview}/> : null}
      {reviewSearchOpen && ReviewSearchOverlay ? (
        <ReviewSearchOverlay onClose={()=>setReviewSearchOpen(false)}/>
      ) : null}
      <DietDistributionDetailPage open={dietDistDetailOpen} onClose={()=>setDietDistDetailOpen(false)}/>
      <MoodDetailPage open={moodDetailOpen} onClose={()=>setMoodDetailOpen(false)}/>
      <MoodLandscapePage open={moodLandscapeOpen} onClose={()=>setMoodLandscapeOpen(false)}/>
      <StoolDetailPage open={stoolDetailOpen} onClose={()=>setStoolDetailOpen(false)}/>
      <StoolLandscapePage open={stoolLandscapeOpen} onClose={()=>setStoolLandscapeOpen(false)}/>
      <DietLandscapePage open={dietLandscapeOpen} onClose={()=>setDietLandscapeOpen(false)}/>
      <CycleLandscapePage open={cycleLandscapeOpen} onClose={()=>setCycleLandscapeOpen(false)}/>
    </main>
  );
}

window.ReviewPage = ReviewPage;
