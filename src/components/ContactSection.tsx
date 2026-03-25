import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold text-primary">Get In Touch</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card glow-border rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
              </div>
              <a href="tel:8278771093" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                8278771093
              </a>
            </div>

            <div className="glass-card glow-border rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
              </div>
              <div className="space-y-1">
                {["tech.himtech@gmail.com", "harish.pariihar@gmail.com", "harish.rajjput@gmail.com"].map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card glow-border rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">India</p>
            </div>

            {/* Map placeholder */}
            <div className="glass-card glow-border overflow-hidden rounded-2xl">
              <div className="flex h-48 items-center justify-center bg-secondary">
                <MapPin className="mr-2 h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">Google Map Integration</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card glow-border space-y-5 rounded-2xl p-8"
          >
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
              { name: "phone" as const, label: "Phone", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={formData[field.name]}
                  onChange={(e) => setFormData((f) => ({ ...f, [field.name]: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={`Your ${field.label.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Your message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="gradient-btn flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm"
            >
              {submitted ? "Message Sent! ✓" : (
                <>Send Message <Send size={16} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
