import { motion } from "framer-motion"

const Proficiency = () => {
  const skills = [
    { title: "Web Design & Development", level: 95, gradient: "from-green-400 to-green-600" },
    { title: "Local SEO", level: 85, gradient: "from-blue-400 to-blue-600" },
    { title: "E-Commerce Solutions", level: 90, gradient: "from-pink-400 to-pink-600" },
    { title: "CMS Development", level: 80, gradient: "from-purple-400 to-purple-600" },
  ]

  return (
    <div className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Our Proficiency
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold text-gray-700">{skill.title}</span>
              <span className="text-gray-600 font-medium">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                className={`h-4 rounded-full bg-gradient-to-r ${skill.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proficiency
