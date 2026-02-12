import { Shield, Scale, FileText, Users } from "lucide-react";
import { Link } from "react-router";

export default function KnowYourRights() {
  const rights = [
    {
      icon: Shield,
      title: "Derecho a Permanecer en Silencio",
      titleEn: "Right to Remain Silent",
      description: "No estás obligado a responder preguntas sobre tu estatus migratorio. Puedes ejercer tu derecho al silencio.",
      descriptionEn: "You are not required to answer questions about your immigration status. You can exercise your right to remain silent.",
    },
    {
      icon: Scale,
      title: "Derecho a un Abogado",
      titleEn: "Right to an Attorney",
      description: "Tienes derecho a ser representado por un abogado en procedimientos de inmigración.",
      descriptionEn: "You have the right to be represented by an attorney in immigration proceedings.",
    },
    {
      icon: FileText,
      title: "Derecho a Ver una Orden",
      titleEn: "Right to See a Warrant",
      description: "Los agentes deben mostrar una orden judicial firmada por un juez para entrar a tu hogar.",
      descriptionEn: "Agents must show a warrant signed by a judge to enter your home.",
    },
    {
      icon: Users,
      title: "Derecho a Contactar Tu Consulado",
      titleEn: "Right to Contact Your Consulate",
      description: "Si eres detenido, tienes derecho a comunicarte con el consulado de tu país.",
      descriptionEn: "If you are detained, you have the right to contact your country's consulate.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conoce tus Derechos
            </h1>
            <p className="text-xl text-gray-300">
              Es fundamental que conozcas tus derechos como inmigrante en Estados Unidos. 
              Esta información puede protegerte en situaciones críticas.
            </p>
          </div>
        </div>
      </section>

      {/* Rights Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {rights.map((right, index) => {
              const Icon = right.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-slate-900 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {right.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Information */}
          <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ⚠️ Información Importante
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Lleva siempre contigo documentación de inmigración válida</li>
              <li>• No firmes ningún documento sin leerlo completamente</li>
              <li>• No proveas información falsa a autoridades de inmigración</li>
              <li>• Memoriza el número de un abogado o familiar de confianza</li>
              <li>• Prepara un plan de emergencia para tu familia</li>
            </ul>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitas Asesoría Legal?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Nuestros abogados especializados están listos para ayudarte. 
                Agenda una consulta gratuita hoy mismo.
              </p>
              <Link 
                to="/contacto"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
              >
                Consulta Gratuita
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}