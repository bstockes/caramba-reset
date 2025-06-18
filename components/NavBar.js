import ThemeToggle from './ThemeToggle';

<div className={styles.links}>
  <Link href="/">Home</Link>
  <Link href="/ask">Ask Carly</Link>
  <ThemeToggle />
</div>

// components/NavBar.js
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Caramba</div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/ask">Ask Carly</Link>
          <Link href="/garage">My Garage</Link>
          <Link href="/account">My Account</Link>
        </div>
        <button className={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/">Home</Link>
          <Link href="/ask">Ask Carly</Link>
          <Link href="/garage">My Garage</Link>
          <Link href="/account">My Account</Link>
        </div>
      )}
    </>
  );
}
