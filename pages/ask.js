import {useState} from 'react';
import {FiCamera,FiMic} from 'react-icons/fi';
export default function Ask(){
 const [input,setInput]=useState('');
 const [msgs,setMsgs]=useState([{from:'carly',text:"Hi! I'm Carly 👋 — how can I help you today?"}]);
 const sugg=["What type of oil does my car need?","When should I rotate my tires?","Why is my engine overheating?"];
 const send=t=>{if(!t.trim())return;setMsgs(m=>[...m,{from:'user',text:t},{from:'carly',text:'Thanks! (demo)'}]);setInput('');};
 return(<div>
  <h2>Ask Carly</h2>
  <div style={{border:'1px solid #ccc',borderRadius:10,padding:12,height:220,overflowY:'auto',marginBottom:12}}>
   {msgs.map((m,i)=><div key={i} style={{textAlign:m.from==='user'?'right':'left',margin:'8px 0'}}><span style={{display:'inline-block',padding:'8px 12px',borderRadius:16,background:m.from==='user'?'#dcf8c6':'#f1f1f1'}}>{m.text}</span></div>)}
  </div>
  <div style={{position:'relative',marginBottom:12}}>
   <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send(input)} placeholder="Ask Carly..." style={{width:'100%',padding:'10px 48px 10px 12px',borderRadius:20,border:'1px solid #ccc'}}/>
   <div style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',display:'flex',gap:8}}>
     <FiCamera style={{cursor:'pointer'}}/>
     <FiMic style={{cursor:'pointer'}}/>
   </div>
  </div>
  <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
   {sugg.map((q,i)=><button key={i} onClick={()=>send(q)} style={{padding:'6px 12px',borderRadius:16,border:'1px solid #ccc',background:'#fafafa'}}>{q}</button>)}
  </div>
 </div>);
}
