import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    desc: "A scalable online store with secure checkout, inventory management, and integrated analytics to boost sales.",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Apps",
    desc: "A user-friendly banking app with real-time transactions, bill payments, and enhanced security features.",
  },
  {
    id: 3,
    title: "Brand Logo Design",
    category: "Branding",
    desc: "A modern and timeless logo crafted to reflect the brand’s identity and connect with its target audience.",
  },
  {
    id: 4,
    title: "Real Estate Website",
    category: "Web Development",
    desc: "A responsive real estate platform with property listings, advanced search filters, and appointment booking.",
  },
  {
    id: 5,
    title: "Fitness App UI/UX",
    category: "Mobile Apps",
    desc: "An intuitive fitness tracking app interface designed for progress tracking, workout plans, and motivation.",
  },
];

const categories = ["All", "Web Development", "Mobile Apps", "Branding"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Projects We Have Done
        </motion.h2>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-600 font-medium">
                  {project.category}
                </p>
                <p className="mt-3 text-gray-600">{project.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
