import { useEffect, useState } from 'react'
import { ArrowRight, ShoppingBag, Leaf, Heart, BadgeCheck } from 'lucide-react'

// Product images data
const productImages = [
  [
    { src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80", alt: "Fresh fruits" },
    { src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", alt: "Milk dairy" },
    { src: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&q=80", alt: "Juice bottle" },
    { src: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80", alt: "Chocolate snacks" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80", alt: "Fresh vegetables" },
    { src: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=400&q=80", alt: "Shampoo care" },
    { src: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&q=80", alt: "Baby products" },
    { src: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80", alt: "Snack packets" },
  ],
];

// Trust badges data
const trustBadges = [
  { icon: Leaf, label: "Fresh Products Daily" },
  { icon: Heart, label: "Trusted by Local Families" },
  { icon: BadgeCheck, label: "Affordable Prices Everyday" },
];

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Product Card Component with glassmorphism effect
const ProductCard = ({ src, alt }) => (
  <div
    className="product-card"
    style={{
      position: 'relative',
      borderRadius: '22px',
      overflow: 'hidden',
      cursor: 'pointer',
      flexShrink: 0,
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(232, 221, 212, 0.5)',
      boxShadow: '0 8px 32px -8px rgba(242, 101, 34, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      transition: 'all 0.5s ease',
    }}
  >
    <div style={{ padding: '0.75rem' }}>
      <div
        style={{
          width: '176px',
          height: '176px',
          overflow: 'hidden',
          borderRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        className="product-image-container"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '1rem',
            transition: 'transform 0.7s ease-out',
          }}
          className="product-img"
        />
        <div
          className="product-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1rem',
            opacity: 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none',
            background: 'radial-gradient(circle at center, rgba(242, 101, 34, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
    <div
      className="card-hover-shadow"
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '22px',
        opacity: 0,
        transition: 'all 0.5s ease',
        pointerEvents: 'none',
        boxShadow: '0 16px 48px -12px rgba(242, 101, 34, 0.2), 0 4px 20px -4px rgba(0, 0, 0, 0.1)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        opacity: 0.6,
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      }}
    />
  </div>
);

// Infinite Scrolling Column Component
const InfiniteColumn = ({ images, direction, duration }) => {
  // Double the list for seamless looping
  const doubled = [...images, ...images];
  // Total height of one set: items * (size + gap). Each card ~208px (192 + 16 gap). 4 items = ~832px.
  const setHeight = images.length * 208;

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '500px',
        position: 'relative',
      }}
      className="infinite-col-height"
    >
      {/* Fade masks top & bottom */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4rem',
          background: 'linear-gradient(to bottom, var(--background), transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4rem',
          background: 'linear-gradient(to top, var(--background), transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      <div
        className={direction === 'up' ? 'scroll-up' : 'scroll-down'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          willChange: 'transform',
          transform: 'translateZ(0)',
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {doubled.map((img, i) => (
          <ProductCard key={`${img.alt}-${i}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [delay1, setDelay1] = useState(false);
  const [delay2, setDelay2] = useState(false);
  const [delay3, setDelay3] = useState(false);
  const [delay4, setDelay4] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const t1 = setTimeout(() => setDelay1(true), 200);
    const t2 = setTimeout(() => setDelay2(true), 400);
    const t3 = setTimeout(() => setDelay3(true), 500);
    const t4 = setTimeout(() => setDelay4(true), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--background)',
      }}
    >
      {/* Subtle SVG Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      >
        <svg style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g stroke="#F26522" fill="none" strokeWidth="1" strokeLinecap="round">
                <path d="M10 10h3l3 12h8l2-7H16" />
                <circle cx="19" cy="24" r="1.5" />
                <circle cx="24" cy="24" r="1.5" />
                <circle cx="70" cy="20" r="8" />
                <rect x="95" y="10" width="10" height="16" rx="3" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Gradient blobs */}
      <div
        style={{
          position: 'absolute',
          top: '5rem',
          left: '-8rem',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(242, 101, 34, 0.04)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5rem',
          right: '-8rem',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(59, 181, 74, 0.04)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
        className="container"
      >
        <div className="row align-items-center">
          {/* Left Content */}
          <div
            className="col-12 col-lg-6 order-2 order-lg-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              paddingTop: '2rem',
              paddingBottom: '2rem',
            }}
          >
            {/* Badge */}
            <span
              style={{
                opacity: delay1 ? 1 : 0,
                transform: delay1 ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.5s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(242, 101, 34, 0.1)',
                color: 'var(--primary)',
                padding: '0.375rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                border: '1px solid rgba(242, 101, 34, 0.2)',
              }}
            >
              <ShoppingBag style={{ width: '1rem', height: '1rem' }} />
              Welcome to TSB Hypermarket
            </span>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: 'var(--foreground)',
              }}
            >
              Everything Your{' '}
              <span className="text-gradient-animate">Home Needs</span>
              <br />
              in One Place
            </h1>

            {/* Description */}
            <div
              style={{
                opacity: delay2 ? 1 : 0,
                transition: 'opacity 0.5s ease',
                marginBottom: '2rem',
              }}
            >
              <p
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  maxWidth: '32rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.85,
                }}
              >
                Discover a world of{' '}
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>fresh groceries</span>,{' '}
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>household essentials</span>,
                and everyday favourites — all under one roof, delivered with{' '}
                <span
                  style={{
                    color: 'var(--foreground)',
                    fontWeight: 700,
                    borderBottom: '2px solid rgba(242, 101, 34, 0.4)',
                    paddingBottom: '1px',
                  }}
                >
                  unbeatable prices
                </span>{' '}
                you can count on every day.
              </p>

              {/* Stats Row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--border)',
                  borderRadius: '1rem',
                  maxWidth: '32rem',
                }}
              >
                {[
                  { value: '500+', label: 'Products', color: 'var(--primary)' },
                  { value: '10K+', label: 'Happy Families', color: 'var(--accent)' },
                  { value: '100%', label: 'Fresh Daily', color: 'var(--primary)' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      minWidth: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                        color: stat.color,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'var(--muted-foreground)',
                        marginTop: '0.25rem',
                        fontWeight: 500,
                        textAlign: 'center',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                opacity: delay3 ? 1 : 0,
                transform: delay3 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <a
                href="#categories"
                className="hero-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Shop Now
                <ArrowRight style={{ width: '1rem', height: '1rem', transition: 'transform 0.3s ease' }} />
              </a>
              <a
                href="/categories"
                className="hero-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Explore Categories
              </a>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                opacity: delay4 ? 1 : 0,
                transition: 'opacity 0.5s ease',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(59, 181, 74, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <badge.icon style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Infinite scrolling product columns */}
          <div
            className="col-12 col-lg-6 order-1 order-lg-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: '0.3s',
              paddingTop: '2rem',
              paddingBottom: '2rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                maxWidth: '28rem',
                margin: '0 auto',
              }}
              className="hero-products-grid"
            >
              <InfiniteColumn
                images={productImages[0]}
                direction="up"
                duration={isMobile ? 30 : 20}
              />
              <InfiniteColumn
                images={productImages[1]}
                direction="down"
                duration={isMobile ? 30 : 22}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
          <path d="M0 32 Q360 80 720 40 Q1080 0 1440 32 L1440 80 L0 80Z" fill="var(--background)" />
        </svg>
      </div>

      {/* Inline Styles */}
      <style>{`
        /* Hero Button Styles */
        .hero-btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px -8px rgba(242, 101, 34, 0.3);
        }
        .hero-btn-primary:hover svg {
          transform: translateX(4px);
        }
        .hero-btn-secondary:hover {
          border-color: rgba(242, 101, 34, 0.4);
          box-shadow: 0 4px 24px -4px rgba(242, 101, 34, 0.08);
        }

        /* Product Card Hover Effects */
        .product-card:hover .product-img {
          transform: scale(1.08);
        }
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        .product-card:hover .card-hover-shadow {
          opacity: 1;
        }

        /* Responsive adjustments for product image container */
        @media (min-width: 576px) {
          .product-image-container {
            width: 192px !important;
            height: 192px !important;
          }
        }

        /* Infinite column responsive heights */
        @media (min-width: 576px) {
          .infinite-col-height {
            height: 550px !important;
          }
        }
        @media (min-width: 992px) {
          .infinite-col-height {
            height: 600px !important;
          }
          .hero-products-grid {
            max-width: none !important;
          }
        }

        /* Section padding */
        @media (min-width: 992px) {
          .container .row.align-items-center > .col-lg-6 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }

        /* Scroll animations */
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-832px);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-832px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .scroll-up {
          animation-name: scrollUp;
        }

        .scroll-down {
          animation-name: scrollDown;
        }

        /* Text gradient animation */
        .text-gradient-animate {
          background: linear-gradient(270deg, #F26522, #3BB54A, #F26522);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection