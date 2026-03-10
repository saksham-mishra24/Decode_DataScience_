import { useState, useEffect, useRef, useCallback } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Raleway:wght@800;900&display=swap');`;
const T = {
  bg:"#060d1f",surface:"#0c1830",card:"#101f3a",border:"#1c3055",
  accent:"#3b82f6",teal:"#06b6d4",green:"#10b981",amber:"#f59e0b",
  rose:"#f43f5e",violet:"#8b5cf6",text:"#e2eeff",muted:"#6b8ab0",dim:"#2a4060",
};
function injectCSS(s){const el=document.createElement("style");el.innerHTML=s;document.head.appendChild(el);}
const CSS=`${FONTS}
*{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;}
body{background:${T.bg};color:${T.text};font-family:'Plus Jakarta Sans',sans-serif;line-height:1.6;}
::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:${T.surface};}::-webkit-scrollbar-thumb{background:${T.dim};border-radius:3px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes pop{0%{transform:scale(0.7);opacity:0}70%{transform:scale(1.06)}100%{transform:scale(1);opacity:1}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
@keyframes confettiFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(700px) rotate(900deg);opacity:0}}
@keyframes slideRight{from{transform:translateX(-18px);opacity:0}to{transform:translateX(0);opacity:1}}
.btn{cursor:pointer;border:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;transition:all 0.18s;border-radius:10px;}
.btn:hover{transform:translateY(-2px);filter:brightness(1.1);}.btn:active{transform:scale(0.97);}
input:focus{outline:2px solid ${T.accent}44;}
`;

function Confetti({active}){
  if(!active)return null;
  return <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9999}}>
    {Array.from({length:55},(_,i)=>({c:[T.accent,T.amber,T.green,T.violet,T.rose,T.teal][i%6],l:Math.random()*100,d:Math.random()*1.5,s:6+Math.random()*10}))
    .map((p,i)=><div key={i} style={{position:"absolute",left:`${p.l}%`,top:0,width:p.s,height:p.s,background:p.c,borderRadius:i%3===0?"50%":"2px",animation:`confettiFall 2.5s ease-in ${p.d}s forwards`}}/>)}
  </div>;
}

