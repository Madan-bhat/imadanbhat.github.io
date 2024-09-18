import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import photogram from "@/app/images/photogram.jpeg";
import unilink from "@/app/images/unilink.jpeg";
import event_management from "@/app/images/event_management.jpeg";
import shopping_app from "@/app/images/shopping_app.jpeg";

const projects = [
  {
    name: "Unilink",
    description: "A chat app built using Firebase and React Native.",
    category: "Frontend",
    technologies: ["React Native", "TailwindCSS"],
    imageUrl: unilink,
  },
  {
    name: "Photogram",
    description: "Instagram clone made when I was in 8th grade.",
    category: "Frontend",
    technologies: ["React Native", "Firebase"],
    imageUrl: photogram,
  },
  {
    name: "Shopping App",
    description: "Currently working on this project.",
    category: "Frontend",
    technologies: ["React Native"],
    imageUrl: shopping_app,
  },
  {
    name: "Event Management App",
    description: "An app to manage events efficiently.",
    category: "DevOps",
    technologies: ["React Native", "Tailwindcss"],
    imageUrl: event_management,
  },
];

const categories = ["All", "Frontend"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-r  from-blue-400 via-teal-400 to-pink-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4"
        >
          Things I've Built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-lg text-gray-400 mb-12"
        >
          A showcase of my projects and experiments
        </motion.p>

        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                layout
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-10 h-10 text-white" />
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-800 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
