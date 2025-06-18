import NavBar from './NavBar';
import '../styles/globals.css';
export default function Layout({children}){
 return(<><NavBar/><main style={{maxWidth:600,margin:'0 auto',padding:'1rem'}}>{children}</main></>);
}
