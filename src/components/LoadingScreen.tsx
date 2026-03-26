import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Logo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 relative"
          animate={{ 
            boxShadow: [
              "0 0 20px hsl(150 100% 50% / 0.2)",
              "0 0 40px hsl(150 100% 50% / 0.4)",
              "0 0 20px hsl(150 100% 50% / 0.2)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ borderRadius: "50%" }}
        >
          <img
            src={logoIcon}
            alt="TechHim Solutions"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Brand name */}
      <motion.h2
        className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Tech<span className="gradient-text">Him</span> Solutions
      </motion.h2>

      {/* Progress bar */}
      <motion.div
        className="w-48 md:w-56 h-1 rounded-full bg-secondary overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundImage: "var(--gradient-primary)", width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      <motion.p
        className="mt-3 text-xs text-muted-foreground font-body tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
