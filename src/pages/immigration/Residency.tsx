import { Home as HomeIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "motion/react";

export default function Residency() {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === "es" ? "Green Card por Familia" : "Green Card through Family",
      description: language === "es" 
        ? "Obtén tu residencia permanente a través de un familiar ciudadano estadounidense o residente permanente."
        : "Obtain your permanent residence through a U.S. citizen or permanent resident family member.",
      eligible: language === "es"
        ? [
            "Cónyuge de ciudadano estadounidense o residente permanente",
            "Hijos de ciudadanos estadounidenses",
            "Padres de ciudadanos estadounidenses mayores de 21 años",
            "Hermanos de ciudadanos estadounidenses mayores de 21 años"
          ]
        : [
            "Spouse of U.S. citizen or permanent resident",
            "Children of U.S. citizens",
            "Parents of U.S. citizens over 21 years old",
            "Siblings of U.S. citizens over 21 years old"
          ],
    },
    {
      title: language === "es" ? "Green Card por Empleo" : "Green Card through Employment",
      description: language === "es"
        ? "Residencia permanente para trabajadores con habilidades especiales, profesionales y otros trabajadores."
        : "Permanent residence for workers with special abilities, professionals and other workers.",
      eligible: language === "es"
        ? [
            "Trabajadores con habilidades extraordinarias (EB-1)",
            "Profesionales con títulos avanzados (EB-2)",
            "Trabajadores calificados y profesionales (EB-3)",
            "Inversionistas (EB-5)"
          ]
        : [
            "Workers with extraordinary abilities (EB-1)",
            "Professionals with advanced degrees (EB-2)",
            "Skilled workers and professionals (EB-3)",
            "Investors (EB-5)"
          ],
    },
    {
      title: language === "es" ? "Ajuste de Estatus" : "Adjustment of Status",
      description: language === "es"
        ? "Proceso para cambiar tu estatus migratorio a residente permanente sin salir de Estados Unidos."
        : "Process to change your immigration status to permanent resident without leaving the United States.",
      eligible: language === "es"
        ? [
            "Entrada legal a Estados Unidos",
            "Visa de inmigrante disponible",
            "Elegibilidad y admisibilidad",
            "No violaciones de estatus migratorio"
          ]
        : [
            "Legal entry to the United States",
            "Immigrant visa available",
            "Eligibility and admissibility",
            "No immigration status violations"
          ],
    },
    {
      title: language === "es" ? "Procesamiento Consular" : "Consular Processing",
      description: language === "es"
        ? "Obtención de la Green Card a través del consulado o embajada estadounidense en tu país de origen."
        : "Obtaining a Green Card through the U.S. consulate or embassy in your home country.",
      eligible: language === "es"
        ? [
            "Petición de inmigrante aprobada",
            "Número de visa disponible",
            "Completar formularios consulares",
            "Entrevista consular y exámenes médicos"
          ]
        : [
            "Approved immigrant petition",
            "Visa number available",
            "Complete consular forms",
            "Consular interview and medical examinations"
          ],
    },
    {
      title: language === "es" ? "Renovación de Green Card" : "Green Card Renewal",
      description: language === "es"
        ? "Renovación de tu tarjeta de residencia permanente antes de que expire."
        : "Renewal of your permanent residence card before it expires.",
      eligible: language === "es"
        ? [
            "Green Card vigente o vencida (menos de 2 años)",
            "Mantener residencia permanente",
            "No estar en proceso de remoción",
            "Formulario I-90"
          ]
        : [
            "Valid or expired Green Card (less than 2 years)",
            "Maintain permanent residence",
            "Not in removal proceedings",
            "Form I-90"
          ],
    },
    {
      title: language === "es" ? "Reemplazo de Green Card" : "Green Card Replacement",
      description: language === "es"
        ? "Obtén una nueva Green Card si la tuya fue perdida, robada, dañada o contiene información incorrecta."
        : "Get a new Green Card if yours was lost, stolen, damaged or contains incorrect information.",
      eligible: language === "es"
        ? [
            "Green Card perdida, robada o destruida",
            "Tarjeta dañada o ilegible",
            "Información incorrecta en la tarjeta",
            "Cambio de nombre legal"
          ]
        : [
            "Lost, stolen or destroyed Green Card",
            "Damaged or illegible card",
            "Incorrect information on card",
            "Legal name change"
          ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <HomeIcon className="w-12 h-12 text-amber-600" />
              <h1 className="text-4xl md:text-5xl font-bold">
                {language === "es" ? "Residencias Permanentes (Green Card)" : "Permanent Residency (Green Card)"}
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              {language === "es"
                ? "Te ayudamos a obtener tu residencia permanente en Estados Unidos. Desde la solicitud inicial hasta la renovación, nuestro equipo te guía en cada paso del proceso."
                : "We help you obtain your permanent residence in the United States. From the initial application to renewal, our team guides you through every step of the process."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {language === "es" 
              ? "Formas de Obtener la Residencia Permanente" 
              : "Ways to Obtain Permanent Residence"}
          </motion.h2>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    {language === "es" ? "Requisitos:" : "Requirements:"}
                  </h4>
                  <ul className="space-y-2">
                    {category.eligible.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="mt-16 bg-amber-50 p-8 rounded-lg border-2 border-amber-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Beneficios de la Green Card" : "Green Card Benefits"}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {(language === "es" 
                ? [
                    "Vivir y trabajar permanentemente en Estados Unidos",
                    "Viajar libremente dentro y fuera del país",
                    "Solicitar ciudadanía después de 5 años (o 3 con matrimonio)",
                    "Acceso a beneficios sociales y educativos",
                    "Protección bajo las leyes de Estados Unidos",
                    "Patrocinar a familiares para inmigrar"
                  ]
                : [
                    "Live and work permanently in the United States",
                    "Travel freely in and out of the country",
                    "Apply for citizenship after 5 years (or 3 with marriage)",
                    "Access to social and educational benefits",
                    "Protection under U.S. laws",
                    "Sponsor family members to immigrate"
                  ]
              ).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="mt-16 bg-slate-50 p-8 rounded-lg border-2 border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Tiempos de Procesamiento Aproximados" : "Approximate Processing Times"}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">
                  {language === "es" ? "Familiares Inmediatos" : "Immediate Relatives"}
                </span>
                <span className="text-amber-600 font-semibold">
                  {language === "es" ? "10-18 meses" : "10-18 months"}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">
                  {language === "es" ? "Preferencias Familiares" : "Family Preferences"}
                </span>
                <span className="text-amber-600 font-semibold">
                  {language === "es" ? "1-10+ años" : "1-10+ years"}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">
                  {language === "es" ? "Empleo (EB-1/EB-2)" : "Employment (EB-1/EB-2)"}
                </span>
                <span className="text-amber-600 font-semibold">
                  {language === "es" ? "1-3 años" : "1-3 years"}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">
                  {language === "es" ? "Renovación (I-90)" : "Renewal (I-90)"}
                </span>
                <span className="text-amber-600 font-semibold">
                  {language === "es" ? "6-12 meses" : "6-12 months"}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {language === "es"
                ? "* Los tiempos varían según el tipo de caso, centro de servicio y la carga de trabajo de USCIS."
                : "* Times vary based on case type, service center and USCIS workload."}
            </p>
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
                ? "¿Listo para Solicitar tu Residencia Permanente?" 
                : "Ready to Apply for Your Permanent Residence?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {language === "es"
                ? "Nuestros abogados expertos te guiarán en cada paso del proceso de Green Card."
                : "Our expert attorneys will guide you through every step of the Green Card process."}
            </p>
            <Link 
              to="/contacto"
              className="inline-block bg-amber-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-amber-700 transition text-lg transform hover:scale-105 duration-300"
            >
              {language === "es" ? "Agendar Consulta Gratuita" : "Schedule Free Consultation"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
