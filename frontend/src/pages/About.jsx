import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover who we are and what drives us forward.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container about-container">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Company Overview</h2>
            <p className="body-text">
              Founded with a vision to revolutionize the digital landscape, Camve is more than just an agency; we are your strategic partner in growth. Our blend of creative digital marketing and robust IT solutions provides a unique edge in the modern competitive market.
            </p>
            <p className="body-text">
              We help businesses transform their digital presence through beautiful designs, scalable code, and data-driven marketing campaigns. Your growth is our metric of success.
            </p>
          </div>
          <div className="about-image">
            <img src="/company.jpg" alt="Camve Office" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mv-container">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To deliver innovative and result-oriented digital solutions that empower businesses to scale seamlessly and achieve their long-term goals.
            </p>
          </div>
          <div className="mv-card glass-card">
            <h3>Our Vision</h3>
            <p>
              To be the globally recognized leader in digital transformation, creating sustainable value for brands through cutting-edge technology and marketing excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">Our unique selling points</p>
          
          <div className="wcu-grid">
            <div className="wcu-item">
              <CheckCircle size={28} className="wcu-icon" />
              <div>
                <h4>Data-Driven Approach</h4>
                <p>We rely on analytics and insights to drive every decision.</p>
              </div>
            </div>
            <div className="wcu-item">
              <CheckCircle size={28} className="wcu-icon" />
              <div>
                <h4>Expert Team</h4>
                <p>Professionals with years of industry-specific experience.</p>
              </div>
            </div>
            <div className="wcu-item">
              <CheckCircle size={28} className="wcu-icon" />
              <div>
                <h4>Custom Solutions</h4>
                <p>We don't do cookie-cutter. Everything is tailored to you.</p>
              </div>
            </div>
            <div className="wcu-item">
              <CheckCircle size={28} className="wcu-icon" />
              <div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock assistance and maintenance for peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
