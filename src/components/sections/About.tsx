import { siteConfig } from "../../config/site-config";
import { motion } from "framer-motion";

const About = () => {
  const { about } = siteConfig.sections;

  return (
    <section id="about" className="py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden card-shadow">
              <img 
                src={about.image} 
                alt={about.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative shape */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-1" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8">{about.title}</h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-10" />
            <p className="text-xl text-secondary leading-relaxed mb-10 font-medium">
              {about.content}
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
