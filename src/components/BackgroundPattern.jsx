const BackgroundPattern = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <svg 
        style={{ width: '100%', height: '100%', opacity: 0.03 }} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grocery-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Cart */}
            <path d="M10 25 L15 25 L20 40 L35 40 L38 30 L18 30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="22" cy="44" r="2" fill="currentColor"/>
            <circle cx="33" cy="44" r="2" fill="currentColor"/>
            {/* Bottle */}
            <rect x="70" y="10" width="10" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="73" y="6" width="4" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            {/* Apple/Vegetable */}
            <circle cx="105" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M105 52 Q108 48 110 52" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* Juice box */}
            <rect x="15" y="70" width="14" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M19 70 L22 62 L25 70" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* Chocolate bar */}
            <rect x="60" y="75" width="20" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="67" y1="75" x2="67" y2="85" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="73" y1="75" x2="73" y2="85" stroke="currentColor" strokeWidth="0.8"/>
            {/* Baby bottle */}
            <rect x="95" y="90" width="8" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M97 90 L97 86 Q99 83 101 86 L101 90" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* House */}
            <path d="M50 55 L60 45 L70 55 L70 70 L50 70 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="57" y="60" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grocery-pattern)" />
      </svg>
    </div>
  )
}

export default BackgroundPattern