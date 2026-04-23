import { siteConfig } from "../../config/site-config";
import { motion } from "framer-motion";
import Icon from "../ui/icon";

const HowItWorks = () => {
  const { howItWorks } = siteConfig.sections;

  return (
    <section id="how-it-works" className="py-32 bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary leading-tight">
            {howItWorks.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-px bg-primary/10 -z-0" />
          
          {howItWorks.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center md:items-start"
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-primary/30 card-shadow flex items-center justify-center text-accent mb-8 border-4 border-background group hover:scale-110 transition-transform duration-500">
                <Icon name={step.icon} size={40} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-4 text-center md:text-left">
                {step.title}
              </h3>
              <p className="text-secondary text-lg leading-relaxed font-medium text-center md:text-left">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
