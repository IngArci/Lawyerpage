import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold mb-4">Unidos Por Inmigración</h3>
            <p className="text-gray-400 mb-4">
              {t("footer.about")}
            </p>
            <div className="flex gap-3">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  1050 Connecticut Ave NW #500<br />
                  Washington, DC 20036
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1412514827" className="text-gray-400 hover:text-white transition">
                  412-514-827
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:unidosinmigracion@gmail.com" className="text-gray-400 hover:text-white transition">
                  unidosinmigracion@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Unidos Por Inmigración. {t("footer.rights")}</p>
        </motion.div>
      </div>
    </footer>
  );
}
