import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918278771093?text=Hi%20TechHim%20Solutions%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
      style={{ background: "#25D366" }}
      title="Chat with TechHim Solutions"
    >
      <MessageCircle className="h-6 w-6" style={{ color: "#fff" }} />
    </motion.a>
  );
};

export default WhatsAppButton;
