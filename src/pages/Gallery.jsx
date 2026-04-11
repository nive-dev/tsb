import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { X, ZoomIn } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundPattern from '../components/BackgroundPattern'
import WhatsAppButton from '../components/WhatsAppButton'

/* =========================
   ✅ IMPORT IMAGES
========================= */

// Ground Floor
import g1 from '../assets/gallery/img1.png'
import g2 from '../assets/gallery/img2.png'
import g3 from '../assets/gallery/img3.png'
import g4 from '../assets/gallery/img4.png'
import g5 from '../assets/gallery/img5.png'
import g6 from '../assets/gallery/img6.png'
import g7 from '../assets/gallery/img7.png'
import g8 from '../assets/gallery/img8.png'
import g9 from '../assets/gallery/img9.png'
import g10 from '../assets/gallery/img10.png'
import g11 from '../assets/gallery/img11.png'
import g12 from '../assets/gallery/img12.png'
import g13 from '../assets/gallery/img13.png'
// import g14 from '../assets/gallery/img14.png'
import g15 from '../assets/gallery/img15.png'
import g16 from '../assets/gallery/img16.png'
import g17 from '../assets/gallery/img17.png'
import g18 from '../assets/gallery/img18.png'
import g19 from '../assets/gallery/img19.png'

// First Floor
import f1 from '../assets/gallery/firstfloor/img1.jpeg'
import f2 from '../assets/gallery/firstfloor/img2.jpeg'
import f3 from '../assets/gallery/firstfloor/img3.jpeg'
import f4 from '../assets/gallery/firstfloor/img4.jpeg'
import f5 from '../assets/gallery/firstfloor/img5.jpeg'
import f6 from '../assets/gallery/firstfloor/img6.jpeg'
import f7 from '../assets/gallery/firstfloor/img7.jpeg'
import f8 from '../assets/gallery/firstfloor/img8.jpeg'
import f9 from '../assets/gallery/firstfloor/img9.jpeg'
import f10 from '../assets/gallery/firstfloor/img10.jpeg'
import f11 from '../assets/gallery/firstfloor/img11.jpeg'
import f12 from '../assets/gallery/firstfloor/img12.jpeg'
import f13 from '../assets/gallery/firstfloor/img13.jpeg'
import f14 from '../assets/gallery/firstfloor/img14.jpeg'
import f15 from '../assets/gallery/firstfloor/img15.jpeg'
import f16 from '../assets/gallery/firstfloor/img16.jpeg'
import f17 from '../assets/gallery/firstfloor/img17.jpeg'
import f18 from '../assets/gallery/firstfloor/img18.jpeg'
import f19 from '../assets/gallery/firstfloor/img19.jpeg'
import f20 from '../assets/gallery/firstfloor/img20.jpeg'
import f21 from '../assets/gallery/firstfloor/img21.jpeg'
import f22 from '../assets/gallery/firstfloor/img22.jpeg'
import f23 from '../assets/gallery/firstfloor/img23.jpeg'
import f24 from '../assets/gallery/firstfloor/img24.jpeg'

/* =========================
   ✅ ARRAYS
========================= */

const groundFloorImages = [
  g1,g2,g3,g4,g5,g6,g7,g8,g9,
  g10,g11,g12,g13,g15,g16,g17,g18,g19
].map((img, i) => ({
  src: img,
  alt: `Ground Floor ${i + 1}`
}))

const firstFloorImages = [
  f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,
  f11,f12,f13,f14,f15,f16,f17,f18,f19,
  f20,f21,f22,f23,f24
].map((img, i) => ({
  src: img,
  alt: `First Floor ${i + 1}`
}))

/* =========================
   ✅ COMPONENT
========================= */

const Gallery = () => {
  const location = useLocation()
  const groundRef = useRef(null)
  const firstRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (location.hash === '#ground-floor') {
      groundRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.hash === '#first-floor') {
      firstRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <div>
      <BackgroundPattern />
      <Navbar />

      {/* HEADER */}
      <div style={{ background: 'var(--primary)', padding: '7rem 0', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 900 }}>
          Store Gallery
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>
          Explore our store
        </p>
      </div>

      {/* GROUND FLOOR */}
      <section ref={groundRef} id="ground-floor" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="title">Ground Floor</h2>

          <div className="grid">
            {groundFloorImages.map((img, i) => (
              <div key={i} className="card" onClick={() => setLightbox(img.src)}>
                <img src={img.src} alt={img.alt} />
                <div className="overlay"><ZoomIn /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST FLOOR */}
      <section ref={firstRef} id="first-floor" style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="title">First Floor</h2>

          <div className="grid">
            {firstFloorImages.map((img, i) => (
              <div key={i} className="card" onClick={() => setLightbox(img.src)}>
                <img src={img.src} alt={img.alt} />
                <div className="overlay"><ZoomIn /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="close"><X /></button>
          <img src={lightbox} alt="preview" />
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .card:hover img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0);
          transition: 0.3s;
        }

        .overlay svg {
          color: white;
          width: 32px;
          height: 32px;
          opacity: 0;
        }

        .card:hover .overlay {
          background: rgba(0,0,0,0.4);
        }

        .card:hover .overlay svg {
          opacity: 1;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 80vh;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Gallery