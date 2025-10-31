"use client";
import { PiCodeBold, PiMonitorBold, PiPencilBold } from "react-icons/pi";

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* Left: portrait + stats */}
          <div className="flex flex-col items-center lg:col-span-1">
        <div className="profile-wrap inline-block relative">
          {/* hide large ornaments on very small screens */}
          <svg className="hidden sm:block profile-ornaments absolute -inset-2 w-[220px] h-[220px]" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M110 6 C150 6, 190 20, 210 60" className="arc arc-1" />
                <path d="M210 160 C190 190, 150 214, 110 214" className="arc arc-2" />
                <path d="M110 214 C70 214, 30 190, 10 160" className="arc arc-3" />
                <path d="M10 60 C30 20, 70 6, 110 6" className="arc arc-4" />
              </svg>

              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl relative z-10 border-4 border-white bg-transparent">
                <img src="/Profilepic.png" alt="Hasini Navindya" className="w-full h-full object-cover object-center bg-transparent" />
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center w-28 sm:w-36">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Skills</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center w-28 sm:w-36">
                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center w-28 sm:w-36">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Certificates</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-3 space-y-6 lg:pl-24">
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">About Me</h2>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hi, I'm <span className="text-primary">Hasini Navindya</span></h3>
              <div className="space-y-4 max-w-3xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  An undergraduate at the University of Moratuwa, pursuing a B.Sc. (Hons) in Information Technology and Management.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I enjoy building digital experiences that are not only functional but also visually engaging and user-friendly. Beyond coding, I love designing intuitive interfaces, exploring new tools, and continuously learning to grow as a developer and designer. My goal is to create meaningful solutions that make technology feel more human.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-400 mb-2">I’m passionate about,</div>
              <div className="flex flex-row gap-3 flex-wrap">
                <span className="about-badge whitespace-nowrap"><PiCodeBold className="text-xl mr-2"/> Software Engineer</span>
                <span className="about-badge whitespace-nowrap"><PiMonitorBold className="text-xl mr-2"/> Full Stack Developer</span>
                <span className="about-badge whitespace-nowrap"><PiPencilBold className="text-xl mr-2"/> UI/UX Designer</span>
              </div>
            </div>

            <div className="mt-6">
              <a href="#contact" className="about-cta inline-flex items-center px-6 py-3 rounded-lg">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
