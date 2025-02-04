"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    const count = 10;
    const colors = [
      "rgba(46, 196, 224, 0.2)",
      "rgba(46, 196, 63, 0.2)",
      "rgba(141, 164, 63, 0.2)",
      "rgba(46, 164, 63, 0.2)",
      "rgba(141, 164, 224, 0.2)"
    ];
    const newBubbles = Array.from({ length: count }).map(() => ({
      width: "50px",
      height: "50px",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`
    }));
    setBubbles(newBubbles);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none">
      {bubbles.map((style, i) => (
        <motion.div
          key={i}
          style={style}
          className="absolute rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4, delay: Math.random() * 2 }}
        />
      ))}
    </div>
  );
}
