import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import illustrationImage from "@/app/images/me.svg";
import InstagramIcon from "@/app/images/insta.svg";
import TwitterIcon from "@/app/images/twitter.svg";
import GitHubIcon from "@/app/images/github.svg";
import ThreadsIcon from "@/app/images/thread.svg";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/madan___2007",
      icon: InstagramIcon,
      alt: "Instagram",
    },
    { href: "https://x.com/imadanbhat", icon: TwitterIcon, alt: "Twitter" },
    { href: "https://github.com/Madan-Bhat", icon: GitHubIcon, alt: "GitHub" },
    {
      href: "https://www.threads.net/@madan___2007",
      icon: ThreadsIcon,
      alt: "Threads",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r h-20 blur-3xl -top-20 from-blue-300 via-teal-400 to-pink-500 opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col mt-8 items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">
              Hi there, I'm
            </span>
            <br />
            <span className="text-white">Madan Bhat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl mb-6 max-w-lg text-gray-300 leading-relaxed"
          >
            I'm a passionate developer with 3 years of experience in creating
            seamless and intuitive digital experiences. I am good at ReactJS,
            React Native, and JavaScript, and I'm always eager to learn and
            build innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#projects"
              className="group relative px-6 py-3 bg-white text-black font-semibold rounded-md shadow-lg transition duration-300 text-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Projects</span>
              <span className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a>
            <motion.a
              href="mailto:imadanbhat@gmail.com"
              className="group relative px-6 py-3 border-2 border-white text-white font-semibold rounded-md transition duration-300 text-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 delay-75"></span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-[500px]">
            <Image
              src={illustrationImage}
              alt="Madan Bhat Illustration"
              layout="fill"
              objectFit="contain"
              quality={100}
              className="object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
