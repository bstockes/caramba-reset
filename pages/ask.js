import { useState } from 'react';
import CameraModal from '../components/CameraModal';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I\'m Carly 👋 — how can I help you with your vehicle today?' }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Ask Carly</h2>
      <div style={{ marginBottom: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: '.5rem 0' }}>
            <strong>{msg.from === 'carly' ? 'Carly' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask Carly anything..."
          style={{ flex: 1, padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={() => setCameraOpen(true)}>📷</button>
        <button onClick={handleSend}>Send</button>
      </div>
      {cameraOpen && <CameraModal onSelect={() => setCameraOpen(false)} onClose={() => setCameraOpen(false)} />}
    </div>
  );
}
