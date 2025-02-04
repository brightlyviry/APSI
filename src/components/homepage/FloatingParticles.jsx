"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const FloatingParticles = ({ mobile }) => {
  const [particles, setParticles] = useState(null);
  useEffect(() => {
    const count = mobile ? 10 : 20;
    const newParticles = Array.from({ length: count }).map(() => {
      const size = mobile ? 30 : 50;
      return {
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        background: `radial-gradient(circle, rgba(${Math.random() > 0.5 ? 141 : 46}, ${Math.random() > 0.5 ? 196 : 164}, ${Math.random() > 0.5 ? 63 : 224}, 0.2), transparent)`,
        xAnim: Math.random() * 100 - 50,
        duration: 15 + Math.random() * 10
      };
    });
    setParticles(newParticles);
  }, [mobile]);
  if (!particles) return <div className="pointer-events-none absolute inset-0 overflow-hidden" />;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.background
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, p.xAnim, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
export default FloatingParticles;
