"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DevProfile from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black">
        <Hero />
        <Skills />
        <About />
        <Projects />
        {/* <DevProfile /> */}
        <Footer />
      </main>

      <footer />
    </div>
  );
}
