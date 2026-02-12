import { Shield, Scale, FileText, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function KnowYourRights() {
  const { t } = useLanguage();

  const rights = [
    {
      icon: Shield,
      title: t("rights.silence.title"),
      description: t("rights.silence.desc"),
    },
    {
      icon: Scale,
      title: t("rights.lawyer.title"),
      description: t("rights.lawyer.desc"),
    },
    {
      icon: FileText,
      title: t("rights.refuse.title"),
      description: t("rights.refuse.desc"),
    },
    {
      icon: Users,
      title: t("rights.document.title"),
      description: t("rights.document.desc"),
    },
  ];

  const tips = [
    t("rights.tips.calm"),
    t("rights.tips.rights"),
    t("rights.tips.document"),
    t("rights.tips.info"),
    t("rights.tips.lawyer"),
    t("rights.tips.silent"),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("rights.hero.title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("rights.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("rights.section.title")}
          </h2>

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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {right.title}
                      </h3>
                      <p className="text-gray-600">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("rights.tips.title")}
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t("rights.cta.title")}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {t("rights.cta.subtitle")}
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition"
          >
            {t("rights.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
