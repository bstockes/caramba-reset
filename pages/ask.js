
import { useState } from 'react';
import CameraModal from '../components/CameraModal';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I\'m Carly 👋 — how can I help you with your vehicle today?' },
    { from: 'carly', text: `You can ask me things like:
• What type of oil does my car need?
• When should I rotate my tires?
• Where can I buy brake pads for a 2017 Civic?` }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
    setInput('');
  };

  const handleVoice = () => {
    alert('Voice-to-text demo placeholder');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto' }}>
      <h2>Ask Carly</h2>
      <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 10, height: 300, overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 10, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <div style={{
              display: 'inline-block',
              padding: 10,
              borderRadius: 8,
              background: msg.from === 'user' ? '#e0f7fa' : '#f0f0f0'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Carly about your car..."
          style={{ flexGrow: 1, padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
        />
        <button onClick={() => setCameraOpen(true)} style={{ background: 'none', border: 'none' }}>
          📷
        </button>
        <button onClick={handleVoice} style={{ background: 'none', border: 'none' }}>
          🎤
        </button>
        <button onClick={handleSend} style={{ padding: '8px 12px', borderRadius: 8 }}>Send</button>
      </div>
      {cameraOpen && (
        <CameraModal
          onSelect={(mode) => {
            setCameraOpen(false);
            setMessages([...messages, { from: 'user', text: `[Camera ${mode}]` }, { from: 'carly', text: `Processed ${mode} image (demo).` }]);
          }}
          onClose={() => setCameraOpen(false)}
        />
      )}
    </div>
  );
}
