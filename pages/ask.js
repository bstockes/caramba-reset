import { useState } from 'react';
import Layout from '../components/Layout';
import { FiCamera, FiMic } from 'react-icons/fi';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'carly', text: 'Thanks for your question! I will get back with info soon. (demo)' }]);
    }, 500);
  };

  const handleSampleClick = (question) => {
    setInput(question);
    handleSend();
  };

  const sampleQuestions = [
    'What type of oil does my car need?',
    'When should I rotate my tires?',
    'What does this dashboard light mean?'
  ];

  return (
    <Layout title="Ask Carly">
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="border rounded p-4 h-[400px] overflow-y-auto bg-white">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.from === 'carly' ? 'text-left text-blue-700' : 'text-right text-gray-800'}`}>
              <div className="inline-block px-3 py-2 rounded bg-gray-100">
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 relative">
          <input
            className="w-full border rounded-full py-2 px-4 pr-16"
            placeholder="Ask Carly..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <FiCamera className="text-xl cursor-pointer" />
            <FiMic className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              className="bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm hover:bg-blue-200"
              onClick={() => handleSampleClick(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
