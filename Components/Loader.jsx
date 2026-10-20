import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const SplashScreen = ({ onFinish }) => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "SGCREATION"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(interval)
        setTimeout(() => onFinish(), 1000)
      }
    }, 150) 

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.h1
        className="text-white text-4xl font-extrabold tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
        <span className="animate-pulse">|</span>
      </motion.h1>
    </div>
  )
}

const Loader = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <div>

          <h1 className="text-center mt-20 text-3xl font-bold text-gray-800">
            Welcome to SGCREATION 🚀
          </h1>
        </div>
      )}
    </>
  )
}

export default Loader
