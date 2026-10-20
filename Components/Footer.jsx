import { Link } from "react-router-dom"
import SgLogo from "../Constants/sg.jpg"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <img src={SgLogo} className=" rounded-full h-20 w-20 text-white"/>
          <p className="mt-4 text-gray-400">
            Transforming ideas into digital success stories with innovation,
            creativity, and technology.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-indigo-400">About</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400">Services</Link></li>
            <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
            <li><Link to="/contact-us" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>📍   Lagos, Nigeria</li>
            <li>📞 +234 913 162 4545</li>
            <li>✉️ sgcreate6@gmail.com</li>
          </ul>
        </div>
            
        <div>
          <h3 className="text-lg font-semibold text-white">Send a Message</h3>
          <form className="mt-4 space-y-3" href="mailto:sgcreate6@gmail.com">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SGCREATION. All Rights Reserved.
      </div>
    </footer>
  );
}
