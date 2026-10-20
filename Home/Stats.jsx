import { motion } from "framer-motion"
import CountUp from "react-countup"

const Stats = () => {
  const stats = [
    { title: "Satisfied Clients", value: 50 },
    { title: "Projects Completed", value: 101 },
    { title: "Happy Customers", value: 74 },
  ]

  return (
    <div className="py-16 px-6 lg:px-20 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <h3 className="text-4xl font-extrabold text-indigo-600 mb-3">
              <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
              +
            </h3>
            <p className="text-gray-700 font-medium">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Stats
