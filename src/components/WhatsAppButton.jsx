import { useState } from "react";

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <a
        href="https://wa.me/917200995111?text=Hi%20TSB%20Hypermarket%2C%20I%20want%20more%20details"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Tooltip */}
        <div
          style={{
            background: "#0f172a",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            whiteSpace: "nowrap",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            opacity: hover ? 1 : 0,
            transform: hover ? "translateX(0)" : "translateX(10px)",
            transition: "all 0.3s ease",
          }}
        >
          Chat with us 💬
        </div>

        {/* WhatsApp Button */}
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 35px rgba(37, 211, 102, 0.4)",
            transform: hover ? "scale(1.1)" : "scale(1)",
            transition: "all 0.3s ease",

            /* Floating animation */
            animation: "float 2.5s ease-in-out infinite",
          }}
        >
          {/* REAL WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M16 .4C7.3.4.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.7-7 15.7-15.6C31.7 7.4 24.7.4 16 .4zm0 28.5c-2.4 0-4.8-.6-6.9-1.9l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-7C2.7 8.5 8.5 2.7 16 2.7s13.3 5.8 13.3 13.3S23.5 28.9 16 28.9zm7.5-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.2.4-1 1.3-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2.1-.1-.2-.4-.3-.8-.5z"/>
          </svg>
        </div>
      </a>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;