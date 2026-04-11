import { useEffect, useRef, useState } from 'react'
import { Tag, Clock, Percent, Zap } from 'lucide-react'

const offers = [
  { title: 'Weekend Mega Sale', desc: 'Up to 30% off on fresh groceries', discount: '30%', color: '#F26522' },
  // hasTimer: true will show the countdown timer for the offer
  { title: 'Buy 2 Get 1 Free', desc: 'On all personal care products', discount: 'B2G1', color: '#3BB54A' },
  { title: 'Flat ₹100 Off', desc: 'On purchases above ₹1500', discount: '₹100', color: '#1E1E1E' },
]

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date()
      const daysUntilSunday = (7 - now.getDay()) % 7 || 7
      const nextSunday = new Date(now)
      nextSunday.setDate(now.getDate() + daysUntilSunday)
      nextSunday.setHours(21, 0, 0, 0)
      return nextSunday
    }

    const update = () => {
      const diff = getNextSunday().getTime() - Date.now()
      if (diff <= 0) return
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
      {[
        { val: time.hours, label: 'HRS' },
        { val: time.minutes, label: 'MIN' },
        { val: time.seconds, label: 'SEC' },
      ].map((t) => (
        <div 
          key={t.label} 
          style={{ 
            backgroundColor: 'rgba(30, 30, 30, 0.8)', 
            color: 'white', 
            padding: '0.5rem 0.75rem', 
            borderRadius: '0.375rem', 
            textAlign: 'center', 
            minWidth: '52px' 
          }}
        >
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', display: 'block' }}>
            {String(t.val).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '10px', fontFamily: 'var(--font-body)', opacity: 0.7 }}>{t.label}</span>
        </div>
      ))}
    </div>
  )
}

const OffersSection = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
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
      id="offers" 
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
            Hot Deals
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            color: 'var(--foreground)',
            marginTop: '0.5rem',
          }}>
            Today's <span className="text-gradient">Offers</span>
          </h2>
        </div>

        <div className="row g-4">
          {offers.map((offer, i) => {
            const icons = [Zap, Tag, Percent]
            const Icon = icons[i]
            
            return (
              <div key={offer.title} className="col-md-4">
                <div
                  className="offer-card"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.5s ease ${i * 0.15}s`,
                    position: 'relative',
                    backgroundColor: 'var(--card)',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    boxShadow: '0 4px 24px -4px rgba(242, 101, 34, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Discount badge */}
                  <div 
                    className="animate-pulse-glow"
                    style={{ 
                      position: 'absolute', 
                      top: '1rem', 
                      right: '1rem', 
                      backgroundColor: offer.color, 
                      color: 'white', 
                      width: 64, 
                      height: 64, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontFamily: 'var(--font-heading)', 
                      fontWeight: 900, 
                      fontSize: '1.125rem' 
                    }}
                  >
                    {offer.discount}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                    <Icon style={{ width: 20, height: 20 }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Limited Offer
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                    {offer.title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
                    {offer.desc}
                  </p>

                  {offer.hasTimer && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--muted-foreground)', fontSize: '0.75rem', fontFamily: 'var(--font-body)', marginBottom: '0.5rem' }}>
                        <Clock style={{ width: 14, height: 14 }} />
                        Ends this weekend
                      </div>
                      <CountdownTimer />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .offer-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px -8px rgba(242, 101, 34, 0.15) !important;
        }
      `}</style>
    </section>
  )
}

export default OffersSection