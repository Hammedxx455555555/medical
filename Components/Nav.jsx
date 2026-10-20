import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"
import SgLogo from "../Constants/sg.jpg"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className=" bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        
        <Link to="/" className="flex items-center">
        <img src={SgLogo} className="rounded-full h-24 w-24"/>
          <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
            SGCREA<span className="text-yellow-300">TION</span>
          </h1>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex items-center space-x-6 text-black">
          <Link to="/" className="font-medium hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about-us" className="font-medium hover:text-yellow-300 transition">
            About
          </Link>
          <Link to="/services" className="font-medium hover:text-yellow-300 transition">
            Services
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center font-medium hover:text-yellow-300 focus:outline-none">
              Company Profile
              <ChevronDown size={18} className="ml-1" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute mt-2 w-56 bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Link
                    to="/projects"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/teams"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact-us" className="font-medium hover:text-yellow-300 transition">
            Contact
          </Link>

          
         
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}   
              className="block px-5 py-3 font-medium text-gray-700 hover:text-yellow-300"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMobileOpen(false)}   
              className="block px-5 py-3 font-medium text-gray-700 hover:text-yellow-300"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}   
              className="block px-5 py-3 font-medium text-gray-700 hover:text-yellow-300"
            >
              Services
            </Link>

            <div className="borderless">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center px-5 py-3 font-medium text-gray-700 hover:text-yellow-300"
              >
                Company Profile
                <ChevronDown
                  size={18}
                  className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-gray-50 shadow-md"
                  >
                    <Link
                      to="/projects"
                      onClick={() => setMobileOpen(false)}   
                      className="block px-7 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/teams"
                       onClick={() => setMobileOpen(false)}   
                       className="block px-7 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Our Team
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}   
              className="block px-5 py-3 font-medium text-gray-700 hover:text-yellow-300"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
