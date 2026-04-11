import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const links = [
  { label: "Home", href: "/#home", },  //isRoute: true 
  { label: "Categories", href: "/#categories" },, //isRoute: true
  { label: "Offers", href: "/#offers" },
  { label: "Gallery", href: "/#gallery",  }, //isRoute: true
  { label: "Contact", href: "/#contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          minHeight: "70px",
        }}
      >
        {/* LEFT SECTION - White Rounded Logo Area */}
        <div
          className="navbar-left-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            backgroundColor: "#FFFFFF",
            padding: "0.75rem 2.5rem 0.75rem 1.5rem",
            borderRadius: "0 50px 50px 0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Logo Container */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            {/* Circular Logo Area */}
            <div
              className="navbar-logo-container"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={logo}
                alt="TSB"
                className="navbar-logo-img"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
            </div>
            
            {/* Logo Text */}
            <div className="navbar-logo-text hypermarket-text1" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px", lineHeight: 1.2, fontWeight: 800 }}>
              <span
                className="navbar-tsb-text"
                style={{
                  // fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "2.1rem",
                  color: "var(--primary)",
                  letterSpacing: "0.5px",
                }}
              >
                {/* TSB */}
              </span>
              <span
                className="navbar-hypermarket-text"
                style={{
                  // fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "1.75rem",
                  color: "#666",
                  letterSpacing: "0.5px",
                }}
              >
                hypermarket
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT SECTION - Red Navigation Area (Desktop) */}
        <div
          className="d-none d-md-flex"
          style={{
            flex: 1,
            backgroundColor: "#F26522",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginLeft: "-25px",
            paddingLeft: "40px",
          }}
        >
          {/* Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="nav-link-hover"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link-hover"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          {/* Call Now Button */}
          <a
            href="tel:+917200995111"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#F26522",
              padding: "0.625rem 1.5rem",
              borderRadius: "50px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              marginLeft: "1rem",
            }}
            className="call-btn-hover"
          >
            Call Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="d-md-none"
          style={{
            flex: 1,
            backgroundColor: "#F26522",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 1rem",
            marginLeft: "-25px",
            paddingLeft: "40px",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#FFFFFF",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="d-md-none"
          style={{
            backgroundColor: "#F26522",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            animation: "slideDown 0.3s ease",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    padding: "0.5rem 0",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    padding: "0.5rem 0",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              )
            )}

            <a
              href="tel:+917200995111"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#F26522",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.875rem",
                textAlign: "center",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-hover:hover {
          color: #FFD700 !important;
        }

        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.3s ease;
        }

        .nav-link-hover:hover::after {
          width: 100%;
        }

        .call-btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (max-width: 767.98px) {
          .d-md-none {
            display: flex !important;
          }
          .d-none.d-md-flex {
            display: none !important;
          }

          /* Mobile responsive logo section */
          .navbar-left-section {
            padding: 0.5rem 1rem !important;
            gap: 10px !important;
          }

          .navbar-logo-container {
            width: 40px !important;
            height: 40px !important;
          }

          .navbar-logo-img {
            width: 40px !important;
            height: 40px !important;
          }

          .navbar-logo-text {
            gap: 4px !important;
          }

          .navbar-tsb-text {
            font-size: 1rem !important;
          }

          .navbar-hypermarket-text {
            font-size: 0.7rem !important;
          }
        }

        @media (min-width: 768px) {
          .d-none.d-md-flex {
            display: flex !important;
          }
          .d-md-none {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar