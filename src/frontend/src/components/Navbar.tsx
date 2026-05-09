import { NavLink } from 'react-router-dom'
import '../css/components/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/"><img src="/home.svg" alt="" className="navbar-icon" /><span>Home</span></NavLink>
        <NavLink to="/projects"><img src="/projects.svg" alt="" className="navbar-icon" /><span>Projects</span></NavLink>
        <NavLink to="/about"><img src="/about-me.svg" alt="" className="navbar-icon" /><span>About</span></NavLink>
        <NavLink to="/design"><img src="/brand-assets/favicon-brown.svg" alt="" className="navbar-icon" /><span>Software Design</span></NavLink>
      </div>
    </nav>
  )
}
