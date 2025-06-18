import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
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
        </div>
        <ThemeToggle />
        <button className={styles.hamburger} onClick={() => setOpen(!open)}>☰</button>
      </nav>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/ask" onClick={()=>setOpen(false)}>Ask Carly</Link>
          <Link href="/garage" onClick={()=>setOpen(false)}>My Garage</Link>
        </div>
      )}
    </>
  );
}
