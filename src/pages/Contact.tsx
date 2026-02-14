import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplaza con tu Service ID de EmailJS
        "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.nombre,
          from_email: formData.email,
          phone: formData.telefono,
          subject: formData.asunto,
          message: formData.mensaje,
          to_email: "unidosinmigracion@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // Reemplaza con tu Public Key de EmailJS
      );

      setSubmitStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      title: t("contact.phone.title"),
      details: "412-514-827",
      link: "tel:+1412514827",
      description: t("contact.phone.hours"),
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: "unidosinmigracion@gmail.com",
      link: "mailto:unidosinmigracion@gmail.com",
      description: t("contact.email.response"),
    },
    {
      icon: MapPin,
      title: t("contact.address.title"),
      details: "1050 Connecticut Ave NW #500",
      description: "Washington, DC 20036",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.hero.title")}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            {t("contact.hero.subtitle")}
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
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-amber-600 hover:underline font-semibold block mb-1"
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
                {t("contact.form.title")}
              </h2>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 font-medium">
                    {t("contact.form.success")}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 font-medium">
                    {t("contact.form.error")}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="nombre" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="telefono" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.phone")} *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="asunto" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.caseType")} *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">{t("contact.form.selectOption")}</option>
                    <option value="visa-empleo">{t("contact.form.case.employment")}</option>
                    <option value="familia">{t("contact.form.case.family")}</option>
                    <option value="humanitaria">{t("contact.form.case.humanitarian")}</option>
                    <option value="defensa">{t("contact.form.case.defense")}</option>
                    <option value="asilo">{t("contact.form.case.asylum")}</option>
                    <option value="green-card">{t("contact.form.case.greencard")}</option>
                    <option value="ciudadania">{t("contact.form.case.citizenship")}</option>
                    <option value="otro">{t("contact.form.case.other")}</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="mensaje" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white px-6 py-4 rounded-md hover:bg-slate-800 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contact.form.submit")}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  {t("contact.form.disclaimer")}
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

              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t("contact.hours.title")}
                    </h3>
                    <div className="space-y-1 text-gray-700">
                      <p>{t("contact.hours.weekday")}</p>
                      <p>{t("contact.hours.saturday")}</p>
                      <p>{t("contact.hours.sunday")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("contact.consultation.badge")}
                </h3>
                <p className="text-gray-700 mb-3">
                  {t("contact.consultation.description")}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("contact.consultation.benefit1")}</li>
                  <li>• {t("contact.consultation.benefit2")}</li>
                  <li>• {t("contact.consultation.benefit3")}</li>
                  <li>• {t("contact.consultation.benefit4")}</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t("contact.urgent.title")}
                </h3>
                <p className="text-gray-700 mb-3">
                  {t("contact.urgent.description")}
                </p>
                <a 
                  href="tel:+1412514827"
                  className="text-2xl font-bold text-amber-600 hover:text-amber-700"
                >
                  412-514-827
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("contact.map.title")}
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                title="Ubicación de Unidos Por Inmigración"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.824744838383!2d-77.04533968472654!3d38.90563997956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bdb2b5e08d%3A0x8e0d4b0b5e5c5c5c!2s1050%20Connecticut%20Ave%20NW%20%23500%2C%20Washington%2C%20DC%2020036!5e0!3m2!1ses!2sus!4v1710000000000!5m2!1ses!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">1050 Connecticut Ave NW #500</p>
                  <p className="text-gray-600">Washington, DC 20036</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1050+Connecticut+Ave+NW+500,Washington,DC+20036"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-semibold transition flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                {t("contact.map.directions") || "Obtener Direcciones"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}