
import { useState } from 'react';
import CameraModal from '../components/CameraModal';
import VoiceToTextButton from '../components/VoiceToTextButton';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" },
    { from: 'carly', text: `You can ask me things like:
• What type of oil does my car need?
• When should I rotate my tires?
• What does this dashboard light mean?` }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const suggested = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "Why is my engine overheating?",
    "Where can I buy brake pads?"
  ];

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: 'Thanks! I’ll get back with info soon. (demo)' }]);
    setInput('');
  };

  return (
    <div style={{ maxWidth:600, margin:'0 auto', padding:20, fontFamily:'sans-serif' }}>
      <h2>Ask Carly</h2>
      <div style={{ border:'1px solid #ccc', borderRadius:10, padding:12, height:280, overflowY:'auto', marginBottom:12 }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ textAlign:m.from==='user'?'right':'left', margin:'8px 0' }}>
            <span style={{
              display:'inline-block', padding:'8px 12px', borderRadius:16,
              background:m.from==='user'?'#dcf8c6':'#f1f1f1'
            }}>{m.text}</span>
          </div>
        ))}
      </div>

      <div style={{ position:'relative', display:'flex', alignItems:'center', gap:6 }}>
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Ask Carly..."
          style={{ flex:1, padding:'10px 42px 10px 12px', borderRadius:20, border:'1px solid #ccc' }}
        />
        <span onClick={()=>setCameraOpen(true)} style={{ position:'absolute', left:12, cursor:'pointer' }}>📷</span>
        <span style={{ position:'absolute', right:40 }}><VoiceToTextButton setInput={setInput} /></span>
        <button onClick={send} style={{ padding:'8px 12px', borderRadius:20 }}>Send</button>
      </div>

      {cameraOpen && (
        <CameraModal
          onSelect={(mode)=>{ setCameraOpen(false); alert('Demo ' + mode); }}
          onClose={()=>setCameraOpen(false)}
        />
      )}

      <div style={{ marginTop:16 }}>
        {suggested.map((q,i)=>(
          <button key={i} onClick={()=>setInput(q)} style={{
            margin:4, padding:'6px 12px', borderRadius:16, border:'1px solid #ccc', background:'#fafafa'
          }}>{q}</button>
        ))}
      </div>
    </div>
  );
}
