"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import DevProfile from "./components/ContactMe";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black">
        <Hero />
        <Skills />
        <About />
        <Projects />
        {/* <DevProfile /> */}
        {/* <Contact /> */}
      </main>

      <footer />
    </div>
  );
}
