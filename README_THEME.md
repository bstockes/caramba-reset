
# Caramba Theme System

This theme system lets you switch between **Precision Redline** and **Modern Torque**.

## Files
- `components/ThemeProvider.js` – React context that stores current theme and toggles it. Persists to localStorage.
- `components/ThemeToggle.js` – Small button that toggles theme.
- `styles/themes.css` – CSS variables for both themes.

## Installation
1. Copy `components/` files into your project's `components/` folder.
2. Copy `styles/themes.css` into `styles/` and import it in `pages/_app.js` *before* your global CSS.
3. Wrap your application in `ThemeProvider` (`pages/_app.js`).

```jsx
import { ThemeProvider } from '../components/ThemeProvider';
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
```

4. Place `<ThemeToggle />` in your NavBar or anywhere you want users to switch themes.

```jsx
import ThemeToggle from './ThemeToggle';
...
<div className={styles.links}>
  <Link href="/">Home</Link>
  <Link href="/ask">Ask Carly</Link>
  <ThemeToggle />
</div>
```

The document root attribute `data-theme` will automatically update, and CSS variables will change colors site‑wide.