function Tag({children,color=T.accent}){
  return <span style={{display:"inline-block",background:color+"22",color,border:`1px solid ${color}44`,borderRadius:20,padding:"2px 11px",fontSize:11,fontWeight:700,letterSpacing:"0.05em"}}>{children}</span>;
}
function SBadge({num,label,color=T.accent}){
  return <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
    <div style={{width:34,height:34,borderRadius:9,background:color+"22",border:`2px solid ${color}55`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Raleway",fontWeight:900,fontSize:15,color}}>{num}</div>
    <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted}}>{label}</div>
  </div>;
}
function KP({icon,title,desc,color=T.accent,delay=0}){
  return <div style={{display:"flex",gap:12,padding:"13px 15px",background:T.surface,border:`1px solid ${T.border}`,borderRadius:12,animation:`fadeUp 0.5s ease ${delay}s both`}}>
    <div style={{width:38,height:38,borderRadius:9,background:color+"22",border:`1.5px solid ${color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0}}>{icon}</div>
    <div><div style={{fontWeight:700,fontSize:13,marginBottom:2,color}}>{title}</div><div style={{fontSize:12,color:T.muted,lineHeight:1.6}}>{desc}</div></div>
  </div>;
}
function DefBox({term,def,color=T.teal}){
  return <div style={{background:color+"0d",border:`1.5px solid ${color}33`,borderRadius:13,padding:"15px 18px",margin:"14px 0"}}>
    <div style={{fontFamily:"Raleway",fontSize:19,fontWeight:900,color,marginBottom:5}}>{term}</div>
    <div style={{fontSize:13,color:T.muted,lineHeight:1.7}}>{def}</div>
  </div>;
}
function Code({code}){
  return <div style={{background:"#000d1a",border:`1px solid ${T.border}`,borderRadius:11,padding:"13px 16px",fontFamily:"'Courier New',monospace",fontSize:12,color:"#7dd3fc",lineHeight:1.7,overflowX:"auto",margin:"10px 0",whiteSpace:"pre"}}>{code}</div>;
}
function Divider(){return <div style={{height:1,background:`linear-gradient(90deg,transparent,${T.border},transparent)`,margin:"24px 0"}}/>;}

/* ─── INLINE QUIZ ─── */
function IQuiz({q,opts,ans,explain,onCorrect}){
  const [sel,setSel]=useState(null);
  const oc=[T.accent,T.violet,T.green,T.amber];
  function pick(i){if(sel!==null)return;setSel(i);if(i===ans&&onCorrect)onCorrect();}
  return <div style={{background:T.surface,border:`2px solid ${T.border}`,borderRadius:15,padding:"18px",margin:"20px 0"}}>
    <div style={{display:"flex",gap:7,alignItems:"center",marginBottom:12}}><span style={{fontSize:17}}>🧠</span><span style={{fontWeight:800,fontSize:12,color:T.amber,letterSpacing:"0.08em",textTransform:"uppercase"}}>Quick Check</span></div>
    <div style={{fontWeight:700,fontSize:15,marginBottom:14,lineHeight:1.4}}>{q}</div>
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
      {opts.map((o,i)=>{
        let bg=T.card,border=T.border,col=T.text;
        if(sel!==null){if(i===ans){bg=T.green+"22";border=T.green;col=T.green;}else if(i===sel){bg=T.rose+"22";border=T.rose;col=T.rose;}}
        return <button key={i} className="btn" onClick={()=>pick(i)} style={{padding:"10px 14px",background:bg,border:`1.5px solid ${border}`,color:col,fontSize:13,textAlign:"left",borderRadius:9,display:"flex",gap:9,alignItems:"center"}}>
          <span style={{width:22,height:22,borderRadius:6,background:oc[i]+"22",border:`1px solid ${oc[i]}55`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:oc[i],flexShrink:0}}>{["A","B","C","D"][i]}</span>{o}
        </button>;
      })}
    </div>
    {sel!==null&&<div style={{marginTop:12,padding:"9px 12px",background:T.card,borderRadius:9,fontSize:12,color:T.muted,lineHeight:1.6,borderLeft:`3px solid ${sel===ans?T.green:T.rose}`}}>{sel===ans?"✅ Correct! ":"❌ Not quite — "}💡 {explain}</div>}
  </div>;
}

/* ─── POLL ─── */
function IPoll({question,opts,onVote}){
  const [votes,setVotes]=useState(opts.map(()=>Math.floor(Math.random()*12+3)));
  const [myVote,setMyVote]=useState(null);
  const total=votes.reduce((a,b)=>a+b,0);
  const bc=[T.accent,T.teal,T.violet,T.amber,T.green,T.rose];
  function vote(i){if(myVote!==null)return;setMyVote(i);setVotes(v=>v.map((x,j)=>j===i?x+1:x));if(onVote)onVote();}
  return <div style={{background:T.surface,border:`2px solid ${T.border}`,borderRadius:15,padding:"18px",margin:"20px 0"}}>
    <div style={{display:"flex",gap:7,alignItems:"center",marginBottom:10}}><span style={{fontSize:17}}>📊</span><span style={{fontWeight:800,fontSize:12,color:T.teal,letterSpacing:"0.08em",textTransform:"uppercase"}}>Live Poll</span>
    <div style={{marginLeft:"auto",fontSize:11,background:T.green+"22",border:`1px solid ${T.green}44`,borderRadius:20,padding:"1px 9px",color:T.green,animation:"pulse 2s infinite"}}>● {total} votes</div></div>
    <div style={{fontWeight:700,fontSize:14,marginBottom:14}}>{question}</div>
    {opts.map((o,i)=>{const pct=Math.round(votes[i]/total*100);return <div key={i} onClick={()=>vote(i)} style={{cursor:myVote===null?"pointer":"default",marginBottom:8}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:12,fontWeight:600,marginBottom:4}}><span style={{color:myVote===i?bc[i]:T.text}}>{o}</span><span style={{color:bc[i]}}>{pct}%</span></div>
      <div style={{background:T.card,borderRadius:20,height:26,overflow:"hidden",border:`1.5px solid ${myVote===i?bc[i]:T.border}`,transition:"border 0.3s"}}>
        <div style={{height:"100%",width:`${pct}%`,background:`linear-gradient(90deg,${bc[i]}88,${bc[i]})`,borderRadius:20,transition:"width 0.6s ease",display:"flex",alignItems:"center",paddingLeft:8,fontSize:11,fontWeight:700,color:"#fff"}}>{pct>10?`${votes[i]}`:""}</div>
      </div>
    </div>;})}
    {myVote!==null&&<div style={{marginTop:10,fontSize:12,color:T.green,fontWeight:700,animation:"pop 0.4s ease"}}>✅ Vote recorded!</div>}
  </div>;
}

/* ─── FLIP CARDS ─── */
function Flips({cards}){
  const [flipped,setFlipped]=useState([]);
  const toggle=i=>setFlipped(f=>f.includes(i)?f.filter(x=>x!==i):[...f,i]);
  return <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:10,margin:"14px 0"}}>
    {cards.map((c,i)=><div key={i} onClick={()=>toggle(i)} style={{background:flipped.includes(i)?c.color+"18":T.card,border:`1.5px solid ${flipped.includes(i)?c.color:T.border}`,borderRadius:12,padding:"14px",cursor:"pointer",transition:"all 0.25s",minHeight:95,display:"flex",flexDirection:"column",gap:5,animation:`pop 0.35s ease ${i*0.06}s both`}}>
      <span style={{fontSize:24}}>{c.icon}</span>
      <div style={{fontWeight:700,fontSize:12,color:flipped.includes(i)?c.color:T.text}}>{c.front}</div>
      {flipped.includes(i)?<div style={{fontSize:11,color:T.muted,lineHeight:1.5,animation:"fadeUp 0.2s ease"}}>{c.back}</div>:<div style={{fontSize:10,color:T.muted}}>Tap to learn more ▼</div>}
    </div>)}
  </div>;
}

/* ─── REVEAL STEPS ─── */
function Reveal({steps,color=T.accent}){
  const [n,setN]=useState(0);
  return <div style={{margin:"14px 0"}}>
    {steps.map((s,i)=><div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{width:"100%",borderRadius:12,padding:"13px 16px",transition:"all 0.35s",background:i<n?s.color+"15":T.dim+"22",border:`1.5px solid ${i<n?s.color:T.dim}`,opacity:i<n?1:0.4,animation:i<n?"pop 0.4s ease":"none",display:"flex",gap:12,alignItems:"flex-start"}}>
        <div style={{width:34,height:34,borderRadius:"50%",flexShrink:0,background:i<n?s.color:T.dim,display:"flex",alignItems:"center",justifyContent:"center",fontSize:i<n?18:14,fontWeight:900,color:"#fff",transition:"all 0.3s"}}>{i<n?s.icon:i+1}</div>
        <div style={{flex:1}}><div style={{fontWeight:800,fontSize:14,color:i<n?s.color:T.muted,marginBottom:i<n?3:0}}>{s.title}</div>{i<n&&<div style={{fontSize:12,color:T.muted,lineHeight:1.6,animation:"fadeUp 0.3s ease"}}>{s.body}</div>}</div>
      </div>
      {i<steps.length-1&&<div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"2px 0"}}>
        <div style={{width:2,height:14,background:i<n-1?steps[i].color:T.dim,transition:"background 0.3s"}}/>
        <div style={{fontSize:12,color:i<n-1?steps[i].color:T.dim}}>▼</div>
      </div>}
    </div>)}
    <div style={{display:"flex",gap:10,marginTop:14,justifyContent:"center"}}>
      {n<steps.length?<button className="btn" onClick={()=>setN(x=>x+1)} style={{background:`linear-gradient(135deg,${color},${color}bb)`,color:"#fff",padding:"9px 20px",fontSize:13}}>➡ Reveal Step {n+1}</button>:null}
      {n>0&&<button className="btn" onClick={()=>setN(0)} style={{background:T.card,border:`1px solid ${T.border}`,color:T.muted,padding:"9px 14px",fontSize:13}}>↺ Reset</button>}
      {n===steps.length&&<div style={{color:T.green,fontWeight:800,fontSize:14,display:"flex",alignItems:"center",gap:5}}>✅ Complete!</div>}
    </div>
  </div>;
}

/* ─── WORD CLOUD ─── */
function WCloud({initial}){
  const [words,setWords]=useState(initial);
  const [inp,setInp]=useState("");
  const cols=[T.accent,T.teal,T.violet,T.amber,T.green,T.rose];
  function add(){if(!inp.trim())return;setWords(p=>[...p,{w:inp.trim(),s:18+Math.random()*13,c:cols[Math.floor(Math.random()*cols.length)]}]);setInp("");}
  return <div style={{margin:"14px 0"}}>
    <div style={{background:T.bg,borderRadius:13,padding:"16px",minHeight:130,display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",justifyContent:"center",marginBottom:10,border:`1px solid ${T.border}`}}>
      {words.map((w,i)=><span key={i} style={{fontSize:w.s,color:w.c,fontFamily:"Raleway",fontWeight:900,animation:`pop 0.4s ease ${(i%8)*0.04}s both`,lineHeight:1.2}}>{w.w}</span>)}
    </div>
    <div style={{display:"flex",gap:8}}>
      <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()} placeholder="Type an NLP term and press Enter..." style={{flex:1,background:T.card,border:`1.5px solid ${T.border}`,borderRadius:9,padding:"9px 13px",color:T.text,fontSize:13,fontFamily:"'Plus Jakarta Sans',sans-serif"}}/>
      <button className="btn" onClick={add} style={{background:T.green,color:T.bg,padding:"9px 16px",fontWeight:700}}>Add ➕</button>
    </div>
  </div>;
}

/* ─── MINI TIMER ─── */
function MTimer({label="Think Time!",secs:initS=30}){
  const [s,setS]=useState(initS);
  const [running,setRunning]=useState(false);
  const ref=useRef(null);
  useEffect(()=>{
    if(running&&s>0)ref.current=setInterval(()=>setS(x=>x-1),1000);
    else if(s===0)setRunning(false);
    return()=>clearInterval(ref.current);
  },[running,s]);
  const pct=s/initS,r=32,circ=2*Math.PI*r;
  const col=pct>0.5?T.green:pct>0.2?T.amber:T.rose;
  return <div style={{display:"flex",alignItems:"center",gap:14,background:T.surface,border:`1.5px solid ${T.border}`,borderRadius:13,padding:"13px 18px",margin:"16px 0"}}>
    <svg width={74} height={74}><circle cx={37} cy={37} r={r} fill="none" stroke={T.dim} strokeWidth={6}/><circle cx={37} cy={37} r={r} fill="none" stroke={col} strokeWidth={6} strokeDasharray={circ} strokeDashoffset={circ*(1-pct)} strokeLinecap="round" transform="rotate(-90 37 37)" style={{transition:"stroke-dashoffset 1s linear,stroke 0.5s"}}/><text x={37} y={37} textAnchor="middle" dominantBaseline="middle" fill={col} fontSize={13} fontWeight={800} fontFamily="Raleway">{s}s</text></svg>
    <div style={{flex:1}}>
      <div style={{fontWeight:800,fontSize:14,marginBottom:3}}>⏱️ {label}</div>
      {s===0?<div style={{color:T.rose,fontWeight:700,fontSize:12}}>🔔 Time's up! Share your answer.</div>:<div style={{fontSize:12,color:T.muted}}>Discuss with a neighbor before time runs out!</div>}
      <div style={{display:"flex",gap:8,marginTop:8}}>
        <button className="btn" onClick={()=>setRunning(r=>!r)} style={{background:running?T.rose+"22":`linear-gradient(135deg,${T.green},${T.teal})`,border:`1.5px solid ${running?T.rose:"transparent"}`,color:running?T.rose:"#fff",padding:"5px 14px",fontSize:12}}>{running?"⏸ Pause":"▶ Start"}</button>
        <button className="btn" onClick={()=>{setS(initS);setRunning(false);}} style={{background:T.card,border:`1px solid ${T.border}`,color:T.muted,padding:"5px 11px",fontSize:12}}>↺</button>
      </div>
    </div>
  </div>;
}

/* ─── CONFUSION METER ─── */
function CMeter(){
  const [my,setMy]=useState(null);
  const [c,setC]=useState({got:18,confused:7,need:3});
  const total=c.got+c.confused+c.need;
  function respond(type){setMy(type);setC(x=>({...x,[type]:x[type]+1}));}
  return <div style={{background:T.surface,border:`2px solid ${T.border}`,borderRadius:15,padding:"18px",margin:"20px 0"}}>
    <div style={{display:"flex",gap:7,alignItems:"center",marginBottom:10}}><span style={{fontSize:17}}>😕</span><span style={{fontWeight:800,fontSize:12,color:T.rose,letterSpacing:"0.08em",textTransform:"uppercase"}}>Classroom Check-In</span></div>
    <div style={{fontWeight:700,fontSize:14,marginBottom:14}}>How are you feeling about this concept?</div>
    <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
      {[{k:"got",l:"👍 Got it!",c:T.green},{k:"confused",l:"🤔 A bit confused",c:T.amber},{k:"need",l:"😵 Need more help",c:T.rose}].map(b=><button key={b.k} className="btn" onClick={()=>respond(b.k)} style={{background:my===b.k?b.c+"22":T.card,border:`2px solid ${my===b.k?b.c:T.border}`,color:my===b.k?b.c:T.muted,padding:"9px 16px",fontSize:13,flex:1}}>{b.l}</button>)}
    </div>
    {[{k:"got",l:"Got it ✅",c:T.green},{k:"confused",l:"Confused 🤔",c:T.amber},{k:"need",l:"Need help 😵",c:T.rose}].map(b=>{const pct=Math.round(c[b.k]/total*100);return<div key={b.k} style={{display:"flex",gap:8,alignItems:"center",marginBottom:5}}><div style={{width:110,fontSize:11,color:T.muted}}>{b.l}</div><div style={{flex:1,background:T.card,borderRadius:20,height:14,overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:b.c,borderRadius:20,transition:"width 0.6s ease"}}/></div><div style={{width:28,fontSize:11,color:b.c,textAlign:"right"}}>{pct}%</div></div>;})}
    {my&&<div style={{marginTop:10,fontSize:12,color:my==="got"?T.green:my==="confused"?T.amber:T.rose,fontWeight:700,animation:"pop 0.3s ease"}}>{my==="got"?"🚀 Great! Keep going!":my==="confused"?"📝 Teacher will revisit this shortly!":"🙋 Your teacher has been notified!"}</div>}
  </div>;
}

/* ─── SPIN WHEEL ─── */
function Wheel({names}){
  const [deg,setDeg]=useState(0);
  const [spinning,setSpinning]=useState(false);
  const [winner,setWinner]=useState(null);
  const cols=[T.accent,T.violet,T.green,T.amber,T.rose,T.teal];
  const seg=360/names.length;
  function spin(){
    if(spinning)return;setWinner(null);setSpinning(true);
    const extra=1440+Math.random()*720,nd=deg+extra;setDeg(nd);
    setTimeout(()=>{const norm=nd%360,idx=Math.floor((360-norm)/seg)%names.length;setWinner(names[idx]);setSpinning(false);},3000);
  }
  const r=95,cx=115,cy=115;
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12,margin:"14px 0"}}>
    <div style={{position:"relative"}}>
      <div style={{position:"absolute",top:-10,left:"50%",transform:"translateX(-50%)",zIndex:10,fontSize:20}}>🔻</div>
      <svg width={230} height={230} style={{filter:`drop-shadow(0 0 14px ${T.accent}33)`,transition:"transform 3s cubic-bezier(0.17,0.67,0.12,0.99)",transform:`rotate(${deg}deg)`}}>
        {names.map((name,i)=>{const sa=(i*seg-90)*Math.PI/180,ea=((i+1)*seg-90)*Math.PI/180,x1=cx+r*Math.cos(sa),y1=cy+r*Math.sin(sa),x2=cx+r*Math.cos(ea),y2=cy+r*Math.sin(ea),ma=((i+0.5)*seg-90)*Math.PI/180,tx=cx+r*0.66*Math.cos(ma),ty=cy+r*0.66*Math.sin(ma);
          return <g key={i}><path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`} fill={cols[i%cols.length]} opacity={0.85}/><text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={10} fontWeight={700} fontFamily="Plus Jakarta Sans">{name}</text></g>;
        })}
        <circle cx={cx} cy={cy} r={14} fill={T.card} stroke={T.border} strokeWidth={3}/>
      </svg>
    </div>
    <button className="btn" onClick={spin} disabled={spinning} style={{background:spinning?T.muted:`linear-gradient(135deg,${T.violet},${T.accent})`,color:"#fff",padding:"9px 26px",fontSize:14}}>{spinning?"🌀 Spinning...":"🎡 Spin!"}</button>
    {winner&&<div style={{animation:"pop 0.4s ease",background:T.amber+"18",border:`1.5px solid ${T.amber}`,borderRadius:11,padding:"9px 22px",textAlign:"center"}}><div style={{fontSize:11,color:T.muted}}>Your turn to answer!</div><div style={{fontFamily:"Raleway",fontSize:19,fontWeight:900,color:T.amber}}>🎯 {winner}</div></div>}
  </div>;
}

