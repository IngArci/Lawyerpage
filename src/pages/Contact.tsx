import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Gracias por contactarnos. Nos comunicaremos contigo pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "(123) 456-7890",
      link: "tel:+1234567890",
      description: "Lun-Vie: 9AM-6PM, Sáb: 10AM-2PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@abogadoinmigracion.com",
      link: "mailto:info@abogadoinmigracion.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: "123 Main Street, Suite 456",
      description: "Ciudad, Estado 12345",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Estamos listos para ayudarte. Agenda tu consulta gratuita hoy mismo y 
            comienza el camino hacia tus objetivos de inmigración.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-blue-900 hover:underline font-semibold block mb-1"
                    >
                      {method.details}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold mb-1">{method.details}</p>
                  )}
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicita tu Consulta Gratuita
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="nombre" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="juan@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="telefono" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="asunto" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de Caso *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="visa-empleo">Visa de Empleo</option>
                    <option value="familia">Inmigración Familiar</option>
                    <option value="humanitaria">Visa Humanitaria</option>
                    <option value="defensa">Defensa de Remoción</option>
                    <option value="asilo">Asilo</option>
                    <option value="green-card">Green Card</option>
                    <option value="ciudadania">Ciudadanía</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="mensaje" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntanos brevemente sobre tu caso..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-4 rounded-md hover:bg-blue-800 transition font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Consulta
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Al enviar este formulario, aceptas que te contactemos sobre tu consulta.
                </p>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzcwNzE5NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Consulta legal"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Horario de Atención
                    </h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                      <p>Sábado: 10:00 AM - 2:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ✓ Consulta Inicial Gratuita
                </h3>
                <p className="text-gray-700 mb-3">
                  Tu primera consulta es completamente gratuita. Evaluaremos tu caso y 
                  te explicaremos tus opciones sin ningún compromiso.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Evaluación completa de tu caso</li>
                  <li>• Análisis de opciones disponibles</li>
                  <li>• Estimación de tiempos y costos</li>
                  <li>• Respuestas a todas tus preguntas</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ⚡ Casos Urgentes
                </h3>
                <p className="text-gray-700 mb-3">
                  Si tienes una orden de deportación, audiencia programada, o cualquier 
                  situación urgente, llámanos inmediatamente:
                </p>
                <a 
                  href="tel:+1234567890"
                  className="text-2xl font-bold text-blue-900 hover:text-blue-700"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold">Mapa de ubicación</p>
              <p className="text-sm text-gray-500">123 Main Street, Suite 456</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
