import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import founderImg from "@/assets/founder.png";
import sahilImg from "@/assets/sahil-sharma.webp";
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
                <span className="mb-4 inline-block text-sm font-medium text-primary">Founder & Full Stack Developer</span>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  TechHim Solutions was founded by Harish Parihar, a passionate full stack developer
                  and technology enthusiast dedicated to building powerful digital solutions for businesses.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  With expertise in both frontend and backend technologies, Harish has worked on dashboards, automation tools
                  and business systems. TechHim Solutions was created to help businesses grow using technology.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "MongoDB", "TypeScript", "Tailwind CSS", "PostgreSQL", "Next.js", "Express", "Firebase"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sahil Sharma */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card glow-border mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-primary/30"
              >
                <img
                  src={sahilImg}
                  alt="Sahil Sharma - Sales Manager at TechHim Solutions"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={192}
                  height={192}
                />
              </motion.div>
              <div>
                <h3 className="mb-1 font-display text-2xl font-bold text-foreground">Sahil Sharma</h3>
                <span className="mb-4 inline-block text-sm font-medium text-primary">Sales Manager Expert</span>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Sahil Sharma is our dedicated Sales Manager who specializes in understanding client needs 
                  and delivering tailored technology solutions. With strong communication skills and deep market 
                  knowledge, he ensures every client gets the best service experience.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  His expertise in client relations and business development has helped TechHim Solutions 
                  build lasting partnerships with businesses across India.
                </p>
                <a
                  href="https://wa.me/918360303621?text=Hi%20Sahil%2C%20I%20want%20to%20know%20more%20about%20TechHim%20Solutions%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ background: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +91 836 030 3621
                </a>
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