/* ═══════════════ LESSON SECTIONS ═══════════════ */

function S1({onXP}){
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="1" label="Introduction to NLP" color={T.accent}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.accent},${T.teal})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>What is Natural Language Processing?</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>NLP is a key subfield of Artificial Intelligence that gives machines the power to read, understand, and generate human language — the way you and I communicate every day.</p>

    <DefBox term="Natural Language Processing (NLP)" def="A branch of AI that enables computers to understand, interpret, and generate human language in a meaningful way. It bridges the gap between human communication and machine understanding — powering everything from chatbots to search engines." color={T.accent}/>

    {/* Visual: NLP sits in AI */}
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:14,padding:"18px",marginBottom:18}}>
      <div style={{textAlign:"center",marginBottom:14}}><Tag color={T.accent}>NLP within Artificial Intelligence</Tag></div>
      <div style={{display:"flex",justifyContent:"center",gap:0,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{textAlign:"center",padding:"10px 14px",background:T.card,border:`1.5px solid ${T.accent}`,borderRadius:11}}>
          <div style={{fontSize:26,marginBottom:3}}>🧑‍💬</div><div style={{fontSize:11,fontWeight:700,color:T.accent}}>Human</div><div style={{fontSize:10,color:T.muted}}>Text / Voice</div>
        </div>
        <div style={{padding:"0 8px",color:T.muted,fontSize:20}}>→</div>
        <div style={{textAlign:"center",padding:"14px 18px",background:`linear-gradient(135deg,${T.accent}18,${T.teal}18)`,border:`2px solid ${T.accent}`,borderRadius:13}}>
          <div style={{fontSize:32,marginBottom:3,animation:"float 3s ease infinite"}}>🧠</div>
          <div style={{fontSize:13,fontWeight:800,color:T.accent}}>NLP Engine</div>
          <div style={{fontSize:10,color:T.muted,marginTop:3}}>NLU → Process → NLG</div>
        </div>
        <div style={{padding:"0 8px",color:T.muted,fontSize:20}}>→</div>
        <div style={{display:"flex",flexDirection:"column",gap:5}}>
          {[["💬","Chatbot Reply","Understands & responds"],["🌍","Translation","Converts language"],["😊","Sentiment","Detects emotion"]].map(([e,t,d])=>
            <div key={t} style={{padding:"7px 11px",background:T.card,border:`1.5px solid ${T.teal}`,borderRadius:9,display:"flex",gap:7,alignItems:"center"}}>
              <span style={{fontSize:15}}>{e}</span><div><div style={{fontSize:11,fontWeight:700,color:T.teal}}>{t}</div><div style={{fontSize:10,color:T.muted}}>{d}</div></div>
            </div>)}
        </div>
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:18}}>
      <KP icon="🤖" title="Natural Language Understanding (NLU)" desc="Machine reads and comprehends text — understanding intent, meaning, and context behind words." color={T.accent} delay={0}/>
      <KP icon="💬" title="Natural Language Generation (NLG)" desc="Machine creates human-like text — like ChatGPT writing an essay or Alexa answering a question." color={T.teal} delay={0.1}/>
      <KP icon="🎙️" title="Speech Recognition" desc="Converts spoken words to text — used together with NLP in voice assistants like Siri and Alexa." color={T.violet} delay={0.2}/>
      <KP icon="🌐" title="Used Everywhere" desc="Chatbots, search engines, email spam filters, translators — NLP is the engine behind them all." color={T.green} delay={0.3}/>
    </div>

    <Divider/>
    <div style={{fontWeight:800,fontSize:16,marginBottom:12}}>🌍 NLP in Your Daily Life</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:8,marginBottom:18}}>
      {[["🤖","Siri / Alexa","Voice assistants",T.accent],["🔍","Google Search","Query understanding",T.teal],["📧","Gmail","Smart reply & spam filter",T.green],["🌍","Translate","Google Translate",T.violet],["💬","ChatGPT","Conversational AI",T.amber],["📱","Instagram","Hate speech detection",T.rose]].map(([e,n,d,c])=>
        <div key={n} style={{background:T.card,border:`1.5px solid ${c}33`,borderRadius:11,padding:"12px 10px",textAlign:"center"}}>
          <div style={{fontSize:26,marginBottom:5}}>{e}</div>
          <div style={{fontWeight:700,fontSize:12,color:c,marginBottom:2}}>{n}</div>
          <div style={{fontSize:10,color:T.muted}}>{d}</div>
        </div>)}
    </div>

    <IPoll question="Have you used an NLP-powered app today?" opts={["Yes — chatbot or assistant 🤖","Yes — voice command 🎙️","Yes — translation 🌍","I'm not sure yet 🤔"]} onVote={onXP}/>
    <IQuiz q="What does NLP stand for?" opts={["Neural Learning Processing","Natural Language Processing","Network Logic Protocol","Node-Layer Platform"]} ans={1} explain="NLP = Natural Language Processing — the AI field enabling machines to understand human language." onCorrect={onXP}/>
  </div>;
}

