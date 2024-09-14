import { motion } from "framer-motion";
import Image from "next/image";
import illustrationImage from "@/app/images/me.svg";
import InstagramIcon from "@/app/images/insta.svg";
import TwitterIcon from "@/app/images/twitter.svg";
import GitHubIcon from "@/app/images/github.svg";
import ThreadsIcon from "@/app/images/thread.svg";
import Navbar from "./Navbar"; // Import the Navbar component

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Light effect */}
      <div className="absolute inset-0 bg-gradient-to-r h-20 blur-3xl -top-20 from-blue-300 via-teal-400 to-pink-500 opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-6 md:px-12">
        {/* Text Content */}
        <div className="flex flex-col mt-8 items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="  flex  w-fit bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent select-none"
          >
            Hi there, I am Madan Bhat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-xl mb-6 max-w-lg text-white"
          >
            I’m a passionate developer with 3 years of experience in creating
            seamless and intuitive digital experiences. I am good at ReactJS,
            React Native, and JavaScript, and I’m always eager to learn and
            build innovative solutions.
          </motion.p>

          {/* Social Media Buttons */}
          <div className="flex space-x-4 mb-6">
            <motion.a
              href="https://www.instagram.com/madan___2007"
              whileHover={{
                scale: 1.2,
                // boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-300"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.a>
            <motion.a
              href="https://x.com/imadanbhat"
              whileHover={{
                scale: 1.2,
                // boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-300"
            >
              <Image
                src={TwitterIcon}
                alt="Twitter"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.a>
            <motion.a
              href="https://github.com/Madan-Bhat"
              whileHover={{
                scale: 1.2,
                // boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-300"
            >
              <Image
                src={GitHubIcon}
                alt="GitHub"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.a>
            <motion.a
              href="https://www.threads.net/@madan___2007"
              whileHover={{
                scale: 1.2,
                // boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-300"
            >
              <Image
                src={ThreadsIcon}
                alt="Threads"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <motion.a
              href="#projects"
              className="px-4 py-2 md:px-6 md:py-3 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
            <motion.a
              href="mailto:imadanbhat@gmail.com"
              className="px-4 py-2 md:px-6 md:py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-xs md:max-w-md h-64 md:h-[500px]"
          >
            <Image
              src={illustrationImage}
              alt="Illustration"
              layout="fill"
              objectFit="contain"
              quality={100}
              className="object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
