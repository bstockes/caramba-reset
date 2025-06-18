import { useState } from 'react';
import { FiCamera, FiMic } from 'react-icons/fi';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: 'Hi! I’m Carly 👋 — how can I help you with your vehicle today?' }
  ]);
  const sampleQuestions = [
    'What type of oil does my car need?',
    'When should I rotate my tires?',
    'What does this dashboard light mean?',
  ];

  const sendMessage = (text) => {
    if (!text) return;
    setMessages([...messages, { from: 'user', text }, { from: 'carly', text: 'Thanks for your question! I’ll get back with info soon. (demo)' }]);
    setInput('');
  };

  return (
    <div className="container">
      <h2>Ask Carly</h2>
      <div className="chatbox">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>{msg.text}</div>
        ))}
      </div>
      <div className="input-wrapper">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
          placeholder="Ask a question..."
        />
        <FiMic className="icon" />
        <FiCamera className="icon" />
      </div>
      <div className="suggestions">
        {sampleQuestions.map((q, i) => (
          <button key={i} onClick={() => sendMessage(q)}>{q}</button>
        ))}
      </div>
    </div>
  );
}