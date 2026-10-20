import { motion } from "framer-motion";
import Stanley from "../Constants/psictech.jpg"

import Eric from "../Constants/eric.jpeg"
const teamMembers = [
  {
    id: 2,
    name: "Stanley Ebiwanno",
    role: "Database/Backend Developer",
    bio: "Stanley is a skilled Database Manager with experience in designing, optimizing, and maintaining reliable databases. He ensures data accuracy, security, and performance, helping businesses make smarter, data-driven decisions.",
    image: Stanley,
  },
  {
    id: 3,
    name: "Hammed Usman",
    role: "Web Developer",
    bio :"Usman is a dedicated Web Developer with expertise in building responsive, scalable websites and applications. He focuses on clean code, performance, and creating digital solutions that help businesses grow online.",
    image: "https://via.placeholder.com/160",
  },
  {
    id: 4,
    name: "Eric",
    role: "Frontend Developer",
    bio: "Eric is a skilled Frontend Developer who specializes in building responsive, user-friendly interfaces with React, Tailwind CSS, and modern web tools. He focuses on performance, accessibility, and turning design ideas into seamless digital experiences.",
    image: Eric,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
      
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our team is made up of passionate professionals dedicated to
          transforming ideas into reality and delivering excellence in every
          project.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 text-center transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-600 font-medium">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
