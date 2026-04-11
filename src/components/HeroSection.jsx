import { useEffect, useState } from 'react'
import { ArrowRight, ShoppingBag, Leaf, Heart, BadgeCheck } from 'lucide-react'
import h1 from "../assets/categories/h1.png";
import h2 from "../assets/categories/h2.png";
import h3 from "../assets/categories/h3.png";
import h4 from "../assets/categories/h4.png";
import h5 from "../assets/categories/h5.png";
import h6 from "../assets/categories/h6.png";
import h7 from "../assets/categories/h7.png";
import h8 from "../assets/categories/h8.png";
import h9 from "../assets/categories/h9.png";
import h10 from "../assets/categories/h10.png";
// Product images data
const productImages = [
  [
 { src: h1, alt: "Image 1" },
    { src: h2, alt: "Image 2" },
    { src: h3, alt: "Image 3" },
    { src: h4, alt: "Image 4" },
    { src: h5, alt: "Image 5" },
  ],
  [
  { src: h6, alt: "Image 6" },
    { src: h7, alt: "Image 7" },
    { src: h8, alt: "Image 8" },
    { src: h9, alt: "Image 9" },
    { src: h10, alt: "Image 10" },
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
const ProductCard = ({ src, alt, isMobileView = false }) => (
  <div
    className="product-card"
    style={{
      position: 'relative',
      // borderRadius: '22px',
      overflow: 'hidden',
      cursor: 'pointer',
      flexShrink: 0,
      // background: 'rgba(255, 255, 255, 0.45)',
      // backdropFilter: 'blur(16px)',
      // WebkitBackdropFilter: 'blur(16px)',
      // border: '1px solid rgba(232, 221, 212, 0.5)',
      // boxShadow: '0 8px 32px -8px rgba(242, 101, 34, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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
             filter: 'contrast(1.05) saturate(1.1)',
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
        // boxShadow: '0 16px 48px -12px rgba(242, 101, 34, 0.2), 0 4px 20px -4px rgba(0, 0, 0, 0.1)',
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
        // background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      }}
    />
  </div>
);

// Infinite Scrolling Column Component
const InfiniteColumn = ({ images, direction, duration }) => {
  // Double the list for seamless looping
  const doubled = [...images, ...images];

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
            className="col-12 col-lg-6 order-1 order-lg-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              paddingTop: '6rem',
              paddingBottom: isMobile ? '2rem' : '6rem',
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
            <p
              style={{
                opacity: delay2 ? 1 : 0,
                transition: 'opacity 0.5s ease',
                color: 'var(--muted-foreground)',
                fontSize: '1.125rem',
                maxWidth: '32rem',
                marginBottom: '2rem',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
              }}
            >
              From fresh groceries to household essentials, TSB Hypermarket
              brings quality products at the best prices.
            </p>

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
                href="/#categories"
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

          {/* Right — Infinite scrolling product columns (Desktop) / Horizontal scroll (Mobile) */}
          <div
            className="col-12 col-lg-6 order-2 order-lg-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: '0.3s',
              paddingTop: isMobile ? '0' : '6rem',
              paddingBottom: isMobile ? '2rem' : '6rem',
            }}
          >
            {isMobile ? (
              /* Mobile: Horizontal infinite scrolling gallery */
              <div className="mobile-horizontal-scroll">
                <div
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '0.5rem 0',
                  }}
                >
                  {/* Left fade mask */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '2rem',
                      background: 'linear-gradient(to right, var(--background), transparent)',
                      zIndex: 10,
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Right fade mask */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: '2rem',
                      background: 'linear-gradient(to left, var(--background), transparent)',
                      zIndex: 10,
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Scrolling container */}
                  <div className="mobile-infinite-scroll">
                    {/* Triple the images for smooth infinite loop */}
                    {[...productImages[0], ...productImages[1], ...productImages[0], ...productImages[1], ...productImages[0], ...productImages[1]].map((img, i) => (
                      <div
                        key={`mobile-${img.alt}-${i}`}
                        className="mobile-product-card"
                        style={{
                          flexShrink: 0,
                          width: '140px',
                          height: '140px',
                          marginRight: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            draggable={false}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '1rem',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Scroll indicator */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    marginTop: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--muted-foreground)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Swipe to explore
                  </span>
                </div>
              </div>
            ) : (
              /* Desktop: Vertical infinite scrolling columns */
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
                  duration={20}
                />
                <InfiniteColumn
                  images={productImages[1]}
                  direction="down"
                  duration={22}
                />
              </div>
            )}
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
          lineHeight: 0,
        }}
      >
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
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
            width: 250px !important;
            height: 250px !important;
          }
        }

        /* Infinite column responsive heights */
        @media (min-width: 576px) {
          .infinite-col-height {
            height: 650px !important;
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

        /* Section padding for large screens */
        @media (min-width: 992px) {
          .container .row.align-items-center > .col-lg-6 {
            padding-top: 8rem !important;
            padding-bottom: 8rem !important;
          }
        }

        /* Scroll animations */
     @keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes scrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

        

        .scroll-up {
          animation-name: scrollUp;
        }

        .scroll-down {
          animation-name: scrollDown;
        }

        /* Text gradient animation */
        .text-gradient-animate {
          background: linear-gradient(270deg, #F26522, #fff, #F26522);
color: #F26522;
  text-shadow: 0 0 20px rgba(246, 216, 204, 0.13);
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

        /* Mobile horizontal scroll styles */
        .mobile-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .mobile-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .mobile-product-img:hover {
          transform: scale(1.05);
        }

        /* Mobile infinite horizontal scroll animation */
        .mobile-infinite-scroll {
          display: flex;
          will-change: transform;
          animation: scrollHorizontal 20s linear infinite;
        }

        .mobile-infinite-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        /* Mobile hero section adjustments */
        @media (max-width: 767.98px) {
          .mobile-horizontal-scroll {
            margin-left: -1rem;
            margin-right: -1rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          #home {
            min-height: auto;
            align-items: flex-start;
          }

          .mobile-product-card {
            transition: transform 0.3s ease;
          }

          .mobile-product-card:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection