
import { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import PartResultCard from '../components/PartResultCard';

export default function AskPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [scanMode, setScanMode] = useState(null);
  const [partInfo, setPartInfo] = useState(null);
  const [messages, setMessages] = useState([
    { from: "carly", text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [input, setInput] = useState('');

  const handleCapture = () => {
    setShowCamera(false);
    if (scanMode === 'barcode') {
      setPartInfo({
        type: 'Barcode',
        partNumber: 'BOSCH-0986AF5091',
        name: 'Cabin Air Filter',
        links: [
          { name: 'Amazon', url: 'https://www.amazon.com', price: '$19.95' },
          { name: 'AutoZone', url: 'https://www.autozone.com', price: '$22.99' },
          { name: 'OEMVolkswagen.com', url: 'https://www.oemvolkswagen.com', price: '$27.50' }
        ]
      });
    } else {
      setPartInfo({
        type: 'Photo',
        partNumber: 'BOSCH-0986AF5091',
        name: 'Cabin Air Filter',
        desc: 'Compatible with 2021 VW Tiguan',
        links: [
          { name: 'Amazon', url: 'https://www.amazon.com', price: '$19.95' },
          { name: 'AutoZone', url: 'https://www.autozone.com', price: '$22.99' }
        ]
      });
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        from: 'carly',
        text: 'Thanks for your question! Try checking your coolant level or AC compressor.'
      }]);
    }, 1000);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Ask Carly</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => { setScanMode('barcode'); setShowCamera(true); }}>
          📷 Scan Barcode
        </button>
        <button onClick={() => { setScanMode('photo'); setShowCamera(true); }} style={{ marginLeft: '1rem' }}>
          📸 Take Photo of Part
        </button>
      </div>

      {showCamera && (
        <CameraCapture onCapture={handleCapture} onCancel={() => setShowCamera(false)} />
      )}

      {partInfo && <PartResultCard info={partInfo} />}

      <div style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <h3>Talk to Carly</h3>
        <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: '1rem', padding: '0.5rem', background: '#f8f8f8', borderRadius: 8 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 8, textAlign: m.from === 'user' ? 'right' : 'left' }}>
              <span style={{
                background: m.from === 'user' ? '#dcf8c6' : '#eee',
                padding: '6px 10px',
                borderRadius: 6,
                display: 'inline-block'
              }}>{m.text}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{ width: '75%', padding: 8 }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 12px', marginLeft: 8 }}>Send</button>
      </div>
    </div>
  );
}
