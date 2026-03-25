import { NavLink } from 'react-router-dom'
import '../css/components/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/"><img src="/home.svg" alt="" className="navbar-icon" />Home</NavLink>
        <NavLink to="/projects"><img src="/projects.svg" alt="" className="navbar-icon" />Projects</NavLink>
        <NavLink to="/about"><img src="/about-me.svg" alt="" className="navbar-icon" />About</NavLink>
      </div>
      <a className="navbar-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <img src="/resume.svg" alt="Resume Download" />
        <span>Resume</span>
      </a>
    </nav>
  )
}
