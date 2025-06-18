import { useState } from 'react';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "carly", text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [input,setInput] = useState('');

  const send = () => {
    if(!input.trim()) return;
    setMessages([...messages,{from:'user',text:input}]);
    setInput('');
    setTimeout(()=>{
      setMessages(m => [...m,{from:'carly',text:'Mock answer coming soon!'}]);
    },800);
  };

  return (
    <div style={{ marginTop:'1rem' }}>
      <div style={{ maxHeight:200, overflowY:'auto', background:'#f8f8f8', padding:8, borderRadius:8 }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ textAlign:m.from==='user'?'right':'left', margin:'4px 0' }}>
            <span style={{ background:m.from==='user'?'#dcf8c6':'#eee', padding:'6px 10px', borderRadius:6 }}>{m.text}</span>
          </div>
        ))}
      </div>
      <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Your question..." style={{ width:'70%', padding:6, marginTop:6 }} />
      <button onClick={send} style={{ marginLeft:6 }}>Send</button>
    </div>
  );
}