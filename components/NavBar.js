import Link from 'next/link';
export default function NavBar(){
 return(<nav style={{background:'#fff',boxShadow:'0 1px 4px rgba(0,0,0,.05)',padding:'0.75rem 1rem',marginBottom:'1rem'}}>
   <Link href="/">Home</Link> | <Link href="/ask">Ask Carly</Link> | <Link href="/garage">My Garage</Link> | <Link href="/account">Account</Link>
 </nav>);
}
