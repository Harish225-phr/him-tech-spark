import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

const timeline = [
  { icon: GraduationCap, year: "2022", title: "Learning & Growth", desc: "Started learning frontend development with HTML, CSS, JavaScript and React." },
  { icon: Briefcase, year: "2023", title: "Professional Projects", desc: "Worked on real-world dashboards, automation tools, and business systems for clients." },
  { icon: Rocket, year: "2024", title: "TechHim Solutions Founded", desc: "Launched TechHim Solutions to provide affordable technology solutions to businesses." },
  { icon: Award, year: "2025-26", title: "Growing & Expanding", desc: "Completed 50+ projects and built a trusted client base with quality-driven services." },
];

const values = [
  { title: "Innovation", desc: "We stay ahead of the curve, using the latest tools and methods." },
  { title: "Quality", desc: "Every line of code is written with care, precision, and best practices." },
  { title: "Transparency", desc: "Clear communication and honest timelines. No surprises." },
  { title: "Growth", desc: "We grow with our clients, adapting to evolving business needs." },
];

const TimelineSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Our Journey</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            The <span className="gradient-text">TechHim Story</span>
          </h2>
        </motion.div>

        <div className="mx-auto mb-20 max-w-3xl space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card glow-border flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="mb-1 inline-block text-xs font-semibold text-primary">{item.year}</span>
                <h4 className="mb-1 font-display text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">What We Stand For</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Values</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:glow-border"
            >
              <h4 className="mb-2 font-display text-lg font-bold gradient-text">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
