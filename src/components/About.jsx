import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeContainer } from "../motionVariants";
import myPhoto from "../assets/my-photo.jpg";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-20 text-white"
    >
      {/*fade up animation using Framer Motion*/}
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-5 mt-10"
      >
        {/*texts fade up animation*/}
        <motion.div variants={fadeUp} className="max-w-2xl text-left md:w-1/2">
          <h2 className="text-5xl font-extrabold text-white mb-6">About Me</h2>
          <p className="text-gray-200 text-lg md:text-xl text-justify leading-relaxed">
            Hello! I’m <span className="text-[#ffb347] font-semibold">Mary Strelline Magdamit</span>, 
            a <span className="text-[#ffb347] font-semibold">3rd-year college student</span> who’s deeply passionate about 
            crafting visually engaging and interactive web designs. Born on <span className="text-[#ffb347] font-semibold">February 20, 2005 </span> 
            and based in <span className="text-[#ffb347] font-semibold">Las Piñas City</span>. I’ve always been fascinated by how creativity and technology 
            can blend to tell stories through design.
            <br/><br/>
            I enjoy experimenting with <span className="text-[#ffb347] font-semibold">seasonal and thematic layouts</span>, turning simple concepts into 
            aesthetic experiences that reflect emotion, color, and personality. 
            <br/><br/>
            Beyond coding, you'll often find me <span className="text-[#ffb347] font-semibold">drawing traditionally, specifically portrait arts, and designing digitally. </span> 
            I am a very artistic type of person but I am also quite the minimalist type as I do not use much colors. You'll also find me exploring UI trends and learning new front-end tools.
            <br/><br/>
            My goal is to keep growing as a designer and developer who creates not just websites, but digital experiences that connect 
            creativity and functionality — all while leaving a hint of my personal style in every detail.
          </p>

          {/*shadcn button*/}
          <Button asChild
            className="mt-10 bg-[#e97216] hover:bg-[#ff8c32] text-white font-semibold text-lg py-6 px-8 
              rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]"
          >
            <a href="/Mary-Strelline-Magdamit_Resume.pdf" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </Button>
        </motion.div>

        {/*image fade up and floating animation*/}
        <motion.div
          variants={fadeUp}
          className="relative group flex justify-center md:justify-end w-full md:w-1/2 mt-10"
        >
          <img
            src={myPhoto}
            alt="Mary Strelline"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full
                       shadow-[0_0_50px_15px_rgba(255,204,51,0.6),0_0_120px_60px_rgba(255,204,51,0.25)]
                       animate-float transition-transform duration-500 ease-in-out group-hover:-translate-y-5"
          />
          {/*glowing light behind the image*/}
          <div
            className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 
                       w-56 h-12 bg-[radial-gradient(circle,rgba(255,204,51,0.8),transparent_70%)] 
                       blur-3xl opacity-90 group-hover:opacity-100 transition-all duration-500"
          ></div>
        </motion.div>
      </motion.div>

      {/*boxes fade up animation*/}
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 text-center z-10 max-w-6xl"
      >
        <motion.h3 variants={fadeUp} className="text-2xl font-semibold mb-4 text-white">
          Proficient In:
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['HTML', 'CSS', 'MySQL', 'Figma', 'Python', 'Java'].map((skill) => (
            <span
              key={skill}
              className="border border-[#a5a8a6] text-[#a5a8a6] py-3 px-10 rounded-lg 
                        text-lg md:text-xl transition-all duration-300 
                        hover:bg-[#e97216] hover:text-white hover:border-transparent 
                        hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(233,114,22,0.4)]"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.h3 variants={fadeUp} className="text-2xl font-semibold mb-4 text-white">
          Currently Exploring:
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-[90rem] mx-auto px-2"
        >
          {['MongoDB', 'Tailwind CSS', 'Node.js', 'React.js', 'JavaScript', 'PHP'].map((skill) => (
            <span
              key={skill}
              className="border border-[#a5a8a6] text-[#a5a8a6] 
                        py-3 px-6 rounded-lg text-base md:text-lg 
                        transition-all duration-300 
                        hover:bg-[#e97216] hover:text-white 
                        hover:border-transparent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(233,114,22,0.4)]"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
