import { HandHeart, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export default function HumanitarianVisas() {
  const { language } = useLanguage();

  const visaTypes = [
    {
      title:
        language === "es"
          ? "Visa U - Víctimas de Crímenes"
          : "U Visa – Crime Victims",
      description:
        language === "es"
          ? "Para víctimas de ciertos crímenes que han sufrido abuso mental o físico sustancial."
          : "For victims of certain crimes who have suffered substantial mental or physical abuse.",
      benefits:
        language === "es"
          ? [
              "Protección legal en Estados Unidos",
              "Permiso de trabajo",
              "Camino hacia la residencia permanente",
              "Posibilidad de incluir familiares",
            ]
          : [
              "Legal protection in the United States",
              "Work authorization",
              "Path to permanent residency",
              "Ability to include family members",
            ],
    },
    {
      title:
        language === "es"
          ? "Visa T - Víctimas de Tráfico Humano"
          : "T Visa – Human Trafficking Victims",
      description:
        language === "es"
          ? "Para víctimas de trata de personas o tráfico laboral."
          : "For victims of human trafficking or labor exploitation.",
      benefits:
        language === "es"
          ? [
              "Estatus legal temporal",
              "Autorización de empleo",
              "Servicios y beneficios especiales",
              "Elegibilidad para Green Card después de 3 años",
            ]
          : [
              "Temporary legal status",
              "Work authorization",
              "Access to special services and benefits",
              "Eligibility for a Green Card after 3 years",
            ],
    },
    {
      title: "VAWA",
      description:
        language === "es"
          ? "Para víctimas de abuso por parte de cónyuge o padre ciudadano/residente."
          : "For victims of abuse by a U.S. citizen or permanent resident spouse or parent.",
      benefits:
        language === "es"
          ? [
              "Auto-petición sin conocimiento del abusador",
              "Protección contra deportación",
              "Permiso de trabajo",
              "Camino a residencia permanente",
            ]
          : [
              "Self-petition without the abuser’s knowledge",
              "Protection from deportation",
              "Work authorization",
              "Path to permanent residency",
            ],
    },
    {
      title:
        language === "es"
          ? "TPS - Estatus de Protección Temporal"
          : "TPS – Temporary Protected Status",
      description:
        language === "es"
          ? "Para nacionales de países designados afectados por conflictos o desastres."
          : "For nationals of designated countries affected by conflict or natural disasters.",
      benefits:
        language === "es"
          ? [
              "Protección temporal contra deportación",
              "Autorización de empleo",
              "Permiso de viaje",
              "Renovable según designaciones",
            ]
          : [
              "Temporary protection from deportation",
              "Work authorization",
              "Travel authorization",
              "Renewable depending on designation",
            ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <HandHeart className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "es" ? "Visas Humanitarias" : "Humanitarian Visas"}
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {language === "es"
              ? "Brindamos protección legal en Estados Unidos a víctimas de crímenes, violencia doméstica, tráfico humano y situaciones humanitarias. Tu seguridad es nuestra prioridad."
              : "We provide legal protection in the United States to victims of crime, domestic violence, human trafficking, and other humanitarian situations. Your safety is our priority."}
          </p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es"
              ? "Opciones de Protección Humanitaria en Estados Unidos"
              : "Humanitarian Protection Options in the United States"}
          </h2>

          <div className="space-y-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {visa.title}
                </h3>
                <p className="text-gray-600 mb-6">{visa.description}</p>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    {language === "es" ? "Beneficios:" : "Benefits:"}
                  </h4>
                  <ul className="space-y-2">
                    {visa.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Confidentiality */}
          <div className="mt-16 bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              🔒 {language === "es" ? "Confidencialidad Garantizada" : "Guaranteed Confidentiality"}
            </h3>

            <p className="text-gray-700 mb-3">
              {language === "es"
                ? "Entendemos la sensibilidad de estos casos. Toda nuestra comunicación es estrictamente confidencial."
                : "We understand the sensitivity of these cases. All communication with us is strictly confidential."}
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>
                •{" "}
                {language === "es"
                  ? "No compartimos información sin tu consentimiento"
                  : "We do not share information without your consent"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Ambiente seguro y privado para consultas"
                  : "Safe and private consultation environment"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Personal capacitado en trauma y sensibilidad cultural"
                  : "Staff trained in trauma-informed and culturally sensitive care"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Asistencia con órdenes de protección si es necesario"
                  : "Assistance with protection orders if necessary"}
              </li>
            </ul>
          </div>

          {/* Support Resources */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Recursos de Apoyo" : "Support Resources"}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es"
                    ? "Línea Nacional de Violencia Doméstica"
                    : "National Domestic Violence Hotline"}
                </h4>
                <p className="text-gray-600 mb-2">1-800-799-7233 (24/7)</p>
                <p className="text-sm text-gray-500">
                  {language === "es"
                    ? "Ayuda confidencial para víctimas de abuso doméstico"
                    : "Confidential help for victims of domestic abuse"}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es"
                    ? "Línea Nacional contra el Tráfico Humano"
                    : "National Human Trafficking Hotline"}
                </h4>
                <p className="text-gray-600 mb-2">1-888-373-7888 (24/7)</p>
                <p className="text-sm text-gray-500">
                  {language === "es"
                    ? "Asistencia para víctimas de trata de personas"
                    : "Assistance for victims of human trafficking"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {language === "es"
                ? "Estamos aquí para ayudarte"
                : "We Are Here to Help You"}
            </h3>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === "es"
                ? "Si eres víctima de un crimen o abuso, podemos ayudarte a obtener protección legal. Todas las consultas son confidenciales."
                : "If you are a victim of a crime or abuse, we can help you obtain legal protection. All consultations are confidential."}
            </p>

            <Link
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              {language === "es"
                ? "Consulta Confidencial"
                : "Confidential Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
