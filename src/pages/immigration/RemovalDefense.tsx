import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function RemovalDefense() {
  const defenseStrategies = [
    {
      title: "Cancelación de Remoción",
      description: "Para residentes permanentes o no residentes con presencia prolongada en EE.UU.",
      requirements: [
        "10 años de presencia continua (no residentes)",
        "Buen carácter moral",
        "Dificultades extremas para familiar calificado",
      ],
    },
    {
      title: "Ajuste de Estatus",
      description: "Obtención de Green Card mientras estás en proceso de deportación.",
      requirements: [
        "Elegibilidad para residencia permanente",
        "Petición familiar o de empleo aprobada",
        "No tener impedimentos legales",
      ],
    },
    {
      title: "Solicitud de Asilo Defensivo",
      description: "Presentar solicitud de asilo como defensa contra deportación.",
      requirements: [
        "Temor fundado de persecución",
        "Persecución por motivos protegidos",
        "Solicitud dentro de 1 año de llegada",
      ],
    },
    {
      title: "Protección bajo CAT",
      description: "Protección bajo la Convención contra la Tortura.",
      requirements: [
        "Probabilidad de ser torturado en país de origen",
        "Tortura perpetrada por gobierno o con aquiescencia",
        "No requiere nexo de motivo protegido",
      ],
    },
  ];

  const warningSigns = [
    "Recibiste una Orden de Comparecencia (Notice to Appear)",
    "Tienes una orden de deportación pendiente",
    "Fuiste arrestado por ICE o CBP",
    "Tienes una audiencia programada con un juez de inmigración",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Defensa de Remoción
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Si estás en proceso de deportación en Estados Unidos, no estás solo. Nuestros abogados expertos 
            lucharán para proteger tus derechos y mantener a tu familia unida.
          </p>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-12 bg-amber-50 border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ¿Estás en Proceso de Deportación?
              </h3>
              <p className="text-gray-700 mb-4">
                Si alguna de estas situaciones aplica a ti, contacta a un abogado inmediatamente:
              </p>
              <ul className="space-y-2">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Estrategias de Defensa en Estados Unidos
          </h2>

          <div className="space-y-8">
            {defenseStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {strategy.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Requisitos principales:</h4>
                  <ul className="space-y-2">
                    {strategy.requirements.map((req, idx) => (
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

          {/* Court Process */}
          <div className="mt-16 bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              El Proceso en Corte de Inmigración
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Master Calendar</h4>
                <p className="text-xs text-gray-600">Audiencia inicial</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Individual Hearing</h4>
                <p className="text-xs text-gray-600">Audiencia individual</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Evidencia</h4>
                <p className="text-xs text-gray-600">Presentación de pruebas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Decisión</h4>
                <p className="text-xs text-gray-600">Veredicto del juez</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  5
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Apelación</h4>
                <p className="text-xs text-gray-600">BIA si necesario</p>
              </div>
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="mt-16 bg-slate-900 text-white rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              ⚠️ Actúa Ahora
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              El tiempo es crítico en casos de deportación. Cada día cuenta. 
              Contáctanos inmediatamente para proteger tus derechos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition font-semibold transform hover:scale-105 duration-300"
              >
                Contacto Inmediato
              </Link>
              <a 
                href="tel:+1412514827"
                className="inline-block border-2 border-amber-600 bg-amber-600 px-8 py-3 rounded-md hover:bg-amber-700 hover:border-amber-700 transition font-semibold"
              >
                Llamar: 412-514-827
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}