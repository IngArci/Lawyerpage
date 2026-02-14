import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, GraduationCap, Award, Briefcase, ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function AttorneyDetail() {
  const { id } = useParams();
  const { language } = useLanguage();

  const attorneysData: Record<string, any> = {
    "carlos-castro": {
      name: "Carlos E. Castro",
      title: language === "es" ? "Abogado de Inmigración" : "Immigration Attorney",
      state: "Texas",
      license: "24057799",
      phone: "+1 (856) 683-0506",
      email: "Carlose.casstro@gmail.com",
      education: "Texas Southern University",
      degree: "Doctor of Jurisprudence/Juris Doctor (J.D.)",
      image: "https://images.unsplash.com/photo-1722938203650-99afb12419f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMG1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN1aXR8ZW58MXx8fHwxNzcxMDM1ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: language === "es"
        ? "Dedicado a ayudar a quienes residen en Estados Unidos con sus problemas de inmigración. Ya sea que busque ayuda para patrocinar a trabajadores esenciales o se enfrente a una deportación, ningún caso es demasiado grande ni demasiado pequeño para nosotros. Hijo de inmigrantes hondureños, se ha convertido en uno de los abogados de inmigración más destacados de San Antonio. Comprende plenamente la difícil situación de los inmigrantes que entran y viven en Estados Unidos y busca proteger sus derechos, demostrando que son parte integral de nuestra sociedad. Al elegir al Sr. Castro para que lo represente, elige a alguien que puede dedicar tiempo a su caso, que comprende su situación y con quien puede desarrollar una conexión personal."
        : "Dedicated to helping those residing in the United States with their immigration issues. Whether you're seeking help sponsoring essential workers or facing deportation, no case is too big or too small for us. Son of Honduran immigrants, he has become one of San Antonio's most prominent immigration attorneys. He fully understands the plight of immigrants entering and living in the United States and seeks to protect their rights, demonstrating they are an integral part of our society. By choosing Mr. Castro to represent you, you choose someone who can dedicate time to your case, understands your situation, and with whom you can develop a personal connection.",
      specialties: language === "es"
        ? ["Patrocinio de Trabajadores Esenciales", "Defensa contra Deportación", "Asilo Político", "Visas de Trabajo", "Reunificación Familiar"]
        : ["Essential Workers Sponsorship", "Deportation Defense", "Political Asylum", "Work Visas", "Family Reunification"],
      experience: language === "es"
        ? ["Uno de los abogados de inmigración más destacados de San Antonio", "Especialista en casos complejos de deportación", "Amplia experiencia en patrocinio de trabajadores"]
        : ["One of San Antonio's most prominent immigration attorneys", "Specialist in complex deportation cases", "Extensive experience in worker sponsorship"]
    },
    "alejandro-camacho": {
      name: "Dr. Alejandro Camacho",
      title: language === "es" ? "Doctor en Derecho" : "Doctor of Law",
      state: "New York",
      license: "#201839",
      phone: "+1 (607) 200-1928",
      email: "de.abogadoalejandrocamachoo@gmail.com",
      education: language === "es" ? "Universidad de California" : "University of California",
      degree: language === "es" ? "Colegio de Abogados" : "Bar Association",
      image: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBhdHRvcm5leSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxMDM1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: language === "es"
        ? "Abogado especialista comprometido con la defensa y protección de los derechos de quienes enfrentan procesos migratorios. Mi trayectoria académica y profesional me permite ofrecer una asesoría jurídica rigurosa, precisa y efectiva adaptándose a las necesidades de cada caso. Me encuentro a su disposición para liderar su proceso legal. Compromiso, Experticia y Confianza."
        : "Specialized attorney committed to defending and protecting the rights of those facing immigration processes. My academic and professional background allows me to offer rigorous, precise and effective legal advice adapted to the needs of each case. I am at your disposal to lead your legal process. Commitment, Expertise and Trust.",
      specialties: language === "es"
        ? ["Derecho Migratorio", "Derecho Internacional", "Asesoría Jurídica Rigurosa", "Procesos Complejos", "Defensa de Derechos"]
        : ["Immigration Law", "International Law", "Rigorous Legal Advice", "Complex Processes", "Rights Defense"],
      experience: language === "es"
        ? ["Especialista en Derecho Migratorio", "Especialista en Derecho Internacional", "Universidad de California", "Asesoría jurídica rigurosa y efectiva"]
        : ["Immigration Law Specialist", "International Law Specialist", "University of California", "Rigorous and effective legal advice"]
    },
    "liliana-vasquez": {
      name: "Liliana Ivette Vásquez",
      title: language === "es" ? "Abogada de Inmigración" : "Immigration Attorney",
      state: "Texas",
      license: "24104469",
      phone: "+1 (302) 878-2933",
      email: "liclilianavasquez@gmail.com",
      education: language === "es" ? "Colegio de Abogados del Estado de Texas" : "State Bar of Texas",
      degree: language === "es" ? "Licenciatura en Derecho" : "Law Degree",
      image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBmZW1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEwMzU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: language === "es"
        ? "La abogada Liliana Ivette Vázquez cuenta con una sólida formación jurídica y una amplia experiencia en el ejercicio del derecho, destacándose por su compromiso ético, su enfoque estratégico y su vocación de servicio. Su práctica profesional se caracteriza por el acompañamiento responsable y personalizado de cada caso, brindando asesoría clara, honesta y orientada a la protección integral de los derechos de sus clientes. Liliana Ivette Vázquez entiende el derecho como una herramienta de solución, defensa y justicia, donde cada proceso requiere rigor jurídico y sensibilidad humana."
        : "Attorney Liliana Ivette Vázquez has solid legal training and extensive experience in the practice of law, standing out for her ethical commitment, strategic approach and vocation of service. Her professional practice is characterized by responsible and personalized accompaniment of each case, providing clear, honest advice oriented to the integral protection of her clients' rights. Liliana Ivette Vázquez understands law as a tool of solution, defense and justice, where each process requires legal rigor and human sensitivity.",
      specialties: language === "es"
        ? ["Acompañamiento Personalizado", "Asesoría Clara y Honesta", "Protección Integral de Derechos", "Enfoque Estratégico", "Compromiso Ético"]
        : ["Personalized Support", "Clear and Honest Advice", "Integral Rights Protection", "Strategic Approach", "Ethical Commitment"],
      experience: language === "es"
        ? ["Sólida formación jurídica", "Amplia experiencia en el ejercicio del derecho", "Compromiso ético y vocación de servicio", "Enfoque estratégico personalizado"]
        : ["Solid legal training", "Extensive experience in law practice", "Ethical commitment and service vocation", "Personalized strategic approach"]
    },
    "juan-mendoza": {
      name: "Lic. Juan José Mendoza",
      title: language === "es" ? "Abogado de Inmigración" : "Immigration Attorney",
      state: "Florida",
      license: "24099721",
      phone: "+1 (217) 703-0223",
      email: "licjuanmendoza8118@gmail.com",
      education: "William Mitchell College of Law",
      degree: "Juris Doctor (J.D.)",
      additionalEducation: "Cal Poly University Pomona - B.S. in Aerospace Engineering",
      image: "figma:asset/9e615933fe0614453508c4e5d9ef813465452b61.png",
      bio: language === "es"
        ? "El abogado Juan J. Mendoza ha estado ejerciendo la profesión de derecho en el estado de Florida durante los últimos 30 años. Mendoza es egresado del Cal Poly University de Pomona con un Grado de Licenciatura (B.S.) en Ingeniería Aeroespacial. El título de Abogado en Leyes (J.D.) lo obtuvo a posterior en el William Mitchell College of Law en St. Paul, Minnesota. Es miembro del Federal District Court para el Southern y Middle District del estado de Florida y es miembro del Eleventh Circuit Court of Appeals. Desde sus inicios Mendoza ha representado a la comunidad en las áreas legales de familia, litigio civiles, casos de bancarrota, casos penales y en especial se ha enfocado fuertemente en casos de inmigración en todos las áreas. Su firma de abogado también tiene la facultad de representar a personas en otras áreas legales como lesiones personales, testamentos, sucesiones, planificación patrimonial, compensación laboral y beneficios del Social Security."
        : "Attorney Juan J. Mendoza has been practicing law in the state of Florida for the past 30 years. Mendoza is a graduate of Cal Poly University Pomona with a Bachelor's Degree (B.S.) in Aerospace Engineering. He subsequently obtained his Juris Doctor (J.D.) from William Mitchell College of Law in St. Paul, Minnesota. He is a member of the Federal District Court for the Southern and Middle Districts of Florida and is a member of the Eleventh Circuit Court of Appeals. Since the beginning, Mendoza has represented the community in legal areas of family law, civil litigation, bankruptcy cases, criminal cases and has especially focused strongly on immigration cases in all areas. His law firm is also authorized to represent people in other legal areas such as personal injury, wills, estates, estate planning, workers' compensation and Social Security benefits.",
      specialties: language === "es"
        ? ["Inmigración en Todas las Áreas", "Derecho de Familia", "Litigio Civil", "Casos de Bancarrota", "Lesiones Personales", "Planificación Patrimonial"]
        : ["Immigration in All Areas", "Family Law", "Civil Litigation", "Bankruptcy Cases", "Personal Injury", "Estate Planning"],
      experience: language === "es"
        ? ["30 años de experiencia en Florida", "Miembro del Federal District Court", "Miembro del Eleventh Circuit Court of Appeals", "Especialista en múltiples áreas legales", "Amplia experiencia en inmigración"]
        : ["30 years of experience in Florida", "Member of Federal District Court", "Member of Eleventh Circuit Court of Appeals", "Specialist in multiple legal areas", "Extensive immigration experience"]
    }
  };

  const attorney = id ? attorneysData[id] : null;

  if (!attorney) {
    return <Navigate to="/abogados" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/abogados" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-900 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === "es" ? "Volver a Abogados" : "Back to Attorneys"}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Photo */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Photo */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <ImageWithFallback
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-96 md:h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div 
              className="md:col-span-2"
              {...fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                {attorney.name}
              </h1>
              <p className="text-2xl text-amber-600 font-semibold mb-6">
                {attorney.title}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">{attorney.state}</div>
                    <div className="text-sm text-gray-600">
                      {language === "es" ? "Licencia" : "License"}: {attorney.license}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">{attorney.education}</div>
                    <div className="text-sm text-gray-600">{attorney.degree}</div>
                    {attorney.additionalEducation && (
                      <div className="text-sm text-gray-600 mt-1">{attorney.additionalEducation}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <a 
                    href={`tel:${attorney.phone}`} 
                    className="text-lg text-slate-900 hover:text-amber-600 transition"
                  >
                    {attorney.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <a 
                    href={`mailto:${attorney.email}`} 
                    className="text-lg text-slate-900 hover:text-amber-600 transition break-all"
                  >
                    {attorney.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={`tel:${attorney.phone}`}
                  className="bg-amber-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "es" ? "Llamar Ahora" : "Call Now"}
                </motion.a>
                <motion.a
                  href={`mailto:${attorney.email}`}
                  className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-900 hover:text-white transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "es" ? "Enviar Email" : "Send Email"}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Biografía" : "Biography"}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {attorney.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                {language === "es" ? "Áreas de Especialización" : "Areas of Specialization"}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {attorney.specialties.map((specialty: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{specialty}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Experiencia y Logros" : "Experience & Achievements"}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {attorney.experience.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
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
                ? "¿Listo para comenzar su caso?" 
                : "Ready to start your case?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {language === "es"
                ? "Contacte a nuestro equipo hoy para una consulta personalizada"
                : "Contact our team today for a personalized consultation"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${attorney.phone}`}
                className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "es" ? "Llamar Ahora" : "Call Now"}
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contacto"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition"
                >
                  {language === "es" ? "Agendar Consulta" : "Schedule Consultation"}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}