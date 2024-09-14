import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DevProfile = () => {
  const developer = {
    name: "Alex Doe",
    skills: ["Frontend Development", "DevOps"],
    socials: {
      GitHub: "https://github.com/alexd",
      LinkedIn: "https://linkedin.com/in/alexd",
    },
    bio: "I am a passionate frontend developer with a knack for creating interactive and visually appealing web applications. Let's build something amazing together!",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">
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
        <h3 className="text-xl font-semibold mb-2">Socials</h3>
        <div className="flex space-x-4">
          <a
            href={developer.socials.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href={developer.socials.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105">
        Get Started
      </button>
      <p className="mt-4 text-sm">
        Fun Fact - You can actually click on socials.
      </p>
    </div>
  );
};

export default DevProfile;
