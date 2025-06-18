
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{padding:'2rem'}}>
      <h1>Welcome to Caramba 🚗</h1>
      <p>Hello! I'm Carly, your AI vehicle assistant.</p>
      <Link href="/ask"><button style={{padding:'0.5rem 1rem',background:'var(--accent)',color:'#fff',border:'none',borderRadius:'8px'}}>Ask Carly</button></Link>
    </main>
  );
}
