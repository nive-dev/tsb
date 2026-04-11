import { motion } from 'framer-motion';

const MagneticButton = ({ children, onClick, style, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      style={{
        background: "#F26522",
        border: "none",
        padding: "8px 16px",
        borderRadius: 999,
        color: "white",
        fontWeight: 600,
        fontSize: 12,
        cursor: "pointer",
        ...style
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;