import { Home as HomeIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function Asylum() {
  const asylumBases = [
    {
      title: "Raza",
      description: "Persecución basada en tu origen racial o étnico.",
      examples: ["Limpieza étnica", "Discriminación racial sistemática", "Violencia por motivos raciales"],
    },
    {
      title: "Religión",
      description: "Persecución por tus creencias o prácticas religiosas.",
      examples: ["Prohibición de prácticas religiosas", "Violencia contra minorías religiosas", "Conversión forzada"],
    },
    {
      title: "Nacionalidad",
      description: "Persecución basada en tu país de origen o grupo étnico.",
      examples: ["Conflictos étnicos", "Discriminación por nacionalidad", "Apátridas perseguidos"],
    },
    {
      title: "Opinión Política",
      description: "Persecución por tus opiniones políticas o activismo.",
      examples: ["Activistas amenazados", "Opositores políticos", "Periodistas perseguidos"],
    },
    {
      title: "Membresía en Grupo Social",
      description: "Persecución por pertenecer a un grupo social particular.",
      examples: ["Violencia de género", "Orientación sexual/identidad de género", "Víctimas de pandillas"],
    },
  ];

  const requirements = [
    "Haber sufrido persecución o tener temor fundado de persecución futura",
    "La persecución debe estar basada en uno de los cinco motivos protegidos",
    "El gobierno no puede o no quiere protegerte",
    "Solicitar asilo dentro de 1 año de llegada a EE.UU. (con excepciones)",
    "No tener impedimentos de seguridad o criminalidad grave",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <HomeIcon className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Asilo
            </h1>
          </div>
          <p className="text-xl text-teal-100 max-w-3xl">
            Protección para personas que huyen de persecución en su país de origen. 
            Te ayudamos a encontrar seguridad y un nuevo comienzo en Estados Unidos.
          </p>
        </div>
      </section>

      {/* What is Asylum */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Qué es el Asilo?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              El asilo es una forma de protección legal que permite a personas que han sido perseguidas 
              o tienen temor fundado de persecución en su país de origen permanecer en Estados Unidos.
            </p>
            <p className="text-lg text-gray-700">
              Para calificar, la persecución debe estar relacionada con uno de cinco motivos protegidos: 
              raza, religión, nacionalidad, opinión política, o membresía en un grupo social particular.
            </p>
          </div>
        </div>
      </section>

      {/* Five Protected Grounds */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Los Cinco Motivos Protegidos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asylumBases.map((base, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-900 mb-3">
                  {base.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {base.description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Ejemplos:</p>
                  <ul className="space-y-1">
                    {base.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {example}</li>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Requisitos para Asilo
          </h2>

          <div className="max-w-3xl mx-auto bg-teal-50 p-8 rounded-lg">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Proceso de Solicitud de Asilo
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Presentación</h4>
              <p className="text-sm text-gray-600">Formulario I-589 dentro de 1 año de llegada</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entrevista/Audiencia</h4>
              <p className="text-sm text-gray-600">Con oficial de asilo o juez de inmigración</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Decisión</h4>
              <p className="text-sm text-gray-600">Aprobación o negación de asilo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Green Card</h4>
              <p className="text-sm text-gray-600">Después de 1 año con asilo aprobado</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Importante: Plazo de 1 Año
            </h3>
            <p className="text-gray-700">
              Debes solicitar asilo dentro de 1 año de tu última llegada a Estados Unidos, 
              a menos que califiques para una excepción por circunstancias cambiadas o extraordinarias. 
              No esperes hasta el último momento - contáctanos hoy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas Protección?
          </h3>
          <p className="text-xl text-teal-100 mb-8">
            Si has sufrido persecución o tienes temor fundado de regresar a tu país, 
            podemos ayudarte a buscar asilo en Estados Unidos.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-white text-teal-900 px-8 py-3 rounded-md hover:bg-teal-50 transition font-semibold"
          >
            Consulta Confidencial
          </Link>
        </div>
      </section>
    </div>
  );
}
