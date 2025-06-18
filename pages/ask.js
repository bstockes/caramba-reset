
import { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner';
import CameraCapture from '../components/CameraCapture';
import SuggestedQuestions from '../components/SuggestedQuestions';

export default function Ask() {
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [input, setInput] = useState('');
  const [scanBarcode, setScanBarcode] = useState(false);
  const [scanPhoto, setScanPhoto] = useState(false);

  const addMessage = (from, text) =>
    setMessages(prev => [...prev, { from, text }]);

  const sendQuestion = () => {
    if (!input.trim()) return;
    addMessage('user', input);
    setInput('');
    setTimeout(() =>
      addMessage('carly', 'Thanks for your question! I will get back with info soon. (demo)')
    , 800);
  };

  const handleBarcode = code => {
    setScanBarcode(false);
    addMessage('user', '📦 (Barcode scanned)');
    addMessage(
      'carly',
      `I found **Bosch Brake Pads** (Part #${code}).\n\nBuy:\n- AutoZone – $59.99\n- Amazon – $54.50`
    );
  };

  const handlePhoto = imgData => {
    setScanPhoto(false);
    addMessage('user', '📸 (Part photo taken)');
    addMessage(
      'carly',
      `Looks like a **Cabin Air Filter** (Part #CAF-9876). Compatible with your 2021 VW Tiguan 🌟`
    );
  };

  const handlePromptClick = (text) => {
    setInput(text);
    sendQuestion();
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: '0 auto' }}>
      <h2>Ask Carly</h2>
      <div style={{ background: '#f8f8f8', padding: 12, borderRadius: 8, maxHeight: 220, overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: '8px 0', textAlign: m.from === 'user' ? 'right' : 'left' }}>
            <span style={{
              background: m.from === 'user' ? '#dcf8c6' : '#eee',
              padding: '6px 10px',
              borderRadius: 6,
              display: 'inline-block'
            }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question…"
          onKeyDown={e => e.key === 'Enter' && sendQuestion()}
          style={{ width: '65%', padding: 6 }}
        />
        <button onClick={sendQuestion} style={{ marginLeft: 6 }}>Send</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setScanBarcode(true)}>📦 Scan Barcode</button>
        <button onClick={() => setScanPhoto(true)} style={{ marginLeft: 10 }}>📸 Take Part Photo</button>
      </div>

      <SuggestedQuestions onSelect={handlePromptClick} />

      {scanBarcode && (
        <BarcodeScanner
          onScan={handleBarcode}
          onCancel={() => setScanBarcode(false)}
        />
      )}
      {scanPhoto && (
        <CameraCapture
          onCapture={handlePhoto}
          onCancel={() => setScanPhoto(false)}
        />
      )}
    </div>
  );
}
