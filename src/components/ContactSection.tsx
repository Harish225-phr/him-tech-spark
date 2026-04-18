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
              <a href="tel:8278771093" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                8278771093
              </a>
              <a href="tel:8360303621" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                8360303621
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
              <p className="text-sm text-muted-foreground">Office No. 8, #620, Motiaz Royal Business Park, Zirakpur, Punjab 140603</p>
            </div>

            {/* Map */}
            <div className="glass-card glow-border overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.5547733234606!2d76.80189!3d30.63917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb0d26ef4a501%3A0x1234567890!2sMotiaz%20Royal%20Business%20Park!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
