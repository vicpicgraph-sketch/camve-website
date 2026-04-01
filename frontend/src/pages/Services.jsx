import { Search, Share2, MousePointerClick, Code, Smartphone, Briefcase } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: <Search size={40} />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your visibility on search engines, drive organic traffic to your website, and generate higher quality leads with our proven SEO strategies.',
      benefits: ['Higher Rankings', 'Targeted Traffic', 'Brand Credibility']
    },
    {
      icon: <Share2 size={40} />,
      title: 'Social Media Marketing (SMM)',
      description: 'Engage your audience across relevant platforms, build brand loyalty, and increase conversions via targeted social media campaigns.',
      benefits: ['Increased Engagement', 'Community Building', 'Brand Awareness']
    },
    {
      icon: <MousePointerClick size={40} />,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Get immediate traction and measurable ROI with highly targeted, cost-effective ad campaigns on Google, Facebook, and LinkedIn.',
      benefits: ['Instant Visibility', 'Cost Control', 'High Conversion Rates']
    },
    {
      icon: <Code size={40} />,
      title: 'Website Development',
      description: 'We code fast, responsive, and secure custom websites tailored to your unique business needs and focused on exceptional user experience.',
      benefits: ['Custom Design', 'Optimized Performance', 'SEO Friendly']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'Reach your customers right in their pockets with cutting-edge iOS and Android native or cross-platform mobile applications.',
      benefits: ['Native Experience', 'Cross-Platform', 'Scalable Architecture']
    },
    {
      icon: <Briefcase size={40} />,
      title: 'IT Consulting',
      description: 'Align your technology strategy with your business goals. We provide expert guidance on infrastructure, security, and digital transformation.',
      benefits: ['Tech Audits', 'Strategic Planning', 'Risk Mitigation']
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Digital Marketing and IT Solutions to elevate your business.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="services-list">
            {servicesList.map((service, index) => (
              <div className="service-detail-card" key={index}>
                <div className="service-detail-icon">
                  {service.icon}
                </div>
                <div className="service-detail-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="service-benefits">
                    {service.benefits.map((benefit, b_idx) => (
                      <li key={b_idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn btn-primary" style={{marginTop: '20px'}}>Get Started</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-container">
          <h2>Not sure which service you need?</h2>
          <p>Book a free 30-minute discovery call with our specialists.</p>
          <a href="/contact" className="btn btn-primary cta-btn">Book Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
