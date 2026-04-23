import { siteConfig } from "../../config/site-config";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { testimonials } = siteConfig.sections;

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">{testimonials.title}</h2>
          <p className="text-secondary text-xl font-medium">{testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/5 p-12 rounded-[3rem] relative border border-primary/5 card-shadow"
            >
              <Quote className="absolute top-10 right-12 text-primary/5 w-20 h-20" />
              <p className="text-xl italic text-primary/80 mb-10 leading-relaxed relative z-10 font-medium">
                "{item.text}"
              </p>
              <div className="flex items-center gap-5">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <h4 className="font-bold text-xl font-serif text-primary">{item.name}</h4>
                  <p className="text-secondary font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
