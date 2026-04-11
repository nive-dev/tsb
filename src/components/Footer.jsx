import { ShoppingCart, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react'
import logo from "../assets/logo.png"
const quickLinks = ['Home', 'Categories', 'Offers', 'Gallery', 'Contact']

const socialIcons = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', paddingTop: '4rem', paddingBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand */}
          <div className="col-sm-6 col-md-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img
                src={logo}
                alt="TSB"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                  backgroundColor: "white", // optional (remove if not needed)
                  padding: "4px" // optional spacing
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
                TSB Hypermarket
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
              Your one-stop shop for all daily needs. Quality products at affordable prices in Polur, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                <MapPin style={{ width: 16, height: 16, marginTop: '0.125rem', flexShrink: 0 }} />
                No.10,Railway Station Road, Polur, Tamil Nadu - 606 803
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                <Phone style={{ width: 16, height: 16, flexShrink: 0 }} />
                72009 95111 / 72009 95222
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="col-sm-6 col-md-3">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  <Icon style={{ width: 16, height: 16 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
            © {currentYear} TSB Hypermarket, Polur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer