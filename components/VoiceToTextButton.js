import { useEffect } from 'react';

export default function VoiceToTextButton({ setInput }) {
  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = event => {
      const text = event.results[0][0].transcript;
      setInput(prev => prev + (prev ? ' ' : '') + text);
    };
    recognition.start();
  };

  return <button onClick={handleVoiceInput} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🎤</button>;
}