import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import founderImg from "@/assets/founder.png";
import logoMain from "@/assets/logo-main.png";

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container mx-auto">
        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <img src={logoMain} alt="TechHim Solutions" className="h-16 w-auto md:h-20" />
            </div>
            <span className="mb-2 inline-block text-sm font-semibold text-primary">Who We Are</span>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              About <span className="gradient-text">TechHim Solutions</span>
            </h2>
          </div>

          <div className="glass-card glow-border mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-primary/30"
              >
                <img
                  src={founderImg}
                  alt="Harish Parihar - Founder of TechHim Solutions"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={192}
                  height={192}
                />
              </motion.div>
              <div>
                <h3 className="mb-1 font-display text-2xl font-bold text-foreground">Harish Parihar</h3>
                <span className="mb-4 inline-block text-sm font-medium text-primary">Founder & Developer</span>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  TechHim Solutions was founded by Harish Parihar, a passionate frontend developer
                  and technology enthusiast dedicated to building powerful digital solutions for businesses.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Started journey as a frontend developer and worked on dashboards, automation tools
                  and business systems. TechHim Solutions was created to help businesses grow using technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border rounded-2xl p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 font-display text-xl font-bold text-foreground">Our Mission</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our mission is to provide affordable and powerful technology solutions to startups and businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border rounded-2xl p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 font-display text-xl font-bold text-foreground">Our Vision</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To become a trusted technology partner for modern businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
