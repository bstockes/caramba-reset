
import ChatBox from '../components/ChatBox';

export default function Ask() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>🧠 Ask Carly</h1>
      <p>Get help with anything about your vehicle.</p>
      <ChatBox />
    </main>
  );
}
