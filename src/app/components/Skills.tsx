import { motion } from "framer-motion";
import Image from "next/image";
import NodeIcon from "@/app/images/nodejs.svg";
import ReactIcon from "@/app/images/react.svg";
import ReactNativeIcon from "@/app/images/react-native.svg";
import FirebaseIcon from "@/app/images/firebase.svg";
import NextJSIcon from "@/app/images/nextjs.svg";
import TailwindIcon from "@/app/images/tailwindcss.svg";

const skills = [
  {
    name: "Node.js",
    icon: NodeIcon,
    shadowColor: "shadow-[#68A063]",
    description:
      "Building scalable server-side applications using JavaScript runtime.",
  },
  {
    name: "React",
    icon: ReactIcon,
    shadowColor: "shadow-[#61DAFB]",
    description:
      "Creating dynamic and high-performing user interfaces for web apps.",
  },
  {
    name: "React Native",
    icon: ReactNativeIcon,
    shadowColor: "shadow-[#61DAFB]",
    description:
      "Developing cross-platform mobile apps with a single codebase.",
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
    shadowColor: "shadow-[#FFCA28]",
    description:
      "Integrating serverless backend services like authentication and databases.",
  },
  {
    name: "Next.js",
    icon: NextJSIcon,
    shadowColor: "shadow-[#000000]",
    description:
      "Optimizing web applications with SSR (Server-Side Rendering) and SSG.",
  },
  {
    name: "TailwindCSS",
    icon: TailwindIcon,
    shadowColor: "shadow-[#38B2AC]",
    description:
      "Designing modern UI using a utility-first CSS framework for rapid styling.",
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-center text-transparent select-none bg-gradient-to-r bg-clip-text from-[#ffff] via=[#via-[#aab2ff]] to-[#eca0ff] text-3xl md:text-4xl font-bold mb-8">
          My Skills
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          These are the technologies I specialize in to build scalable,
          high-quality applications.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05, // Reduced from 1.2 to 1.05
                boxShadow: `0px 0px 20px ${skill.shadowColor}`,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center transition-transform duration-300 ease-in-out"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-lg mt-4">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2 max-w-xs">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
