import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Phone, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: "5000+", label: t("home.stats.cases") },
    { icon: TrendingUp, value: "15+", label: t("home.stats.experience") },
    { icon: Users, value: "10000+", label: t("home.stats.clients") },
  ];

  const services = [
    { title: t("nav.inmigracion.visasEmpleo"), path: "/inmigracion/visas-empleo" },
    { title: t("nav.inmigracion.familiar"), path: "/inmigracion/familiar" },
    { title: t("nav.inmigracion.humanitarias"), path: "/inmigracion/humanitarias" },
    { title: t("nav.inmigracion.defensa"), path: "/inmigracion/defensa-remocion" },
    { title: t("nav.inmigracion.asilo"), path: "/inmigracion/asilo" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t("home.hero.title")}
              </h2>
              <p className="text-xl text-blue-100">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto"
                  className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition text-center"
                >
                  {t("home.hero.cta1")}
                </Link>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {t("home.hero.cta2")}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGxhd3llciUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2OTk2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Oficina de abogados de inmigración"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition">
                  {service.title}
                </h3>
                <p className="text-blue-900 font-semibold">Conocer más →</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contacto"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition"
            >
              {t("home.hero.cta1")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
