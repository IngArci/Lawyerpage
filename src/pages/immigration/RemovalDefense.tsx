import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export default function RemovalDefense() {
  const { language } = useLanguage();

  const defenseStrategies = [
    {
      title:
        language === "es"
          ? "Cancelación de Remoción"
          : "Cancellation of Removal",
      description:
        language === "es"
          ? "Para residentes permanentes o no residentes con presencia prolongada en EE.UU."
          : "For lawful permanent residents or non-residents with long-term presence in the U.S.",
      requirements:
        language === "es"
          ? [
              "10 años de presencia continua (no residentes)",
              "Buen carácter moral",
              "Dificultades extremas para familiar calificado",
            ]
          : [
              "10 years of continuous presence (non-residents)",
              "Good moral character",
              "Exceptional hardship to a qualifying relative",
            ],
    },
    {
      title: language === "es" ? "Ajuste de Estatus" : "Adjustment of Status",
      description:
        language === "es"
          ? "Obtención de Green Card mientras estás en proceso de deportación."
          : "Obtaining a Green Card while in removal proceedings.",
      requirements:
        language === "es"
          ? [
              "Elegibilidad para residencia permanente",
              "Petición familiar o de empleo aprobada",
              "No tener impedimentos legales",
            ]
          : [
              "Eligibility for permanent residency",
              "Approved family or employment petition",
              "No legal bars to adjustment",
            ],
    },
    {
      title:
        language === "es"
          ? "Solicitud de Asilo Defensivo"
          : "Defensive Asylum Application",
      description:
        language === "es"
          ? "Presentar solicitud de asilo como defensa contra deportación."
          : "Filing for asylum as a defense against deportation.",
      requirements:
        language === "es"
          ? [
              "Temor fundado de persecución",
              "Persecución por motivos protegidos",
              "Solicitud dentro de 1 año de llegada",
            ]
          : [
              "Well-founded fear of persecution",
              "Persecution based on protected grounds",
              "Filed within 1 year of arrival (with exceptions)",
            ],
    },
    {
      title:
        language === "es"
          ? "Protección bajo CAT"
          : "Protection under CAT",
      description:
        language === "es"
          ? "Protección bajo la Convención contra la Tortura."
          : "Protection under the Convention Against Torture.",
      requirements:
        language === "es"
          ? [
              "Probabilidad de ser torturado en país de origen",
              "Tortura perpetrada por gobierno o con aquiescencia",
              "No requiere nexo de motivo protegido",
            ]
          : [
              "Likelihood of torture in home country",
              "Torture by or with government acquiescence",
              "No protected ground nexus required",
            ],
    },
  ];

  const warningSigns =
    language === "es"
      ? [
          "Recibiste una Orden de Comparecencia (Notice to Appear)",
          "Tienes una orden de deportación pendiente",
          "Fuiste arrestado por ICE o CBP",
          "Tienes una audiencia programada con un juez de inmigración",
        ]
      : [
          "You received a Notice to Appear (NTA)",
          "You have a pending removal order",
          "You were arrested by ICE or CBP",
          "You have a scheduled immigration court hearing",
        ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-amber-600" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "es" ? "Defensa de Remoción" : "Removal Defense"}
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {language === "es"
              ? "Si estás en proceso de deportación en Estados Unidos, no estás solo. Nuestros abogados expertos lucharán para proteger tus derechos y mantener a tu familia unida."
              : "If you are facing deportation in the United States, you are not alone. Our experienced attorneys will fight to protect your rights and keep your family together."}
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
                {language === "es"
                  ? "¿Estás en Proceso de Deportación?"
                  : "Are You in Removal Proceedings?"}
              </h3>

              <p className="text-gray-700 mb-4">
                {language === "es"
                  ? "Si alguna de estas situaciones aplica a ti, contacta a un abogado inmediatamente:"
                  : "If any of these situations apply to you, contact an attorney immediately:"}
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
            {language === "es"
              ? "Estrategias de Defensa en Estados Unidos"
              : "Defense Strategies in the United States"}
          </h2>

          <div className="space-y-8">
            {defenseStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 mb-6">{strategy.description}</p>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    {language === "es"
                      ? "Requisitos principales:"
                      : "Key requirements:"}
                  </h4>
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
              {language === "es"
                ? "El Proceso en Corte de Inmigración"
                : "Immigration Court Process"}
            </h3>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  titleEs: "Master Calendar",
                  titleEn: "Master Calendar",
                  descEs: "Audiencia inicial",
                  descEn: "Initial hearing",
                },
                {
                  titleEs: "Individual Hearing",
                  titleEn: "Individual Hearing",
                  descEs: "Audiencia individual",
                  descEn: "Individual merits hearing",
                },
                {
                  titleEs: "Evidencia",
                  titleEn: "Evidence",
                  descEs: "Presentación de pruebas",
                  descEn: "Submission of evidence",
                },
                {
                  titleEs: "Decisión",
                  titleEn: "Decision",
                  descEs: "Veredicto del juez",
                  descEn: "Judge’s ruling",
                },
                {
                  titleEs: "Apelación",
                  titleEn: "Appeal",
                  descEs: "BIA si necesario",
                  descEn: "Appeal to BIA if necessary",
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                    {language === "es" ? step.titleEs : step.titleEn}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {language === "es" ? step.descEs : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="mt-16 bg-slate-900 text-white rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              ⚠️ {language === "es" ? "Actúa Ahora" : "Act Now"}
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "es"
                ? "El tiempo es crítico en casos de deportación. Cada día cuenta. Contáctanos inmediatamente para proteger tus derechos."
                : "Time is critical in deportation cases. Every day matters. Contact us immediately to protect your rights."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition font-semibold transform hover:scale-105 duration-300"
              >
                {language === "es"
                  ? "Contacto Inmediato"
                  : "Immediate Contact"}
              </Link>

              <a
                href="tel:+1412514827"
                className="inline-block border-2 border-amber-600 bg-amber-600 px-8 py-3 rounded-md hover:bg-amber-700 hover:border-amber-700 transition font-semibold"
              >
                {language === "es" ? "Llamar" : "Call"}: 412-514-827
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
