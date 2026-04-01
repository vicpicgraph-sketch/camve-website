import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/Camve properlogo.png" alt="Camve Logo" className="nav-logo-img" />
        </Link>
        <div className="menu-icon" id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-links" onClick={closeMenu}>About Us</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-links" onClick={closeMenu}>Services</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-links btn btn-primary" style={{ color: 'white' }} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
