import { motion } from "framer-motion";
import Image from "next/image";
import NodeIcon from "@/app/images/nodejs.svg";
import ReactIcon from "@/app/images/react.svg";
import ReactNativeIcon from "@/app/images/react-native.svg";
import FirebaseIcon from "@/app/images/firebase.svg";
import NextJSIcon from "@/app/images/nextjs.svg";
import TailwindIcon from "@/app/images/tailwindcss.svg";
import Javascript from "@/app/images/logo-javascript.svg";
import TypeScript from "@/app/images/typescript.svg";
import Android_Logo from "@/app/images/android-logo-2.svg";
import Arch_linux from "@/app/images/arch_linux.svg";
import Git from "@/app/images/git.png";

const skills = [
  { icon: NodeIcon, name: "Node.js" },
  { icon: ReactIcon, name: "React" },
  { icon: ReactNativeIcon, name: "React Native" },
  { icon: FirebaseIcon, name: "Firebase" },
  { icon: NextJSIcon, name: "Next.js" },
  { icon: TailwindIcon, name: "TailwindCSS" },
  { icon: TypeScript, name: "TypeScript" },
  { icon: Android_Logo, name: "Android" },
  { icon: Javascript, name: "JavaScript" },
  { icon: Git, name: "Git" },
  { icon: Arch_linux, name: "Arch Linux" },
];

export default function Skills() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          style={{
            textShadow: "0 8px 10px rgba(255, 255, 255, 0.5)",
          }}
          className="text-white text-3xl font-bold mb-12"
        >
          Tools I Work With
        </h2>
        <div className="flex py-6 justify-center flex-wrap gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative w-14 h-14 md:w-20 md:h-20 flex justify-center items-center rounded-full border-2 border-gray-700 transition-transform duration-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
              }}
              whileInView={{
                y: [10, -10], // Parallax effect with slight up and down movement
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity, // Makes the animation loop
                repeatType: "mirror", // The animation will reverse and repeat
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
