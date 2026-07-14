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
    <section className={'review-cycle-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="月经周期详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">月经周期</span>
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
          <div className="review-ai-lock-mask">
            <button type="button" className="review-ai-unlock-btn">
              <span className="review-ai-unlock-vip">VIP</span>
              <span>立即解锁</span>
            </button>
          </div>
        </div>
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
const DIET_STACK_DAYS = [
  {date:'7.7', meals:{lunch:520, dinner:610, snack:120, drink:180, other:40}},
  {date:'7.8', meals:{breakfast:260, lunch:640, dinner:690, snack:150, other:70}},
  {date:'7.9', meals:{breakfast:310, lunch:480, dinner:550, drink:160}},
  {date:'7.10', meals:{lunch:680, dinner:720, snack:210, drink:240, other:80}},
  {date:'7.11', meals:{breakfast:290, lunch:560, dinner:600, snack:90, other:50}},
  {date:'7.12', meals:{breakfast:340, lunch:520, dinner:650, snack:80, drink:200}},
  {date:'今天', meals:{breakfast:280, lunch:460, drink:158}, highlight:true},
].map((day)=>{
  const total = DIET_MEAL_ORDER.reduce((sum, key)=>sum + (day.meals[key] || 0), 0);
  return {...day, total};
});

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
  const ratio = goal > 0 ? Math.min(day.intake / goal, 1.15) : 0;
  return {...day, goal, remain, over, ratio, empty: day.intake <= 0};
});

