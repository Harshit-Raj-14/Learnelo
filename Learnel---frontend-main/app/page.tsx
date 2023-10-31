import Link from "next/link";
import './style.css'

export default function Home() {

 
  return (
    <main>
      <nav>
        <div className="headingwa"><h1>Learnelo</h1></div>
      <div className="navbar-links-container hinavy">
      <a href="/" className="Navbarbuttonwa" style={{ color: "#fff" }}>Home</a>
        <a href="" className="Navbarbuttonwa" style={{ color: "#fff" }}>GitHub</a>
        <Link href="/login" className="Navbarbuttonwa" style={{ color: "#fff" }}>LogIn</Link>
        <Link href="/login" className="Navbarbuttonwa" style={{ color: "#fff" }}>SignUp</Link>
      </div>
    </nav>
    <svg xmlns="http://www.w3.org/2000/svg" style={{ padding: "0"}} viewBox="0 0 640 512" id="IconChangeColor" height="91" width="91"><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" id="mainIconPathAttribute" fill="#ffffff" filter="url(#shadow)"></path><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>
  
    <h2>
    Learnelo</h2>
    <h3>Bringing Education Home</h3> 
    <h3>Through Virtual Classrooms
    </h3>
    <Link href="/login">
    <button style={{ border: "solid"}}>
{">"} Get Started 
    </button>
    </Link>


 <footer>Built with ❤️ by Harshit Raj for Hanko</footer>
    </main>
  );
}
