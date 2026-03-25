import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FolderKanban, Users, Clock, Headphones } from "lucide-react";

const stats = [
  { icon: FolderKanban, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 20, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 2, suffix: "+", label: "Years Experience" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card glow-border flex flex-col items-center gap-3 rounded-2xl p-6 text-center md:p-8"
            >
              <stat.icon className="h-8 w-8 text-primary" />
              <span className="font-display text-3xl font-bold text-foreground md:text-4xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
