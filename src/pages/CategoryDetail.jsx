import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, PackageOpen, LayoutGrid, Leaf } from 'lucide-react'
import BackgroundPattern from '../components/BackgroundPattern'
import { categories } from '../data/categories'

const CategoryDetail = () => {
  const { categoryId } = useParams()
  const category = categories.find((c) => c.id === categoryId)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    setContentVisible(true)
  }, [])

  if (!category) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF8F2' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', marginBottom: '1rem' }}>Category Not Found</h1>
          <Link to="/" style={{ color: '#F26522', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', fontWeight: 700 }}>
            <ArrowLeft style={{ width: 20, height: 20 }} /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#FFF8F2' }}>
      <BackgroundPattern />

      {/* Top Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 248, 242, 0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/"
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: '#1E1E1E',
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowLeft style={{ width: 20, height: 20 }} />
            </Link>
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3BB54A' }}>
                {category.description}
              </span>
              <h1 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', lineHeight: 1, marginTop: '0.25rem' }}>
                {category.title}
              </h1>
            </div>
          </div>
          <PackageOpen style={{ width: 24, height: 24, color: 'rgba(30, 30, 30, 0.2)' }} />
        </div>
      </header>

      {/* Hero Banner */}
      <div style={{ 
        width: '100%', 
        padding: '3rem 0', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)' 
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at center, white, transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <div
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.6s ease',
                  maxWidth: '36rem',
                  textAlign: 'center',
                }}
                className="text-md-start"
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.6)', padding: '0.375rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem', backdropFilter: 'blur(4px)' }}>
                  <Leaf style={{ width: 16, height: 16, color: '#3BB54A' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E1E1E', letterSpacing: '0.025em' }}>Category Details</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', marginBottom: '1rem' }}>
                  {category.title}
                </h1>
                <p style={{ fontSize: '1.125rem', color: 'rgba(30, 30, 30, 0.7)', fontFamily: 'var(--font-body)' }}>
                  Discover what makes this category special.
                </p>
              </div>
            </div>
            <div
  className="col-md-6 text-center d-flex justify-content-end"
>
  <div
    style={{
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'scale(1)' : 'scale(0.8)',
      transition: 'all 0.6s ease 0.1s',
      width: '100%',
      maxWidth: '1000px',
      aspectRatio: '1000 / 420', // 🔥 keeps ratio
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    }}
  >
    <img
      src={category.bannerImage}
      alt={category.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // 🔥 fills the box properly
      }}
    />
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <main style={{ padding: '3rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }} className="flex-sm-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E1E1E' }}>
              <LayoutGrid style={{ width: 20, height: 20, color: '#3BB54A' }} />
              <h2 style={{ fontSize: '1.125rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Category Features</h2>
            </div>
          </div>

          {/* Features List */}
          <div className="row g-4">
            {category.points.map((point, index) => (
              <div 
                key={index} 
                className="col-12 col-md-6 col-lg-4"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.4s ease ${index * 0.1}s`,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    backgroundColor: '#F26522', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    flexShrink: 0,
                    marginTop: '0.125rem'
                  }}>
                    •
                  </div>
                  <p style={{ 
                    color: '#1E1E1E', 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '1rem', 
                    lineHeight: 1.6,
                    margin: 0,
                    textAlign: 'left'
                  }}>
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        .col-xl-custom {
          flex: 0 0 auto;
          width: 20%;
        }
        @media (max-width: 1199.98px) {
          .col-xl-custom {
            width: 25%;
          }
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: rgba(242, 101, 34, 0.3);
        }
        .product-card:hover img {
          transform: translateY(-8px) scale(1.05);
        }
        .product-card:hover button {
          background-color: #F26522;
          box-shadow: 0 0 15px rgba(242, 101, 34, 0.4);
        }
        @media (max-width: 575.98px) {
          .flex-sm-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CategoryDetail