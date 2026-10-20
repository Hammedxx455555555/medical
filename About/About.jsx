import AboutImage from "../Constants/jh.webp"
import Testimonials from "./Reviews"
import CoreValues from './Values'
import { motion } from "framer-motion"
const About = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImage}
              alt="About SGCREATION"
              className="rounded-2xl shadow-lg max-w-md w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800">
              About <span className="text-indigo-600">SGCREATION</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At SGCREATION, we are passionate about building modern, responsive,
              and scalable digital solutions. Our team of skilled developers and
              designers collaborate to bring your ideas to life with creativity and
              precision.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a focus on innovation and client satisfaction, we specialize in
              crafting web applications, branding solutions, and custom software
              tailored to your business needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses with technology that inspires
              growth and delivers real value in the digital world.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
                <a href="tel:+2349131624545">+234 913 162 4545</a>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
              Transforming Ideas <br />
              <span className="text-indigo-600">into Digital Success Stories</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-indigo-600">SGCREATION</span>, 
              we believe every great product starts with an idea. 
              Our team takes those ideas and transforms them into powerful, 
              scalable, and user-friendly digital solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s building intuitive websites, robust applications, 
              or branding that stands out, we craft success stories that leave 
              a lasting impact in the digital world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With our blend of creativity and technology, your vision 
              becomes more than just a project — it becomes a journey of 
              innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

<CoreValues/>
<Testimonials/>

    </>
  )
}

export default About
