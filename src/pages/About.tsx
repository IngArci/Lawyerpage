import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("about.values.integrity"),
      description: t("about.values.integrityDesc"),
    },
    {
      icon: Award,
      title: t("about.values.excellence"),
      description: t("about.values.excellenceDesc"),
    },
    {
      icon: Users,
      title: t("about.values.compassion"),
      description: t("about.values.compassionDesc"),
    },
    {
      icon: TrendingUp,
      title: t("about.values.commitment"),
      description: t("about.values.commitmentDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("about.mission.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t("about.mission.text")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("about.vision.title")}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t("about.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t("about.story.title")}
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              {t("about.story.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("about.values.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-900 hover:shadow-lg transition text-center"
                >
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trabajemos Juntos
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Estamos listos para ayudarte a alcanzar tus metas. Contáctanos para una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
            >
              Consulta Gratuita
            </Link>
            <Link 
              to="/abogados"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              Conoce a Nuestro Equipo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
