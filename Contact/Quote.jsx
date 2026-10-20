import { motion } from "framer-motion"

export function QuoteSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          “Transforming Ideas into Digital Success Stories”
        </h2>
        <p className="text-lg mb-8 text-black">
          We believe in turning visions into reality. Let’s bring your next big project to life.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-indigo-100 transition"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  )
}
