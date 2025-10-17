import {NavLink} from 'react-router-dom'

function Navbar(){
  return(
    <nav className="navbar">
      <h1>Trattoria Italiana</h1>
      <div>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/productos" className={({ isActive }) => isActive ? "active-link" : ""}>Menú</NavLink>
      </div>
    </nav>
    )
  }
export default Navbar