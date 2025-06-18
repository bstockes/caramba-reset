
import { useState } from 'react';
import { FiMic, FiCamera } from 'react-icons/fi';
import CameraModal from '../components/CameraModal';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I'm Carly 👋 — how can I help you with your vehicle today?' }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'carly', text: "Thanks for your question! I’ll get back with info soon. (demo)" }]);
    }, 600);
  };

  const handleSuggested = (text) => {
    setInput(text);
    handleSend();
  };

  const handlePhotoUpload = (mode) => {
    setCameraOpen(false);
    setMessages([...messages, { from: 'user', text: `[📷 ${mode === 'barcode' ? 'Barcode Scan' : 'Part Photo'} uploaded]` }]);
    setMessages(msgs => [...msgs, { from: 'carly', text: "Here's where you can buy this part: [demo link]" }]);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ fontSize: 24, marginBottom: 16 }}>Ask Carly</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: 12, padding: 12, height: 300, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', marginBottom: 10 }}>
            <div style={{
              display: 'inline-block',
              background: msg.from === 'user' ? '#DCF8C6' : '#f1f0f0',
              borderRadius: 16,
              padding: '8px 12px',
              maxWidth: '80%'
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
          placeholder="Ask Carly..."
          style={{ flex: 1, padding: 10, borderRadius: 20, border: '1px solid #ccc' }}
        />
        <FiMic size={20} style={{ cursor: 'pointer' }} title="Voice Input" />
        <FiCamera size={20} style={{ cursor: 'pointer' }} title="Scan Part or Barcode" onClick={() => setCameraOpen(true)} />
        <button onClick={handleSend} style={{ padding: '8px 12px' }}>Send</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <h4 style={{ marginBottom: 8 }}>Try asking:</h4>
        {[
          "What type of oil does my car need?",
          "When should I rotate my tires?",
          "What is my current tire pressure?",
          "How often should I change my air filter?"
        ].map((q, i) => (
          <button key={i} onClick={() => handleSuggested(q)} style={{
            margin: 4,
            padding: '6px 12px',
            borderRadius: 20,
            border: '1px solid #ccc',
            background: '#f9f9f9',
            cursor: 'pointer'
          }}>{q}</button>
        ))}
      </div>

      {cameraOpen && <CameraModal onSelect={handlePhotoUpload} onClose={() => setCameraOpen(false)} />}
    </div>
  );
}
