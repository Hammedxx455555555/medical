import { motion } from "framer-motion"
import Image from "../Constants/hh.webp"
import Hero from "./Hero"
import Stats from "./Stats"
import {Link} from "react-router-dom"
// import { LoaderCircle } from "lucide-react"
// import { useState } from "react"

const Home = () => { 
  
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-8 px-6 lg:px-16 py-12">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={Image}
            className="w-full h-auto rounded-2xl shadow-lg"
            alt="Web design illustration"
          />
        </motion.div>

        <motion.div
          className="space-y-6 sm:text-center lg:text-left max-w-xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
         {/* Crafting Stunning Websites Tailored for Your Success
          </h5> <h5 className="text-gray-600 font-medium tracking-wide uppercase">
             */}

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Affordable Web Design for Businesses
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We specialize in crafting visually appealing and highly functional websites that
            elevate your brand’s online visibility. Our expert team delivers custom web
            solutions tailored to your unique needs, ensuring an unforgettable user
            experience and impressive business growth.
          </p>

          <div className="flex sm:justify-center lg:justify-start">
           <Link to="/contact-us"> 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl bg-yellow-500 text-white px-6 py-3 font-semibold shadow-md hover:bg-yellow-600 transition"
            >
              Book Free Consultation
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <Hero />
      <Stats/>
    </>
  )
}

export default Home
