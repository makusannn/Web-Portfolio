import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      {/* main content has top padding so fixed navbar won't cover it */}
      <main className="pt-24">
        {/* hero section */}
        <HeroSection />

        {/* about section */}
        <About />

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-3 text-slate-300">
              Here are some of the projects I’ve worked on — combining design, functionality, and user experience.
            </p>
          </div>
        </section>

        {/* contact section */}
        <Contact /> 
      </main>
    </div>
  );
}
