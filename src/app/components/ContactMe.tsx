import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function DevProfile() {
  const developer = {
    name: "Madan Bhat",
    skills: [
      "Frontend Development",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
    socials: {
      GitHub: "https://github.com/Madan-Bhat",
      LinkedIn: "https://linkedin.com/in/madan-bhat",
      Email: "mailto:madan.bhat@example.com",
    },
    bio: "I am a passionate frontend developer with a knack for creating interactive and visually appealing web applications. Let's build something amazing together!",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-transparent bg-gradient-to-r bg-clip-text from-[#b597f6] to-[#abc9e9] text-4xl md:text-5xl font-bold mb-8"
      >
        Have an idea in mind?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl mb-10"
      >
        Let's make it real!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-xl shadow-2xl text-white mb-6 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {developer.name}
        </h2>
        <p className="text-lg mb-6 text-gray-300">{developer.bio}</p>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {developer.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
        <div className="flex justify-center space-x-4">
          <a
            href={developer.socials.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={developer.socials.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={developer.socials.Email}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Let's Collaborate
      </motion.button>
    </div>
  );
}
