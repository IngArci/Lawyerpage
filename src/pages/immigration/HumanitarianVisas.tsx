import { HandHeart, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function HumanitarianVisas() {
  const visaTypes = [
    {
      title: "Visa U - Víctimas de Crímenes",
      description: "Para víctimas de ciertos crímenes que han sufrido abuso mental o físico sustancial.",
      benefits: [
        "Protección legal en Estados Unidos",
        "Permiso de trabajo",
        "Camino hacia la residencia permanente",
        "Posibilidad de incluir familiares",
      ],
    },
    {
      title: "Visa T - Víctimas de Tráfico Humano",
      description: "Para víctimas de trata de personas o tráfico laboral.",
      benefits: [
        "Estatus legal temporal",
        "Autorización de empleo",
        "Servicios y beneficios especiales",
        "Elegibilidad para Green Card después de 3 años",
      ],
    },
    {
      title: "VAWA - Víctimas de Violencia Doméstica",
      description: "Para víctimas de abuso por parte de cónyuge o padre ciudadano/residente.",
      benefits: [
        "Auto-petición sin conocimiento del abusador",
        "Protección contra deportación",
        "Permiso de trabajo",
        "Camino a residencia permanente",
      ],
    },
    {
      title: "TPS - Estatus de Protección Temporal",
      description: "Para nacionales de países designados afectados por conflictos o desastres.",
      benefits: [
        "Protección temporal contra deportación",
        "Autorización de empleo",
        "Permiso de viaje",
        "Renovable según designaciones",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <HandHeart className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Visas Humanitarias
            </h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Brindamos protección legal a víctimas de crímenes, violencia doméstica, 
            tráfico humano y situaciones humanitarias. Tu seguridad es nuestra prioridad.
          </p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Opciones de Protección Humanitaria
          </h2>

          <div className="space-y-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {visa.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {visa.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Beneficios:</h4>
                  <ul className="space-y-2">
                    {visa.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Confidentiality Notice */}
          <div className="mt-16 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🔒 Confidencialidad Garantizada
            </h3>
            <p className="text-gray-700 mb-3">
              Entendemos la sensibilidad de estos casos. Toda nuestra comunicación es estrictamente confidencial.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• No compartimos información sin tu consentimiento</li>
              <li>• Ambiente seguro y privado para consultas</li>
              <li>• Personal capacitado en trauma y sensibilidad cultural</li>
              <li>• Asistencia con órdenes de protección si es necesario</li>
            </ul>
          </div>

          {/* Support Resources */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recursos de Apoyo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Línea Nacional de Violencia Doméstica</h4>
                <p className="text-gray-600 mb-2">1-800-799-7233 (24/7)</p>
                <p className="text-sm text-gray-500">Ayuda confidencial para víctimas de abuso doméstico</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Línea Nacional contra el Tráfico Humano</h4>
                <p className="text-gray-600 mb-2">1-888-373-7888 (24/7)</p>
                <p className="text-sm text-gray-500">Asistencia para víctimas de trata de personas</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Estamos aquí para ayudarte
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si eres víctima de un crimen o abuso, podemos ayudarte a obtener protección legal. 
              Todas las consultas son confidenciales.
            </p>
            <Link 
              to="/contacto"
              className="inline-block bg-purple-900 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition"
            >
              Consulta Confidencial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
