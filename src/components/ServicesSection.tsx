import { motion } from "framer-motion";
import {
  Globe, Code2, Building2, Cog,
  FileSpreadsheet, BarChart3, Layout,
  Search, Wrench, Gauge,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Web Development",
    services: [
      { icon: Code2, name: "React Websites", desc: "Modern, fast single-page applications built with React." },
      { icon: Building2, name: "Business Websites", desc: "Professional corporate websites that drive results." },
      { icon: Globe, name: "Custom Software", desc: "Tailored solutions designed for your unique needs." },
    ],
  },
  {
    title: "Automation Solutions",
    services: [
      { icon: Cog, name: "Google Script Automation", desc: "Automate repetitive tasks with Google Apps Script." },
      { icon: Layout, name: "Dashboard Systems", desc: "Real-time data dashboards for smarter decisions." },
      { icon: FileSpreadsheet, name: "MIS Systems", desc: "Management information systems for business insights." },
    ],
  },
  {
    title: "Digital Services",
    services: [
      { icon: Search, name: "SEO Optimization", desc: "Boost your search rankings and online visibility." },
      { icon: Wrench, name: "Website Maintenance", desc: "Ongoing support to keep your site running smooth." },
      { icon: Gauge, name: "Performance Optimization", desc: "Speed up your website for the best user experience." },
    ],
  },
];

interface ServicesSectionProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => {
  const categories = showAll ? serviceCategories : serviceCategories.slice(0, 2);

  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">What We Offer</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {categories.map((cat, ci) => (
          <div key={cat.title} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 font-heading text-xl font-semibold text-foreground"
            >
              {cat.title}
            </motion.h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((service, si) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:glow-border"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                    {service.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
