import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  Nut,
  Snowflake,
  Heart,
  Home,
  GlassWater,
  Candy,
  Baby,
  Pencil,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import { categories } from "../data/categories";

// Icon mapping for categories
const iconMap = {
  "fresh-groceries": Apple,
  "dry-fruits": Nut,
  "dairy-frozen": Snowflake,
  "personal-care": Heart,
  household: Home,
  "health-drinks": GlassWater,
  "chocolates-snacks": Candy,
  "baby-care": Baby,
  "kitchen-glassware": UtensilsCrossed,
  "stationery-toys": Pencil,
  "perfume-fragrances": Sparkles,
};

const CategoryCard = ({ cat, index }) => {
  const Icon = iconMap[cat.id] || Apple;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Link
      to={`/category/${cat.id}`}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <div
        className="category-card"
        style={{
          position: "relative",
          backgroundColor: "var(--card)",
          borderRadius: "0.5rem",
          overflow: "hidden",
          boxShadow: "0 4px 24px -4px rgba(242, 101, 34, 0.08)",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.5s ease",
          minWidth: "200px",
          flexShrink: 0,
        }}
      >
       <div
  style={{
    // height: '260px',
    background: '#f5f5f5',
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <img
    src={cat.previewImages[0]}
    alt={cat.title}
    loading="lazy"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain', // ✅ no cropping
      backgroundColor: '#f5f5f5',
      transition: 'transform 0.5s ease',
    }}
  />

  {/* Top badge */}
  {/* <div
    style={{
      position: 'absolute',
      top: '0.75rem',
      left: '0.75rem',
    }}
  >
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Icon style={{ width: 14, height: 14 }} />
      {cat.title}
    </span>
  </div> */}
</div>
        <div style={{ padding: "1rem", flex: 1 }}>
          
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--foreground)",
              fontSize: "1rem",
              marginBottom: "0.25rem",
              transition: "color 0.3s ease",
            }}
          >
            {cat.title}
          </h3>
          <p
            style={{

              
              color: "var(--muted-foreground)",
              fontSize: "0.875rem",
              fontFamily: "var(--font-body)",
              margin: 0,
            }}
          >
            {cat.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CategoriesSection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Triple the categories for seamless infinite scroll
  const allCategories = [...categories, ...categories, ...categories];

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation using requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isInView) return;

    const cardWidth = 220; // card width + gap
    const totalWidth = categories.length * cardWidth;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;

        // Reset position when we've scrolled past one full set of categories
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0;
        }

        // Use transform for better performance
        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, isPaused]);

  return (
    <section
      id="categories"
      style={{ padding: "5rem 0", position: "relative", zIndex: 10 }}
      ref={sectionRef}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            What We Offer
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "var(--foreground)",
              marginTop: "0.5rem",
            }}
          >
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginTop: "0.75rem",
              maxWidth: "32rem",
              margin: "0.75rem auto 0",
              fontFamily: "var(--font-body)",
            }}
          >
            From farm-fresh produce to household essentials — find everything
            you need.
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div
          className="categories-scroll-wrapper"
          style={{
            overflow: "hidden",
            position: "relative",
            margin: "0 -1rem",
            padding: "0 1rem",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient overlays for smooth edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "60px",
              background:
                "linear-gradient(to right, var(--background), transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "60px",
              background:
                "linear-gradient(to left, var(--background), transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Scrolling cards container */}
          <div
            ref={scrollRef}
            className="categories-scroll-track"
            style={{
              display: "flex",
              gap: "1rem",
              willChange: "transform",
            }}
          >
            {allCategories.map((cat, i) => (
              <CategoryCard
                key={`${cat.id}-${i}`}
                cat={cat}
                index={i % categories.length}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .category-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 12px 40px -8px rgba(242, 101, 34, 0.15) !important;
        }
        .category-card:hover img {
          transform: scale(1.1);
        }
        .category-card:hover h3 {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .categories-scroll-wrapper {
            margin: 0 -0.5rem;
            padding: 0 0.5rem;
          }
          .category-card {
            min-width: 160px !important;
          }
        }
        @media (max-width: 480px) {
          .category-card {
            min-width: 140px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;
