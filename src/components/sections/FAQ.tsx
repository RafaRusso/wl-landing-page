import { useState } from "react";
import { siteConfig } from "../../config/site-config";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const { faq } = siteConfig.sections;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">{faq.title}</h2>
          <p className="text-secondary text-xl font-medium">{faq.subtitle}</p>
        </div>

        <div className="space-y-6">
          {faq.items.map((item, index) => (
            <div 
              key={index}
              className="border-b border-primary/10 bg-transparent"
            >
              <button
                className="w-full py-8 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl md:text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-primary/5 text-primary'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="pb-8 text-lg text-secondary/80 leading-relaxed font-medium pr-12">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
