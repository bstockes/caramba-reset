
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Caramba</Link>
      </div>
      <nav className={open ? styles.navOpen : styles.nav}>
        <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link href="/ask" onClick={()=>setOpen(false)}>Ask Carly</Link>
        <Link href="/garage" onClick={()=>setOpen(false)}>My Garage</Link>
        <Link href="/account" onClick={()=>setOpen(false)}>My Account</Link>
      </nav>
      <button className={styles.burger} onClick={()=>setOpen(!open)}>
        ☰
      </button>
    </header>
  );
}
