import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
 
export default function Projects() {
    const projects = [
        {
            image: project1,
            title: "Minesweeper Game",
            description:
                "A simple and enjoyable game where users can play and interact through a friendly interface. Players uncover tiles to avoid hidden mines and clear the grid.",
            tools: ["Java", "Java Swing"],
            github: "https://github.com/makusannn/Minesweeper-Game",
            docs: "/Minesweeper_Docs.pdf",
        },
        {
            image: project2,
            title: "Student Information Management System",
            description:
                "A web-based system for managing student academic information. It allows users to register, log in, and efficiently organize their profiles, courses, instructors, schedules, and assessments in one platform.",
            tools: ["HTML", "CSS", "JavaScript", "MySQL", "Python Flask"],
            github: "https://github.com/makusannn/Student-Information-Management-System",
            docs: "/Student-Information-Management-System_Docs.pdf",
        },
        {
            image: project3,
            title: "Inventory System",
            description:
                "A simple Java OOP application for managing and tracking inventory items with categories and expiration dates for Sari-Sari stores.",
            tools: ["Java", "Java OOP"],
            github: "https://github.com/makusannn/Inventory-System",
            docs: "/Inventory-System_Docs.pdf",
        },
        {
            image: project4,
            title: "QueuePoint: A Digital Queueing System for Campus Registrar Transactions",
            description:
                "A web-based digital queueing system designed to help student transactions at Cavite State University–Bacoor Campus. QueuePoint allows users to register remotely, track real-time queue updates, and manage requests efficiently, reducing wait times and improving service flow in the Registrar’s Office.",
            tools: ["HTML", "CSS", "MySQL", "PHP"],
            github: "https://github.com/TheElusiveCherryTreeOf89/COSC70-QueuePoint-Project", //the project was uploaded by our Project Manager during this time
            docs: "/Queueing-System_Docs.pdf",
        },
        {
            image: project5,
            title: "Ice Cream Shop Menu",
            description:
                "My first project in web development! A sweet and simple ice cream shop website featuring product details in stylish, interactive modals.",
            tools: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/makusannn/Ice-Cream-Shop-Menu",
            docs: "/Ice-Cream-Shop-Menu_Docs.pdf",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextProject, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-20 py-20 text-white overflow-hidden">
            {/*title*/}
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 md:mb-25"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            <div className="relative w-full max-w-7xl flex items-center justify-center">
                {/*left arrow*/}
                <button onClick={prevProject} className="absolute left-2 md:left-[-60px] text-3xl md:text-4xl z-30 hover:text-orange-400 transition-colors">
                    ❮
                </button>

                {/*projects carousel*/}
                <div className="flex items-center justify-center w-full relative h-[420px] sm:h-[500px] md:h-[580px]">
                    {projects.map((project, index) => {
                        const position =
                        (index - currentIndex + projects.length) % projects.length;

                        let translateX = 0;
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 10;
                        let shadow = "";

                        const slideDistance = window.innerWidth < 640 ? 180 : 360;

                        if (position === 0) {
                            translateX = 0;
                            scale = 1;
                            opacity = 1;
                            zIndex = 30;
                            shadow =
                                "shadow-[0_0_100px_rgba(0,0,0,0.8),0_0_100px_rgba(0,0,0,0.1)] border border-orange-400";
                        } else if (position === 1) {
                            translateX = slideDistance;
                            scale = 0.9;
                            opacity = 0.6;
                            zIndex = 20;
                        } else if (position === projects.length - 1) {
                            translateX = -slideDistance;
                            scale = 0.9;
                            opacity = 0.6;
                            zIndex = 20;
                        } else {
                            translateX = 0;
                            scale = 0.8;
                            opacity = 0;
                            zIndex = 10;
                        }

                        const isActive = position === 0;

                        return (
                            <div
                                key={index}
                                className={`absolute flex flex-col items-center text-center rounded-2xl 
                                p-4 sm:p-6 md:p-10 bg-[#1e1a12]/80 backdrop-blur-md 
                                transition-[transform,opacity] duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] 
                                ${shadow}`}
                                style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity,
                                zIndex,
                                width:
                                    window.innerWidth < 640
                                    ? "90%"
                                    : "650px",
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[180px] sm:h-[250px] md:h-[300px] object-cover rounded-2xl border border-[#333]"
                                />

                                {isActive && (
                                    <>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 md:mt-6 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-xl md:max-w-2xl">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
                                            {project.tools.map((tool, i) => (
                                                <span
                                                    key={i}
                                                    className="border border-orange-400 text-orange-400 py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg text-xs sm:text-sm 
                                                        transition-all duration-300 hover:bg-orange-400 hover:text-white hover:border-transparent 
                                                        hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,0,0.4)]"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-4 mt-5 sm:mt-6">
                                        {/*shadcn button*/}
                                            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 sm:px-6 
                                                rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    View on GitHub
                                                </a>
                                            </Button>

                                            {/* Docs Button (only shows if docs exist) */}
                                            {project.docs && (
                                                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 sm:px-6 
                                                    rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]">
                                                    <a href={project.docs} target="_blank" rel="noopener noreferrer">
                                                        View Docs
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/*right arrow*/}
                <button
                    onClick={nextProject}
                    className="absolute right-2 md:right-[-60px] text-3xl md:text-4xl z-30 hover:text-orange-400 transition-colors"
                >
                    ❯
                </button>
            </div>

            {/*tracking dots*/}
            <div className="flex justify-center mt-10 md:mt-12 space-x-3">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                            ? "bg-orange-400 scale-110 shadow-[0_0_15px_rgba(255,140,0,0.8)]"
                            : "bg-gray-500"
                        }`}>
                    </div>
                ))}
            </div>
        </section>
    );
}
