import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Instagram, Clock } from 'lucide-react'

const contactInfo = [
  { 
    icon: MapPin, 
    title: 'Address', 
    content: ['No.10,Railway Station Road, Polur- 606 803', 'Tamil Nadu, India']
  },
  { 
    icon: Phone, 
    title: 'Phone', 
    content: ['72009 95111', '72009 95222'],
    links: ['tel:+917200995111', 'tel:+917200995222']
  },
  { 
    icon: Clock, 
    title: 'Store Hours', 
    content: ['Mon – Sun: 8:00 AM – 10:00 PM']
  },
  { 
    icon: Instagram, 
    title: 'Follow Us', 
    content: ['@tsbhypermarket on Instagram']
  },
]

const ContactSection = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [showCards, setShowCards] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setTimeout(() => setShowMap(true), 200)
          setTimeout(() => setShowCards(true), 400)
        }
      },
      { threshold: 0.1, rootMargin: '-80px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      style={{ padding: '5rem 0', position: 'relative', zIndex: 10 }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            color: 'var(--primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            color: 'var(--foreground)',
            marginTop: '0.5rem',
          }}>
            Visit <span className="text-gradient">Us Today</span>
          </h2>
        </div>

        <div className="row g-4">
          {/* Map */}
          <div className="col-md-6">
            <div
              style={{
                opacity: showMap ? 1 : 0,
                transform: showMap ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.6s ease',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 24px -4px rgba(242, 101, 34, 0.08)',
                height: '350px',
              }}
              className="d-none d-md-block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d79.415!3d12.515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMwJzU0LjAiTiA3OcKwMjQnNTQuMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TSB Hypermarket Location"
              />
            </div>
            <div
              style={{
                opacity: showMap ? 1 : 0,
                transform: showMap ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.6s ease',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 24px -4px rgba(242, 101, 34, 0.08)',
                height: '250px',
              }}
              className="d-md-none"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d79.415!3d12.515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMwJzU0LjAiTiA3OcKwMjQnNTQuMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TSB Hypermarket Location"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className="contact-card"
                    style={{
                      opacity: showCards ? 1 : 0,
                      transform: showCards ? 'translateX(0)' : 'translateX(30px)',
                      transition: `all 0.6s ease ${i * 0.1}s`,
                      backgroundColor: 'var(--card)',
                      borderRadius: '0.5rem',
                      padding: '1.5rem',
                      boxShadow: '0 4px 24px -4px rgba(242, 101, 34, 0.08)',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div 
                      className="contact-icon-box"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgba(242, 101, 34, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon style={{ width: 20, height: 20, color: 'var(--primary)', transition: 'color 0.3s ease' }} />
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: 'var(--foreground)',
                      }}>
                        {info.title}
                      </h4>
                      {info.content.map((line, idx) => (
                        info.links ? (
                          <a 
                            key={idx}
                            href={info.links[idx]}
                            style={{
                              color: 'var(--muted-foreground)',
                              fontSize: '0.875rem',
                              fontFamily: 'var(--font-body)',
                              display: 'block',
                              transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
                          >
                            {line}
                          </a>
                        ) : (
                          <p 
                            key={idx}
                            style={{
                              color: 'var(--muted-foreground)',
                              fontSize: '0.875rem',
                              fontFamily: 'var(--font-body)',
                              margin: 0,
                            }}
                          >
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover .contact-icon-box {
          background-color: var(--primary);
        }
        .contact-card:hover .contact-icon-box svg {
          color: white;
        }
        .contact-card:hover {
          box-shadow: 0 12px 40px -8px rgba(242, 101, 34, 0.15);
        }
      `}</style>
    </section>
  )
}

export default ContactSection