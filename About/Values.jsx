import { Lightbulb, ShieldCheck, Star, Users } from "lucide-react" 

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      desc: "We constantly seek new ways to solve problems and create digital solutions that inspire growth and success.",
      icon: <Lightbulb className="w-12 h-12 text-indigo-600 mx-auto mb-4" />,
    },
    {
      title: "Integrity",
      desc: "We uphold honesty and transparency in everything we do, building trust with our clients and partners.",
      icon: <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />,
    },
    {
      title: "Excellence",
      desc: "We strive for top-quality results in every project, ensuring our solutions are impactful and long-lasting.",
      icon: <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />,
    },
    {
      title: "Collaboration",
      desc: "We believe teamwork and communication are the foundation of delivering meaningful digital experiences.",
      icon: <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            {value.icon}

            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {value.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues
