import { MonitorSmartphone, Globe2, ShoppingBag, PanelsTopLeft } from "lucide-react"
import { motion } from "framer-motion"
import LadyImage from "../Constants/sg.png"
import Proficiency from './Proficiency'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" }
  }),
}

const Hero = () => {
  return (
    <>
      <div className="relative h-auto mt-5 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-red-300 to-green-200 clip-slant"></div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          
          {[
            {
              icon: <MonitorSmartphone className="w-12 h-12 text-indigo-600 mx-auto mb-4" />,
              title: "Web Design & Development",
              text: "Our expert web designers and developers create stunning websites that leave a lasting impression. From captivating visuals to seamless functionality, we build user-friendly websites that turn visitors into loyal customers."
            },
            {
              icon: <Globe2 className="w-12 h-12 text-green-600 mx-auto mb-4" />,
              title: "Local SEO",
              text: "Unlock the full potential of your business with our targeted Local SEO strategies. Boost your visibility in France, and beyond, attracting local customers and increasing your online reach across Paris."
            },
            {
              icon: <ShoppingBag className="w-12 h-12 text-pink-600 mx-auto mb-4" />,
              title: "E-Commerce Solutions",
              text: "Drive your online sales to new heights with our E-Commerce solutions. We build secure, efficient, and visually appealing online stores that provide your customers with a seamless shopping experience."
            },
            {
              icon: <PanelsTopLeft className="w-12 h-12 text-purple-600 mx-auto mb-4" />,
              title: "CMS Development Solutions",
              text: "Unlock the power of CMS with our expert development services. Whether its WordPress, Shopify, or another CMS, we tailor the platform to suit your needs, enabling you to effortlessly manage and update your website."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              {card.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800">
              About <span className="text-yellow-300 uppercase">sgcreation</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-semibold uppercase text-gray-500">Sgcreation</span>, 
              we are passionate about helping businesses thrive online. 
              Our team of skilled designers and developers deliver 
              visually stunning, highly functional, and scalable 
              digital solutions tailored to your unique brand.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From website design, Local SEO, and E-Commerce to CMS solutions, 
              we craft strategies that drive visibility, engagement, 
              and sustainable growth. With a customer-first approach, 
              SGCREATION ensures your brand stands out in today’s competitive market.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={LadyImage}
              alt="Lady with SGCREATION shirt"
              className="rounded-xl shadow-xl max-w-md w-full"
            />
          </motion.div>
        </div>
      </div>

      <Proficiency/>
    </>
  )
}

export default Hero
