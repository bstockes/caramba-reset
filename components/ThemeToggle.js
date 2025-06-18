
import { useTheme } from './ThemeProvider';
import styles from '../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className={styles.toggle} onClick={toggle}>
      {theme === 'redline' ? 'Switch to Torque' : 'Switch to Redline'}
    </button>
  );
}
