import { useState } from 'react';
import CameraModal from '../components/CameraModal';
import VoiceToTextButton from '../components/VoiceToTextButton';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const suggestions = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "Why is my engine overheating?",
    "Where can I buy brake pads?"
  ];

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text }, { from: 'carly', text: 'Thanks! I’ll get back with info soon. (demo)' }]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Ask Carly</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: 10, padding: 12, height: 280, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.from === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{
              display:'inline-block', padding:'8px 12px', borderRadius:16,
              background: m.from === 'user' ? '#dcf8c6' : '#f1f1f1'
            }}>{m.text}</span>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', marginBottom: 12 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
          placeholder="Ask Carly..."
          style={{
            width: '100%', padding: '10px 48px 10px 12px',
            borderRadius: 20, border: '1px solid #ccc'
          }}
        />
        <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 8 }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setCameraOpen(true)}>📷</span>
          <VoiceToTextButton setInput={setInput} />
        </div>
      </div>

      <button onClick={() => sendMessage(input)} style={{ padding: '8px 12px', borderRadius: 20 }}>Send</button>

      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {suggestions.map((q, i) => (
          <button
            key={i}
            onClick={() => sendMessage(q)}
            style={{ padding:'6px 12px', borderRadius:16, border:'1px solid #ccc', background:'#fafafa' }}
          >
            {q}
          </button>
        ))}
      </div>

      {cameraOpen && <CameraModal onSelect={mode => { setCameraOpen(false); sendMessage(`[Scanned ${mode}]`); }} onClose={() => setCameraOpen(false)} />}
    </div>
  );
}
