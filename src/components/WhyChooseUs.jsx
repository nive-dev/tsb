import { useEffect, useRef, useState } from 'react'
import { Leaf, IndianRupee, ShieldCheck, Smile } from 'lucide-react'
import trust from "../assets/categories/trust1.png";

const points = [
  { icon: Leaf, title: 'Fresh Daily Stock', desc: 'Sourced directly from local farms every morning' },
  { icon: IndianRupee, title: 'Affordable Pricing', desc: 'Best prices guaranteed on all essentials' },
  { icon: ShieldCheck, title: 'Trusted Local Store', desc: 'Serving Polur families for years with trust' },
  { icon: Smile, title: 'Friendly Service', desc: 'Our team is always happy to help you' },
]

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [animatePoints, setAnimatePoints] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setTimeout(() => setAnimatePoints(true), 400)
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="why-choose-us-section"
      style={{ 
        padding: '5rem 0', 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: 'var(--card)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="row align-items-center g-4 g-md-5">
          {/* Image Side */}
          <div className="col-12 col-md-6">
            <div
              className="why-image-wrapper"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.7s ease',
                position: 'relative',
                maxWidth: '100%',
                marginBottom: '2rem',
              }}
            >
              <div 
                className="why-image-container"
                style={{ 
                  borderRadius: '0.5rem', 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 40px -8px rgba(242, 101, 34, 0.15)',
                  position: 'relative',
                }}
              >
                <img
                  src= {trust}                  alt="TSB Hypermarket Store"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '200px',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              {/* Decorative elements - only visible on larger screens */}
              <div 
                className="d-none d-md-block"
                style={{ 
                  position: 'absolute', 
                  bottom: '-1rem', 
                  right: '-1rem', 
                  width: '6rem', 
                  height: '6rem', 
                  backgroundColor: 'rgba(242, 101, 34, 0.1)', 
                  borderRadius: '0.5rem', 
                  zIndex: -1,
                }} 
              />
              <div 
                className="d-none d-md-block"
                style={{ 
                  position: 'absolute', 
                  top: '-1rem', 
                  left: '-1rem', 
                  width: '4rem', 
                  height: '4rem', 
                  backgroundColor: 'rgba(59, 181, 74, 0.1)', 
                  borderRadius: '0.5rem', 
                  zIndex: -1,
                }} 
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="col-12 col-md-6">
            <div
              className="why-content-wrapper"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.7s ease 0.2s',
              }}
            >
              <span style={{
                color: 'var(--primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'block',
              }}>
                Why Choose Us
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 6vw, 3.75rem)',
                color: 'var(--foreground)',
                marginTop: '0.75rem',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}>
                QUALITY.
                <br />
                VALUE.
                <br />
                <span className="text-gradient">TRUST.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {points.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <div
                      key={p.title}
                      className="why-point-item"
                      style={{
                        opacity: animatePoints ? 1 : 0,
                        transform: animatePoints ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.5s ease ${i * 0.1}s`,
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div 
                        className="why-icon-box"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '0.5rem',
                          backgroundColor: 'rgba(242, 101, 34, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Icon style={{ width: 18, height: 18, color: 'var(--primary)', transition: 'color 0.3s ease' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          color: 'var(--foreground)',
                          fontSize: '0.9375rem',
                          marginBottom: '0.25rem',
                        }}>
                          {p.title}
                        </h4>
                        <p style={{
                          color: 'var(--muted-foreground)',
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-body)',
                          margin: 0,
                          lineHeight: 1.5,
                        }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-choose-us-section {
          overflow-x: hidden;
        }
        .why-point-item:hover .why-icon-box {
          background-color: var(--primary);
        }
        .why-point-item:hover .why-icon-box svg {
          color: white;
        }
        @media (max-width: 767.98px) {
          .why-choose-us-section {
            padding: 3rem 0;
          }
          .why-image-wrapper {
            margin-bottom: 1.5rem;
          }
          .why-content-wrapper {
            text-align: center;
          }
          .why-point-item {
            text-align: left;
          }
          .why-icon-box {
            width: 36px !important;
            height: 36px !important;
          }
          .why-icon-box svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
        @media (max-width: 575.98px) {
          .why-choose-us-section {
            padding: 2.5rem 0;
          }
          .why-point-item {
            gap: 0.625rem;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs