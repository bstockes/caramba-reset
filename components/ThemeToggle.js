import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'redline' ? 'torque' : 'redline')} style={{ marginLeft: 8 }}>
      {theme === 'redline' ? 'Switch to Torque' : 'Switch to Redline'}
    </button>
  );
}
