import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Globe, Cpu, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const floatingIcons = [
  { Icon: Code2, className: "top-[20%] left-[10%] floating", delay: 0 },
  { Icon: Globe, className: "top-[15%] right-[15%] floating-delayed", delay: 0.2 },
  { Icon: Cpu, className: "bottom-[30%] left-[5%] floating-slow", delay: 0.4 },
  { Icon: Zap, className: "bottom-[20%] right-[10%] floating", delay: 0.6 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Technology background"
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay, duration: 1 }}
          className={`absolute hidden md:block ${className}`}
        >
          <Icon size={48} className="text-primary" />
        </motion.div>
      ))}

      <div className="container relative mx-auto px-4 pt-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1.5 text-xs font-medium text-primary">
              🚀 Welcome to TechHim Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Building Digital Future{" "}
            <span className="gradient-text">With Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            TechHim Solutions provides modern web development, software solutions,
            automation systems and digital services for growing businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              to="/contact"
              className="gradient-btn flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold"
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="glass-card flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
