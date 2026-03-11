import { useLocation } from 'react-router-dom';
import '../css/components/Navbar.css';

const links = [
    { label: 'Home',     href: '#home'     },
    { label: 'About',    href: '#about'    },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
    const { hash } = useLocation();
    const activeHref = hash || '#home';

    return (
        <nav className="navbar">
            <div className="nav-links">
                {links.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        className={`nav-link${activeHref === href ? ' active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