function S2({onXP}){
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="2" label="Why NLP Matters" color={T.amber}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.amber},${T.rose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Why is NLP Important?</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>NLP is not a research novelty — it's a core part of modern life. Every time you search Google, ask Siri, or flag a spam email, NLP is working behind the scenes.</p>

    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:10,marginBottom:18}}>
      {[["🛒","Retail","Customer chatbots, review analysis, product search",T.amber],["🏥","Healthcare","Reading medical records, summarizing patient notes",T.rose],["🔍","Search","Google uses NLP to understand what you really mean",T.accent],["📱","Social Media","Facebook detects hate speech using NLP classifiers",T.violet],["🤖","Assistants","Alexa, Siri, Google Assistant all powered by NLP",T.teal],["✉️","Email","Spam filtering, smart reply, auto-categorization",T.green]].map(([e,a,u,c])=>
        <div key={a} style={{background:T.card,border:`1.5px solid ${c}33`,borderRadius:12,padding:"13px",animation:"pop 0.4s ease"}}>
          <div style={{fontSize:26,marginBottom:6}}>{e}</div>
          <div style={{fontWeight:800,fontSize:12,color:c,marginBottom:3}}>{a}</div>
          <div style={{fontSize:11,color:T.muted,lineHeight:1.5}}>{u}</div>
        </div>)}
    </div>

    <div style={{background:`linear-gradient(135deg,${T.amber}18,${T.rose}10)`,border:`1.5px solid ${T.amber}44`,borderRadius:13,padding:"15px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.amber,marginBottom:8}}>🔥 Scale of NLP Today</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
        {[["Billions","Google NLP queries per day",T.accent],["100,000+","Pre-trained models on Hugging Face",T.violet],["7,000+","Languages humans speak (NLP covers ~100)",T.green]].map(([val,label,c])=>
          <div key={label} style={{textAlign:"center",padding:"10px",background:T.card,borderRadius:10}}>
            <div style={{fontFamily:"Raleway",fontSize:22,fontWeight:900,color:c,marginBottom:3}}>{val}</div>
            <div style={{fontSize:10,color:T.muted,lineHeight:1.4}}>{label}</div>
          </div>)}
      </div>
    </div>

    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"15px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.rose,marginBottom:10}}>⚠️ Current Challenges (Still Unsolved)</div>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {[["Algorithmic Bias","Models trained on biased data produce unfair outcomes"],["Consistency","GPT sometimes gives different answers to the same question"],["Low-Resource Languages","Most NLP tools work poorly for non-English languages"]].map(([t,d])=>
          <div key={t} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:T.rose,marginTop:6,flexShrink:0}}/>
            <div><span style={{fontWeight:700,fontSize:12,color:T.text}}>{t}: </span><span style={{fontSize:12,color:T.muted}}>{d}</span></div>
          </div>)}
      </div>
    </div>

    <MTimer label="Discuss: Name one NLP app you used this week" secs={45}/>
    <IQuiz q="Which of these is NOT a real-world NLP application?" opts={["Chatbot","Sentiment Analysis","Image Recognition","Machine Translation"]} ans={2} explain="Image Recognition is Computer Vision — it processes pixels, not text. NLP deals with language." onCorrect={onXP}/>
  </div>;
}

function S3({onXP}){
  const steps=[
    {icon:"🧹",title:"Step 1: Preprocessing",color:T.accent,body:"Clean the raw text. Remove common filler words like 'the', 'is', 'a' (called stopwords). Break text into individual pieces (tokenization). Convert words to their root form — 'running' becomes 'run' (stemming/lemmatization)."},
    {icon:"🔢",title:"Step 2: Feature Extraction",color:T.teal,body:"Turn words into numbers so the computer can process them mathematically. Three approaches: Bag-of-Words counts word frequency; TF-IDF scores word importance; Word Embeddings (Word2Vec, GloVe) place words in mathematical space capturing meaning and relationships."},
    {icon:"🤖",title:"Step 3: Modeling",color:T.violet,body:"Use the numerical representations to train Machine Learning models. Simple problems → Naïve Bayes, Logistic Regression. Complex problems → Deep Learning: LSTMs handle sequences; Transformers like BERT and GPT understand global context and power modern AI."},
  ];
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="3" label="The NLP Pipeline" color={T.teal}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.teal},${T.violet})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>How Does NLP Work?</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>NLP works as a 3-step pipeline. Raw messy human text goes in one end, and structured meaningful output comes out. Let's walk through each stage step by step — with a real example.</p>

    {/* Live Example */}
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"16px 18px",marginBottom:18}}>
      <div style={{fontSize:11,fontWeight:700,color:T.muted,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>📝 Live Example — Watch this sentence transform through the pipeline</div>
      <div style={{fontFamily:"'Courier New',monospace",fontSize:15,color:T.amber,fontWeight:700,marginBottom:14,padding:"10px",background:T.bg,borderRadius:8}}>"The restaurants are serving amazing food but the service was terrible!"</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {[
          {step:"After Tokenization",items:["The","restaurants","are","serving","amazing","food","but","the","service","was","terrible","!"],color:T.accent},
          {step:"After Stopword Removal",items:["restaurants","serving","amazing","food","service","terrible"],color:T.teal},
          {step:"After Stemming",items:["restaur","serv","amaz","food","servic","terribl"],color:T.violet},
          {step:"Sentiment Result",items:["😊 amazing food → POSITIVE","😡 terrible service → NEGATIVE","📊 Overall: Mixed Sentiment"],color:T.green},
        ].map(row=><div key={row.step} style={{background:T.card,borderRadius:9,padding:"9px 12px"}}>
          <div style={{fontSize:10,fontWeight:700,color:row.color,marginBottom:5}}>{row.step}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
            {row.items.map(item=><span key={item} style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:5,padding:"2px 8px",fontSize:11,color:T.text}}>{item}</span>)}
          </div>
        </div>)}
      </div>
    </div>

    <Reveal steps={steps} color={T.teal}/>
    <Divider/>

    <div style={{fontWeight:800,fontSize:16,marginBottom:12}}>🤖 ML Algorithms Used in NLP Modeling</div>
    <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:18}}>
      {[
        {name:"Naïve Bayes",icon:"📊",desc:"Assumes word independence. Simple and fast — great baseline for classification tasks.",best:"Spam Detection, Text Classification",color:T.green},
        {name:"Support Vector Machine (SVM)",icon:"📐",desc:"Finds the optimal decision boundary in high-dimensional feature space. Very powerful for text.",best:"Sentiment Analysis, Intent Detection",color:T.accent},
        {name:"RNN / LSTM / GRU",icon:"🔄",desc:"Recurrent networks designed to handle sequential text data with memory across words.",best:"Language Modeling, Machine Translation",color:T.violet},
        {name:"CNN for Text",icon:"🎯",desc:"Detects local n-gram patterns — borrowed from image processing but works surprisingly well on text.",best:"Sentence Classification, Keyword Detection",color:T.amber},
        {name:"Transformers: BERT & GPT",icon:"⚡",desc:"Attention mechanism processes all words simultaneously, capturing global relationships — state-of-the-art.",best:"Q&A, Summarization, Chat, All NLP tasks",color:T.rose},
      ].map((alg,i)=><div key={i} style={{background:T.card,border:`1.5px solid ${alg.color}33`,borderRadius:11,padding:"12px 15px",display:"flex",gap:11,alignItems:"flex-start",animation:`slideRight 0.35s ease ${i*0.07}s both`}}>
        <div style={{width:38,height:38,borderRadius:9,background:alg.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{alg.icon}</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:13,color:alg.color,marginBottom:2}}>{alg.name}</div>
          <div style={{fontSize:12,color:T.muted,marginBottom:4}}>{alg.desc}</div>
          <div style={{fontSize:11,color:T.muted}}><span style={{color:alg.color,fontWeight:700}}>Best for: </span>{alg.best}</div>
        </div>
      </div>)}
    </div>

    <CMeter/>
    <IQuiz q="Which is the FIRST step in any NLP pipeline?" opts={["Model Training","Feature Extraction","Preprocessing (Cleaning & Tokenization)","Deployment"]} ans={2} explain="Preprocessing always comes first — you must clean and tokenize text before any analysis or modeling." onCorrect={onXP}/>

    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"15px 18px",marginTop:18}}>
      <div style={{fontWeight:800,fontSize:13,marginBottom:12}}>🎡 Who can answer? Spin to find out!</div>
      <Wheel names={["Aarav","Priya","Zaid","Meera","Rohan","Sara","Dev","Ananya"]}/>
    </div>
  </div>;
}

