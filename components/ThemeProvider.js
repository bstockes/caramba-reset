
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // default theme = redline
  const [theme, setTheme] = useState('redline');

  // Persist theme in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('caramba-theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('caramba-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'redline' ? 'torque' : 'redline'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
