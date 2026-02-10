import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Linkedin, Award } from "lucide-react";
import { Link } from "react-router";

const attorneys = [
  {
    id: "maria-gonzalez",
    name: "María González",
    title: "Socia Principal",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Visas de Empleo", "Green Cards", "Naturalización"],
    bar: "State Bar of California",
    education: "J.D., Harvard Law School",
    experience: "15+ años",
  },
  {
    id: "carlos-rodriguez",
    name: "Carlos Rodríguez",
    title: "Socio",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Defensa de Remoción", "Asilo", "Apelaciones"],
    bar: "State Bar of Texas",
    education: "J.D., Georgetown University Law Center",
    experience: "12+ años",
  },
  {
    id: "ana-martinez",
    name: "Ana Martínez",
    title: "Abogada Asociada",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Inmigración Familiar", "Visas Humanitarias", "VAWA"],
    bar: "State Bar of New York",
    education: "J.D., Columbia Law School",
    experience: "8+ años",
  },
];

export default function Attorneys() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Abogados
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Conoce al equipo de abogados especializados que trabajará incansablemente 
            para lograr tus objetivos de inmigración.
          </p>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <div key={attorney.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <ImageWithFallback
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-blue-900 font-semibold mb-4">{attorney.title}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{attorney.bar}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{attorney.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{attorney.experience} de experiencia</span>
                    </div>
                  </div>

                  <Link 
                    to={`/abogados/${attorney.id}`}
                    className="block w-full text-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition font-semibold"
                  >
                    Ver Perfil Completo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            ¿Por Qué Nuestro Equipo?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Educación de Élite
              </h3>
              <p className="text-gray-600">
                Graduados de las mejores escuelas de derecho del país, con 
                especializaciones en inmigración.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comunicación Directa
              </h3>
              <p className="text-gray-600">
                Acceso directo a tu abogado asignado. No serás transferido a 
                múltiples personas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Red Profesional
              </h3>
              <p className="text-gray-600">
                Conexiones con profesionales legales en todo el país para 
                apoyar casos complejos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Comenzar?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Agenda una consulta gratuita con uno de nuestros abogados especializados.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition font-semibold"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
