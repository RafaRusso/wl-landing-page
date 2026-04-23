import { siteConfig, type Service, type Package } from "../../config/site-config";
import { motion } from "framer-motion";
import Icon from "../ui/icon";
import { Calendar, Clock, MapPin } from "lucide-react";

const Services = () => {
  const { sections, visibility } = siteConfig;
  const { services } = sections;
  const { items, packages } = services;

  return (
    <section id="services" className="py-32 bg-secondary/10">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow">Serviços</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">{services.title}</h2>
          <p className="text-secondary text-xl font-medium">{services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {items.map((service: Service, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-primary/10 p-10 md:p-12 rounded-[3rem] card-shadow card-hover transition-all group flex flex-col"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon name={service.icon} size={32} />
              </div>
              <h3 className="text-3xl font-bold font-serif text-primary mb-4">{service.title}</h3>
              <p className="text-secondary/80 leading-relaxed text-lg font-medium mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {service.address && (
                  <div className="flex items-center gap-3 text-secondary/70">
                    <MapPin size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wider">{service.address}</span>
                  </div>
                )}
                {service.duration && (
                  <div className="flex items-center gap-3 text-secondary/70">
                    <Clock size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wider">{service.duration}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-primary/5 mt-auto">
                {service.price && (
                  <span className="text-3xl font-serif text-primary font-bold">
                    {service.price}
                  </span>
                )}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors"
                >
                  Agendar <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Packages Section */}
        {visibility.packages && packages && (
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold font-serif text-primary mb-4">Pacotes de Psicoterapia</h3>
              <p className="text-secondary text-xl font-medium">Valores para quem prefere planejamento mensal</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {packages.map((pkg: Package, idx: number) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-primary/20 rounded-[2.5rem] p-10 border border-primary/5 card-shadow text-center flex flex-col items-center hover:scale-[1.02] transition-transform duration-500"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                    <Calendar size={28} />
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">{pkg.location}</span>
                  <h4 className="text-2xl font-bold font-serif text-primary mb-3">{pkg.title}</h4>
                  <p className="text-5xl font-bold font-serif text-primary mb-2">{pkg.price}</p>
                  <p className="text-accent font-bold mb-6 tracking-wide">{pkg.perSession}</p>
                  <p className="text-secondary font-medium leading-relaxed">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