function DietDistributionChart(){
  const days = DIET_STACK_DAYS;
  const W = 340, H = 188, padL = 34, padR = 10, padT = 22, padB = 26;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMax = 2500;
  const band = (x1 - x0) / days.length;
  const barWidth = 20;
  const gap = 2;
  const radius = 4;
  const X = i => x0 + band * i + band / 2;
  const Y = value => y1 - value / yMax * (y1 - y0);
  // SVG 自下而上堆叠，反转后视觉上从上到下为：早→午→晚→加餐→饮品→其他
  const stackFromBottom = [...DIET_MEAL_ORDER].reverse();
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天热量分布堆叠柱状图">
      {[500,1000,1500,2000,2500].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      {days.map((day, i)=>{
        let stacked = 0;
        const segments = stackFromBottom
          .map(type=>({type, value:day.meals[type] || 0}))
          .filter(segment=>segment.value > 0);
        return (
          <React.Fragment key={day.date}>
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

function DietDistributionCard({onOpen, title='热量分布', more='查看完整热量分布'}){
  return (
    <ReviewCard
      title={title}
      iconClass="is-diet"
      icon={<ReviewDietIcon/>}
      chart={<DietDistributionChart/>}
      legend={(
        <>
          {DIET_MEAL_ORDER.map(type=>(
            <span className={'review-legend-item is-diet-meal is-' + type} key={type}>
              <i style={{background:DIET_MEAL_COLORS[type]}}></i>{DIET_MEAL_LABELS[type]}
            </span>
          ))}
        </>
      )}
      metrics={(
        <>
          <ReviewMetric value="1660" unit="kcal" label="近7天日均"/>
          <ReviewMetric value="+60" unit="kcal" label="较上周"/>
          <ReviewMetric value="6" unit="/7天" label="记录天数"/>
        </>
      )}
      more={more}
      onOpen={onOpen}
    />
  );
}

function buildDietDetailDays(count){
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
    const label = (i === 0) ? '今天' : ((d.getMonth() + 1) + '.' + d.getDate());
    const skip = rnd() < 0.12 && i !== 0;
    if(skip){
      days.push({date:label, total:0, meals:{}, empty:true, highlight:i === 0});
      continue;
    }
    const meals = {
      breakfast: rnd() < 0.18 ? 0 : Math.round(220 + rnd() * 180),
      lunch: Math.round(420 + rnd() * 280),
      dinner: rnd() < 0.08 ? 0 : Math.round(450 + rnd() * 300),
      snack: rnd() < 0.35 ? 0 : Math.round(60 + rnd() * 160),
      drink: rnd() < 0.25 ? 0 : Math.round(80 + rnd() * 180),
      other: rnd() < 0.55 ? 0 : Math.round(30 + rnd() * 80),
    };
    const total = DIET_MEAL_ORDER.reduce((sum, key)=>sum + (meals[key] || 0), 0);
    days.push({date:label, total, meals, highlight:i === 0});
  }
  return days;
}

const DIET_DETAIL_SERIES = {
  '7d': DIET_STACK_DAYS,
  '30d': buildDietDetailDays(30),
  'all': buildDietDetailDays(90),
};

function DietDistributionDetailChart({range}){
  const days = DIET_DETAIL_SERIES[range] || DIET_DETAIL_SERIES['7d'];
  if(range === '7d'){
    const W = 340, H = 188, padL = 34, padR = 10, padT = 22, padB = 26;
    const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
    const yMax = 2500;
    const band = (x1 - x0) / days.length;
    const barWidth = 20;
    const gap = 2;
    const radius = 4;
    const X = i => x0 + band * i + band / 2;
    const Y = value => y1 - value / yMax * (y1 - y0);
    const stackFromBottom = [...DIET_MEAL_ORDER].reverse();
    return (
      <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天热量分布堆叠柱状图">
        {[500,1000,1500,2000,2500].map(tick=>(
          <React.Fragment key={tick}>
            <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
            <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}</text>
          </React.Fragment>
        ))}
        <line x1={x0} y1={y1} x2={x1} y2={y1} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
        {days.map((day, i)=>{
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

  const points = days.filter(day=>!day.empty);
  const n = points.length;
  const W = 340, H = 180, padL = 34, padR = 14, padT = 16, padB = 28;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 800, yMax = 2400;
  const goal = DIET_TARGET_GOAL;
  const X = i => x0 + (x1 - x0) * (i / Math.max(n - 1, 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const vals = points.map(d=>d.total);
  const pts = vals.map((v, i)=>[X(i), Y(v)]);
  let maxI = 0, minI = 0;
  vals.forEach((v, i)=>{ if(v > vals[maxI]) maxI = i; if(v < vals[minI]) minI = i; });
  const markCount = range === '30d' ? 5 : 6;
  const marks = [];
  for(let i = 0; i < markCount; i++){
    marks.push(Math.round(i * (n - 1) / Math.max(markCount - 1, 1)));
  }
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio="xMidYMid meet" role="img" aria-label="热量摄入趋势曲线">
      {[1000,1400,1800,2200].map(tick=>(
        <React.Fragment key={tick}>
          <line x1={x0} y1={Y(tick)} x2={x1} y2={Y(tick)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          <text x={x0 - 5} y={Y(tick) + 3} textAnchor="end" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{tick}</text>
        </React.Fragment>
      ))}
      <line x1={x0} y1={Y(goal)} x2={x1} y2={Y(goal)} stroke="#ffb15a" strokeWidth="1" strokeDasharray="3 3"/>
      <text x={x1} y={Y(goal) - 4} textAnchor="end" fontSize="9" fill="#e8930f" fontFamily="PingFang SC">目标 {goal} kcal</text>
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#ff7a3d" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {vals.map((v, i)=>{
        const isMax = i === maxI;
        const isMin = i === minI;
        const isLast = i === n - 1;
        return (
          <React.Fragment key={i}>
            <circle cx={X(i)} cy={Y(v)} r={isLast || isMax || isMin ? 3.8 : 1.8} fill={isMax ? '#ff9500' : '#ff7a3d'} stroke={(isLast || isMax || isMin) ? '#fff' : 'none'} strokeWidth="1.5"/>
            {isMax ? <text x={X(i)} y={Y(v) - 8} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#e8930f" fontFamily="PingFang SC">{v}</text> : null}
            {isLast && !isMax ? <text x={X(i)} y={Y(v) + 14} textAnchor="end" fontSize="9.5" fontWeight="600" fill="#ff7a3d" fontFamily="PingFang SC">{v}</text> : null}
          </React.Fragment>
        );
      })}
      {marks.map(idx=>(
        <text key={idx} x={X(idx)} y={H - 9} textAnchor="middle" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{points[idx].date}</text>
      ))}
    </svg>
  );
}

function DietDistributionDetailPage({open, onClose}){
  const [range, setRange] = useState('7d');
  const ranges = [
    {key:'7d', label:'最近7天'},
    {key:'30d', label:'最近30天'},
    {key:'all', label:'全部'},
  ];

  return (
    <section className={'review-cycle-detail' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="热量分布详情">
      <div className="review-detail-nav">
        <button type="button" className="review-detail-back" aria-label="返回" onClick={onClose}>
          <ReviewBackIcon/>
        </button>
        <span className="review-detail-title">热量分布</span>
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

        <div className="review-detail-card">
          <div className="review-chart review-detail-chart"><DietDistributionDetailChart range={range}/></div>
          <div className="review-legend">
            {range === '7d' ? DIET_MEAL_ORDER.map(type=>(
              <span className={'review-legend-item is-diet-meal is-' + type} key={type}>
                <i style={{background:DIET_MEAL_COLORS[type]}}></i>{DIET_MEAL_LABELS[type]}
              </span>
            )) : (
              <>
                <span className="review-legend-item is-diet"><i></i>每日摄入</span>
                <span className="review-legend-item is-diet-band"><i></i>热量目标</span>
              </>
            )}
          </div>
        </div>

        <div className="review-detail-card">
          <div className="review-insight-head">
            <span className="review-ai-badge" aria-hidden="true">AI</span>
            <span>趋势分析</span>
          </div>
          <div className="review-insight-body">
            <div className="review-insight-item is-good">
              <span className="review-insight-dot"></span>
              <div>
                <div className="review-insight-title">整体摄入：中高偏稳</div>
                <div className="review-insight-text">近 7 天有记录日日均约 <b>1660 kcal</b>，较上周略升 <b>60 kcal</b>。多数天数落在 <b>1500-1900</b> 区间，波动不算大，属于比较稳定的摄入节奏。</div>
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
                <div className="review-insight-text">近 7 天记录了 <b>6/7</b> 天，近 30 天大约能覆盖七八成有记录日。连续记录能让餐次比例判断更可靠，也更容易看出「某几天突然冲高」是不是偶发。</div>
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
      </div>
    </section>
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
      headAction={(
        <button
          type="button"
          className="review-card-head-btn is-budget"
          title="点击可修改热量目标"
          aria-label={'热量目标 ' + DIET_TARGET_GOAL + '，点击可修改'}
          onClick={(event)=>event.stopPropagation()}
        >
          <span>热量目标 {DIET_TARGET_GOAL}</span>
          <i className="review-diet-budget-tip" aria-hidden="true">!</i>
        </button>
      )}
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

function MoodChart(){
  const data = [72,68,75,70,66,73,78,74,69,80,76,71,82,77,73,86,79,75,84,81,78,85,80,83];
  const n = data.length;
  const W = 340, H = 168, padL = 44, padR = 14, padT = 14, padB = 24;
  const x0 = padL, x1 = W - padR, y0 = padT, y1 = H - padB;
  const yMin = 55, yMax = 95;
  const X = i => x0 + (x1 - x0) * (i / (n - 1));
  const Y = v => y1 - (v - yMin) / (yMax - yMin) * (y1 - y0);
  const pts = data.map((v, i)=>[X(i), Y(v)]);
  const labels = {0:'25.12', 11:'26.3', 23:'26.6'};
  const bands = [
    {name:'积极', lo:81.667, hi:95, fill:'rgba(255,180,40,0.07)'},
    {name:'一般', lo:68.333, hi:81.667, fill:'rgba(79,124,174,0.06)'},
    {name:'消极', lo:55, hi:68.333, fill:'rgba(255,77,136,0.05)'},
  ];
  return (
    <svg viewBox="0 0 340 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="心情变化趋势曲线">
      {bands.map(b=>{
        const yt = Y(b.hi), yb = Y(b.lo);
        return (
          <React.Fragment key={b.name}>
            <rect x={x0} y={yt} width={x1 - x0} height={yb - yt} fill={b.fill}/>
            <text x={x0 - 8} y={(yt + yb) / 2 + 3} textAnchor="end" fontSize="10" fill="#999999" fontFamily="PingFang SC">{b.name}</text>
          </React.Fragment>
        );
      })}
      {[81.667,68.333].map(g=><line key={g} x1={x0} y1={Y(g)} x2={x1} y2={Y(g)} stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>)}
      <path d={reviewSmoothPath(pts)} fill="none" stroke="#b972ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((v, i)=>(
        <circle key={i} cx={X(i)} cy={Y(v)} r={i === n - 1 ? 4.5 : 2.2} fill="#b972ff" stroke={i === n - 1 ? '#fff' : 'none'} strokeWidth="2"/>
      ))}
      {Object.keys(labels).map(k=>(
        <text key={k} x={X(+k)} y={H - 7} textAnchor="middle" fontSize="9" fill="#bbbbbf" fontFamily="PingFang SC">{labels[k]}</text>
      ))}
    </svg>
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

function StoolReviewChart(){
  const values = [1,1,0,2,1,1,1];
  const labels = ['周一','周二','周三','周四','周五','周六','今天'];
  const W = 340, H = 156, padL = 28, padR = 12, padT = 14, padB = 26;
  const x0 = padL, x1 = W - padR, y1 = H - padB;
  const band = (x1 - x0) / values.length;
  const X = i => x0 + band * i + band / 2;
  const Y = v => y1 - v / 3 * 94;
  return (
    <svg viewBox="0 0 340 156" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近7天便便次数">
      <rect x={x0} y={Y(1.5)} width={x1 - x0} height={Y(0.5) - Y(1.5)} rx="8" fill="rgba(129,97,191,0.06)"/>
      <text x={x1} y={Y(1.5) - 4} textAnchor="end" fontSize="9" fill="#8d72c5" fontFamily="PingFang SC">规律区间</text>
      {values.map((value, i)=>(
        <React.Fragment key={labels[i]}>
          {value > 0 ? <rect x={X(i) - 11} y={Y(value)} width="22" height={y1 - Y(value)} rx="10" fill={i === values.length - 1 ? '#8264bd' : '#b49fd9'}/> : <circle cx={X(i)} cy={y1 - 4} r="3" fill="#d7d3dc"/>}
          <text x={X(i)} y={H - 7} textAnchor="middle" fontSize="9" fill={i === values.length - 1 ? '#8264bd' : '#bbbbbf'} fontFamily="PingFang SC">{labels[i]}</text>
        </React.Fragment>
      ))}
    </svg>
  );
}

function StoolReviewCard(){
  return (
    <ReviewCard
      title="便便"
      iconClass="is-stool"
      icon={<ReviewStoolIcon/>}
      chart={<StoolReviewChart/>}
      legend={<span className="review-legend-item is-stool"><i></i>每日次数</span>}
      metrics={(
        <>
          <ReviewMetric value="1" unit="次" label="最近记录"/>
          <ReviewMetric value="1.0" unit="次" label="近7天日均"/>
          <ReviewMetric value="→ 规律" label="整体趋势" trend/>
        </>
      )}
      more="查看完整便便变化"
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

function ReviewPage({mode='经期', cycleShared=false, onCycleSharedChange}){
  const [reviewSearchOpen, setReviewSearchOpen] = useState(false);
  const [shareHubOpen, setShareHubOpen] = useState(false);
  const [cycleDetailOpen, setCycleDetailOpen] = useState(false);
  const [cycleShareOpen, setCycleShareOpen] = useState(false);
  const [cycleLandscapeOpen, setCycleLandscapeOpen] = useState(false);
  const [sharedReviewCards, setSharedReviewCards] = useState({});
  const [dietDistDetailOpen, setDietDistDetailOpen] = useState(false);
  const isPeriodMode = mode === '经期';
  const cycleData = [29,34,31,30,33,31,32,36,31,30,32,30,31,29,30,31,29,30,29,31,30,30,28,28];
  const cycleLast12 = cycleData.slice(-12);
  const cycleAvg = cycleLast12.reduce((s, x)=>s + x, 0) / cycleLast12.length;
  const weightData = [103.3,98.2,101.4,97.6,98.6,97.5,97.9,97.3,96.5,99.4,102.0,100.6,101.6,99.9,101.0,102.1,100.7,101.3,101.9,100.6,101.5,102.0,101.4,101.1];
  const weightAvg = weightData.reduce((s, x)=>s + x, 0) / weightData.length;
  const weightDelta = weightData[weightData.length - 1] - weightData[0];
  const I = window.Icon;
  const ReviewSearchOverlay = window.ReviewSearchOverlay;
  const sharedReviewCount = (cycleShared ? 1 : 0) + Object.values(sharedReviewCards).filter(Boolean).length;

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
          className={'review-nav-share' + (sharedReviewCount ? ' is-shared' : '')}
          aria-label="共享回顾"
          onClick={()=>setShareHubOpen(true)}
        >
          <ReviewShareIcon/>
          <span>{sharedReviewCount ? '共享中' : '共享'}</span>
          {sharedReviewCount ? <span className="review-nav-share-avatar" aria-hidden="true">👨🏻</span> : null}
        </button>
      </div>
      <div className="review-content">
        <p className="review-page-greeting">已记录 <b>350 天</b>，共 <b>{isPeriodMode ? 12 : 8} 项</b>可回顾</p>

      <ReviewCard
        title={isPeriodMode ? '周期' : '月经周期'}
        icon={<ReviewDropletIcon/>}
        chart={<CycleChart/>}
        legend={(
          <>
            <span className="review-legend-item is-cycle"><i></i>周期天数</span>
            <span className="review-legend-item is-trend"><i></i>趋势</span>
            <span className="review-legend-item is-warning"><i></i>偏长周期</span>
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
          setCycleShareOpen(false);
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

      {isPeriodMode ? <SymptomReviewCard/> : null}

      {!isPeriodMode ? (
        <>
          <DietDistributionCard onOpen={()=>setDietDistDetailOpen(true)}/>
          <DietTargetCard/>
          <DietPhotoWallCard/>
        </>
      ) : null}

      <ReviewCard
        title="心情"
        iconClass="is-mood"
        icon={<ReviewMoodIcon/>}
        chart={<MoodChart/>}
        legend={<span className="review-legend-item is-mood"><i></i>心情</span>}
        metrics={(
          <>
            <div className="review-metric"><ReviewMoodValue kind="happy" word="开心"/><div className="review-metric-label">最近心情</div></div>
            <div className="review-metric"><ReviewMoodValue kind="calm" word="平静"/><div className="review-metric-label">半年平均</div></div>
            <div className="review-metric"><ReviewMoodValue word="↗ 变好" trend/><div className="review-metric-label">较半年前</div></div>
          </>
        )}
        more="查看完整心情变化"
        sample={(
          <div className="review-mask">
            <div className="review-mask-icon" aria-hidden="true"><ReviewDropletIcon/></div>
            <p className="review-mask-text">去点滴记录心情后可以生成回顾</p>
            <button type="button" className="review-mask-btn">
              <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>去点滴记录
            </button>
          </div>
        )}
      />

      {isPeriodMode ? (
        <DietDistributionCard
          title="饮食"
          more="查看完整饮食变化"
          onOpen={()=>setDietDistDetailOpen(true)}
        />
      ) : null}

      {isPeriodMode ? <StoolReviewCard/> : null}
      {isPeriodMode ? <LoveReviewCard/> : null}

      <FeedingReviewCard/>
      <SleepReviewCard/>
      <DiaperReviewCard/>
      <FoodReviewCard/>
      </div>
      <CycleDetailPage
        open={cycleDetailOpen}
        onClose={()=>setCycleDetailOpen(false)}
      />
      <ReviewShareHubPage
        open={shareHubOpen}
        onClose={()=>setShareHubOpen(false)}
        cycleShared={cycleShared}
        onCycleManage={()=>{
          setCycleShareOpen(true);
        }}
        sharedCards={sharedReviewCards}
        onToggleCard={(title, shared)=>setSharedReviewCards(current=>({...current, [title]:shared}))}
      />
      <CycleSharePage
        open={cycleShareOpen}
        onClose={()=>setCycleShareOpen(false)}
        shared={cycleShared}
        onSharedChange={onCycleSharedChange}
      />
      {reviewSearchOpen && ReviewSearchOverlay ? (
        <ReviewSearchOverlay onClose={()=>setReviewSearchOpen(false)}/>
      ) : null}
      <DietDistributionDetailPage open={dietDistDetailOpen} onClose={()=>setDietDistDetailOpen(false)}/>
      <CycleLandscapePage open={cycleLandscapeOpen} onClose={()=>setCycleLandscapeOpen(false)}/>
    </main>
  );
}

window.ReviewPage = ReviewPage;
