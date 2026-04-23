import { siteConfig } from "../../config/site-config";
import { Globe, Users, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              {siteConfig.name}
            </h3>
            <p className="text-background/60 max-w-sm mb-6 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.contact.social.instagram && (
                <a href={siteConfig.contact.social.instagram} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Globe size={20} />
                </a>
              )}
              {siteConfig.contact.social.facebook && (
                <a href={siteConfig.contact.social.facebook} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Users size={20} />
                </a>
              )}
              {siteConfig.contact.social.linkedin && (
                <a href={siteConfig.contact.social.linkedin} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <MessageSquare size={20} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-background/60">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-background/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="#" className="hover:text-primary transition-colors">White Label Solutions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
