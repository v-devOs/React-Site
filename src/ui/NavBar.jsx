import { useState } from "react"
import { headers } from "../data"
import '../stylesNavbar.css'
export const NavBar = () => {

  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive( !isActive );
  }
  return (
    
    <div className="container-navbar animate__animated animate__fadeInLeft">

      <nav className="navbar">
        <a href="" className="nav-logo nav-link">deVos</a>

        <button 
          onClick={onClick}
          className="nav-toggle"><i className={`${isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i></button>

        <ul className={`nav-menu ${ isActive ? 'nav-menu_visible' : ''}`}>
          {
            headers.map( header => (
              <li
                onClick={onClick} 
                key={header.pointer} 
                className='nav-menu-item'><a href={`#${header.pointer}`} className="nav-menu-link nav-link" >{header.info}</a></li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