function S4({onXP}){
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="4" label="Word Embeddings & Transfer Learning" color={T.violet}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.violet},${T.rose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Word Embeddings & Transfer Learning</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>The biggest leap in NLP came when we stopped treating words as symbols and started placing them in a mathematical space where meaning and relationships are encoded as numbers.</p>

    <DefBox term="Word Embedding" def="A dense vector (list of numbers) representing a word in high-dimensional space. Words with similar meanings are numerically close to each other. This allows machines to understand relationships, analogies, and context — not just frequency." color={T.violet}/>

    {/* Famous analogy */}
    <div style={{background:`linear-gradient(135deg,${T.violet}18,${T.rose}10)`,border:`2px solid ${T.violet}44`,borderRadius:14,padding:"18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.violet,marginBottom:12}}>🧮 The Famous Word2Vec Analogy</div>
      <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center",marginBottom:14}}>
        {[["👑 king",T.amber],["-",T.muted],["👨 man",T.accent],["+",T.muted],["👩 woman",T.rose],["≈",T.muted],["👑 queen",T.green]].map(([item,col],i)=>(
          <div key={i} style={{fontSize:item.length===1?22:15,fontWeight:item.length===1?400:800,color:col,background:item.length>2?col+"18":"transparent",border:item.length>2?`1.5px solid ${col}44`:"none",borderRadius:9,padding:item.length>2?"7px 13px":"0"}}>{item}</div>
        ))}
      </div>
      <div style={{fontSize:12,color:T.muted,textAlign:"center",lineHeight:1.7}}>Word2Vec learned this purely by reading billions of sentences — nobody programmed the gender relationship.<br/>The model figured it out from <em style={{color:T.text}}>context alone</em>.</div>
    </div>

    {/* Embedding models */}
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:18}}>
      {[{name:"Word2Vec",by:"Google",desc:"Learns from surrounding context (CBOW & Skip-gram architectures)",color:T.accent},{name:"GloVe",by:"Stanford",desc:"Uses global word co-occurrence statistics across an entire corpus",color:T.teal},{name:"FastText",by:"Facebook",desc:"Works with subword pieces — great for rare words, typos, and morphology",color:T.violet}].map((m,i)=><div key={i} style={{background:T.card,border:`1.5px solid ${m.color}44`,borderRadius:11,padding:"13px"}}>
        <div style={{fontWeight:800,fontSize:13,color:m.color,marginBottom:2}}>{m.name}</div>
        <div style={{fontSize:10,color:T.muted,marginBottom:5}}>by {m.by}</div>
        <div style={{fontSize:11,color:T.muted,lineHeight:1.5}}>{m.desc}</div>
      </div>)}
    </div>

    <Divider/>
    <div style={{fontWeight:800,fontSize:16,marginBottom:12}}>⚡ Transfer Learning in NLP</div>
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"16px 18px",marginBottom:18}}>
      <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:180}}>
          <div style={{fontWeight:700,color:T.green,fontSize:13,marginBottom:7}}>🏋️ Phase 1: Pre-Training</div>
          <div style={{fontSize:12,color:T.muted,lineHeight:1.7}}>Train BERT or GPT on <strong style={{color:T.text}}>massive datasets</strong> (Wikipedia, billions of web pages) so it learns general language understanding. Takes weeks on hundreds of GPUs.</div>
        </div>
        <div style={{width:1,background:T.border}}/>
        <div style={{flex:1,minWidth:180}}>
          <div style={{fontWeight:700,color:T.amber,fontSize:13,marginBottom:7}}>🎯 Phase 2: Fine-Tuning</div>
          <div style={{fontSize:12,color:T.muted,lineHeight:1.7}}>Take the pre-trained model and adapt it for your <strong style={{color:T.text}}>specific use case</strong> with far less data. Legal firms do this for documents; hospitals do it for medical text.</div>
        </div>
      </div>
      <div style={{marginTop:12,padding:"9px 13px",background:T.card,borderRadius:9,fontSize:12,color:T.muted}}>
        <strong style={{color:T.rose}}>Real Examples: </strong>Law firms fine-tune BERT to classify legal contracts. E-commerce platforms fine-tune GPT to auto-generate product descriptions. This saves months of training time!
      </div>
    </div>

    <IQuiz q="What does 'king - man + woman ≈ queen' prove about word embeddings?" opts={["It's a coincidence","Embeddings capture semantic relationships and analogies","It's a grammar rule","It shows tokenization at work"]} ans={1} explain="This classic Word2Vec example proves embeddings learn real semantic relationships from raw text — gender, royalty, and analogy — without explicit programming." onCorrect={onXP}/>
  </div>;
}

function S5({onXP}){
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="5" label="NLTK & NLP Tools" color={T.green}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.green},${T.teal})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>NLTK — Natural Language Toolkit</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>NLTK is the most widely-used Python library for learning NLP. Created at the University of Pennsylvania in 2001, it was built as a teaching tool and remains the #1 starting point for students worldwide.</p>

    {/* Timeline */}
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"16px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.green,marginBottom:12}}>📅 NLTK History & Development</div>
      {[{yr:"2001",e:"Steven Bird & Edward Loper create NLTK at University of Pennsylvania as a teaching tool for computational linguistics",c:T.accent},{yr:"2004–2010",e:"Community contributions expand NLTK with chunking, parsing, language detection, and classification capabilities",c:T.teal},{yr:"2010s",e:"Becomes the global standard for NLP education — used in universities and research labs worldwide",c:T.green},{yr:"Today",e:"Still essential for learning and prototyping, now alongside spaCy, Hugging Face, and modern deep learning tools",c:T.amber}].map((item,i)=><div key={i} style={{display:"flex",gap:11}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{width:11,height:11,borderRadius:"50%",background:item.c,marginTop:3,flexShrink:0}}/>
          {i<3&&<div style={{width:2,height:36,background:T.border}}/>}
        </div>
        <div style={{paddingBottom:14}}>
          <div style={{fontWeight:800,fontSize:11,color:item.c,marginBottom:2}}>{item.yr}</div>
          <div style={{fontSize:12,color:T.muted,lineHeight:1.5}}>{item.e}</div>
        </div>
      </div>)}
    </div>

    {/* What NLTK does */}
    <div style={{fontWeight:800,fontSize:15,marginBottom:12}}>⚙️ Core NLTK Capabilities</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:18}}>
      {[{task:"Tokenization",code:'word_tokenize("Hello world")',out:'["Hello","world"]',icon:"✂️",c:T.accent},{task:"Stopword Removal",code:'stopwords.words("english")',out:'"the","is","a"... removed',icon:"🚫",c:T.rose},{task:"Stemming",code:'PorterStemmer().stem("running")',out:'"run"',icon:"🌱",c:T.green},{task:"POS Tagging",code:'nltk.pos_tag(tokens)',out:'"cat" → NN (Noun)',icon:"🏷️",c:T.violet},{task:"Named Entity Recognition",code:'nltk.ne_chunk(tagged)',out:'"Delhi" → GPE (Location)',icon:"🔍",c:T.teal},{task:"Frequency Distribution",code:'FreqDist(tokens)',out:'Word frequency analysis',icon:"📊",c:T.amber}].map((item,i)=><div key={i} style={{background:T.card,border:`1.5px solid ${item.c}33`,borderRadius:11,padding:"11px 13px"}}>
        <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:7}}><span style={{fontSize:16}}>{item.icon}</span><span style={{fontWeight:800,fontSize:12,color:item.c}}>{item.task}</span></div>
        <div style={{fontFamily:"'Courier New',monospace",fontSize:10,color:"#7dd3fc",background:T.bg,borderRadius:5,padding:"5px 7px",marginBottom:5}}>{item.code}</div>
        <div style={{fontSize:10,color:T.muted}}>→ {item.out}</div>
      </div>)}
    </div>

    {/* Installation */}
    <div style={{fontWeight:800,fontSize:15,marginBottom:10}}>🚀 Getting Started with NLTK</div>
    <Code code={`# Step 1: Install NLTK\npip install nltk\n\n# Step 2: Import and download resources\nimport nltk\nnltk.download('all')  # Or select specific packages via GUI\n\n# Step 3: Your first NLP program!\nfrom nltk.tokenize import word_tokenize\nfrom nltk.corpus import stopwords\n\nsentence = "Natural Language Processing is absolutely amazing!"\ntokens = word_tokenize(sentence)\nstop_words = set(stopwords.words('english'))\nfiltered = [w for w in tokens if w.lower() not in stop_words]\n\nprint(filtered)\n# Output: ['Natural', 'Language', 'Processing', 'absolutely', 'amazing', '!']`}/>

    <Divider/>
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"15px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:14,color:T.amber,marginBottom:10}}>☕ Apache OpenNLP — The Java Alternative</div>
      <div style={{fontSize:13,color:T.muted,lineHeight:1.7,marginBottom:12}}>Apache OpenNLP is the enterprise-grade Java NLP library. Used in production systems integrating with Hadoop, Spark, and enterprise Java backends. Supports tokenization, POS tagging, NER, parsing, and document classification — with pre-trained multi-language models.</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
        {["Tokenization","Sentence Detection","POS Tagging","Named Entity Recognition","Chunking","Parsing","Document Classification","Language Detection"].map(f=><span key={f} style={{background:T.amber+"18",border:`1px solid ${T.amber}33`,color:T.amber,borderRadius:20,padding:"2px 11px",fontSize:11,fontWeight:600}}>{f}</span>)}
      </div>
    </div>

    <div style={{fontWeight:800,fontSize:15,marginBottom:10}}>🗺️ The NLP Tools Landscape — Tap to Explore</div>
    <Flips cards={[{icon:"🎓",front:"NLTK",back:"Best for: learning NLP concepts, prototyping, and rule-based text processing. First tool for most students.",color:T.green},{icon:"☕",front:"Apache OpenNLP",back:"Best for: Java enterprise systems, big data pipelines with Hadoop/Spark. Production-grade ML models.",color:T.amber},{icon:"🚀",front:"spaCy",back:"Best for: fast, production-ready Python NLP. Industrial strength — used at scale in companies.",color:T.violet},{icon:"🤗",front:"Hugging Face",back:"Best for: accessing BERT, GPT, and 100,000+ pre-trained models. The heart of modern NLP.",color:T.rose}]}/>

    <IQuiz q="What command do you run to install NLTK?" opts={["npm install nltk","pip install nltk","conda install nltk","python get nltk"]} ans={1} explain="NLTK is a Python library installed with pip — the standard Python package manager. Then use nltk.download() to get datasets." onCorrect={onXP}/>
  </div>;
}

