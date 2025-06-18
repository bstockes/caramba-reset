
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} style={{
      padding:'0.25rem 0.75rem',
      background: theme==='redline'? '#D72638':'#14B8A6',
      color:'#fff',
      border:'none',
      borderRadius:'6px',
      cursor:'pointer'
    }}>
      Switch to {theme==='redline'?'Torque':'Redline'}
    </button>
  );
}
