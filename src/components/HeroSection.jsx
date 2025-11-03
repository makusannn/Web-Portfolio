import React from 'react'
import Spline from '@splinetool/react-spline'
import leftWeb from '../assets/left-spider-web.svg'
import rightWeb from '../assets/right-spider-web.svg'

export default function HeroSection() {
  return (
    <section id="home" className="relative z-[5] flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden bg-gradient-to-br from-[#1e1a12] to-[#231f16] text-white" >
      {/* Spider Webs */}
        <img src={leftWeb} alt="Left Spider Web" className="fixed top-30 left-0 w-100 opacity-70 z-[1] select-none pointer-events-none" />
        <img src={rightWeb} alt="Right Spider Web" className="fixed top-30 right-0 w-120 opacity-70 z-[1] select-none pointer-events-none" />


      {/* Text Section */}
      <div className="z-10 text-center md:text-left md:w-1/2 space-y-6 md:pl-16 lg:pl-24 md:-mt-30">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Hi There, <br />
          <span className="text-[#e97216]">I’m Mary Strelline</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          A student and aspiring <span className="text-[#ffb347] font-semibold">web designer</span> passionate about creative and interactive experiences.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#e97216] text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#ff8c32] transition-all duration-300"
        >
          Let’s Talk!
        </a>
      </div>

      {/* Spline 3D Scene */}
      <div className="relative w-full md:w-1/2 h-[450px] md:h-[850px] mt-4 md:mt-[-200px] flex justify-center z-10">
        <Spline scene="https://prod.spline.design/dC7wg0ZiwnMoDfgR/scene.splinecode" />
      </div>

    </section>
  )
}
