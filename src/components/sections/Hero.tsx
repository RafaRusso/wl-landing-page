import { siteConfig } from "../../config/site-config";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const { hero } = siteConfig.sections;

  return (
    <section className="relative pt-40 md:pt-64 pb-20 md:pb-32 overflow-hidden bg-background">
      <div className="container-narrow grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 text-primary leading-[1.05] tracking-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-medium">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl active:scale-95 group"
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                {hero.ctaText}
              </a>
              {hero.secondaryCtaText && (
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border-2 border-secondary/30 bg-white/40 backdrop-blur-sm px-10 py-5 rounded-full text-lg font-bold text-secondary hover:bg-secondary hover:text-white transition-all active:scale-95 shadow-sm"
                >
                  {hero.secondaryCtaText}
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        {hero.image && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={hero.image} 
                alt={siteConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
