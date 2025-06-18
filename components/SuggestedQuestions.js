
export default function SuggestedQuestions({ onSelect }) {
  const questions = [
    "What oil does my car take?",
    "When is my next maintenance?",
    "Why is my check engine light on?",
    "What tire pressure should I use?",
    "Where can I buy brake pads?",
    "Why is my car overheating?",
    "Can I schedule an oil change?",
    "What’s causing my battery to drain?"
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <h4>💡 Suggested Questions</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => onSelect(q)}
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              background: '#eee',
              cursor: 'pointer',
              border: '1px solid #ccc'
            }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
