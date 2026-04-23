import { siteConfig } from "../../config/site-config";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const { finalCTA } = siteConfig.sections;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-6">
              {finalCTA.eyebrow}
            </p>
            <h2 className="text-4xl md:text-7xl font-bold font-serif text-white mb-8 leading-[1.1]">
              {finalCTA.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {finalCTA.subtitle}
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              <MessageCircle className="mr-3 w-7 h-7" />
              {finalCTA.ctaText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
