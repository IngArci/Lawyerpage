import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Phone, Mail, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import teamImage from "figma:asset/5faa74f145a744201b8ca8357e9ef502d56e468f.png";

export default function Home() {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    { 
      title: t("nav.inmigracion.visasEmpleo"), 
      path: "/inmigracion/visas-empleo",
      description: t("home.services.employment"),
      image: "https://images.unsplash.com/photo-1762341119317-fb5417c18407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGRlc2t8ZW58MXx8fHwxNzcxMDM0OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      title: t("nav.inmigracion.familiar"), 
      path: "/inmigracion/familiar",
      description: t("home.services.family"),
      image: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZmFtaWx5JTIwaGFwcHklMjB0b2dldGhlcnxlbnwxfHx8fDE3NzEwMzQ5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      title: t("nav.inmigracion.humanitarias"), 
      path: "/inmigracion/humanitarias",
      description: t("home.services.humanitarian"),
      image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGxhdyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzEwMzQ5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Miami, FL",
      text: language === "es" 
        ? "Gracias a Unidos Por Inmigración, mi familia finalmente pudo reunirse en Estados Unidos. Su profesionalismo y dedicación fueron excepcionales. Siempre estuvieron disponibles para responder nuestras preguntas y nos guiaron en cada paso del proceso."
        : "Thanks to Unidos Por Inmigración, my family was finally able to reunite in the United States. Their professionalism and dedication were exceptional. They were always available to answer our questions and guided us through every step of the process.",
      image: "",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "Houston, TX",
      text: language === "es"
        ? "Mi caso de asilo era complejo, pero el equipo de Unidos Por Inmigración luchó incansablemente por mí. Su experiencia y conocimiento del sistema legal de inmigración fue fundamental para ganar mi caso. Los recomiendo al 100%."
        : "My asylum case was complex, but the Unidos Por Inmigración team fought tirelessly for me. Their experience and knowledge of the immigration legal system was fundamental to winning my case. I recommend them 100%.",
      image: "",
      rating: 5
    },
    {
      name: "Ana Martínez",
      location: "Los Angeles, CA",
      text: language === "es"
        ? "Obtuve mi visa de trabajo gracias a su excelente asesoría. El proceso fue más rápido de lo que esperaba y siempre me mantuvieron informada. Su atención personalizada hace toda la diferencia. ¡Estoy muy agradecida!"
        : "I obtained my work visa thanks to their excellent advice. The process was faster than I expected and they always kept me informed. Their personalized attention makes all the difference. I'm very grateful!",
      image: "",
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGxhd3llciUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2OTk2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Oficina de abogados"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("home.hero.title")}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t("home.hero.subtitle")}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                to="/contacto"
                className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition text-center transform hover:scale-105 duration-300"
              >
                {t("home.hero.cta1")}
              </Link>
              <a 
                href="tel:+1412514827"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition text-center transform hover:scale-105 duration-300"
              >
                {t("home.hero.cta2")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Professional Section */}
      <section className="py-16 md:py-24 bg-white border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === "es" ? "Nuestro Equipo Profesional" : "Our Professional Team"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "es"
                ? "Un equipo dedicado de expertos en inmigración comprometidos con su éxito"
                : "A dedicated team of immigration experts committed to your success"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <img
              src={teamImage}
              alt="Unidos Por Inmigración Team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              to="/abogados"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              {language === "es" ? "Conoce a Nuestros Abogados" : "Meet Our Attorneys"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === "es" ? "Nuestra Filosofía" : "Our Philosophy"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "es" 
                ? "Comprometidos con la excelencia y dedicados a proteger sus derechos"
                : "Committed to excellence and dedicated to protecting your rights"}
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Mission */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGxhdyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzEwMzQ5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Nuestra Misión"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-8 bg-amber-50">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {t("about.mission.title")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("about.mission.text")}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZmFtaWx5JTIwaGFwcHklMjB0b2dldGhlcnxlbnwxfHx8fDE3NzEwMzQ5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Nuestra Visión"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-8 bg-slate-50">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {t("about.vision.title")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("about.vision.text")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <Link
                  to={service.path}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contacto"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition transform hover:scale-105 duration-300"
            >
              {t("home.services.viewAll")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-xl text-gray-300">
              {t("home.testimonials.subtitle")}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="bg-slate-800 rounded-lg p-8 md:p-12"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-amber-600"
                  />
                </motion.div>
                <motion.div
                  className="flex-1 text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Quote className="w-12 h-12 text-amber-600 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-xl text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex gap-1 mt-2 justify-center md:justify-start">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-amber-600 text-xl"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("home.consultation.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t("home.consultation.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+1412514827"
              className="flex items-center gap-3 justify-center text-gray-700 hover:text-slate-900 transition"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t("home.consultation.phone")}</div>
                <div className="text-lg">412-514-827</div>
              </div>
            </motion.a>
            <motion.a
              href="mailto:unidosinmigracion@gmail.com"
              className="flex items-center gap-3 justify-center text-gray-700 hover:text-slate-900 transition"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t("home.consultation.email")}</div>
                <div className="text-lg">unidosinmigracion@gmail.com</div>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contacto"
              className="inline-block bg-amber-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-amber-700 transition text-lg transform hover:scale-105 duration-300"
            >
              {t("home.consultation.cta")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("home.cta.subtitle")}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition transform hover:scale-105 duration-300"
              >
                {t("home.cta.button1")}
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/abogados"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition transform hover:scale-105 duration-300"
              >
                {t("home.cta.button2")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}