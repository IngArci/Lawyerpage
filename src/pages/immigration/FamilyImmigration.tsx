import { Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export default function FamilyImmigration() {
  const { language } = useLanguage();

  const categories = [
    {
      title:
        language === "es"
          ? "Peticiones Familiares Inmediatas"
          : "Immediate Relative Family Petitions",
      description:
        language === "es"
          ? "Para parientes directos de ciudadanos estadounidenses (sin límite de visas)."
          : "For immediate relatives of U.S. citizens (no visa limits).",
      eligible:
        language === "es"
          ? [
              "Cónyuge de ciudadano estadounidense",
              "Hijos solteros menores de 21 años",
              "Padres de ciudadanos estadounidenses (mayores de 21)",
            ]
          : [
              "Spouse of a U.S. citizen",
              "Unmarried children under 21",
              "Parents of U.S. citizens (petitioner must be 21+)",
            ],
    },
    {
      title: language === "es" ? "Preferencias Familiares" : "Family Preference Categories",
      description:
        language === "es"
          ? "Para otros familiares con límites anuales de visas disponibles."
          : "For other relatives subject to annual visa limits.",
      eligible:
        language === "es"
          ? [
              "Hijos solteros mayores de 21 años",
              "Hijos casados de cualquier edad",
              "Hermanos de ciudadanos estadounidenses (mayores de 21)",
            ]
          : [
              "Unmarried sons/daughters over 21",
              "Married sons/daughters of any age",
              "Siblings of U.S. citizens (petitioner must be 21+)",
            ],
    },
    {
      title: "Visa K-1 (Prometido/a)",
      description:
        language === "es"
          ? "Para prometidos de ciudadanos estadounidenses."
          : "For fiancé(e)s of U.S. citizens.",
      eligible:
        language === "es"
          ? [
              "Compromiso genuino de matrimonio",
              "Haberse conocido en persona en los últimos 2 años",
              "Intención de casarse dentro de 90 días de entrada",
            ]
          : [
              "Genuine intent to marry",
              "Met in person within the last 2 years",
              "Plan to marry within 90 days of entry",
            ],
    },
    {
      title:
        language === "es"
          ? "Ajuste de Estatus por Matrimonio"
          : "Marriage-Based Adjustment of Status",
      description:
        language === "es"
          ? "Green Card basada en matrimonio con ciudadano o residente permanente."
          : "Marriage-based Green Card through a U.S. citizen or permanent resident spouse.",
      eligible:
        language === "es"
          ? [
              "Matrimonio válido y de buena fe",
              "Documentación de relación genuina",
              "Elegibilidad para ajuste de estatus",
            ]
          : [
              "Valid, bona fide marriage",
              "Evidence of a genuine relationship",
              "Eligibility to adjust status",
            ],
    },
  ];

  const timeline = [
    {
      labelEs: "Familiares Inmediatos (IR)",
      labelEn: "Immediate Relatives (IR)",
      time: "12–18 months",
    },
    {
      labelEs: "Primera Preferencia (F1)",
      labelEn: "First Preference (F1)",
      time: "7+ years",
    },
    {
      labelEs: "Segunda Preferencia (F2)",
      labelEn: "Second Preference (F2)",
      time: "2–7 years",
    },
    {
      labelEs: "Tercera Preferencia (F3)",
      labelEn: "Third Preference (F3)",
      time: "10+ years",
    },
    {
      labelEs: "Cuarta Preferencia (F4)",
      labelEn: "Fourth Preference (F4)",
      time: "15+ years",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "es" ? "Inmigración Familiar" : "Family Immigration"}
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {language === "es"
              ? "Reunimos familias. Nuestro equipo te ayuda a traer a tus seres queridos a Estados Unidos a través de los diversos caminos de inmigración familiar disponibles."
              : "We bring families together. Our team helps you reunite with your loved ones in the United States through the different family immigration pathways available."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === "es"
              ? "Categorías de Inmigración Familiar en Estados Unidos"
              : "Family Immigration Categories in the United States"}
          </h2>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    {language === "es" ? "Elegibles:" : "Eligible:"}
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
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-16 bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {language === "es"
                ? "Tiempos de Procesamiento Aproximados"
                : "Estimated Processing Times"}
            </h3>

            <div className="space-y-4">
              {timeline.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center ${i < timeline.length - 1 ? "border-b pb-3" : ""}`}
                >
                  <span className="font-semibold text-slate-900">
                    {language === "es" ? row.labelEs : row.labelEn}
                  </span>
                  <span className="text-gray-600">{row.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-600 italic">
              {language === "es"
                ? "* Los tiempos varían según país de origen y categoría. Consulta con nosotros para estimaciones actualizadas."
                : "* Times vary by country of origin and category. Contact us for updated estimates."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {language === "es"
                ? "¿Quieres reunirte con tu familia?"
                : "Want to reunite with your family?"}
            </h3>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === "es"
                ? "Cada caso es único. Agenda una consulta para discutir tus opciones específicas."
                : "Every case is unique. Schedule a consultation to discuss your specific options."}
            </p>

            <Link
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              {language === "es" ? "Consulta Gratuita" : "Free Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
