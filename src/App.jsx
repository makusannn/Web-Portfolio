import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app-root">
      {/*navigation bar section */}
      <Navbar />

      {/*top padding so fixed navbar won't cover it*/}
      <main className="pt-24">
        {/*hero section*/}
        <HeroSection />

        {/*about section*/}
        <About />

        {/*projects section*/}
        <Projects />

        {/*contact section*/}
        <Contact /> 

        <footer className="w-full text-center py-6 bg-[#231f16] text-gray-400 text-sm border-t border-gray-700">
          © {new Date().getFullYear()} Mary Strelline Magdamit. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
