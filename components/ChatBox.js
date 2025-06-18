
import { useState } from 'react';
import styles from '../styles/ChatBox.module.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: 'carly', text: 'Hi! I\'m Carly. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'carly', text: 'Here\'s a mock answer to your question.' }]);
    }, 800);
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div key={i} className={m.sender==='user'?styles.user:styles.carly}>{m.text}</div>
        ))}
      </div>
      <div className={styles.inputRow}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type message..." />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
