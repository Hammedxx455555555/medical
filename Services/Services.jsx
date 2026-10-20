import { motion } from "framer-motion"
import WhyChooseUs from './Why'
import Ewa from '../Constants/ewanike.png'
import Cms from "../Constants/cms.png"
import Seo from "../Constants/seo.jpg"
import Web from "../Constants/web.png"
const services = [
  {
    title: "Web Design & Development",
    desc: "Pixel-perfect, responsive websites tailored to your brand with performance and accessibility best practices.",
    bullets: ["Responsive UI/UX", "SEO-friendly markup", "Fast load times", "CMS or custom builds"],
    img: Web,
  },
  {
    title: "Local SEO",
    desc: "Get found by nearby customers with optimized listings, on-page SEO, and review strategy.",
    bullets: ["Google Business Profile", "On-page optimization", "Citations & backlinks", "Review strategy"],
    img: Seo,
  },
  {
    title: "E-Commerce Solutions",
    desc: "High-converting online stores with secure checkout, inventory, and analytics integration.",
    bullets: ["Shopify/Custom carts", "Secure payments", "Product & inventory", "Conversion tracking"],
    img: Ewa,
  },
  {
    title: "CMS Development",
    desc: "Flexible content systems so your team can publish fast without breaking design or SEO.",
    bullets: ["Headless/Traditional CMS", "Role-based access", "Reusable components", "Content workflows"],
    img: Cms,
  },
]

const fadeLeft  = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
const fadeRight = { hidden: { opacity: 0, x:  40 }, visible: { opacity: 1, x: 0 } }

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We turn ideas into production-ready experiences—designed, built, and optimized for growth.
        </p>

        <div className="space-y-16">
          {services.map((s, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={s.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <motion.div
                  variants={isEven ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`${isEven ? "" : "md:order-2"}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={isEven ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className={`${isEven ? "" : "md:order-1"}`}
                >
                  <h3 className="text-2xl font-bold text-gray-800">{s.title}</h3>
                  <p className="text-gray-600 mt-3">{s.desc}</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-700">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

            <button className="px-6 py-3 mt-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
                <a href="tel:+2349131624545">+234 913 162 4545</a>
            </button>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      <WhyChooseUs/>
    </section>
  )
}
