import { Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export default function EmploymentVisas() {
  const { language } = useLanguage();

  const visaTypes = [
    {
      title: "Visa H-1B",
      description:
        language === "es"
          ? "Para profesionales en ocupaciones especializadas que requieren un título universitario."
          : "For professionals in specialty occupations that require a university degree.",
      requirements:
        language === "es"
          ? [
              "Oferta de empleo de empleador estadounidense",
              "Título universitario o equivalente",
              "Especialización en el campo laboral",
            ]
          : [
              "Job offer from a U.S. employer",
              "Bachelor’s degree or equivalent",
              "Specialization in the field of work",
            ],
    },
    {
      title: "Visa L-1",
      description:
        language === "es"
          ? "Para transferencias dentro de la misma empresa (intra-company transfers)."
          : "For intra-company transfers within the same organization.",
      requirements:
        language === "es"
          ? [
              "Haber trabajado para la empresa por al menos 1 año",
              "Posición gerencial, ejecutiva o de conocimiento especializado",
              "Relación corporativa entre empresas",
            ]
          : [
              "At least 1 year of employment with the company",
              "Managerial, executive, or specialized knowledge position",
              "Qualifying corporate relationship between entities",
            ],
    },
    {
      title: "Visa O-1",
      description:
        language === "es"
          ? "Para personas con habilidades extraordinarias en ciencias, artes, educación, negocios o atletismo."
          : "For individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
      requirements:
        language === "es"
          ? [
              "Demostrar habilidad extraordinaria",
              "Reconocimiento nacional o internacional",
              "Oferta de empleo en su campo de especialidad",
            ]
          : [
              "Evidence of extraordinary ability",
              "National or international recognition",
              "Job offer or work in the field of expertise",
            ],
    },
    {
      title: "Visa TN (USMCA)",
      description:
        language === "es"
          ? "Para profesionales canadienses y mexicanos bajo el tratado USMCA."
          : "For Canadian and Mexican professionals under the USMCA treaty.",
      requirements:
        language === "es"
          ? [
              "Ciudadanía canadiense o mexicana",
              "Profesión calificada bajo USMCA",
              "Oferta de empleo en Estados Unidos",
            ]
          : [
              "Canadian or Mexican citizenship",
              "USMCA-eligible profession",
              "U.S. job offer",
            ],
    },
    {
      title: "Visa E-2",
      description:
        language === "es"
          ? "Para inversionistas de países con tratados comerciales."
          : "For investors from treaty countries.",
      requirements:
        language === "es"
          ? [
              "Inversión sustancial en negocio estadounidense",
              "Nacionalidad de país con tratado",
              "Control y dirección del negocio",
            ]
          : [
              "Substantial investment in a U.S. business",
              "Treaty-country nationality",
              "Control and direct the business",
            ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "es" ? "Visas de Empleo" : "Employment Visas"}
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {language === "es"
              ? "Ayudamos a profesionales y empresas a navegar el complejo proceso de visas de trabajo en Estados Unidos. Nuestra experiencia garantiza que tu solicitud tenga las mejores posibilidades de éxito."
              : "We help professionals and companies navigate the complex U.S. work visa process. Our experience helps ensure your application has the best chance of success."}
          </p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es"
              ? "Tipos de Visas de Empleo en Estados Unidos"
              : "Types of Employment Visas in the United States"}
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
                    {language === "es" ? "Requisitos principales:" : "Key requirements:"}
                  </h4>
                  <ul className="space-y-2">
                    {visa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-16 bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {language === "es" ? "Nuestro Proceso" : "Our Process"}
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es" ? "Evaluación" : "Evaluation"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "es"
                    ? "Analizamos tu caso y elegibilidad"
                    : "We review your case and eligibility"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es" ? "Documentación" : "Documentation"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "es"
                    ? "Preparamos toda la documentación necesaria"
                    : "We prepare all required documentation"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es" ? "Presentación" : "Filing"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "es"
                    ? "Enviamos tu petición a USCIS"
                    : "We submit your petition to USCIS"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {language === "es" ? "Seguimiento" : "Follow-up"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "es"
                    ? "Monitoreamos tu caso hasta la aprobación"
                    : "We track your case through approval"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {language === "es"
                ? "¿Listo para comenzar tu proceso?"
                : "Ready to start your process?"}
            </h3>

            <Link
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              {language === "es" ? "Agenda tu Consulta Gratuita" : "Schedule a Free Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
