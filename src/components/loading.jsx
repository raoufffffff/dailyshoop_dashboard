import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 1.5,
      },
    },
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 1.5,
      },
    },
  };

  const dotsVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
        variants={spinnerVariants}
        animate="animate"
      >
        {/* Outer Pulsating Circle */}
        <motion.div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "4px solid rgba(52, 152, 219, 0.5)",
          }}
          variants={circleVariants}
          animate="animate"
        />

        {/* Inner Glowing Dots */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              width: "15px",
              height: "15px",
              backgroundColor: "#3498db",
              borderRadius: "50%",
              top: "0",
              left: "calc(50% - 7.5px)",
              transform: `rotate(${index * 120}deg) translateY(-40px)`,
              boxShadow: "0 0 8px #3498db",
            }}
            variants={dotsVariants}
            animate="animate"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
