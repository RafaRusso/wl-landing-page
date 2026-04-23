export interface Service {
  title: string;
  description: string;
  icon: string;
  duration?: string;
  price?: string;
  address?: string;
}

export interface Package {
  title: string;
  location: string;
  price: string;
  perSession: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  logo?: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    radius: string;
    allowDarkMode: boolean;
  };
  visibility: {
    trustStrip: boolean;
    howItWorks: boolean;
    approach: boolean;
    packages: boolean;
    locationMap: boolean;
    testimonials: boolean;
    faq: boolean;
  };
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    address: string;
    googleMapsUrl?: string;
    locations?: {
      city: string;
      title: string;
      address: string;
      mapUrl: string;
    }[];
    social: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
    };
  };
  sections: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaText: string;
      secondaryCtaText?: string;
      image?: string;
    };
    trustStrip: {
      items: { icon: string; label: string }[];
    };
    approach: {
      eyebrow: string;
      title: string;
      content: string[];
      pillars: { title: string; desc: string }[];
    };
    howItWorks: {
      eyebrow: string;
      title: string;
      steps: { title: string; desc: string; icon: string }[];
    };
    services: {
      title: string;
      subtitle: string;
      items: Service[];
      packages?: Package[];
    };
    about: {
      title: string;
      content: string;
      image: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Testimonial[];
    };
    faq: {
      title: string;
      subtitle: string;
      items: FAQItem[];
    };
    finalCTA: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaText: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "CLÍNICA DE PSICOTERAPIA",
  title: "Clínica de Psicoterapia | Atendimento Presencial e Online",
  description: "Um espaço seguro para se conhecer e construir uma vida alinhada aos seus valores.",
  url: "https://clinicapsicoterapia.com.br",
  ogImage: "/og-image.jpg",
  logo: "/logo.png",
  theme: {
    primary: "160 30% 15%", // Deep Forest Green
    secondary: "160 10% 45%", // Muted Forest
    accent: "40 30% 55%", // Warm Sand
    radius: "2rem",
    allowDarkMode: true,
  },
  visibility: {
    trustStrip: true,
    howItWorks: true,
    approach: true,
    packages: true,
    locationMap: true,
    testimonials: true,
    faq: true,
  },
  contact: {
    whatsapp: "5591999999999",
    phone: "(91) 99999-9999",
    email: "contato@clinicapsicoterapia.com.br",
    address: "Tv. Alm. Wandenkolk, 811 - Nazaré, Belém - PA",
    locations: [
      {
        city: "Belém",
        title: "Unidade Nazaré",
        address: "Tv. Alm. Wandenkolk, 811 - Ed. Village Center",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.528343750346!2d-48.4842188!3d-1.4566336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e918c5e933d%3A0x7d6f5f9e8f4f4f4f!2sTv.%20Alm.%20Wandenkolk%2C%20811!5e0!3m2!1spt-BR!2sbr!4v1713900000000!5m2!1spt-BR!2sbr",
      }
    ],
    social: {
      instagram: "https://instagram.com/clinicapsicoterapia",
    },
  },
  sections: {
    hero: {
      eyebrow: "Atendimento Psicológico Especializado",
      title: "Um espaço seguro para se conhecer e construir uma vida com mais sentido.",
      subtitle: "Oferecemos acolhimento profissional em Belém e online para todo o Brasil. O cuidado que sua saúde mental merece.",
      ctaText: "Agendar uma consulta",
      secondaryCtaText: "Nossos serviços",
      image: "/hero.png",
    },
    trustStrip: {
      items: [
        { icon: "ShieldCheck", label: "Ética e Profissionalismo" },
        { icon: "Heart", label: "Escuta Qualificada" },
        { icon: "Lock", label: "Privacidade Garantida" },
        { icon: "Globe", label: "Modalidade Híbrida" },
      ],
    },
    approach: {
      eyebrow: "Nossa Metodologia",
      title: "Prática clínica baseada em evidências e centrada na pessoa.",
      content: [
        "Trabalhamos com abordagens terapêuticas modernas e validadas cientificamente para promover bem-estar e autonomia.",
        "Nossa clínica une o rigor técnico ao acolhimento necessário para processos de mudança consistentes.",
      ],
      pillars: [
        { title: "Ciência e Técnica", desc: "Utilizamos métodos reconhecidos internacionalmente pela sua eficácia clínica." },
        { title: "Foco em Valores", desc: "Ajudamos você a agir em direção ao que realmente importa em sua vida." },
      ],
    },
    howItWorks: {
      eyebrow: "Sua Jornada",
      title: "Passos simples para iniciar seu acompanhamento.",
      steps: [
        { title: "Contato Inicial", desc: "Fale conosco pelo WhatsApp para tirar dúvidas e verificar horários.", icon: "MessageSquare" },
        { title: "Primeira Sessão", desc: "Um momento para nos conhecermos e definirmos seus objetivos terapêuticos.", icon: "UserPlus" },
        { title: "Acompanhamento", desc: "Sessões semanais focadas no seu desenvolvimento e saúde mental.", icon: "Activity" },
      ],
    },
    services: {
      title: "Como podemos ajudar",
      subtitle: "Formatos flexíveis para se adequar à sua rotina e necessidades:",
      items: [
        {
          title: "Presencial (Belém)",
          description: "Consultório moderno e sigiloso para sessões presenciais no coração de Belém.",
          icon: "Building",
          duration: "50 min",
          price: "Consulte-nos",
          address: "Nazaré, Belém - PA",
        },
        {
          title: "Psicoterapia Online",
          description: "A mesma qualidade técnica, com o conforto e a praticidade do atendimento remoto.",
          icon: "Monitor",
          duration: "50 min",
          price: "Consulte-nos",
          address: "Videochamada Segura",
        },
      ],
      packages: [
        { title: "Plano Presencial", location: "Belém", price: "Sob consulta", perSession: "Valores diferenciados", desc: "Ideal para acompanhamentos contínuos." },
        { title: "Plano Digital", location: "Online", price: "Sob consulta", perSession: "Valores diferenciados", desc: "Praticidade para pacientes em qualquer lugar." },
      ],
    },
    about: {
      title: "Nossa Estrutura",
      content: "Nossa clínica foi projetada para oferecer o máximo de conforto e discrição. Acreditamos que o ambiente físico é parte fundamental do processo de cura e acolhimento.",
      image: "/about.png",
    },
    testimonials: {
      title: "Experiências",
      subtitle: "Depoimentos de quem confiou em nosso trabalho.",
      items: [
        { name: "M. S.", role: "Paciente", text: "O suporte que encontrei na clínica foi fundamental para minha recuperação emocional.", avatar: "https://i.pravatar.cc/150?u=ms" },
        { name: "J. P.", role: "Paciente", text: "Excelente atendimento e ambiente muito acolhedor. Recomendo fortemente.", avatar: "https://i.pravatar.cc/150?u=jp" },
      ],
    },
    faq: {
      title: "Dúvidas Frequentes",
      subtitle: "Informações úteis sobre o funcionamento da clínica.",
      items: [
        { question: "Como agendar uma sessão?", answer: "Você pode agendar diretamente pelo nosso WhatsApp oficial disponível no site." },
        { question: "A clínica atende convênios?", answer: "Atendemos via particular com emissão de nota para pedido de reembolso." },
      ],
    },
    finalCTA: {
      eyebrow: "Cuidado e Presença",
      title: "Dê o próximo passo em direção à sua saúde mental.",
      subtitle: "Inicie seu processo terapêutico com especialistas comprometidos com sua evolução.",
      ctaText: "Falar com a Clínica",
    },
  },
};
