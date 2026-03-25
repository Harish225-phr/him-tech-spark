import { motion } from "framer-motion";
import {
  ShieldCheck, Zap, Clock, HeartHandshake, Code2, Headphones,
  TrendingUp, Users,
} from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Reliable & Secure", desc: "We build secure, production-grade applications with industry best practices." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality. Your project, delivered on time." },
  { icon: Clock, title: "24/7 Availability", desc: "Round the clock support so you never feel stuck. We're always here for you." },
  { icon: HeartHandshake, title: "Client First", desc: "Your success is our priority. We work as your technology partner, not just a vendor." },
  { icon: Code2, title: "Clean Code", desc: "Maintainable, scalable code written with modern frameworks and best standards." },
  { icon: Headphones, title: "Dedicated Support", desc: "Post-delivery support and maintenance to keep everything running smoothly." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Solutions designed to scale with your business as it grows and evolves." },
  { icon: Users, title: "Collaborative", desc: "Transparent communication and regular updates throughout the project lifecycle." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Why Us</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Why Choose <span className="gradient-text">TechHim Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            We combine cutting-edge technology with deep business understanding to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:glow-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h4 className="mb-2 font-display text-base font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
