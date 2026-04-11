import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, PackageOpen, LayoutGrid, Leaf } from 'lucide-react'
import BackgroundPattern from '../components/BackgroundPattern'
import { categories } from '../data/categories'

const SubcategoryProducts = () => {
  const { categoryId, subcategoryId } = useParams()

  const category = categories.find((c) => c.id === categoryId)
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId)

  const [filter, setFilter] = useState('all')
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    setContentVisible(true)
  }, [])

  if (!category || !subcategory) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF8F2' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', marginBottom: '1rem' }}>Subcategory Not Found</h1>
          <Link to={`/category/${categoryId || 'fresh-groceries'}`} style={{ color: '#F26522', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', fontWeight: 700 }}>
            <ArrowLeft style={{ width: 20, height: 20 }} /> Back to Category
          </Link>
        </div>
      </div>
    )
  }

  // Filter products
  let displayProducts = [...subcategory.products]
  if (filter === 'low-high') {
    displayProducts.sort((a, b) => a.price - b.price)
  } else if (filter === 'high-low') {
    displayProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#FFF8F2' }}>
      <BackgroundPattern />

      {/* Top Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 248, 242, 0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to={`/category/${category.id}`}
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
                {category.name}
              </span>
              <h1 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', lineHeight: 1, marginTop: '0.25rem' }}>
                {subcategory.name}
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
        background: category.gradient, 
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
              <div style={{ maxWidth: '36rem', textAlign: 'center' }} className="text-md-start">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.6)', padding: '0.375rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem', backdropFilter: 'blur(4px)' }}>
                  <Leaf style={{ width: 16, height: 16, color: '#3BB54A' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E1E1E', letterSpacing: '0.025em' }}>Handpicked just for you</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#1E1E1E', marginBottom: '1rem' }}>
                  <span style={{ color: '#F26522' }}>{subcategory.name}</span> <br /> Products
                </h1>
                <p style={{ fontSize: '1.125rem', color: 'rgba(30, 30, 30, 0.7)', fontFamily: 'var(--font-body)' }}>
                  Discover {subcategory.products.length} superior quality products ready to be added to your cart.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div style={{ width: '10rem', height: '10rem', margin: '0 auto' }} className="d-none d-md-block">
                <img
                  src={subcategory.img}
                  alt={subcategory.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main style={{ padding: '3rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          {/* Controls / Filtering */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }} className="flex-sm-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E1E1E' }}>
              <LayoutGrid style={{ width: 20, height: 20, color: '#3BB54A' }} />
              <h2 style={{ fontSize: '1.125rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{subcategory.products.length} Products Found</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', padding: '0.375rem', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
              <button
                onClick={() => setFilter('all')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: filter === 'all' ? '#1E1E1E' : 'transparent',
                  color: filter === 'all' ? 'white' : 'rgba(30, 30, 30, 0.6)',
                  boxShadow: filter === 'all' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                Popular
              </button>
              <button
                onClick={() => setFilter('low-high')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: filter === 'low-high' ? '#1E1E1E' : 'transparent',
                  color: filter === 'low-high' ? 'white' : 'rgba(30, 30, 30, 0.6)',
                  boxShadow: filter === 'low-high' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => setFilter('high-low')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: filter === 'high-low' ? '#1E1E1E' : 'transparent',
                  color: filter === 'high-low' ? 'white' : 'rgba(30, 30, 30, 0.6)',
                  boxShadow: filter === 'high-low' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                Price: High to Low
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row g-4">
            {displayProducts.map((product, index) => (
              <div 
                key={product.name + index} 
                className="col-6 col-md-4 col-lg-3 col-xl-custom"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.4s ease ${index * 0.05}s`,
                }}
              >
                <div
                  className="product-card"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                  }}
                >
                  {/* Product Image */}
                  <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', marginBottom: '1rem', padding: '1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '0.75rem', transition: 'background-color 0.3s ease' }} />
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        position: 'relative',
                        zIndex: 10,
                        transition: 'all 0.5s ease',
                        mixBlendMode: 'multiply',
                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.12))',
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <h3 style={{ color: '#1E1E1E', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '0.25rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(30, 30, 30, 0.5)', fontWeight: 500, marginBottom: '1rem' }}>Premium Quality</p>

                  <div style={{ width: '100%', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#F26522', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem' }}>
                      ₹{product.price}
                    </span>
                    <button
                      style={{
                        backgroundColor: '#1E1E1E',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.625rem 1rem',
                        borderRadius: '9999px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Add <ArrowRight style={{ width: 12, height: 12 }} />
                    </button>
                  </div>
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

export default SubcategoryProducts