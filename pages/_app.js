import { ThemeProvider } from '../components/ThemeProvider';
import '../styles/themes.css';
import '../styles/globals.css';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