function S6({onXP}){
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="6" label="NLP Challenges" color={T.rose}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.rose},${T.amber})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Challenges of NLP</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>Despite incredible progress, NLP systems still face major hurdles. Human language is messy, ambiguous, and context-dependent — qualities that are surprisingly hard to teach a machine.</p>

    <div style={{background:`linear-gradient(135deg,${T.rose}15,${T.amber}10)`,border:`1.5px solid ${T.rose}44`,borderRadius:13,padding:"14px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.rose,marginBottom:10}}>💬 Why is language so hard for machines?</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {[["Ambiguity","'I saw the man with the telescope' — who has the telescope?"],["Sarcasm","'Oh great, another Monday!' — positive or negative?"],["Slang","'That movie was fire 🔥' — good or bad?"],["Code-switching","People mix languages: 'Yaar, that was totally awesome na!'"]].map(([t,e])=><div key={t} style={{display:"flex",gap:10}}>
          <span style={{fontSize:14}}>•</span>
          <div><strong style={{color:T.text,fontSize:12}}>{t}: </strong><span style={{fontSize:12,color:T.muted}}>{e}</span></div>
        </div>)}
      </div>
    </div>

    <div style={{fontWeight:800,fontSize:15,marginBottom:10}}>⚡ 10 Major NLP Challenges — Tap Each to Learn</div>
    <Flips cards={[
      {icon:"🌐",front:"Language Complexity",back:"Every language has unique rules and nuances. Machines struggle with incomplete sentences and implied meanings.",color:T.accent},
      {icon:"📊",front:"Lack of Training Data",back:"High-quality labeled datasets are expensive. Many languages and specialized domains lack sufficient training data.",color:T.amber},
      {icon:"⚡",front:"High Resource Needs",back:"Training large NLP models requires enormous compute — GPT-3 training cost ~$4.6 million in cloud compute.",color:T.violet},
      {icon:"🤔",front:"Ambiguity & Context",back:"'Bank' means financial institution OR river bank. Machines must use surrounding context to pick the right meaning.",color:T.teal},
      {icon:"✍️",front:"Misspellings & Slang",back:"Real-world text is messy. 'u r gr8' and 'you are great' mean the same thing but look completely different.",color:T.green},
      {icon:"⚖️",front:"Algorithmic Bias",back:"Models trained on biased internet text may produce racist, sexist, or unfair outputs. A serious ethical challenge.",color:T.rose},
      {icon:"📖",front:"Polysemy",back:"One word, many meanings. 'Lead' can mean a metal, to guide, or a leash. Context disambiguation is crucial.",color:T.accent},
      {icon:"🗣️",front:"Multilingualism",back:"Most NLP tools work only for English. Supporting all 7,000 world languages with different scripts is enormous.",color:T.amber},
      {icon:"🔴",front:"False Positives",back:"A spam filter blocking legitimate emails. Reducing false positives in classification requires careful tuning.",color:T.violet},
      {icon:"💬",front:"Continuous Conversations",back:"Chatbots 'forget' what was said 10 messages ago. Maintaining long conversation context is an open research problem.",color:T.rose},
    ]}/>

    <CMeter/>
    <IQuiz q="A word having multiple meanings depending on context is called:" opts={["Ambiguity","Polysemy","Multilingualism","Bias"]} ans={1} explain="Polysemy = one word, multiple related meanings. E.g., 'bank' can be financial or geographical. Context determines meaning." onCorrect={onXP}/>
  </div>;
}

function S7({onXP}){
  const datasets=[
    {cat:"Sentiment Analysis",examples:["IMDb Movie Reviews","Yelp Dataset","Amazon Reviews","Twitter Sentiment140"],color:T.accent,icon:"😊"},
    {cat:"Named Entity Recognition",examples:["CoNLL-2003 (News text)","WNUT 2017 (Social media)","OntoNotes (Multi-genre)"],color:T.teal,icon:"🔍"},
    {cat:"Machine Translation",examples:["WMT (100+ languages)","Europarl (EU debates)","IWSLT (TED Talks)"],color:T.violet,icon:"🌍"},
    {cat:"Question Answering",examples:["SQuAD (Wikipedia)","Natural Questions (Google)","TriviaQA (Online sources)"],color:T.amber,icon:"❓"},
    {cat:"Text Summarization",examples:["CNN/DailyMail","XSum (BBC articles)","Gigaword (News headlines)"],color:T.green,icon:"📰"},
    {cat:"Language Modeling",examples:["Penn Treebank","WikiText-103","BooksCorpus (used for BERT)"],color:T.rose,icon:"📚"},
  ];
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="7" label="NLP Datasets" color={T.amber}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.amber},${T.green})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Understanding NLP Datasets</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>NLP models learn entirely from data — just like you learned language by reading and listening. The quality and diversity of your training data directly determines how good your model will be.</p>

    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:13,padding:"15px 18px",marginBottom:18}}>
      <div style={{fontWeight:800,fontSize:13,color:T.amber,marginBottom:10}}>💡 Why Data Quality Matters — A Simple Analogy</div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        {[["📚 Good Dataset","Model trained on diverse, balanced, labeled data","Fair, accurate, generalizes well",T.green],["🗑️ Bad Dataset","Model trained on biased or noisy internet data","Unfair outputs, poor performance, brittle",T.rose]].map(([title,inp,out,c])=><div key={title} style={{flex:1,minWidth:180,background:T.card,border:`1.5px solid ${c}44`,borderRadius:10,padding:"12px"}}>
          <div style={{fontWeight:700,fontSize:12,color:c,marginBottom:6}}>{title}</div>
          <div style={{fontSize:11,color:T.muted,marginBottom:4}}><strong style={{color:T.text}}>Input: </strong>{inp}</div>
          <div style={{fontSize:11,color:T.muted}}><strong style={{color:T.text}}>Result: </strong>{out}</div>
        </div>)}
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:18}}>
      {[{label:"Labeled Data",icon:"🏷️",desc:"Every input has a correct label. Required for supervised learning — e.g., review + 'positive'.",color:T.accent},{label:"Unlabeled Data",icon:"📄",desc:"Raw text with no labels. Used for unsupervised learning — model finds patterns itself.",color:T.teal},{label:"Quality > Quantity",icon:"✨",desc:"A small clean dataset often beats a huge noisy one. GIGO: Garbage In, Garbage Out.",color:T.green}].map((c,i)=><div key={i} style={{background:T.card,border:`1.5px solid ${c.color}44`,borderRadius:11,padding:"12px"}}>
        <div style={{fontSize:24,marginBottom:6}}>{c.icon}</div>
        <div style={{fontWeight:800,fontSize:12,color:c.color,marginBottom:3}}>{c.label}</div>
        <div style={{fontSize:11,color:T.muted,lineHeight:1.5}}>{c.desc}</div>
      </div>)}
    </div>

    <div style={{fontWeight:800,fontSize:15,marginBottom:10}}>📁 Standard NLP Datasets by Task</div>
    <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:18}}>
      {datasets.map((d,i)=><div key={i} style={{background:T.card,border:`1.5px solid ${d.color}33`,borderRadius:11,padding:"12px 15px",display:"flex",gap:10,alignItems:"flex-start",animation:`slideRight 0.35s ease ${i*0.07}s both`}}>
        <div style={{width:40,height:40,borderRadius:9,background:d.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:21,flexShrink:0}}>{d.icon}</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:13,color:d.color,marginBottom:5}}>{d.cat}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
            {d.examples.map(e=><span key={e} style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:20,padding:"2px 9px",fontSize:11,color:T.muted}}>{e}</span>)}
          </div>
        </div>
      </div>)}
    </div>

    <WCloud initial={[{w:"BERT",s:34,c:T.violet},{w:"GPT",s:28,c:T.accent},{w:"NLP",s:38,c:T.teal},{w:"Tokenization",s:20,c:T.green},{w:"Embeddings",s:22,c:T.amber},{w:"Transformer",s:24,c:T.rose},{w:"NLTK",s:22,c:T.green},{w:"Sentiment",s:18,c:T.accent},{w:"Corpus",s:18,c:T.teal},{w:"Dataset",s:20,c:T.violet}]}/>
    <IPoll question="Which NLP task would you most like to build?" opts={["😊 Sentiment Analyzer","🌍 Language Translator","🤖 Chatbot","📧 Spam Detector"]} onVote={onXP}/>
  </div>;
}

