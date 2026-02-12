import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Phone, Mail, MapPin, Briefcase, Users, FileText, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t("nav.inmigracion.visasEmpleo"), 
      path: "/inmigracion/visas-empleo",
      description: t("home.services.employment"),
      icon: Briefcase
    },
    { 
      title: t("nav.inmigracion.familiar"), 
      path: "/inmigracion/familiar",
      description: t("home.services.family"),
      icon: Users
    },
    { 
      title: t("nav.inmigracion.humanitarias"), 
      path: "/inmigracion/humanitarias",
      description: t("home.services.humanitarian"),
      icon: Shield
    },
    { 
      title: t("nav.inmigracion.defensa"), 
      path: "/inmigracion/defensa-remocion",
      description: t("home.services.defense"),
      icon: FileText
    },
    { 
      title: t("nav.inmigracion.asilo"), 
      path: "/inmigracion/asilo",
      description: t("home.services.asylum"),
      icon: Shield
    },
  ];

  const whyChooseUs = [
    t("home.whyUs.reason1"),
    t("home.whyUs.reason2"),
    t("home.whyUs.reason3"),
    t("home.whyUs.reason4"),
    t("home.whyUs.reason5"),
    t("home.whyUs.reason6")
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("home.hero.title")}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto"
                  className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition text-center"
                >
                  {t("home.hero.cta1")}
                </Link>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition text-center"
                >
                  {t("home.hero.cta2")}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGxhd3llciUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2OTk2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oficina de abogados"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gray-100 py-4 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-slate-900" />
              <a href="tel:+1234567890" className="text-gray-700 hover:text-slate-900">
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-slate-900" />
              <a href="mailto:info@abogadoinmigracion.com" className="text-gray-700 hover:text-slate-900">
                info@abogadoinmigracion.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-slate-900" />
              <span className="text-gray-700">123 Main Street, Ciudad, Estado 12345</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos representación legal integral en todas las áreas del derecho de inmigración
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-900 hover:shadow-lg transition group"
                >
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-900 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition"
            >
              {t("home.services.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to="/acerca"
                  className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition"
                >
                  Conocer Más Sobre Nosotros
                </Link>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Agenda Tu Consulta Gratuita
              </h3>
              <p className="text-gray-600 mb-6">
                Completa el formulario o llámanos directamente. Nuestro equipo está listo para ayudarte.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-700 hover:text-slate-900 transition"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div>(123) 456-7890</div>
                  </div>
                </a>
                <a 
                  href="mailto:info@abogadoinmigracion.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-slate-900 transition"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>info@abogadoinmigracion.com</div>
                  </div>
                </a>
              </div>
              <div className="mt-6">
                <Link 
                  to="/contacto"
                  className="block w-full bg-amber-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-700 transition text-center"
                >
                  Contactar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
            >
              {t("home.cta.button1")}
            </Link>
            <Link 
              to="/abogados"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              {t("home.cta.button2")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}