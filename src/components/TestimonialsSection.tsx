import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    text: "TechHim Solutions built an amazing website for my startup. The quality and speed of delivery exceeded my expectations. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    text: "The automation system they built for us saved hours of daily work. Professional team and excellent communication throughout the project.",
  },
  {
    name: "Amit Verma",
    role: "Marketing Manager",
    text: "Our website's SEO rankings improved significantly after TechHim optimized it. The performance boost was noticeable immediately.",
  },
  {
    name: "Sneha Patel",
    role: "E-commerce Owner",
    text: "From dashboard to MIS systems, TechHim Solutions delivered everything on time. Great value for money and fantastic support.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Testimonials</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card glow-border rounded-2xl p-6"
            >
              <Quote className="mb-3 h-6 w-6 text-primary/50" />
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
