import { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner';
import CameraCapture from '../components/CameraCapture';
import CameraModal from '../components/CameraModal';
import SuggestedQuestions from '../components/SuggestedQuestions';

/* ───────────────────────────────────────── */

export default function Ask() {
  /* state */
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you today?" }
  ]);
  const [input, setInput]   = useState('');
  const [modal, setModal]   = useState(null);        // null | "barcode" | "photo"
  const [listening, setListening] = useState(false); // voice-to-text mock

  /* helpers */
  const add = (from, text) => setMessages(m => [...m, { from, text }]);

  /* smart replies */
  const qa = {
    'what oil does my car take':
      'Your 2021 VW Tiguan uses **0W-20 full-synthetic**. Change it every **5 000 mi**.',
    'when is my next maintenance':
      'You’re due for an oil change at **50 000 mi** and tire rotation at **75 000 mi**.',
    'why is my check engine light on':
      'Could be a loose gas cap, O₂ sensor, or spark plug issue. Want help diagnosing?',
    'what tire pressure should i use':
      'Factory spec: **35 PSI (cold)**.',
    'where can i buy brake pads':
      'Options for your Tiguan:\n• AutoZone $59.99\n• Amazon $54.50\n• NAPA $62.00',
    'why is my car overheating':
      'Common causes: low coolant, radiator leak, faulty thermostat.',
    'can i schedule an oil change':
      'Sure! Go to **Schedule Service** or I can connect you with a local shop.',
    'what’s causing my battery to drain':
      'Likely parasitic draw or aging battery. I recommend a battery test.'
  };

  const send = (txt) => {
    if (!txt.trim()) return;
    add('user', txt);
    setInput('');
    setTimeout(() => {
      const key = Object.keys(qa).find(k => txt.toLowerCase().includes(k));
      add('carly', key ? qa[key] : 'Thanks! I’ll dig into that. (demo)');
    }, 600);
  };

  /* camera results */
  const handleBarcode = (code) => {
    setModal(null);
    add('user', '📷 (barcode)');
    add('carly', `Found **Brake Pads** (#${code}).\nBuy:\n• AutoZone $59.99\n• Amazon $54.50`);
  };
  const handlePhoto   = () => {
    setModal(null);
    add('user', '📷 (photo)');
    add('carly', 'Looks like a **Cabin Air Filter** (#CAF-9876) for your Tiguan.');
  };

  /* voice mock */
  const toggleMic = () => {
    setListening(!listening);
    alert('🎤 Voice-to-text is mocked in this demo.');
  };

  /* ──────────────────────────── render */
  return (
    <div style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ marginBottom: 12 }}>Ask Carly</h2>

      {/* chat */}
      <div style={{
        background: '#fff', borderRadius: 12, boxShadow: '0 2px 6px rgba(0,0,0,.06)',
        padding: 16, maxHeight: 260, overflowY: 'auto'
      }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ textAlign: m.from==='user'?'right':'left', margin:'8px 0' }}>
            <span style={{
              background: m.from==='user'?'#d1e7dd':'#f1f1f1',
              padding:'8px 12px', borderRadius:8, display:'inline-block'
            }}>{m.text}</span>
          </div>
        ))}
      </div>

      {/* search bar */}
      <div style={{ display:'flex', alignItems:'center', marginTop:16 }}>
        <input
          style={{
            flex:1, padding:'10px 44px 10px 12px', borderRadius:8,
            border:'1px solid #ccc', fontSize:16
          }}
          placeholder="Type a question…"
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter' && send(input)}
        />
        {/* camera icon */}
        <button
          onClick={()=>setModal('chooser')}
          title="Open camera"
          style={{
            position:'relative', right:36, fontSize:20, background:'none', border:'none', cursor:'pointer'
          }}>📷</button>
        {/* mic icon */}
        <button
          onClick={toggleMic}
          title="Voice to text"
          style={{
            position:'relative', right:16, fontSize:20, background:'none', border:'none', cursor:'pointer'
          }}>🎤</button>
        <button onClick={()=>send(input)} style={{ marginLeft:8, padding:'8px 16px' }}>Send</button>
      </div>

      {/* suggestions */}
      <SuggestedQuestions onSelect={send} />

      {/* modals */}
      {modal==='chooser' && (
        <CameraModal
          onSelect={(mode)=>setModal(mode)}
          onClose={()=>setModal(null)}
        />
      )}
      {modal==='barcode' && (
        <BarcodeScanner onScan={handleBarcode} onCancel={()=>setModal(null)} />
      )}
      {modal==='photo' && (
        <CameraCapture onCapture={handlePhoto} onCancel={()=>setModal(null)} />
      )}
    </div>
  );
}
// ask.js placeholder - replace with full code
