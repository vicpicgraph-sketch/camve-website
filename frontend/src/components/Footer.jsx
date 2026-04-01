import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <Link to="/" className="footer-logo">
              <img src="/Camve properlogo.png" alt="Camve Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Helping Businesses Grow Digital Transform. We provide modern solutions for your digital success.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web &amp; App Dev</a></li>
              <li><a href="#">PPC Campaigns</a></li>
              <li><a href="#">IT Solutions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Camve. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
