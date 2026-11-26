(() => {
  const {ctx:c,W,H,FPS,cl,eo,img}=MS;
  const C={paper:'#F0EEE9',panel:'#E7E5DF',line:'#D6D3CC',ink:'#232523',muted:'#5E5D58',signal:'#086F28',signalTint:'#9FD9AC',loss:'#B23A17',caution:'#7E5700',cautionTint:'#F3D98E',white:'#FFFFFF'};
  const PIX='"Geist Pixel", ui-monospace, monospace', SANS='Arial, "Segoe UI", sans-serif', MONO='"Geist Mono", Consolas, monospace';
  let logo;
  MS.init=(prev=>async()=>{if(prev)await prev();logo=await img(`${PROJECT}/local/ev-plus-logo.png`);})(MS.init);
  const smooth=p=>{p=cl(p);return p*p*(3-2*p)};
  const text=(s,x,y,size,color=C.ink,weight=400,align='left',font=SANS)=>{c.font=`${weight} ${size}px ${font}`;c.fillStyle=color;c.textAlign=align;c.textBaseline='middle';c.fillText(s,x,y)};
  const rect=(x,y,w,h,fill=C.panel,stroke=C.line,r=12)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.5;c.stroke()}};
  const line=(x1,y1,x2,y2,color=C.line,width=1)=>{c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.strokeStyle=color;c.lineWidth=width;c.stroke()};
  const enter=(t,start,dur=.55)=>smooth((t-start)/dur);
  const run=(t,start,end)=>cl((t-start)/(end-start));
  const shown=(t,start,end,value,format)=>t<start?'—':format(value*run(t,start,end));
  function label(s,x,y,color=C.muted){text(s.toUpperCase(),x,y,15,color,500,'left',MONO)}
  function drawHeader(t){
    c.fillStyle=C.paper;c.fillRect(0,0,W,H);
    // Simple editorial grid; solid fills only, following EV+ Paper foundations.
    label('EV+ RESEARCH  ·  DAILY ON-CHAIN RECAP',76,48,C.muted);
    text('One exit. One disputed drain.',76,112,48,C.ink,400,'left',PIX);
    text('Abraxas leaves Hyperliquid; the Ansem-linked wallet trail is contested.',78,164,20,C.muted,400,'left',MONO);
    if(logo){c.save();c.beginPath();c.arc(1805,81,45,0,Math.PI*2);c.clip();c.drawImage(logo,1760,36,90,90);c.restore();}
    line(76,194,1844,194,C.line,2);
  }
  function cardTitle(n,title,x,y,col=C.signal){
    c.fillStyle=col;c.beginPath();c.arc(x,y,16,0,Math.PI*2);c.fill();
    text(String(n),x,y+1,16,C.white,500,'center',MONO);text(title,x+29,y,22,C.ink,500,'left',SANS);
  }
  function factPanel(t){
    const a=enter(t,.35);c.save();c.globalAlpha=a;c.translate(0,(1-a)*20);
    rect(76,220,810,407,C.panel);
    cardTitle('1','Abraxas · Hyperliquid exit',112,260,C.signal);
    label('PERP VOLUME BEFORE FULL WITHDRAWAL',112,309);
    const exitValue=shown(t,1.45,4.35,12.49,n=>`$${n.toFixed(2)}B`);
    text(exitValue,112,380,67,C.signal,400,'left',PIX);
    const profit=shown(t,3.25,4.7,552.49,n=>`$${n.toFixed(2)}M profit reported on Hyperliquid`);
    text(profit,114,419,18,C.muted,400,'left',SANS);
    line(112,450,850,450,C.line,1.5);
    // Transfer path rows animate as narrow directional strokes rather than decorative icons.
    if(t>=4.2){label('MOVED TO BINANCE',112,484,C.muted);
      text(shown(t,4.45,5.35,219081,n=>`${Math.floor(n).toLocaleString('en-US')} HYPE`),112,526,22,C.ink,500,'left',MONO);
      text(shown(t,5.0,5.9,13.25,n=>`≈ $${n.toFixed(2)}M`),405,526,18,C.muted,400,'left',MONO);
      const p=enter(t,5.65,.5);line(560,526,560+92*p,526,C.signal,3);if(p>.05)text('→',670,526,23,C.signal,500,'center',SANS);
      text('not a confirmed sale',850,526,15,C.caution,500,'right',MONO);
    }
    if(t>=5.75){label('ALSO WITHDREW',112,574,C.muted);
      text(shown(t,6.0,7.05,4230,n=>`${Math.floor(n).toLocaleString('en-US')} ETH`)+'  ·  '+shown(t,6.0,7.05,7.09,n=>`≈ $${n.toFixed(2)}M`),112,605,18,C.ink,500,'left',MONO);}
    c.restore();
  }
  function marketPanel(t){
    const a=enter(t,4.75);c.save();c.globalAlpha=a;c.translate(0,(1-a)*20);
    rect(910,220,934,407,C.panel);
    cardTitle('2','After the exit · market tape',946,260,C.signal);
    label('HYPE PRICE',946,310);
    const price=run(t,5.35,7.55);
    text('$61.89',946,365,39,C.ink,400,'left',PIX);
    text('→',1128,365,25,C.muted,400,'center',SANS);
    text(`~$${(61.89-4.19*price).toFixed(2)}`,1175,365,34,C.loss,400,'left',PIX);
    text(t<5.35?'—':`−${(6.9*price).toFixed(1)}%`,1758,365,28,C.loss,400,'right',PIX);
    const stats=[['OPEN INTEREST','$5.57B'],['DAY VOLUME','$5.36B'],['PERP FEES','$3.31M  ·  −32.8%']];
    const statP=run(t,7.2,9.0);
    stats.forEach((s,i)=>{const x=946+i*286;label(s[0],x,458);let val=s[1];if(i===0)val=`$${(5.57*statP).toFixed(2)}B`;if(i===1)val=`$${(5.36*statP).toFixed(2)}B`;if(i===2)val=`$${(3.31*statP).toFixed(2)}M  ·  −${(32.8*statP).toFixed(1)}%`;text(val,x,498,i===2?19:25,i===2?C.loss:C.ink,400,'left',PIX);if(i<2)line(x+260,452,x+260,535,C.line,1.3)});
    line(946,548,1808,548,C.line,1.5);
    if(t>=8.8)label('TWO READS · CAUSE NOT CONFIRMED',946,578,C.caution);
    const d=enter(t,9.0,.55);c.globalAlpha=d;rect(946,591,414,29,C.paper,C.line,5);rect(1394,591,414,29,C.paper,C.line,5);c.globalAlpha=1;
    if(t>=9.4)text('Tether trading arm leaves after Lighter exploit?',962,607,14,C.muted,400,'left',SANS);
    if(t>=9.9)text('Risk isolation after leaked key?',1792,607,14,C.muted,400,'right',SANS);
    c.restore();
  }
  function drainPanel(t){
    const a=enter(t,10.7,.8);c.save();c.globalAlpha=a;c.translate(0,(1-a)*23);
    rect(76,653,1768,280,C.panel);
    cardTitle('3','Ansem-linked drain · still disputed',112,694,C.caution);
    text(shown(t,11.05,13.0,2.57,n=>`$${n.toFixed(2)}M`),112,776,58,C.caution,400,'left',PIX);
    if(t>=13.0)text('USDC still unsold on Arbitrum',114,815,18,C.muted,400,'left',SANS);
    line(720,728,720,878,C.line,1.5);
    label('WALLET TRACE REPORTED',770,739,C.muted);
    const p=run(t,12.45,14.35);
    // Count blocks grow as a compact table, never implying the drain is proven to be a hack.
    for(let i=0;i<24;i++){
      const col=i%12,row=Math.floor(i/12),x=770+col*34,y=779+row*26;
      if(i<24){rect(x,y,22,14,i<9?C.cautionTint:C.signalTint,null,2);}
      if(i<Math.floor(24*p))c.fillStyle=i<9?C.caution:C.signal,c.fillRect(x,y,22,14);
    }
    if(t>=14.35)text('24 other wallets traced · 9 Bullpen users',770,856,17,C.ink,400,'left',MONO);
    const caution=enter(t,13.2,.7);c.globalAlpha=caution;rect(1453,721,334,54,C.cautionTint,null,5);c.globalAlpha=1;
    if(t>=13.85){text('DISPUTED · CT SPLIT ON HACK CLAIM',1620,748,15,C.caution,500,'center',MONO);text('Wallet movement reported; cause remains contested.',1620,824,17,C.ink,400,'center',SANS);}
    c.restore();
  }
  function footer(t){
    c.save();c.globalAlpha=enter(t,14.25,.65);
    line(76,958,1844,958,C.line,1.5);
    text('Source: @EVplus_DAO · daily on-chain recap · 25 Nov 2026, 22:40 ICT',76,986,13,C.muted,400,'left',MONO);
    text('Note: HYPE transfer ≠ confirmed sale. Exit rationale and hack claim are disputed.',76,1013,13,C.muted,400,'left',MONO);
    text('EV+ DAO',1843,1021,14,C.ink,500,'right',MONO);
    c.restore();
  }
  MS.scene('evplus-recap',(sh,f)=>{
    const t=(f-sh.t0)/FPS;
    drawHeader(t);factPanel(t);marketPanel(t);drainPanel(t);footer(t);
    // A thin progress cue is functional: advances through the report, without slide cuts.
    c.fillStyle=C.line;c.fillRect(76,1041,1768,4);c.fillStyle=C.signal;c.fillRect(76,1041,1768*cl(t/15),4);
  });
})();
