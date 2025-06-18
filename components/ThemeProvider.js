
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('redline');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('caramba-theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('caramba-theme', theme);
    }
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'redline' ? 'torque' : 'redline'));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
