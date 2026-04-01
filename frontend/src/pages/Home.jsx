import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Helping Businesses Grow <span>Digital Transform</span>
            </h1>
            <p className="hero-subtitle">
              We empower your brand with innovative Digital Marketing and state-of-the-art IT Solutions. Grow faster, scale smarter.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card top-card">
              <i className="fas fa-chart-line"></i>
              <div>
                <h4>+150%</h4>
                <p>Growth in Traffic</p>
              </div>
            </div>
            <div className="main-image-placeholder">
              <img src="Camvebanner.png" alt="Camve Dashboard" />
            </div>
            <div className="floating-card bottom-card">
              <i className="fas fa-code"></i>
              <div>
                <h4>Custom</h4>
                <p>Web Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="bg-light section">
        <div className="container">
          <h2 className="section-title">Company Overview</h2>
          <p className="section-subtitle">Discover who we are and what drives us forward.</p>

          <div className="about-container">
            <div className="about-content">
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '20px' }}>
                Founded with a vision to revolutionize the digital landscape, Camve is more than just an agency; we are your strategic partner in growth. Our blend of creative digital marketing and robust IT solutions provides a unique edge in the modern competitive market.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                We help businesses transform their digital presence through beautiful designs, scalable code, and data-driven marketing campaigns. Your growth is our metric of success.
              </p>
            </div>
            <div className="about-image">
              <img src="company.jpg" alt="Camve Dashboard" />
            </div>
          </div>

          <div className="mv-container">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To deliver innovative and result-oriented digital solutions that empower businesses to scale seamlessly and achieve their long-term goals.</p>
            </div>
            <div className="mv-card glass-card">
              <h3>Our Vision</h3>
              <p>To be the globally recognized leader in digital transformation, creating sustainable value for brands through cutting-edge technology and marketing excellence.</p>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '80px' }}>Why Choose Us?</h2>
          <p className="section-subtitle">Our unique selling points</p>

          <div className="wcu-grid">
            <div className="wcu-item">
              <i className="fas fa-check-circle wcu-icon"></i>
              <div>
                <h4>Data-Driven Approach</h4>
                <p>We rely on analytics and insights to drive every decision.</p>
              </div>
            </div>
            <div className="wcu-item">
              <i className="fas fa-check-circle wcu-icon"></i>
              <div>
                <h4>Expert Team</h4>
                <p>Professionals with years of industry-specific experience.</p>
              </div>
            </div>
            <div className="wcu-item">
              <i className="fas fa-check-circle wcu-icon"></i>
              <div>
                <h4>Custom Solutions</h4>
                <p>We don't do cookie-cutter. Everything is tailored to you.</p>
              </div>
            </div>
            <div className="wcu-item">
              <i className="fas fa-check-circle wcu-icon"></i>
              <div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock assistance and maintenance for peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions tailored to your business needs.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-search"></i></div>
              <h3>Search Engine Optimization</h3>
              <p>Boost your visibility on search engines and generate higher quality leads with our proven SEO strategies.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Higher Rankings</li>
                <li><i className="fas fa-angle-right"></i> Targeted Traffic</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-share-nodes"></i></div>
              <h3>Social Media Marketing</h3>
              <p>Engage your audience across platforms, build loyalty, and increase conversions via targeted SMM.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Community Building</li>
                <li><i className="fas fa-angle-right"></i> Brand Awareness</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-hand-pointer"></i></div>
              <h3>Pay-Per-Click Advertising</h3>
              <p>Get immediate traction and measurable ROI with highly targeted, cost-effective ad campaigns.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Instant Visibility</li>
                <li><i className="fas fa-angle-right"></i> High Conversion Rates</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Website Development</h3>
              <p>Fast, responsive, and secure custom websites tailored to your unique business needs.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Custom Design</li>
                <li><i className="fas fa-angle-right"></i> Optimized Performance</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-mobile-screen"></i></div>
              <h3>App Development</h3>
              <p>Reach customers right in their pockets with cutting-edge iOS and Android native applications.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Native Experience</li>
                <li><i className="fas fa-angle-right"></i> Scalable Architecture</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-briefcase"></i></div>
              <h3>IT Consulting</h3>
              <p>Align your technology strategy with your business goals through expert guidance.</p>
              <ul className="service-list">
                <li><i className="fas fa-angle-right"></i> Strategic Planning</li>
                <li><i className="fas fa-angle-right"></i> Risk Mitigation</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary">Book a Full Strategy Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
