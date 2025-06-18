
import { useState } from 'react';
import styles from '../styles/ChatBox.module.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: 'carly', text: 'Hi! I'm Carly. What would you like to know about your vehicle?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Mock Carly response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'carly',
        text: 'Thanks for your question! I'm analyzing that now. (This is a mock response.)'
      }]);
    }, 1000);
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.messages}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === 'user' ? styles.user : styles.carly}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.inputRow}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
