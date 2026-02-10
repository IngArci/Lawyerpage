import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    "nav.inicio": "Inicio",
    "nav.derechos": "Conoce tus Derechos",
    "nav.inmigracion": "Inmigración",
    "nav.inmigracion.visasEmpleo": "Visas de Empleo",
    "nav.inmigracion.familiar": "Inmigración Familiar",
    "nav.inmigracion.humanitarias": "Visas Humanitarias",
    "nav.inmigracion.defensa": "Defensa de Remoción",
    "nav.inmigracion.asilo": "Asilo",
    "nav.acerca": "Acerca de",
    "nav.abogados": "Abogados",
    "nav.recursos": "Recursos",
    "nav.trabajo": "Oportunidades de Trabajo",
    "nav.contacto": "Contacto",
    
    // Home
    "home.hero.title": "Expertos en Derecho de Inmigración",
    "home.hero.subtitle": "Defendemos tus derechos y te ayudamos a cumplir tus sueños en Estados Unidos. Más de 15 años de experiencia en casos de inmigración.",
    "home.hero.cta1": "Consulta Gratuita",
    "home.hero.cta2": "Llámanos Ahora",
    "home.services.title": "Nuestros Servicios",
    "home.services.subtitle": "Ofrecemos una amplia gama de servicios legales de inmigración para ayudarte en cada paso del proceso.",
    "home.stats.cases": "Casos Exitosos",
    "home.stats.experience": "Años de Experiencia",
    "home.stats.clients": "Clientes Satisfechos",
    
    // Footer
    "footer.about": "Ofrecemos servicios legales de inmigración con más de 15 años de experiencia. Dedicados a ayudar a familias y empresas a lograr sus sueños en Estados Unidos.",
    "footer.contact": "Contacto",
    "footer.hours": "Horario de Atención",
    "footer.hours.weekday": "Lunes - Viernes: 9:00 AM - 6:00 PM",
    "footer.hours.saturday": "Sábado: 10:00 AM - 2:00 PM",
    "footer.hours.sunday": "Domingo: Cerrado",
    "footer.hours.free": "¡Consulta inicial gratuita!",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.inicio": "Home",
    "nav.derechos": "Know Your Rights",
    "nav.inmigracion": "Immigration",
    "nav.inmigracion.visasEmpleo": "Employment Visas",
    "nav.inmigracion.familiar": "Family Immigration",
    "nav.inmigracion.humanitarias": "Humanitarian Visas",
    "nav.inmigracion.defensa": "Removal Defense",
    "nav.inmigracion.asilo": "Asylum",
    "nav.acerca": "About",
    "nav.abogados": "Attorneys",
    "nav.recursos": "Resources",
    "nav.trabajo": "Job Opportunities",
    "nav.contacto": "Contact",
    
    // Home
    "home.hero.title": "Immigration Law Experts",
    "home.hero.subtitle": "We defend your rights and help you achieve your dreams in the United States. Over 15 years of experience in immigration cases.",
    "home.hero.cta1": "Free Consultation",
    "home.hero.cta2": "Call Us Now",
    "home.services.title": "Our Services",
    "home.services.subtitle": "We offer a wide range of immigration legal services to help you every step of the way.",
    "home.stats.cases": "Successful Cases",
    "home.stats.experience": "Years of Experience",
    "home.stats.clients": "Satisfied Clients",
    
    // Footer
    "footer.about": "We offer immigration legal services with over 15 years of experience. Dedicated to helping families and businesses achieve their dreams in the United States.",
    "footer.contact": "Contact",
    "footer.hours": "Business Hours",
    "footer.hours.weekday": "Monday - Friday: 9:00 AM - 6:00 PM",
    "footer.hours.saturday": "Saturday: 10:00 AM - 2:00 PM",
    "footer.hours.sunday": "Sunday: Closed",
    "footer.hours.free": "Free initial consultation!",
    "footer.rights": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
