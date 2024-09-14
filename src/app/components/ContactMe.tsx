import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DevProfile = () => {
  const developer = {
    name: "Madan Bhat",
    skills: ["Frontend Development"],
    socials: {
      GitHub: "https://github.com/Madan-Bhat",
    },
    bio: "I am a passionate frontend developer with a knack for creating interactive and visually appealing web applications. Let's build something amazing together!",
  };

  return (
    <div className="min-h-screen -mb-32 flex flex-col items-center justify-center bg-black text-white ">
      <h1 className="text-center text-transparent select-none bg-gradient-to-r bg-clip-text from-[#b597f6]  to-[#abc9e9]  text-3xl md:text-4xl font-bold mb-8">
        Have an idea in mind?
      </h1>
      <p className="text-lg mb-6">Let's make it real!</p>
      <div className="bg-gray-800 p-4 rounded-lg text-white mb-6 w-full max-w-lg transition transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-2">Developer Profile</h2>
        <p className="text-xl mb-2">{developer.name}</p>
        <p className="mb-4">{developer.bio}</p>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside mb-4">
          {developer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevProfile;
