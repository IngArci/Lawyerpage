import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compasión",
      description: "Entendemos que cada caso representa vidas reales y familias que dependen de nosotros.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos esforzamos por brindar el más alto nivel de servicio legal y resultados para nuestros clientes.",
    },
    {
      icon: Users,
      title: "Dedicación",
      description: "Estamos comprometidos con cada caso, trabajando incansablemente por los mejores resultados.",
    },
    {
      icon: TrendingUp,
      title: "Experiencia",
      description: "Más de 15 años navegando las complejidades del sistema de inmigración estadounidense.",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Casos Exitosos" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "98%", label: "Tasa de Satisfacción" },
    { number: "10000+", label: "Clientes Atendidos" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acerca de Nosotros
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Somos un bufete de abogados líder en derecho de inmigración, dedicado a 
            ayudar a individuos, familias y empresas a alcanzar sus sueños en Estados Unidos.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fundado en 2009, nuestro bufete nació de la convicción de que cada persona 
                  merece la oportunidad de perseguir una vida mejor en Estados Unidos. Comenzamos 
                  con un pequeño equipo y una gran visión: brindar servicios legales de inmigración 
                  de la más alta calidad con compasión y dedicación.
                </p>
                <p>
                  A lo largo de más de 15 años, hemos ayudado a miles de familias a reunirse, 
                  profesionales a construir sus carreras, y personas vulnerables a encontrar 
                  protección y seguridad. Nuestro éxito se mide no solo en casos ganados, sino 
                  en las vidas transformadas.
                </p>
                <p>
                  Hoy, somos un equipo de abogados especializados, paralegales experimentados, 
                  y personal dedicado que habla múltiples idiomas y entiende las necesidades 
                  únicas de nuestras comunidades diversas.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NzA3MTI4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo de abogados"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nuestros Logros
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            ¿Por Qué Elegirnos?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Experiencia Comprobada
              </h3>
              <p className="text-gray-700">
                Más de 15 años manejando exitosamente todo tipo de casos de inmigración, 
                desde los más simples hasta los más complejos.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Atención Personalizada
              </h3>
              <p className="text-gray-700">
                Cada cliente recibe atención individual. No eres solo un número de caso - 
                eres parte de nuestra familia.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comunicación Clara
              </h3>
              <p className="text-gray-700">
                Explicamos cada paso del proceso en tu idioma, sin jerga legal confusa. 
                Siempre estamos disponibles para tus preguntas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Servicios en Español
              </h3>
              <p className="text-gray-700">
                Todo nuestro personal habla español fluidamente. Puedes comunicarte 
                cómodamente en tu idioma natal.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tarifas Transparentes
              </h3>
              <p className="text-gray-700">
                Sin costos ocultos. Desde el principio sabrás exactamente cuánto 
                costará tu caso.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Consulta Inicial Gratuita
              </h3>
              <p className="text-gray-700">
                Evaluamos tu caso sin costo. Recibirás asesoría honesta sobre tus 
                opciones antes de tomar cualquier decisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Conoce a Nuestros Abogados
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Nuestro equipo de abogados especializados está listo para ayudarte.
          </p>
          <Link 
            to="/abogados"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition font-semibold"
          >
            Ver Nuestro Equipo
          </Link>
        </div>
      </section>
    </div>
  );
}
