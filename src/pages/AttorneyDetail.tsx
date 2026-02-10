import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Briefcase, GraduationCap, Languages, ArrowLeft } from "lucide-react";

const attorneysData: { [key: string]: any } = {
  "maria-gonzalez": {
    name: "María González",
    title: "Socia Principal",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Visas de Empleo", "Green Cards", "Naturalización", "Visas EB-5"],
    bar: ["State Bar of California", "American Immigration Lawyers Association (AILA)"],
    education: [
      "J.D., Harvard Law School",
      "B.A. International Relations, Stanford University",
    ],
    languages: ["Español", "Inglés", "Portugués"],
    experience: "15+ años",
    bio: [
      "María González es la socia fundadora de nuestro bufete con más de 15 años de experiencia en derecho de inmigración. Se especializa en casos complejos de visas de empleo y ha ayudado a cientos de empresas a traer talento internacional a Estados Unidos.",
      "Graduada con honores de Harvard Law School, María comenzó su carrera en un bufete corporativo de Nueva York antes de fundar su propia práctica enfocada exclusivamente en inmigración. Su pasión por ayudar a inmigrantes nace de su propia experiencia como hija de inmigrantes.",
      "María es reconocida como una de las mejores abogadas de inmigración del país por varias publicaciones legales. Frecuentemente da conferencias sobre temas de inmigración empresarial y ha testificado ante comités del Congreso sobre reformas migratorias.",
    ],
    achievements: [
      "Reconocida como 'Super Lawyer' por 10 años consecutivos",
      "Presidente del Capítulo Local de AILA (2018-2020)",
      "Más de 2000 casos de visas H-1B aprobados",
      "Tasa de aprobación del 98% en peticiones EB-1",
    ],
    publications: [
      "\"Navegando las Complejidades de las Visas H-1B\" - Immigration Law Journal, 2023",
      "\"Estrategias para Peticiones EB-5 Exitosas\" - Business Immigration Magazine, 2022",
    ],
  },
  "carlos-rodriguez": {
    name: "Carlos Rodríguez",
    title: "Socio",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Defensa de Remoción", "Asilo", "Apelaciones", "Litigación"],
    bar: ["State Bar of Texas", "American Immigration Lawyers Association (AILA)"],
    education: [
      "J.D., Georgetown University Law Center",
      "B.A. Political Science, University of Texas at Austin",
    ],
    languages: ["Español", "Inglés"],
    experience: "12+ años",
    bio: [
      "Carlos Rodríguez es socio del bufete y lidera nuestro equipo de defensa de deportación. Con más de 12 años de experiencia en litigación de inmigración, Carlos ha defendido exitosamente a cientos de personas en procedimientos de remoción.",
      "Antes de unirse al bufete, Carlos trabajó como defensor público de inmigración, donde desarrolló su pasión por defender los derechos de los más vulnerables. Su experiencia en corte es invaluable para casos complejos que requieren representación agresiva.",
      "Carlos es conocido por su dedicación incansable a cada caso y su habilidad para encontrar soluciones creativas en situaciones aparentemente imposibles. Ha ganado casos de asilo con tasas de negación superiores al 90%.",
    ],
    achievements: [
      "Más de 500 casos de deportación defendidos exitosamente",
      "Tasa de éxito del 85% en casos de asilo",
      "Reconocido por Texas Monthly como 'Rising Star'",
      "Miembro del Panel de Apelaciones de AILA",
    ],
    publications: [
      "\"Estrategias de Defensa en Casos de Deportación\" - Immigration Law Today, 2024",
      "\"El Arte de la Preparación de Testigos en Casos de Asilo\" - AILA Journal, 2023",
    ],
  },
  "ana-martinez": {
    name: "Ana Martínez",
    title: "Abogada Asociada",
    image: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGxhd3llciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc1ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialties: ["Inmigración Familiar", "Visas Humanitarias", "VAWA", "Visa U"],
    bar: ["State Bar of New York", "American Immigration Lawyers Association (AILA)"],
    education: [
      "J.D., Columbia Law School",
      "B.A. Psychology, UC Berkeley",
    ],
    languages: ["Español", "Inglés", "Francés"],
    experience: "8+ años",
    bio: [
      "Ana Martínez se especializa en inmigración familiar y casos humanitarios. Con su formación en psicología y derecho, Ana entiende profundamente el impacto emocional que los procesos de inmigración tienen en las familias.",
      "Ana ha dedicado su carrera a ayudar a víctimas de violencia doméstica, crímenes y tráfico humano a obtener protección legal en Estados Unidos. Su enfoque compasivo y su experiencia legal han resultado en cientos de casos exitosos de VAWA, Visa U y Visa T.",
      "Antes de unirse al bufete, Ana trabajó con varias organizaciones sin fines de lucro enfocadas en los derechos de inmigrantes y víctimas de abuso. Esta experiencia le dio una perspectiva única sobre las necesidades de poblaciones vulnerables.",
    ],
    achievements: [
      "Más de 300 peticiones VAWA aprobadas",
      "Tasa de éxito del 95% en visas U y T",
      "Premiada por la Coalición contra la Violencia Doméstica",
      "Capacitadora certificada en trauma-informed care",
    ],
    publications: [
      "\"Protección Legal para Víctimas de Violencia Doméstica\" - Family Law Review, 2024",
      "\"Navegando el Sistema de Visa U: Mejores Prácticas\" - AILA Conference Materials, 2023",
    ],
  },
};

export default function AttorneyDetail() {
  const { id } = useParams();
  const attorney = id ? attorneysData[id] : null;

  if (!attorney) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Abogado no encontrado
          </h1>
          <Link to="/abogados" className="text-blue-900 hover:underline">
            Volver a Abogados
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/abogados" className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition">
            <ArrowLeft className="w-5 h-5" />
            Volver a Abogados
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <ImageWithFallback
                src={attorney.image}
                alt={attorney.name}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{attorney.name}</h1>
              <p className="text-2xl text-gray-300 mb-6">{attorney.title}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Briefcase className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Experiencia</p>
                      <p className="text-gray-300">{attorney.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Languages className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Idiomas</p>
                      <p className="text-gray-300">{attorney.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Licencias</p>
                      {attorney.bar.map((license: string, index: number) => (
                        <p key={index} className="text-gray-300 text-sm">{license}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-semibold mb-3">Especialidades</p>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((specialty: string, index: number) => (
                    <span 
                      key={index}
                      className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Biografía</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            {attorney.bio.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-gray-900">Educación</h2>
          </div>
          <div className="space-y-3">
            {attorney.education.map((degree: string, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-900">{degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-gray-900">Logros y Reconocimientos</h2>
          </div>
          <ul className="space-y-3">
            {attorney.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-900 text-xl">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publications */}
      {attorney.publications && attorney.publications.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publicaciones</h2>
            <ul className="space-y-3">
              {attorney.publications.map((publication: string, index: number) => (
                <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic">{publication}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Quieres trabajar con {attorney.name.split(' ')[0]}?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Agenda una consulta gratuita para discutir tu caso.
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
