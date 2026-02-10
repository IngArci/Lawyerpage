import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function Resources() {
  const resources = [
    {
      category: "Formularios de USCIS",
      items: [
        { name: "Formulario I-130 (Petición Familiar)", link: "https://www.uscis.gov/i-130" },
        { name: "Formulario I-485 (Ajuste de Estatus)", link: "https://www.uscis.gov/i-485" },
        { name: "Formulario N-400 (Naturalización)", link: "https://www.uscis.gov/n-400" },
        { name: "Formulario I-765 (Permiso de Trabajo)", link: "https://www.uscis.gov/i-765" },
        { name: "Formulario I-131 (Permiso de Viaje)", link: "https://www.uscis.gov/i-131" },
      ],
    },
    {
      category: "Tiempos de Procesamiento",
      items: [
        { name: "Tiempos de USCIS", link: "https://egov.uscis.gov/processing-times/" },
        { name: "Boletín de Visas del Departamento de Estado", link: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" },
        { name: "Fechas de Prioridad", link: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" },
      ],
    },
    {
      category: "Recursos Legales",
      items: [
        { name: "Manual de Políticas de USCIS", link: "https://www.uscis.gov/policy-manual" },
        { name: "Código de Regulaciones Federales (CFR)", link: "https://www.ecfr.gov/" },
        { name: "Ley de Inmigración y Nacionalidad (INA)", link: "https://www.uscis.gov/laws-and-policy/legislation/immigration-and-nationality-act" },
        { name: "Decisiones de la Junta de Apelaciones de Inmigración", link: "https://www.justice.gov/eoir/board-immigration-appeals-0" },
      ],
    },
    {
      category: "Información General",
      items: [
        { name: "Sitio Web Oficial de USCIS", link: "https://www.uscis.gov/" },
        { name: "Departamento de Estado - Visas", link: "https://travel.state.gov/content/travel/en/us-visas.html" },
        { name: "Corte Ejecutiva de Revisión de Inmigración (EOIR)", link: "https://www.justice.gov/eoir" },
        { name: "ICE - Inmigración y Control de Aduanas", link: "https://www.ice.gov/" },
      ],
    },
  ];

  const guides = [
    {
      title: "Guía para Entender tu Orden de Comparecencia",
      description: "Aprende qué hacer si recibes una Orden de Comparecencia (Notice to Appear) y cuáles son tus opciones legales.",
      downloadable: true,
    },
    {
      title: "Derechos en una Redada de ICE",
      description: "Conoce tus derechos constitucionales si ICE llega a tu hogar, lugar de trabajo o te detiene en la calle.",
      downloadable: true,
    },
    {
      title: "Preparación para la Entrevista de Ciudadanía",
      description: "Consejos y recursos para prepararte para tu entrevista de naturalización, incluyendo preguntas comunes.",
      downloadable: true,
    },
    {
      title: "Plan de Emergencia Familiar",
      description: "Crea un plan de acción para tu familia en caso de una emergencia de inmigración.",
      downloadable: true,
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda una petición I-130?",
      answer: "El tiempo varía según la oficina de USCIS y el tipo de relación familiar. Actualmente, puede tomar entre 12-24 meses para familiares inmediatos.",
    },
    {
      question: "¿Puedo trabajar mientras mi ajuste de estatus está pendiente?",
      answer: "Sí, puedes solicitar un Documento de Autorización de Empleo (EAD) presentando el Formulario I-765 junto con tu I-485.",
    },
    {
      question: "¿Qué hago si pierdo mi Green Card?",
      answer: "Debes presentar el Formulario I-90 para reemplazar tu Green Card perdida, robada o dañada lo antes posible.",
    },
    {
      question: "¿Cuándo puedo solicitar la ciudadanía?",
      answer: "Generalmente, puedes solicitar después de 5 años como residente permanente (3 años si estás casado con ciudadano estadounidense).",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Recursos
            </h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Encuentra información útil, formularios, guías y respuestas a preguntas frecuentes 
            sobre inmigración.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Guías Descargables
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    {guide.downloadable && (
                      <button className="flex items-center gap-2 text-green-900 hover:text-green-700 font-semibold">
                        <Download className="w-4 h-4" />
                        Descargar PDF
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Enlaces Útiles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition"
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            ⚠️ Aviso Legal Importante
          </h3>
          <p className="text-gray-700">
            La información proporcionada en esta página es solo para fines educativos y no 
            constituye asesoría legal. Las leyes de inmigración son complejas y cambian 
            frecuentemente. Para asesoría específica sobre tu caso, por favor{" "}
            <Link to="/contacto" className="text-blue-900 hover:underline font-semibold">
              contacta a uno de nuestros abogados
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas Ayuda Personalizada?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Nuestros abogados pueden brindarte asesoría específica para tu situación.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-white text-green-900 px-8 py-3 rounded-md hover:bg-green-50 transition font-semibold"
          >
            Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
