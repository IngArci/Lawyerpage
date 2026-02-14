import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [immigrationOpen, setImmigrationOpen] = useState(false);
  const [attorneysOpen, setAttorneysOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const attorneys = [
    { id: "carlos-castro", name: "Carlos E. Castro" },
    { id: "alejandro-camacho", name: "Dr. Alejandro Camacho" },
    { id: "liliana-vasquez", name: "Liliana Ivette Vásquez" },
    { id: "juan-mendoza", name: "Lic. Juan José Mendoza" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
            <a href="tel:+1412514827" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Phone className="w-4 h-4" />
              <span>412-514-827</span>
            </a>
            <a href="mailto:unidosinmigracion@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Mail className="w-4 h-4" />
              <span>unidosinmigracion@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Unidos Por Inmigración"
              className="h-16 md:h-20 lg:h-24 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-slate-900 transition whitespace-nowrap">
              {t("nav.inicio")}
            </Link>

            <Link to="/conoce-tus-derechos" className="text-gray-700 hover:text-slate-900 transition whitespace-nowrap">
              {t("nav.derechos")}
            </Link>

            {/* Immigration Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-slate-900 transition flex items-center gap-1 whitespace-nowrap">
                {t("nav.inmigracion")}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200">
                <Link to="/inmigracion/visas-empleo" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap">
                  {t("nav.inmigracion.visasEmpleo")}
                </Link>
                <Link to="/inmigracion/familiar" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap">
                  {t("nav.inmigracion.familiar")}
                </Link>
                <Link to="/inmigracion/humanitarias" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap">
                  {t("nav.inmigracion.humanitarias")}
                </Link>
                <Link to="/inmigracion/defensa-remocion" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap">
                  {t("nav.inmigracion.defensa")}
                </Link>
                <Link to="/inmigracion/asilo" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap">
                  {t("nav.inmigracion.asilo")}
                </Link>
              </div>
            </div>

            {/* Attorneys Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-slate-900 transition flex items-center gap-1 whitespace-nowrap">
                {t("nav.abogados")}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200">
                <Link to="/abogados" className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 font-semibold whitespace-nowrap">
                  Ver Todos
                </Link>
                <div className="border-t my-1"></div>
                {attorneys.map((attorney) => (
                  <Link
                    key={attorney.id}
                    to={`/abogados/${attorney.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap"
                  >
                    {attorney.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contacto" className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition whitespace-nowrap">
              {t("nav.contacto")}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-md hover:bg-slate-900 hover:text-white transition font-semibold whitespace-nowrap"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 flex flex-col gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-slate-900 transition">
                {t("nav.inicio")}
              </Link>

              <Link to="/conoce-tus-derechos" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-slate-900 transition">
                {t("nav.derechos")}
              </Link>

              {/* Immigration Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setImmigrationOpen(!immigrationOpen)}
                  className="text-gray-700 hover:text-slate-900 transition flex items-center gap-1 w-full"
                >
                  {t("nav.inmigracion")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${immigrationOpen ? 'rotate-180' : ''}`} />
                </button>
                {immigrationOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/inmigracion/visas-empleo" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900">
                      {t("nav.inmigracion.visasEmpleo")}
                    </Link>
                    <Link to="/inmigracion/familiar" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900">
                      {t("nav.inmigracion.familiar")}
                    </Link>
                    <Link to="/inmigracion/humanitarias" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900">
                      {t("nav.inmigracion.humanitarias")}
                    </Link>
                    <Link to="/inmigracion/defensa-remocion" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900">
                      {t("nav.inmigracion.defensa")}
                    </Link>
                    <Link to="/inmigracion/asilo" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900">
                      {t("nav.inmigracion.asilo")}
                    </Link>
                  </div>
                )}
              </div>

              {/* Attorneys Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setAttorneysOpen(!attorneysOpen)}
                  className="text-gray-700 hover:text-slate-900 transition flex items-center gap-1 w-full"
                >
                  {t("nav.abogados")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${attorneysOpen ? 'rotate-180' : ''}`} />
                </button>
                {attorneysOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/abogados" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-slate-900 font-semibold">
                      {t("nav.abogados")}
                    </Link>
                    {attorneys.map((attorney) => (
                      <Link
                        key={attorney.id}
                        to={`/abogados/${attorney.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-gray-600 hover:text-slate-900"
                      >
                        {attorney.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition text-center">
                {t("nav.contacto")}
              </Link>

              <button
                onClick={toggleLanguage}
                className="border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-md hover:bg-slate-900 hover:text-white transition font-semibold"
              >
                {language === "es" ? "English" : "Español"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}