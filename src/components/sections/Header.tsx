import { useState, useEffect } from "react";
import { siteConfig } from "../../config/site-config";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Método", href: "#approach" },
    { name: "Como funciona", href: "#how-it-works" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-sm py-2 md:py-4" : "bg-transparent py-6 md:py-10"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <a href="#" className="flex items-center">
          {siteConfig.logo ? (
            <img 
              src={siteConfig.logo} 
              alt={siteConfig.name}
              className={`transition-all duration-500 object-contain ${
                isScrolled ? "h-12 md:h-16" : "h-20 md:h-32"
              }`}
            />
          ) : (
            <span className={`font-serif text-primary transition-all duration-500 ${
              isScrolled ? "text-xl md:text-2xl" : "text-3xl md:text-5xl"
            }`}>
              {siteConfig.name}
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-bold text-primary/80 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 border-l border-primary/10 pl-10">
            {siteConfig.theme.allowDarkMode && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-secondary/10 transition-colors text-primary"
                aria-label="Alternar tema"
              >
                {mounted && (theme === "dark" ? <Sun size={22} /> : <Moon size={22} />)}
              </button>
            )}
            
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-md active:scale-95"
            >
              Agendar consulta
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 xl:hidden">
          {siteConfig.theme.allowDarkMode && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-primary"
            >
              {mounted && (theme === "dark" ? <Sun size={22} /> : <Moon size={22} />)}
            </button>
          )}
          <button
            className="text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-t border-border/10 overflow-hidden shadow-2xl"
          >
            <div className="container-narrow py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-primary py-2 border-b border-primary/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-4 rounded-full text-center font-bold mt-4 shadow-lg"
              >
                Agendar consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
