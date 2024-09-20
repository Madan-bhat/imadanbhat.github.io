"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import ME from "@/app/images/me.jpg";

// Animations
const fadeInFromTop = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const bounceHover = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

const scrollButtonHover = {
  hover: {
    y: 10,
    transition: { type: "spring", stiffness: 200 },
  },
};

// List of skills
const skills = [
  "Node.js",
  "React",
  "React Native",
  "Git",
  "Firebase",
  "TailwindCSS",
  "Next.js",
];

// Helper function to generate random position
const randomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`, // Random positions from 10% to 90%
  left: `${Math.random() * 80 + 10}%`,
});

const Hero = () => {
  const { scrollY } = useScroll();
  const [skillPositions, setSkillPositions] = useState([]);

  // Parallax effect for different elements
  const backgroundY = useTransform(scrollY, [0, 300], ["0%", "50%"]);
  const imageY = useTransform(scrollY, [0, 300], ["0%", "-10%"]);
  const textY = useTransform(scrollY, [0, 300], ["0%", "20%"]);

  const socialLinks = [
    {
      href: "https://instagram.com/madan___2007",
      icon: Instagram,
      label: "Instagram",
    },
    { href: "https://twitter.com/imadanbhat", icon: Twitter, label: "Twitter" },
    { href: "https://github.com/Madan-Bhat", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/madan-bhat",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  // Generate random positions for the skills and ensure they're within bounds
  useEffect(() => {
    const positions = Array.from({ length: 15 }).map(() => randomPosition());
    setSkillPositions(positions);
  }, []);

  return (
    <section className="relative bg-animated w-full min-h-screen text-white flex flex-col justify-center items-center p-8 overflow-hidden">
      {/* Enhanced top light shadow */}
      <motion.div
        className="absolute inset-0 h-80 -top-40 bg-gradient-to-b from-white to-transparent opacity-40 blur-2xl pointer-events-none"
        style={{ y: backgroundY }}
      ></motion.div>

      {/* Main Section */}
      <div className="flex flex-col justify-center items-center w-full space-y-6">
        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInFromTop}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl mb-4 md:text-7xl font-bold leading-tight text-center"
          style={{
            textShadow: "0 4px 20px rgba(255, 255, 255, 0.5)",
            y: textY,
          }}
        >
          Hi, I'm Madan Bhat
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInFromBottom}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl mb-4 md:text-2xl text-gray-300 text-center"
          style={{
            textShadow: "0 4px 15px rgba(255, 255, 255, 0.5)",
            y: textY,
          }}
        >
          Mobile App & Web Developer
        </motion.h2>

        {/* Center Circular Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative w-40 h-40 md:w-72 md:h-72 rounded-full p-1"
          style={{
            background: "linear-gradient(145deg, #ffffff, #dcdcdc)",
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)",
            borderRadius: "100%",
            y: imageY,
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent">
            <Image
              src={ME}
              alt="Madan Bhat"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromBottom}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex items-center space-x-2 mt-24"
          style={{ y: textY }}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-400">
            Available for full-time positions
          </p>
        </motion.div>
      </div>

      {/* Randomly Positioned Skill Chips */}

      {/* Social Links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="absolute bottom-8 p-8 flex space-x-6"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={link.label}
            variants={bounceHover}
            whileHover="hover"
          >
            <link.icon size={24} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
