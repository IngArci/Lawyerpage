import { Briefcase, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function JobOpportunities() {
  const positions = [
    {
      title: "Abogado de Inmigración - Asociado",
      type: "Tiempo Completo",
      location: "Nueva York, NY / Remoto",
      salary: "$80,000 - $120,000",
      description: "Buscamos un abogado de inmigración con experiencia para unirse a nuestro equipo en crecimiento. El candidato ideal tendrá experiencia en visas de empleo y casos familiares.",
      requirements: [
        "J.D. de escuela de derecho acreditada",
        "Licencia activa para ejercer",
        "2+ años de experiencia en derecho de inmigración",
        "Fluidez en español (preferido)",
        "Excelentes habilidades de comunicación",
      ],
      responsibilities: [
        "Manejar carga de casos de inmigración",
        "Preparar peticiones y aplicaciones",
        "Representar clientes en audiencias",
        "Asesorar clientes sobre opciones legales",
      ],
    },
    {
      title: "Paralegal de Inmigración",
      type: "Tiempo Completo",
      location: "Los Angeles, CA",
      salary: "$45,000 - $65,000",
      description: "Buscamos un paralegal organizado y detallista para asistir a nuestro equipo legal con casos de inmigración.",
      requirements: [
        "Certificado de paralegal o experiencia equivalente",
        "1+ año de experiencia en inmigración (preferido)",
        "Bilingüe (español/inglés) requerido",
        "Conocimiento de formularios USCIS",
        "Atención excepcional al detalle",
      ],
      responsibilities: [
        "Preparar documentos legales",
        "Mantener comunicación con clientes",
        "Organizar expedientes de casos",
        "Asistir en investigación legal",
      ],
    },
    {
      title: "Recepcionista Bilingüe",
      type: "Tiempo Completo",
      location: "Miami, FL",
      salary: "$35,000 - $45,000",
      description: "Buscamos una persona amigable y profesional para ser la primera cara de nuestro bufete.",
      requirements: [
        "Experiencia en recepción o servicio al cliente",
        "Bilingüe (español/inglés) requerido",
        "Excelentes habilidades telefónicas",
        "Competencia con computadoras",
        "Actitud profesional y acogedora",
      ],
      responsibilities: [
        "Recibir clientes y visitantes",
        "Contestar y dirigir llamadas telefónicas",
        "Programar citas",
        "Mantener el área de recepción organizada",
      ],
    },
  ];

  const benefits = [
    "Seguro médico, dental y de visión",
    "401(k) con contribución del empleador",
    "Días de vacaciones pagadas",
    "Días festivos pagados",
    "Desarrollo profesional continuo",
    "Ambiente de trabajo colaborativo",
    "Oportunidades de crecimiento",
    "Horarios flexibles (según posición)",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Oportunidades de Trabajo
            </h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Únete a nuestro equipo de profesionales dedicados a hacer una diferencia 
            en las vidas de inmigrantes y sus familias.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            ¿Por Qué Trabajar Con Nosotros?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Impacto Real
              </h3>
              <p className="text-gray-600">
                Trabaja en casos que cambian vidas y ayudan a familias a permanecer juntas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Crecimiento Profesional
              </h3>
              <p className="text-gray-600">
                Oportunidades continuas de capacitación y desarrollo profesional.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cultura Inclusiva
              </h3>
              <p className="text-gray-600">
                Un ambiente de trabajo diverso, respetuoso y colaborativo.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Beneficios del Empleado
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Posiciones Abiertas
          </h2>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {position.salary}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {position.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requisitos:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-900">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsabilidades:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-900">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/contacto"
                    className="bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition font-semibold"
                  >
                    Aplicar Ahora
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition">
                    Compartir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Proceso de Aplicación
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Aplica</h4>
              <p className="text-sm text-gray-600">Envía tu CV y carta de presentación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Revisión</h4>
              <p className="text-sm text-gray-600">Revisamos tu aplicación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entrevista</h4>
              <p className="text-sm text-gray-600">Entrevista con el equipo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Oferta</h4>
              <p className="text-sm text-gray-600">Recibe tu oferta de trabajo</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Open Position */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No ves la posición perfecta?
          </h3>
          <p className="text-gray-600 mb-6">
            Siempre estamos buscando talento excepcional. Envíanos tu CV y nos 
            pondremos en contacto si surge una oportunidad que coincida con tu perfil.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-purple-900 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition font-semibold"
          >
            Enviar CV
          </Link>
        </div>
      </section>
    </div>
  );
}
