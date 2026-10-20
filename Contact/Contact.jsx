import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { QuoteSection } from "./Quote";

export function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // Replace with your EmailJS public key
      )
      // .then(
      //   (result) => {
      //     alert("✅ Message sent successfully!");
      //     form.current.reset();
      //   },
      //   (error) => {
      //     alert("❌ Something went wrong, try again.");
      //     console.log(error.text);
      //   }
      // );
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Let’s Talk About Your Project
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you need a website, app, or digital solution, we’re here to help you succeed.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="text-indigo-600" /> sgcreate6@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-indigo-600" /> +234 913 162 4545
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-indigo-600" /> Lagos, Nigeria
            </p>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      <QuoteSection/>
    </section>
  );
}
