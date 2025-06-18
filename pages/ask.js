
import { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner';

export default function Ask() {
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [input, setInput] = useState('');
  const [scanning, setScanning] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    const carlyReply = {
      from: 'carly',
      text: "Thanks for your question! I'm fetching some helpful info... (demo)"
    };
    setMessages([...messages, userMessage, carlyReply]);
    setInput('');
  };

  const handleScan = () => {
    setScanning(true);
  };

  const handleBarcodeDetected = (code) => {
    setScanning(false);
    setMessages(prev => [
      ...prev,
      { from: 'user', text: '📦 Scanned part barcode...' },
      {
        from: 'carly',
        text: `I found: Bosch Brake Pads (Part #${code})

Available at:
- [AutoZone](https://autozone.com)
- [Amazon](https://amazon.com)`
      }
    ]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Ask Carly</h2>
      <div style={{ marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '10px 0', color: msg.from === 'carly' ? 'crimson' : 'black' }}>
            <strong>{msg.from === 'carly' ? 'Carly' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your question..."
        style={{ width: '70%', marginRight: 10 }}
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={handleScan} style={{ marginLeft: 10 }}>📦 Scan Barcode</button>
      {scanning && (
        <BarcodeScanner onScan={handleBarcodeDetected} onCancel={() => setScanning(false)} />
      )}
    </div>
  );
}