/* ─── FINAL QUIZ SECTION ─── */
const FQ=[
  {q:"What is the primary role of NLP in AI?",opts:["Translate code","Enable machines to understand human language","Manage databases","Design hardware"],a:1,e:"NLP enables machines to understand, interpret, and generate human language — bridging people and machines."},
  {q:"Which of these is NOT an NLP application?",opts:["Chatbot","Spam Filter","Object Detection in Photos","Machine Translation"],a:2,e:"Object Detection is Computer Vision (processing pixels). NLP deals specifically with text and speech."},
  {q:"Which learning type requires labeled training data?",opts:["Unsupervised","Reinforcement","Supervised","Generative"],a:2,e:"Supervised learning = labeled data pairs (input + correct output). Unsupervised finds patterns without labels."},
  {q:"What does NLTK stand for?",opts:["Network Learning Toolkit","Natural Language Toolkit","Neural Linguistic Tool","Node-Layer Technology"],a:1,e:"NLTK = Natural Language Toolkit — open-source Python library for NLP created at UPenn in 2001."},
  {q:"Which architecture uses 'attention' to process all words simultaneously?",opts:["Naïve Bayes","SVM","LSTM","Transformer (BERT/GPT)"],a:3,e:"Transformers use self-attention — they see ALL words at once (unlike RNNs which go word by word), enabling much better context understanding."},
  {q:"What does 'king - man + woman ≈ queen' demonstrate?",opts:["A math coincidence","Word embeddings capture semantic relationships","A grammar rule","Tokenization at work"],a:1,e:"This proves word embeddings encode semantic relationships and analogies — learned purely from context in training data."},
  {q:"Which step comes FIRST in the NLP pipeline?",opts:["Modeling","Feature Extraction","Deployment","Preprocessing"],a:3,e:"Preprocessing (tokenization, stopword removal, stemming) always comes first — you must clean text before any analysis."},
  {q:"Algorithmic bias in NLP models is primarily caused by:",opts:["Model being too large","Non-representative or biased training data","Too many hyperparameters","Using Python instead of Java"],a:1,e:"Biased training data creates biased models — a major ethical challenge in NLP used for hiring, lending, or legal decisions."},
];

