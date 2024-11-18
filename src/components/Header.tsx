import Link from "next/link"
import "../app/style/header.css"

export default function Header (){
    return(
      <>
      <div className="header">
        <div className="logo">
            <h1>Sagar</h1>
        </div>
        <div className="nav-hed">
            <ul >
                <li ><Link href="#home"className="li-link"  >Home</Link></li>
                <li ><Link href="#about"className="li-link" >About</Link></li>
                <li ><Link href="#project" className="li-link">Project</Link></li>
                <li ><Link href="#skills"className="li-link" >Skills</Link></li>
                <li ><Link href="#contact" className="li-link">Contact</Link></li>
            </ul>
        </div>





      </div>
      
      
      
      
      
      </>
    )
  }
  