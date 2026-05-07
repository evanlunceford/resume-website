import { NavLink } from 'react-router-dom'
import '../css/components/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/"><img src="/home.svg" alt="" className="navbar-icon" /><span>Home</span></NavLink>
        <NavLink to="/projects"><img src="/projects.svg" alt="" className="navbar-icon" /><span>Projects</span></NavLink>
        <NavLink to="/about"><img src="/about-me.svg" alt="" className="navbar-icon" /><span>About</span></NavLink>
      </div>
      <NavLink to="/design" className="navbar-design-button">
        <img src="/brand-assets/logo-black.png" alt="" className="navbar-icon navbar-design-button__logo--desktop" />
        <img src="/brand-assets/favicon-brown.svg" alt="" className="navbar-icon navbar-design-button__logo--mobile" />
        <span>Software Design</span>
      </NavLink>
    </nav>
  )
}
