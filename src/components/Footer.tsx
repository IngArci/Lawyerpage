import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Abogados de Inmigración</h3>
            <p className="text-gray-400 mb-4">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("nav.inmigracion")}</h3>
            <div className="space-y-2">
              <Link to="/inmigracion/visas-empleo" className="block text-gray-400 hover:text-white transition">
                {t("nav.inmigracion.visasEmpleo")}
              </Link>
              <Link to="/inmigracion/familiar" className="block text-gray-400 hover:text-white transition">
                {t("nav.inmigracion.familiar")}
              </Link>
              <Link to="/inmigracion/humanitarias" className="block text-gray-400 hover:text-white transition">
                {t("nav.inmigracion.humanitarias")}
              </Link>
              <Link to="/inmigracion/asilo" className="block text-gray-400 hover:text-white transition">
                {t("nav.inmigracion.asilo")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Main Street<br />
                  Suite 456<br />
                  Ciudad, Estado 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@abogadoinmigracion.com" className="text-gray-400 hover:text-white transition">
                  info@abogadoinmigracion.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Abogados de Inmigración. {t("footer.rights")}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/recursos" className="text-gray-400 hover:text-white transition">
                {t("nav.recursos")}
              </Link>
              <Link to="/oportunidades" className="text-gray-400 hover:text-white transition">
                {t("nav.trabajo")}
              </Link>
              <Link to="/contacto" className="text-gray-400 hover:text-white transition">
                {t("nav.contacto")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
