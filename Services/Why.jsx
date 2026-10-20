import { motion } from "framer-motion"
import { ShieldCheck, Users, Sparkles, Clock } from "lucide-react" 

const reasons = [
  {
    title: "Trusted & Reliable",
    desc: "We deliver projects on time with 100% transparency, building long-term trust with our clients.",
    icon: ShieldCheck,
  },
  {
    title: "Customer-Centric",
    desc: "Your goals guide our process. We prioritize communication, feedback, and satisfaction.",
    icon: Users,
  },
  {
    title: "Innovative Solutions",
    desc: "We craft modern, scalable, and future-ready solutions that make your business stand out.",
    icon: Sparkles,
  },
  {
    title: "24/7 Support",
    desc: "Our team is available around the clock to ensure your digital presence stays smooth and secure.",
    icon: Clock,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We don’t just build projects—we build partnerships. Here’s what makes us different:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
