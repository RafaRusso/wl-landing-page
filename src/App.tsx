import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import TrustStrip from "./components/sections/TrustStrip";
import Approach from "./components/sections/Approach";
import HowItWorks from "./components/sections/HowItWorks";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import LocationMap from "./components/sections/LocationMap";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/whatsapp-button";
import { siteConfig } from "./config/site-config";

function App() {
  const { visibility } = siteConfig;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          {visibility.trustStrip && <TrustStrip />}
          {visibility.approach && <Approach />}
          {visibility.howItWorks && <HowItWorks />}
          <Services />
          <About />
          {visibility.testimonials && <Testimonials />}
          {visibility.faq && <FAQ />}
          {visibility.locationMap && <LocationMap />}
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
