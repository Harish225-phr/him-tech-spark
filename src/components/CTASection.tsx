import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card glow-border relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
        >
          {/* Background glow */}
          <div className="absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
              Ready to Build Your <span className="gradient-text">Digital Future</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground md:text-base">
              Let's discuss how TechHim Solutions can transform your business with powerful, modern technology solutions tailored to your needs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="gradient-btn flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918278771093?text=Hi%20TechHim%20Solutions%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
