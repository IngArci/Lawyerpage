import { Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function EmploymentVisas() {
  const visaTypes = [
    {
      title: "Visa H-1B",
      description: "Para profesionales en ocupaciones especializadas que requieren un título universitario.",
      requirements: [
        "Oferta de empleo de empleador estadounidense",
        "Título universitario o equivalente",
        "Especialización en el campo laboral",
      ],
    },
    {
      title: "Visa L-1",
      description: "Para transferencias dentro de la misma empresa (intra-company transfers).",
      requirements: [
        "Haber trabajado para la empresa por al menos 1 año",
        "Posición gerencial, ejecutiva o de conocimiento especializado",
        "Relación corporativa entre empresas",
      ],
    },
    {
      title: "Visa O-1",
      description: "Para personas con habilidades extraordinarias en ciencias, artes, educación, negocios o atletismo.",
      requirements: [
        "Demostrar habilidad extraordinaria",
        "Reconocimiento nacional o internacional",
        "Oferta de empleo en su campo de especialidad",
      ],
    },
    {
      title: "Visa TN (NAFTA)",
      description: "Para profesionales canadienses y mexicanos bajo el tratado USMCA.",
      requirements: [
        "Ciudadanía canadiense o mexicana",
        "Profesión calificada bajo USMCA",
        "Oferta de empleo en Estados Unidos",
      ],
    },
    {
      title: "Visa E-2",
      description: "Para inversionistas de países con tratados comerciales.",
      requirements: [
        "Inversión sustancial en negocio estadounidense",
        "Nacionalidad de país con tratado",
        "Control y dirección del negocio",
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
              Visas de Empleo
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ayudamos a profesionales y empresas a navegar el complejo proceso de visas de trabajo en Estados Unidos. 
            Nuestra experiencia garantiza que tu solicitud tenga las mejores posibilidades de éxito.
          </p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Tipos de Visas de Empleo en Estados Unidos
          </h2>

          <div className="space-y-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {visa.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {visa.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Requisitos principales:</h4>
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
              Nuestro Proceso
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Evaluación</h4>
                <p className="text-sm text-gray-600">Analizamos tu caso y elegibilidad</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Documentación</h4>
                <p className="text-sm text-gray-600">Preparamos toda la documentación necesaria</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Presentación</h4>
                <p className="text-sm text-gray-600">Enviamos tu petición a USCIS</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Seguimiento</h4>
                <p className="text-sm text-gray-600">Monitoreamos tu caso hasta la aprobación</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Listo para comenzar tu proceso?
            </h3>
            <Link 
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              Agenda tu Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}