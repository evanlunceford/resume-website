import { NavLink } from 'react-router-dom'
import '../css/components/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <a className="navbar-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </nav>
  )
}
