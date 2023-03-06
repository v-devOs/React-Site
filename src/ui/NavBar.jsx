import { headers } from "../data"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <p className="nav-item">deVos</p>

      <ul className="nav-links">

        {
          headers.map( header => (
            <li key={header} className='nav-link'><a href="">{header}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}
