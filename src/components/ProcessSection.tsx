import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, Settings, Headphones } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discussion", desc: "We understand your requirements and business goals through detailed consultation." },
  { icon: Lightbulb, title: "Planning", desc: "We create a clear roadmap, wireframes, and technical architecture for your project." },
  { icon: Code2, title: "Development", desc: "Our team builds your solution using clean code and modern frameworks." },
  { icon: Settings, title: "Testing", desc: "Rigorous testing ensures everything works flawlessly across all devices." },
  { icon: Rocket, title: "Launch", desc: "We deploy your solution and make sure everything goes live smoothly." },
  { icon: Headphones, title: "Support", desc: "Ongoing maintenance and support to keep your solution running at peak performance." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">How We Work</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            A proven, structured approach that delivers results every time.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:glow-border"
            >
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full gradient-btn text-xs font-bold">
                {i + 1}
              </div>
              <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 font-display text-lg font-semibold text-foreground">{step.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