function S8({onXP}){
  const [answers,setAnswers]=useState({});
  const [confSt,setConf]=useState(false);
  const score=Object.keys(answers).filter(k=>answers[k]===FQ[k].a).length;
  function answer(qi,oi){
    if(answers[qi]!==undefined)return;
    setAnswers(a=>({...a,[qi]:oi}));
    if(oi===FQ[qi].a){if(onXP)onXP();setConf(true);setTimeout(()=>setConf(false),2500);}
  }
  const oc=[T.accent,T.violet,T.green,T.amber];
  return <div style={{animation:"fadeUp 0.5s ease"}}>
    <SBadge num="8" label="Final Module Quiz" color={T.violet}/>
    <h2 style={{fontFamily:"Raleway",fontSize:32,fontWeight:900,marginBottom:8,background:`linear-gradient(135deg,${T.violet},${T.rose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Final Quiz — Test Your NLP Knowledge</h2>
    <p style={{color:T.muted,fontSize:14,marginBottom:20,lineHeight:1.7}}>8 questions covering everything from this module. Each correct answer earns XP and an explanation reinforces your understanding.</p>

    {/* Progress tracker */}
    <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:20}}>
      {FQ.map((_,i)=><div key={i} style={{width:32,height:32,borderRadius:8,background:answers[i]===undefined?T.card:answers[i]===FQ[i].a?T.green+"33":T.rose+"33",border:`2px solid ${answers[i]===undefined?T.border:answers[i]===FQ[i].a?T.green:T.rose}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:answers[i]===undefined?T.muted:answers[i]===FQ[i].a?T.green:T.rose}}>{i+1}</div>)}
      <div style={{marginLeft:"auto",fontSize:12,color:T.muted,display:"flex",alignItems:"center"}}>{score}/{FQ.length} correct</div>
    </div>

    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      {FQ.map((q,qi)=>{
        const sel=answers[qi];
        return <div key={qi} style={{background:T.surface,border:`1.5px solid ${sel===undefined?T.border:sel===q.a?T.green+"55":T.rose+"55"}`,borderRadius:13,padding:"16px",transition:"border 0.3s"}}>
          <div style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:12}}>
            <div style={{width:26,height:26,borderRadius:7,background:T.violet+"22",border:`1px solid ${T.violet}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:T.violet,flexShrink:0}}>{qi+1}</div>
            <div style={{fontWeight:700,fontSize:14,lineHeight:1.4}}>{q.q}</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
            {q.opts.map((o,oi)=>{
              let bg=T.card,border=T.border,col=T.text;
              if(sel!==undefined){if(oi===q.a){bg=T.green+"22";border=T.green;col=T.green;}else if(oi===sel){bg=T.rose+"22";border=T.rose;col=T.rose;}}
              return <button key={oi} className="btn" onClick={()=>answer(qi,oi)} style={{padding:"9px 11px",background:bg,border:`1.5px solid ${border}`,color:col,fontSize:12,textAlign:"left",borderRadius:8,display:"flex",gap:7,alignItems:"center"}}>
                <span style={{width:20,height:20,borderRadius:5,background:oc[oi]+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:oc[oi],flexShrink:0}}>{["A","B","C","D"][oi]}</span>{o}
              </button>;
            })}
          </div>
          {sel!==undefined&&<div style={{marginTop:10,padding:"8px 11px",background:T.card,borderRadius:8,fontSize:12,color:T.muted,borderLeft:`3px solid ${sel===q.a?T.green:T.rose}`}}>{sel===q.a?"✅ ":"❌ "}💡 {q.e}</div>}
        </div>;
      })}
    </div>

    {Object.keys(answers).length===FQ.length&&<div style={{marginTop:22,background:`linear-gradient(135deg,${T.violet}22,${T.accent}18)`,border:`2px solid ${T.violet}55`,borderRadius:15,padding:"22px",textAlign:"center",animation:"pop 0.5s ease"}}>
      <div style={{fontSize:52,marginBottom:10}}>🏆</div>
      <div style={{fontFamily:"Raleway",fontSize:38,fontWeight:900,color:T.amber,marginBottom:5}}>{score}/8</div>
      <div style={{fontSize:15,color:T.muted,marginBottom:14}}>{score>=7?"🚀 Outstanding! You've mastered NLP basics!":score>=5?"💪 Great effort! Review the explanations above.":"📖 Keep studying — re-read the sections and retry!"}</div>
      <div style={{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"}}>
        {FQ.map((_,i)=><div key={i} style={{width:14,height:14,borderRadius:"50%",background:answers[i]===FQ[i].a?T.green:T.rose}}/>)}
      </div>
    </div>}
  </div>;
}

/* ═══════════════════════════════════════════════
   SECTIONS CONFIG
═══════════════════════════════════════════════ */
const SECS=[
  {id:"intro",label:"What is NLP?",icon:"🧠",color:T.accent,Comp:S1},
  {id:"why",label:"Why NLP Matters",icon:"⭐",color:T.amber,Comp:S2},
  {id:"how",label:"How NLP Works",icon:"⚙️",color:T.teal,Comp:S3},
  {id:"embed",label:"Word Embeddings",icon:"🔤",color:T.violet,Comp:S4},
  {id:"nltk",label:"NLTK & Tools",icon:"🐍",color:T.green,Comp:S5},
  {id:"challenges",label:"NLP Challenges",icon:"⚡",color:T.rose,Comp:S6},
  {id:"datasets",label:"NLP Datasets",icon:"📁",color:T.amber,Comp:S7},
  {id:"quiz",label:"Final Quiz",icon:"🏆",color:T.violet,Comp:S8},
];

/* ─── LEADERBOARD ─── */
const LB_STUDENTS=[
  {name:"Aarav",xp:340,level:4},{name:"Priya",xp:290,level:3},{name:"Zaid",xp:420,level:5},{name:"Meera",xp:180,level:2},{name:"Rohan",xp:310,level:4},{name:"Sara",xp:260,level:3},
];
function LBPanel({myXP}){
  const list=[...LB_STUDENTS,{name:"You",xp:myXP,level:Math.floor(myXP/100)+1,isYou:true}].sort((a,b)=>b.xp-a.xp);
  const medals=["🥇","🥈","🥉"];
  return <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px",marginBottom:12}}>
    <div style={{fontWeight:800,fontSize:12,color:T.amber,marginBottom:10}}>🏆 Live Leaderboard</div>
    {list.map((s,i)=><div key={s.name} style={{display:"flex",gap:7,alignItems:"center",padding:"6px 7px",background:s.isYou?T.accent+"18":i===0?T.amber+"10":"transparent",borderRadius:7,marginBottom:3,border:s.isYou?`1px solid ${T.accent}44`:"none"}}>
      <div style={{width:18,fontSize:12}}>{i<3?medals[i]:`#${i+1}`}</div>
      <div style={{width:24,height:24,borderRadius:"50%",background:`linear-gradient(135deg,${T.violet},${T.accent})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:"#fff",flexShrink:0}}>{s.name[0]}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontSize:11,fontWeight:700,color:s.isYou?T.accent:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}{s.isYou?" (You)":""}</div>
        <div style={{background:T.dim,borderRadius:20,height:4,overflow:"hidden",marginTop:2}}>
          <div style={{height:"100%",width:`${Math.min(s.xp/5,100)}%`,background:s.isYou?T.accent:`linear-gradient(90deg,${T.violet},${T.accent})`,borderRadius:20,transition:"width 0.5s ease"}}/>
        </div>
      </div>
      <div style={{fontSize:11,fontWeight:800,color:T.amber,minWidth:30,textAlign:"right"}}>{s.xp}</div>
    </div>)}
  </div>;
}

/* ═══════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════ */
export default function App(){
  const [view,setView]=useState("home");
  const [sec,setSec]=useState(0);
  const [xp,setXP]=useState(0);
  const [level,setLevel]=useState(1);
  const [confetti,setConfetti]=useState(false);
  const [done,setDone]=useState([]);
  const [sidebar,setSidebar]=useState(true);
  const contentRef=useRef(null);

  useEffect(()=>{injectCSS(CSS);},[]);

  const addXP=useCallback(()=>{
    setXP(x=>{
      const nx=x+20;
      if(Math.floor(nx/100)>Math.floor(x/100)){setLevel(l=>l+1);setConfetti(true);setTimeout(()=>setConfetti(false),3000);}
      return nx;
    });
  },[]);

  function goSec(i){setSec(i);if(!done.includes(i))setDone(d=>[...d,i]);if(contentRef.current)contentRef.current.scrollTo({top:0,behavior:"smooth"});}

  const S=SECS[sec];

  /* HOME */
  if(view==="home") return(
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",background:`radial-gradient(ellipse at 15% 25%,${T.accent}16 0%,transparent 55%),radial-gradient(ellipse at 85% 75%,${T.violet}12 0%,transparent 55%),${T.bg}`}}>
      <div style={{maxWidth:580,width:"100%",textAlign:"center"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:T.surface,border:`1px solid ${T.border}`,borderRadius:20,padding:"5px 15px",marginBottom:22}}>
          <div style={{width:7,height:7,borderRadius:"50%",background:T.green,animation:"pulse 2s infinite"}}/>
          <span style={{fontSize:12,color:T.muted}}>Module 7 — Natural Language Processing & AI/ML</span>
        </div>
        <h1 style={{fontFamily:"Raleway",fontSize:48,fontWeight:900,lineHeight:1.1,marginBottom:14,background:`linear-gradient(135deg,${T.accent},${T.teal},${T.violet})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
          Learn NLP.<br/>Interactively.
        </h1>
        <p style={{color:T.muted,fontSize:16,marginBottom:32,lineHeight:1.7,maxWidth:460,margin:"0 auto 32px"}}>
          A full lesson website with all NLP content from your slides — real explanations, visual diagrams, code examples, quizzes, polls, and gamification woven into every topic.
        </p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:9,marginBottom:28,maxWidth:420,margin:"0 auto 28px"}}>
          {[["📚","8 Lessons"],["❓","8+ Quizzes"],["📊","Live Polls"],["🏆","XP & Levels"]].map(([e,l])=>
            <div key={l} style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:11,padding:"11px 8px",textAlign:"center"}}>
              <div style={{fontSize:20,marginBottom:3}}>{e}</div>
              <div style={{fontSize:11,color:T.muted,fontWeight:600}}>{l}</div>
            </div>)}
        </div>
        <button className="btn" onClick={()=>setView("lesson")} style={{background:`linear-gradient(135deg,${T.accent},${T.teal})`,color:"#fff",padding:"15px 44px",fontSize:18,boxShadow:`0 8px 32px ${T.accent}44`,marginBottom:22}}>
          🎒 Start Learning
        </button>
        <div style={{display:"flex",flexWrap:"wrap",gap:7,justifyContent:"center"}}>
          {SECS.map(s=><div key={s.id} style={{background:T.surface,border:`1px solid ${s.color}33`,borderRadius:20,padding:"3px 13px",fontSize:11,color:s.color,fontWeight:600}}>{s.icon} {s.label}</div>)}
        </div>
      </div>
    </div>
  );

  /* LESSON */
  return(
    <div style={{display:"flex",height:"100vh",overflow:"hidden"}}>
      <Confetti active={confetti}/>

      {/* SIDEBAR */}
      <div style={{width:sidebar?252:0,minWidth:sidebar?252:0,background:T.surface,borderRight:`1px solid ${T.border}`,display:"flex",flexDirection:"column",overflow:"hidden",transition:"all 0.3s",flexShrink:0}}>
        {sidebar&&<>
          <div style={{padding:"14px 18px",borderBottom:`1px solid ${T.border}`}}>
            <div style={{fontFamily:"Raleway",fontSize:17,fontWeight:900,background:`linear-gradient(135deg,${T.accent},${T.teal})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:3}}>🧠 NLP TeachLive</div>
            <div style={{fontSize:10,color:T.muted}}>Module 7 — NLP & AI/ML Algorithms</div>
          </div>
          <div style={{padding:"12px 14px",borderBottom:`1px solid ${T.border}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
              <div style={{fontSize:11,fontWeight:700,color:T.muted}}>Your Progress</div>
              <div style={{background:T.violet+"22",border:`1px solid ${T.violet}44`,borderRadius:20,padding:"1px 8px",fontSize:10,fontWeight:700,color:T.violet}}>Lv.{level}</div>
            </div>
            <div style={{background:T.card,borderRadius:20,height:7,overflow:"hidden",marginBottom:3}}>
              <div style={{height:"100%",width:`${(xp%100)}%`,borderRadius:20,background:`linear-gradient(90deg,${T.accent},${T.violet})`,transition:"width 0.5s ease"}}/>
            </div>
            <div style={{fontSize:10,color:T.muted}}>{xp} XP • {done.length}/{SECS.length} sections done</div>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"8px 8px"}}>
            <div style={{fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,padding:"0 6px",marginBottom:7}}>Lesson Sections</div>
            {SECS.map((s,i)=><button key={s.id} className="btn" onClick={()=>goSec(i)} style={{width:"100%",background:sec===i?s.color+"22":done.includes(i)?T.card:"transparent",border:`1.5px solid ${sec===i?s.color:done.includes(i)?T.border:"transparent"}`,color:sec===i?s.color:done.includes(i)?T.muted:T.dim,padding:"8px 11px",fontSize:12,textAlign:"left",marginBottom:3,display:"flex",gap:7,alignItems:"center"}}>
              <span style={{fontSize:15}}>{done.includes(i)&&sec!==i?"✅":s.icon}</span>
              <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.label}</span>
              {sec===i&&<span style={{width:5,height:5,borderRadius:"50%",background:s.color,animation:"pulse 1.5s infinite"}}/>}
            </button>)}
          </div>
          <div style={{padding:"8px",borderTop:`1px solid ${T.border}`}}><LBPanel myXP={xp}/></div>
        </>}
      </div>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {/* TOP BAR */}
        <div style={{background:T.surface,borderBottom:`1px solid ${T.border}`,padding:"9px 18px",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
          <button className="btn" onClick={()=>setSidebar(o=>!o)} style={{background:T.card,border:`1px solid ${T.border}`,color:T.muted,padding:"5px 10px",fontSize:13}}>{sidebar?"◀":"▶"}</button>
          <button className="btn" onClick={()=>setView("home")} style={{background:T.card,border:`1px solid ${T.border}`,color:T.muted,padding:"5px 12px",fontSize:12}}>← Home</button>
          <div style={{display:"flex",alignItems:"center",gap:7,flex:1}}>
            <div style={{width:26,height:26,borderRadius:6,background:S.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15}}>{S.icon}</div>
            <div><div style={{fontSize:13,fontWeight:700,color:S.color}}>{S.label}</div><div style={{fontSize:10,color:T.muted}}>Section {sec+1} of {SECS.length}</div></div>
          </div>
          <div style={{display:"flex",gap:4,alignItems:"center"}}>
            {SECS.map((_,i)=><div key={i} onClick={()=>goSec(i)} style={{width:i===sec?22:7,height:7,borderRadius:20,cursor:"pointer",background:i===sec?S.color:done.includes(i)?T.dim:T.border,transition:"all 0.3s"}}/>)}
          </div>
          <div style={{background:T.amber+"22",border:`1px solid ${T.amber}44`,borderRadius:20,padding:"3px 12px",fontSize:12,fontWeight:800,color:T.amber}}>⭐ {xp} XP</div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef} style={{flex:1,overflowY:"auto",padding:"28px 36px",maxWidth:820,width:"100%",margin:"0 auto"}}>
          <S.Comp key={S.id} onXP={addXP}/>

          {/* PREV / NEXT */}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:36,paddingTop:20,borderTop:`1px solid ${T.border}`}}>
            <button className="btn" onClick={()=>goSec(Math.max(0,sec-1))} disabled={sec===0} style={{background:sec===0?T.dim+"22":T.card,border:`1px solid ${T.border}`,color:sec===0?T.dim:T.muted,padding:"10px 20px",fontSize:13,opacity:sec===0?0.4:1}}>← Previous</button>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:11,color:T.muted,marginBottom:4}}>{sec+1} / {SECS.length}</div>
              <div style={{display:"flex",gap:4,justifyContent:"center"}}>{SECS.map((_,i)=><div key={i} style={{width:5,height:5,borderRadius:"50%",background:i===sec?S.color:done.includes(i)?T.dim:T.border}}/>)}</div>
            </div>
            {sec<SECS.length-1?
              <button className="btn" onClick={()=>{goSec(sec+1);addXP();}} style={{background:`linear-gradient(135deg,${SECS[sec+1].color},${SECS[sec+1].color}bb)`,color:"#fff",padding:"10px 20px",fontSize:13}}>
                Next: {SECS[sec+1].icon} {SECS[sec+1].label} →
              </button>
              :<div style={{color:T.green,fontWeight:800,fontSize:14,display:"flex",alignItems:"center",gap:5}}>🎓 Module Complete!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
