"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Side */}
          <div className="text-left pt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I'm
              <span className="block">
                <span className="text-primary">Hasini Navindya</span>
              </span>
            </h1>

            {/* Smaller Typewriter Section */}
            <h2 className="mt-3 text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300">
              <Typewriter
                words={[
                  "Passionate about crafting seamless digital experiences through full-stack development, creative design, and smart engineering. 💻",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-4">
               <a
                href="SE Intern CV_Hasini Navindya.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="inline-block bg-primary-dark text-white px-4 py-2 rounded-md hover:brightness-90 transition-colors duration-300"
                aria-label="Download resume"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-block border-2 border-primary-dark text-primary-dark px-4 py-2 rounded-md bg-transparent hover:bg-primary-dark hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-6">
              <a
                href="mailto:hasini.navindya001@gmail.com"
                target="_blank"
                className="text-white-700 hover:text-white hover:scale-125 transition duration-300 text-2xl"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/hasini-navindya-b82448271/"
                target="_blank"
                className="text-white-700 hover:text-white hover:scale-125 transition duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/HasiniNavindya"
                target="_blank"
                className="text-white-700 hover:text-white hover:scale-125 transition duration-300 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side - Portrait (mobile first: portrait shows above content) */}
          <div className="relative flex justify-center md:justify-center items-center pt-6 order-first md:order-last">
            <div className="relative mb-6 z-30 hero-portrait md:-translate-x-6">
              <div className="w-44 sm:w-64 md:w-96 lg:w-[26rem] h-44 sm:h-64 md:h-96 lg:h-[26rem] rounded-full ring-8 ring-primary bg-white dark:bg-gray-950 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/Profilepic.png"
                  alt="Hasini Navindya"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
