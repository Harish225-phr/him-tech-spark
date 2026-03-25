import { motion } from "framer-motion";

const techStack = [
  "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Google Apps Script", "Python", "Firebase", "PostgreSQL",
  "REST APIs", "Git", "Figma", "Vite",
];

const TechStackSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Our Stack</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            We leverage modern, battle-tested technologies to build robust and scalable solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="glass-card cursor-default rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-all hover:glow-border"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
