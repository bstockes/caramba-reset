import { useState } from 'react';
import CameraModal from '../components/CameraModal';
import VoiceToTextButton from '../components/VoiceToTextButton';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I'm Carly 👋 — how can I help you with your vehicle today?' },
    { from: 'carly', text: 'You can ask me things like:\n• What type of oil does my car need?\n• When should I rotate my tires?\n• What does this dashboard light mean?' }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
    setInput('');
    setShowSuggestions(false);
  };

  const suggestions = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "What does this dashboard light mean?",
    "Is it time for a new battery?",
    "How often should I check my brakes?"
  ];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h2>Ask Carly</h2>
      <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{
              background: msg.from === 'user' ? '#007bff' : '#f1f1f1',
              color: msg.from === 'user' ? 'white' : 'black',
              padding: '8px 12px',
              borderRadius: 20,
              display: 'inline-block',
              maxWidth: '80%'
            }}>{msg.text}</span>
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask me anything…" style={{
          flex: 1, padding: '10px 40px 10px 40px', borderRadius: 24, border: '1px solid #ccc'
        }} />
        <span onClick={() => setCameraOpen(true)} style={{ position: 'absolute', left: 12, cursor: 'pointer' }}>📷</span>
        <span style={{ position: 'absolute', right: 12 }}><VoiceToTextButton setInput={setInput} /></span>
      </div>
      {cameraOpen && <CameraModal onSelect={(mode) => { setCameraOpen(false); alert("Selected: " + mode); }} onClose={() => setCameraOpen(false)} />}
      {showSuggestions && (
        <div style={{ marginTop: 20 }}>
          {suggestions.map((s, i) => (
            <button key={i} onClick={() => setInput(s)} style={{
              margin: 4, padding: '8px 12px', borderRadius: 16, border: '1px solid #ccc', background: '#fafafa'
            }}>{s}</button>
          ))}
        </div>
      )}
    </div>
  );
}