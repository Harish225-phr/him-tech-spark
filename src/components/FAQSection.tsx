import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What services does TechHim Solutions offer?", a: "We offer web development (React, business websites), automation solutions (Google Script, dashboards, MIS), and digital services (SEO, maintenance, performance optimization)." },
  { q: "How long does it take to complete a project?", a: "Timelines vary based on project complexity. Simple websites take 1-2 weeks, while custom software and automation projects may take 3-6 weeks." },
  { q: "Do you provide post-delivery support?", a: "Yes! We provide ongoing maintenance and support after project delivery to ensure everything runs smoothly." },
  { q: "What is your pricing model?", a: "We offer competitive, project-based pricing. Contact us for a free quote tailored to your specific requirements." },
  { q: "Can you work with existing codebases?", a: "Absolutely. We can take over, improve, and maintain existing projects. We specialize in code optimization and modernization." },
  { q: "Do you offer SEO services?", a: "Yes, we provide complete SEO optimization including on-page SEO, performance improvements, and search ranking strategies." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">FAQ</span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden rounded-xl"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
