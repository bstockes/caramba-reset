
import { useState } from 'react';
import CameraModal from '../components/CameraModal';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I'm Carly 👋 — how can I help you with your vehicle today?' }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const sampleQuestions = [
    'Why is my engine overheating?',
    'What type of oil does my car need?',
    'How often should I rotate my tires?',
    'What does this check engine code mean?',
    'Where can I buy this part online?'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
    setInput('');
  };

  const handleSampleClick = (text) => {
    setInput(text);
  };

  const handleScanSelect = (type) => {
    setCameraOpen(false);
    if (type === 'barcode') {
      setMessages([...messages, { from: 'user', text: '[Photo of barcode]' }, { from: 'carly', text: 'Here are some links to buy this part online. (demo)' }]);
    } else {
      setMessages([...messages, { from: 'user', text: '[Photo of part]' }, { from: 'carly', text: 'That looks like an air filter. Part #: AF1234 (demo)' }]);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Ask Carly</h2>
      <div style={{ marginBottom: 12 }}>
        {sampleQuestions.map((q, idx) => (
          <button key={idx} onClick={() => handleSampleClick(q)} style={{ margin: '4px', padding: '8px 12px', borderRadius: 8, background: '#eee', border: '1px solid #ccc', cursor: 'pointer' }}>{q}</button>
        ))}
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, minHeight: 200, marginBottom: 12, background: '#fafafa' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <div style={{ display: 'inline-block', padding: 8, borderRadius: 8, background: msg.from === 'user' ? '#dcf8c6' : '#eee' }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask a question..."
          style={{ flex: 1, padding: 10, borderRadius: 20, border: '1px solid #ccc' }}
        />
        <button type="button" onClick={() => setCameraOpen(true)} style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          📷
        </button>
        <button type="button" onClick={() => alert('Voice input coming soon')} style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          🎤
        </button>
        <button type="submit" style={{ marginLeft: 8, padding: '8px 12px' }}>Send</button>
      </form>
      {cameraOpen && <CameraModal onSelect={handleScanSelect} onClose={() => setCameraOpen(false)} />}
    </div>
  );
}
