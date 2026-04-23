import { siteConfig } from "../config/site-config";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Analytics tracking could go here
    console.log("WhatsApp button clicked");
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-background text-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Fale conosco!
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
