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
    "nav.acerca": "Acerca de Nosotros",
    "nav.abogados": "Abogados",
    "nav.recursos": "Recursos",
    "nav.trabajo": "Oportunidades",
    "nav.contacto": "Contacto",
    
    // Home Page
    "home.hero.title": "Expertos en Derecho de Inmigración",
    "home.hero.subtitle": "Defendemos tus derechos y te guiamos en cada paso del proceso migratorio. Con más de 15 años de experiencia, somos tu mejor opción para alcanzar el sueño americano.",
    "home.hero.cta1": "Consulta Gratuita",
    "home.hero.cta2": "Llamar Ahora",
    "home.services.title": "Nuestros Servicios",
    "home.services.subtitle": "Ofrecemos representación legal integral en todas las áreas del derecho de inmigración",
    "home.services.employment": "Visas H-1B, L-1, O-1, E-2 y más",
    "home.services.family": "Reunificación familiar y peticiones",
    "home.services.humanitarian": "VAWA, U-Visa, T-Visa",
    "home.services.defense": "Defensa en corte de inmigración",
    "home.services.asylum": "Solicitudes de asilo y refugio",
    "home.services.viewAll": "Ver Todos los Servicios",
    "home.whyUs.title": "¿Por Qué Elegirnos?",
    "home.whyUs.reason1": "Más de 15 años de experiencia en derecho de inmigración",
    "home.whyUs.reason2": "Equipo bilingüe español-inglés",
    "home.whyUs.reason3": "Atención personalizada para cada caso",
    "home.whyUs.reason4": "Alta tasa de éxito en casos complejos",
    "home.whyUs.reason5": "Consulta inicial gratuita",
    "home.whyUs.reason6": "Planes de pago flexibles disponibles",
    "home.whyUs.learnMore": "Conocer Más Sobre Nosotros",
    "home.consultation.title": "Agenda Tu Consulta Gratuita",
    "home.consultation.subtitle": "Completa el formulario o llámanos directamente. Nuestro equipo está listo para ayudarte.",
    "home.consultation.phone": "Teléfono",
    "home.consultation.email": "Email",
    "home.consultation.cta": "Contactar Ahora",
    "home.cta.title": "Tu Futuro Comienza Hoy",
    "home.cta.subtitle": "No esperes más para hacer realidad tus sueños. Contáctanos hoy y da el primer paso hacia tu futuro en Estados Unidos.",
    "home.cta.button1": "Agendar Consulta",
    "home.cta.button2": "Conoce a Nuestro Equipo",
    
    // Know Your Rights Page
    "rights.hero.title": "Conoce tus Derechos",
    "rights.hero.subtitle": "Es fundamental que conozcas tus derechos como inmigrante en Estados Unidos. Esta información puede protegerte en situaciones críticas.",
    "rights.section.title": "Tus Derechos Fundamentales",
    "rights.silence.title": "Derecho a Permanecer en Silencio",
    "rights.silence.desc": "Tienes derecho a no responder preguntas sobre tu estatus migratorio, lugar de nacimiento, o cómo entraste al país.",
    "rights.lawyer.title": "Derecho a un Abogado",
    "rights.lawyer.desc": "Puedes solicitar hablar con un abogado antes de responder cualquier pregunta. No tienes que firmar documentos sin representación legal.",
    "rights.refuse.title": "Derecho a Rechazar Registros",
    "rights.refuse.desc": "Puedes negarte a consentir un registro de tu persona, vehículo o residencia sin una orden judicial válida.",
    "rights.document.title": "Derecho a Documentación",
    "rights.document.desc": "Si eres detenido, tienes derecho a obtener información sobre tu detención y a comunicarte con tu consulado.",
    "rights.tips.title": "Consejos Importantes",
    "rights.tips.calm": "Mantén la calma y sé respetuoso en todo momento",
    "rights.tips.rights": "Conoce tus derechos y ejércelos con confianza",
    "rights.tips.document": "Siempre lleva documentación de identificación",
    "rights.tips.info": "No proporciones información falsa a las autoridades",
    "rights.tips.lawyer": "Contacta a un abogado de inmigración lo antes posible",
    "rights.tips.silent": "Recuerda: tienes derecho a permanecer en silencio",
    "rights.cta.title": "¿Necesitas Asesoría Legal?",
    "rights.cta.subtitle": "Nuestros abogados especializados están listos para ayudarte. Agenda una consulta gratuita hoy mismo.",
    "rights.cta.button": "Consulta Gratuita",
    
    // About Page
    "about.hero.title": "Acerca de Nosotros",
    "about.hero.subtitle": "Unidos Por Inmigración es un bufete de abogados dedicado a proporcionar servicios legales de inmigración de alta calidad con compasión y profesionalismo.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.text": "Nuestra misión es proporcionar servicios legales de inmigración excepcionales, defendiendo los derechos de nuestros clientes con integridad, dedicación y excelencia profesional. Nos comprometemos a ser la voz de quienes buscan oportunidades en Estados Unidos, guiándolos con transparencia en cada paso de su proceso migratorio hacia el cumplimiento del sueño americano.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.text": "Ser el bufete de abogados de inmigración más confiable y reconocido, transformando vidas mediante la reunificación familiar, el acceso a oportunidades laborales y la protección de los derechos humanos. Aspiramos a construir puentes entre culturas y ser catalizadores del cambio positivo en las comunidades que servimos.",
    "about.story.title": "Nuestra Historia",
    "about.story.text": "Fundado hace más de 15 años, Unidos Por Inmigración nació del sueño de ayudar a familias y profesionales a alcanzar sus metas en Estados Unidos. Lo que comenzó como una práctica pequeña, ha crecido hasta convertirse en un equipo de abogados experimentados dedicados exclusivamente al derecho de inmigración.",
    "about.values.title": "Nuestros Valores",
    "about.values.integrity": "Integridad",
    "about.values.integrityDesc": "Actuamos con honestidad y transparencia en cada caso",
    "about.values.excellence": "Excelencia",
    "about.values.excellenceDesc": "Buscamos los más altos estándares en nuestro trabajo legal",
    "about.values.compassion": "Compasión",
    "about.values.compassionDesc": "Entendemos el impacto emocional del proceso migratorio",
    "about.values.commitment": "Compromiso",
    "about.values.commitmentDesc": "Dedicados al éxito de cada uno de nuestros clientes",
    
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
    "nav.acerca": "About Us",
    "nav.abogados": "Attorneys",
    "nav.recursos": "Resources",
    "nav.trabajo": "Opportunities",
    "nav.contacto": "Contact",
    
    // Home Page
    "home.hero.title": "Immigration Law Experts",
    "home.hero.subtitle": "We defend your rights and guide you through every step of the immigration process. With over 15 years of experience, we are your best choice to achieve the American dream.",
    "home.hero.cta1": "Free Consultation",
    "home.hero.cta2": "Call Now",
    "home.services.title": "Our Services",
    "home.services.subtitle": "We offer comprehensive legal representation in all areas of immigration law",
    "home.services.employment": "H-1B, L-1, O-1, E-2 Visas and more",
    "home.services.family": "Family reunification and petitions",
    "home.services.humanitarian": "VAWA, U-Visa, T-Visa",
    "home.services.defense": "Immigration court defense",
    "home.services.asylum": "Asylum and refugee applications",
    "home.services.viewAll": "View All Services",
    "home.whyUs.title": "Why Choose Us?",
    "home.whyUs.reason1": "Over 15 years of immigration law experience",
    "home.whyUs.reason2": "Bilingual Spanish-English team",
    "home.whyUs.reason3": "Personalized attention for each case",
    "home.whyUs.reason4": "High success rate in complex cases",
    "home.whyUs.reason5": "Free initial consultation",
    "home.whyUs.reason6": "Flexible payment plans available",
    "home.whyUs.learnMore": "Learn More About Us",
    "home.consultation.title": "Schedule Your Free Consultation",
    "home.consultation.subtitle": "Fill out the form or call us directly. Our team is ready to help you.",
    "home.consultation.phone": "Phone",
    "home.consultation.email": "Email",
    "home.consultation.cta": "Contact Now",
    "home.cta.title": "Your Future Starts Today",
    "home.cta.subtitle": "Don't wait any longer to make your dreams come true. Contact us today and take the first step toward your future in the United States.",
    "home.cta.button1": "Schedule Consultation",
    "home.cta.button2": "Meet Our Team",
    
    // Know Your Rights Page
    "rights.hero.title": "Know Your Rights",
    "rights.hero.subtitle": "It is essential that you know your rights as an immigrant in the United States. This information can protect you in critical situations.",
    "rights.section.title": "Your Fundamental Rights",
    "rights.silence.title": "Right to Remain Silent",
    "rights.silence.desc": "You have the right not to answer questions about your immigration status, place of birth, or how you entered the country.",
    "rights.lawyer.title": "Right to an Attorney",
    "rights.lawyer.desc": "You may request to speak with an attorney before answering any questions. You do not have to sign documents without legal representation.",
    "rights.refuse.title": "Right to Refuse Searches",
    "rights.refuse.desc": "You may refuse to consent to a search of your person, vehicle, or residence without a valid court order.",
    "rights.document.title": "Right to Documentation",
    "rights.document.desc": "If you are detained, you have the right to obtain information about your detention and to communicate with your consulate.",
    "rights.tips.title": "Important Tips",
    "rights.tips.calm": "Stay calm and be respectful at all times",
    "rights.tips.rights": "Know your rights and exercise them with confidence",
    "rights.tips.document": "Always carry identification documents",
    "rights.tips.info": "Do not provide false information to authorities",
    "rights.tips.lawyer": "Contact an immigration attorney as soon as possible",
    "rights.tips.silent": "Remember: you have the right to remain silent",
    "rights.cta.title": "Need Legal Advice?",
    "rights.cta.subtitle": "Our specialized attorneys are ready to help you. Schedule a free consultation today.",
    "rights.cta.button": "Free Consultation",
    
    // About Page
    "about.hero.title": "About Us",
    "about.hero.subtitle": "Unidos Por Inmigración is a law firm dedicated to providing high-quality immigration legal services with compassion and professionalism.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "Our mission is to provide exceptional immigration legal services, defending our clients' rights with integrity, dedication, and professional excellence. We are committed to being the voice of those seeking opportunities in the United States, guiding them with transparency at every step of their immigration process toward achieving the American dream.",
    "about.vision.title": "Our Vision",
    "about.vision.text": "To be the most trusted and recognized immigration law firm, transforming lives through family reunification, access to employment opportunities, and protection of human rights. We aspire to build bridges between cultures and be catalysts for positive change in the communities we serve.",
    "about.story.title": "Our Story",
    "about.story.text": "Founded over 15 years ago, Unidos Por Inmigración was born from the dream of helping families and professionals achieve their goals in the United States. What began as a small practice has grown into a team of experienced attorneys dedicated exclusively to immigration law.",
    "about.values.title": "Our Values",
    "about.values.integrity": "Integrity",
    "about.values.integrityDesc": "We act with honesty and transparency in every case",
    "about.values.excellence": "Excellence",
    "about.values.excellenceDesc": "We pursue the highest standards in our legal work",
    "about.values.compassion": "Compassion",
    "about.values.compassionDesc": "We understand the emotional impact of the immigration process",
    "about.values.commitment": "Commitment",
    "about.values.commitmentDesc": "Dedicated to the success of each and every one of our clients",
    
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
