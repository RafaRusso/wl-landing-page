import { siteConfig } from "../../config/site-config";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Approach = () => {
  const { approach } = siteConfig.sections;

  return (
    <section id="approach" className="py-32 bg-secondary/5 overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-8 leading-tight">
              {approach.title}
            </h2>
            <div className="space-y-6 mb-10">
              {approach.content.map((text, idx) => (
                <p key={idx} className="text-xl text-secondary leading-relaxed font-medium">
                  {text}
                </p>
              ))}
            </div>

            <div className="space-y-8">
              {approach.pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-primary mb-2">{pillar.title}</h3>
                    <p className="text-secondary leading-relaxed font-medium">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-primary/5 rounded-[3rem] p-12 flex flex-col justify-center gap-8 shadow-inner border border-primary/5">
              <div className="p-8 bg-white dark:bg-primary/20 backdrop-blur-sm rounded-3xl card-shadow border border-primary/10">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Ciência</span>
                <p className="text-2xl font-bold font-serif text-primary mt-3 leading-tight">Prática Baseada em Evidências</p>
                <p className="text-secondary mt-3 leading-relaxed font-medium">
                  Protocolos clínicos validados cientificamente para garantir resultados consistentes e seguros.
                </p>
              </div>
              <div className="p-8 bg-white dark:bg-primary/20 backdrop-blur-sm rounded-3xl card-shadow border border-primary/10">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Acolhimento</span>
                <p className="text-2xl font-bold font-serif text-primary mt-3 leading-tight">Olhar Singular</p>
                <p className="text-secondary mt-3 leading-relaxed font-medium">
                  Cada processo é único. Adaptamos a ciência à sua realidade e necessidades individuais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
