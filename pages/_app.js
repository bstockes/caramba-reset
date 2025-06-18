
import { ThemeProvider } from '../components/ThemeProvider';
import NavBar from '../components/NavBar';
import '../styles/themes.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
