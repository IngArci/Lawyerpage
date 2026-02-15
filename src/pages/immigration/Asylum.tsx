import { Home as HomeIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Asylum() {
  const { language } = useLanguage();

  const asylumBases =
    language === "es"
      ? [
          {
            title: "Raza",
            description: "Persecución basada en tu origen racial o étnico.",
            examples: [
              "Limpieza étnica",
              "Discriminación racial sistemática",
              "Violencia por motivos raciales",
            ],
          },
          {
            title: "Religión",
            description: "Persecución por tus creencias o prácticas religiosas.",
            examples: [
              "Prohibición de prácticas religiosas",
              "Violencia contra minorías religiosas",
              "Conversión forzada",
            ],
          },
          {
            title: "Nacionalidad",
            description: "Persecución basada en tu país de origen o grupo étnico.",
            examples: [
              "Conflictos étnicos",
              "Discriminación por nacionalidad",
              "Apátridas perseguidos",
            ],
          },
          {
            title: "Opinión Política",
            description: "Persecución por tus opiniones políticas o activismo.",
            examples: ["Activistas amenazados", "Opositores políticos", "Periodistas perseguidos"],
          },
          {
            title: "Membresía en Grupo Social",
            description: "Persecución por pertenecer a un grupo social particular.",
            examples: [
              "Violencia de género",
              "Orientación sexual/identidad de género",
              "Víctimas de pandillas",
            ],
          },
        ]
      : [
          {
            title: "Race",
            description: "Persecution based on your racial or ethnic background.",
            examples: ["Ethnic cleansing", "Systemic racial discrimination", "Racially-motivated violence"],
          },
          {
            title: "Religion",
            description: "Persecution due to your religious beliefs or practices.",
            examples: ["Ban on religious practices", "Violence against religious minorities", "Forced conversion"],
          },
          {
            title: "Nationality",
            description: "Persecution based on your country of origin or ethnic group.",
            examples: ["Ethnic conflicts", "Nationality-based discrimination", "Persecuted stateless people"],
          },
          {
            title: "Political Opinion",
            description: "Persecution due to political opinions or activism.",
            examples: ["Threatened activists", "Political opponents", "Persecuted journalists"],
          },
          {
            title: "Membership in a Particular Social Group",
            description: "Persecution for belonging to a particular social group.",
            examples: ["Gender-based violence", "Sexual orientation/gender identity", "Gang violence victims"],
          },
        ];

  const requirements =
    language === "es"
      ? [
          "Haber sufrido persecución o tener temor fundado de persecución futura",
          "La persecución debe estar basada en uno de los cinco motivos protegidos",
          "El gobierno no puede o no quiere protegerte",
          "Solicitar asilo dentro de 1 año de llegada a EE.UU. (con excepciones)",
          "No tener impedimentos de seguridad o criminalidad grave",
        ]
      : [
          "You suffered past persecution or have a well-founded fear of future persecution",
          "Persecution must be based on one of the five protected grounds",
          "Your government is unable or unwilling to protect you",
          "Apply within 1 year of arrival to the U.S. (with exceptions)",
          "No serious criminal or security-related bars",
        ];

  const processSteps =
    language === "es"
      ? [
          { title: "Presentación", desc: "Formulario I-589 dentro de 1 año de llegada" },
          { title: "Entrevista/Audiencia", desc: "Con oficial de asilo o juez de inmigración" },
          { title: "Decisión", desc: "Aprobación o negación de asilo" },
          { title: "Green Card", desc: "Después de 1 año con asilo aprobado" },
        ]
      : [
          { title: "Filing", desc: "Form I-589 within 1 year of arrival" },
          { title: "Interview/Hearing", desc: "With an asylum officer or immigration judge" },
          { title: "Decision", desc: "Asylum is granted or denied" },
          { title: "Green Card", desc: "After 1 year with approved asylum" },
        ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <HomeIcon className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "es" ? "Asilo" : "Asylum"}
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {language === "es"
              ? "Protección para personas que huyen de persecución en su país de origen. Te ayudamos a encontrar seguridad y un nuevo comienzo en Estados Unidos."
              : "Protection for people fleeing persecution in their home country. We help you find safety and a new beginning in the United States."}
          </p>
        </div>
      </section>

      {/* What is Asylum */}
      <section className="py-12 bg-white border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {language === "es" ? "¿Qué es el Asilo?" : "What Is Asylum?"}
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              {language === "es"
                ? "El asilo es una forma de protección legal que permite a personas que han sido perseguidas o tienen temor fundado de persecución en su país de origen permanecer en Estados Unidos."
                : "Asylum is a form of legal protection that allows people who have been persecuted—or who have a well-founded fear of persecution—to remain in the United States."}
            </p>

            <p className="text-lg text-gray-700">
              {language === "es"
                ? "Para calificar, la persecución debe estar relacionada con uno de cinco motivos protegidos: raza, religión, nacionalidad, opinión política, o membresía en un grupo social particular."
                : "To qualify, the persecution must be connected to one of five protected grounds: race, religion, nationality, political opinion, or membership in a particular social group."}
            </p>
          </div>
        </div>
      </section>

      {/* Five Protected Grounds */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es"
              ? "Los Cinco Motivos Protegidos para Asilo en Estados Unidos"
              : "The Five Protected Grounds for Asylum in the United States"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asylumBases.map((base, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-amber-600"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{base.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{base.description}</p>

                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    {language === "es" ? "Ejemplos:" : "Examples:"}
                  </p>
                  <ul className="space-y-1">
                    {base.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es" ? "Requisitos para Asilo" : "Asylum Requirements"}
          </h2>

          <div className="max-w-3xl mx-auto bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es" ? "Proceso de Solicitud de Asilo" : "Asylum Application Process"}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === "es" ? "Importante: Plazo de 1 Año" : "Important: 1-Year Deadline"}
            </h3>
            <p className="text-gray-700">
              {language === "es"
                ? "Debes solicitar asilo dentro de 1 año de tu última llegada a Estados Unidos, a menos que califiques para una excepción por circunstancias cambiadas o extraordinarias. No esperes hasta el último momento - contáctanos hoy."
                : "You generally must apply for asylum within 1 year of your last arrival in the United States, unless you qualify for an exception due to changed or extraordinary circumstances. Don’t wait until the last moment—contact us today."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            {language === "es" ? "¿Necesitas Protección?" : "Need Protection?"}
          </h3>

          <p className="text-xl text-gray-300 mb-8">
            {language === "es"
              ? "Si has sufrido persecución o tienes temor fundado de regresar a tu país, podemos ayudarte a buscar asilo en Estados Unidos."
              : "If you have suffered persecution or have a well-founded fear of returning to your country, we can help you seek asylum in the United States."}
          </p>

          <Link
            to="/contacto"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition font-semibold transform hover:scale-105 duration-300"
          >
            {language === "es" ? "Consulta Confidencial" : "Confidential Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
