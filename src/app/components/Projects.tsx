import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "Unilink",
    description: "A chat app built using Firebase and React Native.",
    category: "Frontend",
    technologies: ["React Native", "TailwindCSS"],
    imageUrl: "/path-to-your-image/unilink.png",
  },
  {
    name: "Photogram",
    description: "Instagram clone made when I was in 8th grade.",
    category: "Frontend",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/path-to-your-image/photogram.png",
  },
  {
    name: "Shopping App",
    description: "Currently working on this project.",
    category: "Frontend",
    technologies: ["React Native"],
    imageUrl: "/path-to-your-image/shoppingapp.png",
  },
  {
    name: "Event Management App",
    description: "An app to manage events efficiently.",
    category: "DevOps",
    technologies: ["React Native", "Tailwindcss"],
    imageUrl: "/path-to-your-image/eventapp.png",
  },
];

const categories = ["All", "Frontend"];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to card
      const y = e.clientY - rect.top; // Mouse Y relative to card
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateX = ((y - midY) / midY) * 10; // Tilt factor for Y-axis
      const rotateY = ((x - midX) / midX) * 10; // Tilt factor for X-axis

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset tilt on mouse leave
    }
  };

  return (
    <section id="projects" className="py-14 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl md:text-4xl font-bold mb-10"
        >
          Things I've Built
        </motion.h2>

        <div className="flex justify-center mb-6 space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 font-semibold rounded-md ${
                selectedCategory === category
                  ? "bg-purple-700 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:bg-purple-600 transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              id={`card-${index}`}
              variants={itemVariants}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative bg-gray-900 p-5 rounded-lg shadow-lg border border-gray-800 hover:shadow-2xl transition-shadow duration-300 h-[320px] w-[280px] mx-4 flex flex-col justify-between"
              style={{
                borderImage: "linear-gradient(135deg, #000, #102b3f) 1",
              }}
            >
              {/* Project Image */}
              <div className="h-[120px] w-full mb-3">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-lg font-bold mb-1 text-white">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {project.description}
              </p>

              {/* Tech Icons/Tags */}
              <div className="flex space-x-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs text-gray-100 bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Floating Button (Link to Project) */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-purple-600 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H3m0 0l4-4m-4 4l4 4m10-8v8m0 0l4-4m-4 4l4-4"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
