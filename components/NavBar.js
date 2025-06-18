import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const closeMobile = () => setOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Caramba</div>

        {/* Desktop links */}
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/ask">Ask Carly</Link>
          <Link href="/garage">My Garage</Link>
          <Link href="/products">Products</Link>
          <Link href="/dealer">Dealer</Link>
        </div>

        <ThemeToggle />

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile slide-out menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={closeMobile}>Home</Link>
          <Link href="/ask" onClick={closeMobile}>Ask Carly</Link>
          <Link href="/garage" onClick={closeMobile}>My Garage</Link>
          <Link href="/products" onClick={closeMobile}>Products</Link>
          <Link href="/dealer" onClick={closeMobile}>Dealer</Link>
        </div>
      )}
    </>
  );
}
