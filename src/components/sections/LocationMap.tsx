import { siteConfig } from "../../config/site-config";
import { MapPin, ExternalLink } from "lucide-react";

const LocationMap = () => {
  const { locations } = siteConfig.contact;

  if (!locations || locations.length === 0) return null;

  return (
    <section id="contato" className="py-32 bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6">Nossos Endereços</h2>
          <p className="text-secondary text-xl font-medium">Encontre o consultório mais próximo de você</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-white rounded-[2.5rem] overflow-hidden card-shadow border border-primary/5 flex flex-col group">
              <div className="p-10 pb-6">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <MapPin size={18} />
                  <span className="text-xs uppercase tracking-widest font-bold">{loc.city}</span>
                </div>
                <h4 className="font-serif text-2xl text-primary mb-2">{loc.title}</h4>
                <p className="text-secondary font-medium leading-relaxed">{loc.address}</p>
              </div>
              
              <div className="relative aspect-video w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${loc.city}`}
                  className="absolute inset-0"
                />
              </div>

              <div className="p-6 bg-secondary/5 flex justify-end">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
                >
                  Abrir no Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
