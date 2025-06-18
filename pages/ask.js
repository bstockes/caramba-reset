
import { useState } from 'react';
import CameraModal from '../components/CameraModal';
import VoiceToTextButton from '../components/VoiceToTextButton';
import { FiCamera, FiMic } from 'react-icons/fi';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const suggestedQuestions = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "How often should I replace my air filter?",
    "Why is my check engine light on?",
    "Where can I buy wiper blades for my car?"
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
    setInput('');
  };

  const handleSuggestedClick = (question) => {
    setInput(question);
    setMessages([...messages, { from: 'user', text: question }, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
  };

  const handleCameraSelect = (mode) => {
    setCameraOpen(false);
    setMessages([...messages, { from: 'user', text: `📷 Scanned via ${mode}` }, { from: 'carly', text: 'Looking up the part… (demo)' }]);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Ask Carly</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, height: 300, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', marginBottom: 10 }}>
            <div style={{
              display: 'inline-block',
              background: msg.from === 'user' ? '#DCF8C6' : '#eee',
              borderRadius: 16,
              padding: '8px 12px',
              maxWidth: '80%',
              fontSize: 14
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask Carly..."
            style={{ width: '100%', padding: '8px 36px 8px 12px', borderRadius: 20, border: '1px solid #ccc', fontSize: 14 }}
          />
          <FiCamera
            onClick={() => setCameraOpen(true)}
            style={{ position: 'absolute', right: 30, top: 8, cursor: 'pointer' }}
          />
          <FiMic
            onClick={() => alert('Voice-to-text demo')}
            style={{ position: 'absolute', right: 8, top: 8, cursor: 'pointer' }}
          />
        </div>
        <button onClick={handleSend} style={{ padding: '8px 12px', borderRadius: 20, background: '#0070f3', color: '#fff', border: 'none' }}>
          Send
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Try asking:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
          {suggestedQuestions.map((q, i) => (
            <button key={i} onClick={() => handleSuggestedClick(q)} style={{
              background: '#f0f0f0', border: '1px solid #ccc', borderRadius: 16,
              padding: '6px 12px', fontSize: 12, cursor: 'pointer'
            }}>{q}</button>
          ))}
        </div>
      </div>

      {cameraOpen && <CameraModal onSelect={handleCameraSelect} onClose={() => setCameraOpen(false)} />}
    </div>
  );
}
