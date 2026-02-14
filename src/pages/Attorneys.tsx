import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function Attorneys() {
  const { language } = useLanguage();

  const attorneys = [
    {
      id: "carlos-castro",
      name: "Carlos E. Castro",
      title: language === "es" ? "Abogado de Inmigración" : "Immigration Attorney",
      state: "Texas",
      license: "24057799",
      phone: "+1 (856) 683-0506",
      email: "Carlose.casstro@gmail.com",
      education: "Texas Southern University - J.D.",
      image: "https://images.unsplash.com/photo-1722938203650-99afb12419f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMG1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN1aXR8ZW58MXx8fHwxNzcxMDM1ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      shortBio: language === "es" 
        ? "Dedicado a ayudar a quienes residen en Estados Unidos con sus problemas de inmigración. Hijo de inmigrantes hondureños, comprende plenamente la difícil situación de los inmigrantes." 
        : "Dedicated to helping those residing in the United States with their immigration issues. Son of Honduran immigrants, he fully understands the difficult situation of immigrants.",
      specialties: language === "es" 
        ? ["Patrocinio de Trabajadores", "Defensa contra Deportación", "Asilo Político"]
        : ["Worker Sponsorship", "Deportation Defense", "Political Asylum"]
    },
    {
      id: "alejandro-camacho",
      name: "Dr. Alejandro Camacho",
      title: language === "es" ? "Doctor en Derecho" : "Doctor of Law",
      state: "New York",
      license: "#201839",
      phone: "+1 (607) 200-1928",
      email: "de.abogadoalejandrocamachoo@gmail.com",
      education: language === "es" ? "Universidad de California - Colegio de Abogados" : "University of California - Bar Association",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBhdHRvcm5leSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxMDM1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      shortBio: language === "es"
        ? "Especialista en Derecho Migratorio & Derecho Internacional. Comprometido con la defensa y protección de los derechos de quienes enfrentan procesos migratorios."
        : "Specialist in Immigration Law & International Law. Committed to defending and protecting the rights of those facing immigration processes.",
      specialties: language === "es"
        ? ["Derecho Migratorio", "Derecho Internacional", "Asesoría Jurídica Rigurosa"]
        : ["Immigration Law", "International Law", "Rigorous Legal Advice"]
    },
    {
      id: "liliana-vasquez",
      name: "Liliana Ivette Vásquez",
      title: language === "es" ? "Abogada de Inmigración" : "Immigration Attorney",
      state: "Texas",
      license: "24104469",
      phone: "+1 (302) 878-2933",
      email: "liclilianavasquez@gmail.com",
      education: language === "es" ? "Colegio de Abogados del Estado de Texas" : "State Bar of Texas",
      image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBmZW1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEwMzU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      shortBio: language === "es"
        ? "Cuenta con una sólida formación jurídica y amplia experiencia, destacándose por su compromiso ético, enfoque estratégico y vocación de servicio."
        : "She has solid legal training and extensive experience, standing out for her ethical commitment, strategic approach and vocation of service.",
      specialties: language === "es"
        ? ["Acompañamiento Personalizado", "Asesoría Clara y Honesta", "Protección de Derechos"]
        : ["Personalized Support", "Clear and Honest Advice", "Rights Protection"]
    },
    {
      id: "juan-mendoza",
      name: "Lic. Juan José Mendoza",
      title: language === "es" ? "Abogado de Inmigración" : "Immigration Attorney",
      state: "Florida",
      license: "24099721",
      phone: "+1 (217) 703-0223",
      email: "licjuanmendoza8118@gmail.com",
      education: "William Mitchell College of Law - J.D.",
      image: "https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYWxlJTIwYXR0b3JuZXklMjBzZXJpb3VzJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBzdWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc3MTAzNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      shortBio: language === "es"
        ? "30 años de experiencia ejerciendo la profesión de derecho en Florida. Especialista en casos de inmigración en todas las áreas."
        : "30 years of experience practicing law in Florida. Specialist in immigration cases in all areas.",
      specialties: language === "es"
        ? ["Inmigración", "Derecho de Familia", "Casos Civiles"]
        : ["Immigration", "Family Law", "Civil Cases"]
    }
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === "es" ? "Nuestros Abogados" : "Our Attorneys"}
            </h1>
            <p className="text-xl text-gray-300">
              {language === "es" 
                ? "Expertos comprometidos con la defensa de sus derechos migratorios"
                : "Experts committed to defending your immigration rights"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {attorneys.map((attorney) => (
              <motion.div
                key={attorney.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              >
                <div className="md:flex h-full">
                  <Link
                    to={`/abogados/${attorney.id}`}
                    className="md:w-2/5 relative overflow-hidden block group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </motion.div>
                  </Link>
                  
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <Link 
                        to={`/abogados/${attorney.id}`}
                        className="group"
                      >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                          {attorney.name}
                        </h2>
                      </Link>
                      <p className="text-amber-600 font-semibold mb-4">{attorney.title}</p>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-900 flex-shrink-0" />
                          <span>{attorney.state} • {language === "es" ? "Licencia" : "License"}: {attorney.license}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-slate-900 flex-shrink-0" />
                          <span>{attorney.education}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {attorney.shortBio}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {attorney.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-amber-600" />
                        <a href={`tel:${attorney.phone}`} className="hover:text-amber-600 transition">
                          {attorney.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-amber-600" />
                        <a href={`mailto:${attorney.email}`} className="hover:text-amber-600 transition break-all">
                          {attorney.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "es" 
                ? "¿Necesita Asesoría Legal?" 
                : "Need Legal Advice?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {language === "es"
                ? "Contáctenos hoy para una consulta con uno de nuestros expertos"
                : "Contact us today for a consultation with one of our experts"}
            </p>
            <Link 
              to="/contacto"
              className="inline-block bg-amber-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-amber-700 transition text-lg transform hover:scale-105 duration-300"
            >
              {language === "es" ? "Agendar Consulta" : "Schedule Consultation"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}