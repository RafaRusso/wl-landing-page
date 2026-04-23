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
  name: "Beatriz Malveira",
  title: "Beatriz Malveira | Psicóloga Clínica em Belém",
  description: "Um espaço seguro para se conhecer e construir uma vida alinhada aos seus valores.",
  url: "https://beatrizmalveira.com.br",
  ogImage: "/og-image.jpg",
  logo: "/logo.png",
  theme: {
    primary: "280 34% 26%",
    secondary: "158 12% 40%",
    accent: "13 60% 56%",
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
    whatsapp: "5591993919631",
    phone: "(91) 99391-9631",
    email: "contato@beatrizmalveira.com.br",
    address: "Tv. Alm. Wandenkolk, 811 - Nazaré, Belém - PA",
    locations: [
      {
        city: "Belém",
        title: "Consultório Nazaré",
        address: "Tv. Alm. Wandenkolk, 811 - Ed. Village Center",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.528343750346!2d-48.4842188!3d-1.4566336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e918c5e933d%3A0x7d6f5f9e8f4f4f4f!2sTv.%20Alm.%20Wandenkolk%2C%20811!5e0!3m2!1spt-BR!2sbr!4v1713900000000!5m2!1spt-BR!2sbr",
      }
    ],
    social: {
      instagram: "https://instagram.com/beatrizmalveira.psi",
    },
  },
  sections: {
    hero: {
      eyebrow: "Psicóloga clínica – online e presencial",
      title: "Um espaço seguro para se conhecer e construir uma vida alinhada aos seus valores.",
      subtitle: "Atendimento psicológico presencial em Belém e online para todo o Brasil. Um convite para viver com mais presença e sentido.",
      ctaText: "Agendar consulta",
      secondaryCtaText: "Conhecer meu trabalho",
      image: "/hero.png",
    },
    trustStrip: {
      items: [
        { icon: "ShieldCheck", label: "Prática baseada em evidências" },
        { icon: "Heart", label: "Atendimento humanizado" },
        { icon: "Lock", label: "Sigilo absoluto" },
        { icon: "Globe", label: "Online e Presencial" },
      ],
    },
    approach: {
      eyebrow: "Metodologia",
      title: "Uma prática baseada em evidências, conduzida com afeto e singularidade.",
      content: [
        "Meu trabalho é fundamentado na Análise do Comportamento Aplicada (ABA) e em princípios da Terapia de Aceitação e Compromisso (ACT).",
        "Essa integração permite compreender e modificar o comportamento de forma contextualizada, promovendo flexibilidade psicológica e ações alinhadas com valores.",
      ],
      pillars: [
        { title: "Análise do Comportamento", desc: "Estuda como o comportamento é influenciado pelo ambiente, promovendo mudanças consistentes." },
        { title: "Terapia de Aceitação (ACT)", desc: "Desenvolve a flexibilidade para lidar com emoções difíceis, agindo no que importa." },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Três passos simples até a sua primeira sessão.",
      steps: [
        { title: "Agende sua consulta", desc: "Inicie o contato através do WhatsApp para escolhermos o melhor horário.", icon: "Calendar" },
        { title: "Conversamos", desc: "Na primeira sessão entendemos juntos o que te trouxe até aqui.", icon: "MessageSquare" },
        { title: "Caminhamos juntos", desc: "Definimos a frequência e o ritmo que faz sentido para o seu processo.", icon: "UserCheck" },
      ],
    },
    services: {
      title: "Como posso te ajudar",
      subtitle: "Diferentes formatos, a mesma escuta atenta. Escolha o que faz mais sentido para você:",
      items: [
        {
          title: "Presencial (Belém)",
          description: "Espaço acolhedor para falar das suas emoções e tomar decisões com mais clareza.",
          icon: "MapPin",
          duration: "50 min",
          price: "R$ 160",
          address: "Ed. Village Center. Wandenkolk, 811",
        },
        {
          title: "Psicoterapia Online",
          description: "Mesma escuta cuidadosa, no conforto da sua casa para todo o Brasil.",
          icon: "Laptop",
          duration: "50 min",
          price: "R$ 120",
          address: "Google Meet / Video",
        },
      ],
      packages: [
        { title: "Pacote Belém", location: "Presencial", price: "R$ 600", perSession: "R$ 150/sessão", desc: "Fechamento mensal de 4 sessões." },
        { title: "Pacote Online", location: "Sessões Remotas", price: "R$ 440", perSession: "R$ 110/sessão", desc: "Fechamento mensal de 4 sessões." },
      ],
    },
    about: {
      title: "Sobre o Atendimento",
      content: "Minha prática clínica é fundamentada no compromisso ético e no respeito à singularidade. Acredito que a psicoterapia é um processo de co-construção, onde o paciente encontra suporte para explorar suas questões mais profundas.",
      image: "/about.png",
    },
    testimonials: {
      title: "Relatos de Jornada",
      subtitle: "O que dizem as pessoas que passaram pelo processo terapêutico.",
      items: [
        { name: "Carla Mendes", role: "Paciente", text: "A terapia mudou minha forma de encarar os desafios no trabalho e na família.", avatar: "https://i.pravatar.cc/150?u=carla" },
        { name: "Ricardo Oliveira", role: "Paciente", text: "Excelente profissional. Me sinto muito mais seguro para tomar decisões hoje.", avatar: "https://i.pravatar.cc/150?u=ricardo" },
      ],
    },
    faq: {
      title: "Perguntas Comuns",
      subtitle: "Tire suas dúvidas sobre o funcionamento da terapia.",
      items: [
        { question: "Quanto tempo dura cada sessão?", answer: "As sessões têm duração média de 50 minutos e ocorrem semanalmente." },
        { question: "Como funciona a terapia online?", answer: "É realizada por videochamada em ambiente seguro e sigiloso." },
      ],
    },
    finalCTA: {
      eyebrow: "Pronto para começar?",
      title: "Dê o primeiro passo de um caminho que é só seu.",
      subtitle: "Agende sua primeira sessão via WhatsApp. Você receberá todas as informações em poucos minutos.",
      ctaText: "Agendar minha consulta",
    },
  },
};
