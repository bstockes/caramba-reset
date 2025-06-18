import { useState } from 'react';
import CameraModal from '../components/CameraModal';

export default function Ask() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [showCameraModal, setShowCameraModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: "Thanks for your question! I’ll get back with info soon. (demo)" }]);
    setInput('');
  };

  const handleCameraIconClick = () => {
    setShowCameraModal(true);
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Ask Carly</h2>
      <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8, minHeight: 300, marginBottom: 20 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{
              display: 'inline-block',
              padding: '10px 14px',
              borderRadius: 18,
              background: msg.from === 'user' ? '#e0e0e0' : '#d1e8ff',
              maxWidth: '80%'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about your car..."
            style={{ width: '100%', padding: '10px 40px 10px 10px', borderRadius: 20, border: '1px solid #ccc' }}
          />
          <span onClick={handleCameraIconClick} style={{ position: 'absolute', right: 30, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
            📷
          </span>
          <span onClick={handleVoiceInput} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
            🎤
          </span>
        </div>
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 20, border: 'none', background: '#0070f3', color: '#fff' }}>Send</button>
      </form>

      {showCameraModal && (
        <CameraModal
          onSelect={(mode) => {
            setShowCameraModal(false);
            setMessages([...messages, { from: 'user', text: `[📸 ${mode === 'barcode' ? 'Barcode Scan' : 'Part Photo'}]` }, { from: 'carly', text: `Pretend I returned info for ${mode}` }]);
          }}
          onClose={() => setShowCameraModal(false)}
        />
      )}
    </div>
  );
}// Updated ask.js with modern UI and icon placement.
