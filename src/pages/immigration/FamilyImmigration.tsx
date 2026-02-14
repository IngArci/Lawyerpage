import { Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function FamilyImmigration() {
  const categories = [
    {
      title: "Peticiones Familiares Inmediatas",
      description: "Para parientes directos de ciudadanos estadounidenses (sin límite de visas).",
      eligible: [
        "Cónyuge de ciudadano estadounidense",
        "Hijos solteros menores de 21 años",
        "Padres de ciudadanos estadounidenses (mayores de 21)",
      ],
    },
    {
      title: "Preferencias Familiares",
      description: "Para otros familiares con límites anuales de visas disponibles.",
      eligible: [
        "Hijos solteros mayores de 21 años",
        "Hijos casados de cualquier edad",
        "Hermanos de ciudadanos estadounidenses (mayores de 21)",
      ],
    },
    {
      title: "Visa K-1 (Prometido/a)",
      description: "Para prometidos de ciudadanos estadounidenses.",
      eligible: [
        "Compromiso genuino de matrimonio",
        "Haberse conocido en persona en los últimos 2 años",
        "Intención de casarse dentro de 90 días de entrada",
      ],
    },
    {
      title: "Ajuste de Estatus por Matrimonio",
      description: "Green Card basada en matrimonio con ciudadano o residente permanente.",
      eligible: [
        "Matrimonio válido y de buena fe",
        "Documentación de relación genuina",
        "Elegibilidad para ajuste de estatus",
      ],
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
              Inmigración Familiar
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Reunimos familias. Nuestro equipo te ayuda a traer a tus seres queridos 
            a Estados Unidos a través de los diversos caminos de inmigración familiar disponibles.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Categorías de Inmigración Familiar en Estados Unidos
          </h2>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Elegibles:</h4>
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
              Tiempos de Procesamiento Aproximados
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">Familiares Inmediatos (IR)</span>
                <span className="text-gray-600">12-18 meses</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">Primera Preferencia (F1)</span>
                <span className="text-gray-600">7+ años</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">Segunda Preferencia (F2)</span>
                <span className="text-gray-600">2-7 años</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold text-slate-900">Tercera Preferencia (F3)</span>
                <span className="text-gray-600">10+ años</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-900">Cuarta Preferencia (F4)</span>
                <span className="text-gray-600">15+ años</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              * Los tiempos varían según país de origen y categoría. Consulta con nosotros para estimaciones actualizadas.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Quieres reunirte con tu familia?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada caso es único. Agenda una consulta para discutir tus opciones específicas.
            </p>
            <Link 
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}