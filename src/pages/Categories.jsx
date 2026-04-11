import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, ArrowLeft, ArrowRight, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import BackgroundPattern from "../components/BackgroundPattern"
import { categories } from "../data/categories"



/* ---------------- PRODUCT CARD ---------------- */

const ProductCard = ({ product }) => {

  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 8
    const rotateY = ((x - centerX) / centerX) * -8

    e.currentTarget.style.transform =
      `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(500px) rotateX(0) rotateY(0)"
  }

  return (

    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity }}
      whileHover={{ scale: 1.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.4)",
        borderRadius: "1rem",
        padding: "10px",
        textAlign: "center",
        cursor: "pointer",
        minWidth: 150
      }}
    >

      <div style={{ height: 90 }}>

        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />

      </div>

      <h5 style={{ fontSize: "13px", marginTop: 6 }}>
        {product.name}
      </h5>

      <div style={{ fontWeight: 700, color: "#F26522" }}>
        ₹{product.price}
      </div>

      <button
        style={{
          background: "#F26522",
          border: "none",
          padding: "4px 10px",
          borderRadius: 20,
          color: "white",
          fontSize: 11,
          marginTop: 4
        }}
      >
        Add
      </button>

    </motion.div>
  )
}



/* ---------------- CATEGORY CARD ---------------- */

const CategoryCard = ({ cat, isExpanded, onToggle, isAnyExpanded }) => {

  const navigate = useNavigate()

  const previewProducts = cat.subcategories
    .flatMap((sub) => sub.products)
    .slice(0, 8)

  return (

    <motion.div
      layout
      style={{
        opacity: isAnyExpanded && !isExpanded ? 0.6 : 1,
        transform: isAnyExpanded && !isExpanded ? "scale(0.85)" : "scale(1)",
        transition: "all 0.4s"
      }}
    >

      <motion.div
        layout
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)"
        }}
        onClick={onToggle}
        style={{
          background: cat.gradient,
          borderRadius: 25,
          padding: "1.5rem",
          cursor: "pointer",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isExpanded ? "row" : "column",
            textAlign: isExpanded ? "left" : "center",
            gap: 10
          }}
        >

          <div>

            <span style={{ fontSize: 12, opacity: 0.7 }}>
              {cat.subtitle}
            </span>

            <h3 style={{ fontWeight: 800 }}>
              {cat.name}
            </h3>

          </div>

          <motion.img
            src={cat.img}
            whileHover={{ scale: 1.15, rotate: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              width: isExpanded ? 140 : 90,
              height: isExpanded ? 140 : 90,
              objectFit: "contain",
              transition: "all 0.4s"
            }}
          />

        </div>


        {/* EXPANDED PRODUCT SLIDER */}

        <AnimatePresence>

          {isExpanded && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginTop: 20 }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10
                }}
              >

                <span>Top Products</span>

                <div style={{ display: "flex", gap: 10 }}>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/category/${cat.id}`)
                    }}
                    style={{
                      border: "none",
                      background: "white",
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12
                    }}
                  >
                    Explore <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onToggle()
                    }}
                    style={{
                      border: "none",
                      background: "transparent"
                    }}
                  >
                    <X size={16} />
                  </button>

                </div>

              </div>


              {/* AUTO SCROLL PRODUCTS */}

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity
                }}
                style={{
                  display: "flex",
                  gap: 12,
                  width: "max-content"
                }}
              >

                {[...previewProducts, ...previewProducts].map((product, i) => (

                  <ProductCard key={i} product={product} />

                ))}

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </motion.div>
  )
}



/* ---------------- MAIN PAGE ---------------- */

const Categories = () => {

  const [expandedId, setExpandedId] = useState(null)

  const toggle = (id) =>
    setExpandedId(prev => prev === id ? null : id)


  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        background: "#FFF8F2",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <BackgroundPattern />


      {/* PREMIUM LIGHTING */}

      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "radial-gradient(circle,#FFD8B5,#FFF8F2)",
          filter: "blur(120px)",
          top: -100,
          left: -100,
          opacity: 0.6
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          background: "radial-gradient(circle,#FFE6D3,#FFF8F2)",
          filter: "blur(120px)",
          bottom: -120,
          right: -120,
          opacity: 0.6
        }}
      />


      {/* HEADER */}

      <header style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(12px)",
        background: "rgba(255,248,242,0.9)",
        borderBottom: "1px solid rgba(0,0,0,0.05)"
      }}>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem"
          }}
        >

          <Link to="/" style={{
            display: "flex",
            gap: 10,
            alignItems: "center"
          }}>

            <div style={{
              width: 40,
              height: 40,
              background: "#F26522",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <ShoppingCart color="white" size={20} />
            </div>

            <b>
              TSB <span style={{ color: "#F26522" }}>Hypermarket</span>
            </b>

          </Link>

          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <ArrowLeft size={16} /> Home
          </Link>

        </div>

      </header>



      {/* AI SEARCH BAR */}

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 40
      }}>

        <motion.input
          whileFocus={{
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
          }}
          placeholder="Search vegetables, fruits, groceries..."
          style={{
            width: 350,
            padding: "10px 18px",
            borderRadius: 30,
            border: "1px solid #eee",
            outline: "none"
          }}
        />

      </div>



      {/* PAGE TITLE */}

      <main style={{ padding: "3rem 40px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>

          <h1 style={{ fontWeight: 900, fontSize: "2.7rem" }}>
            Product <span style={{ color: "#F26522" }}>Categories</span>
          </h1>

          <p style={{ opacity: 0.7 }}>
            Tap a category to explore products
          </p>

        </div>



        {/* CATEGORY FLEX GRID */}

        <motion.div
          layout
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap"
          }}
        >

          {categories.map(cat => (

            <motion.div
              key={cat.id}
              layout
              style={{
                flex: expandedId === cat.id ? "2 1 600px" : "1 1 260px",
                minWidth: expandedId === cat.id ? 500 : 260,
                transition: "all 0.4s ease"
              }}
            >

              <CategoryCard
                cat={cat}
                isExpanded={expandedId === cat.id}
                onToggle={() => toggle(cat.id)}
                isAnyExpanded={expandedId !== null}
              />

            </motion.div>

          ))}

        </motion.div>

      </main>

    </motion.div>
  )
}

export default Categories