// src/components/ProjectsSection.jsx
"use client";

import { useState, useEffect } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio to showcase profile, skills and projects.  It features a dynamic project gallery, smooth navigation, and contact integration for professional networking.",
      image: "projectPortfolio.jpg",
      github: "",
      post: "https://www.linkedin.com/posts/hasini-navindya-b82448271_portfolio-webdevelopment-professionalgrowth-activity-7390051843902488576-eaXL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJzgJIBDQoa1nt13c1HsvTTxOhWsgluK7M",
      tech: ["Next.js", "Tailwind CSS", "React"],
    },
   
    {
      title: "FitSync Pro",
      description: "FITSYNC PRO is a gym reservation & management system enabling trainers to manage sessions and clients to book workouts. Includes scheduling, payments, reminders and virtual session support.",
      image: "fitSync.png",
      github: "https://github.com/HasiniNavindya/FitSync-Pro",
      tech: ["Next.js", "MongoDB", "Node.js", "Stripe",  "Nodemailer", "Tailwind CSS"],
    },
     {
      title: "MovieHub (CineWorld)",
      description: "A Laravel-based entertainment platform delivering movie news, upcoming releases and reviews. Features secure authentication, role-based access and a RESTful API backend.",
      image: "laravel.png",
      github: "https://github.com/HasiniNavindya/Laravel",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API", "Bootstrap"],
    },
    {
      title: "Currency Converter",
      description: "A currency conversion SPA with live exchange rates. Frontend implemented with vanilla JavaScript, HTML and CSS; backend uses Node.js + Express for rate proxying and caching.",
      image: "money.png",
      github: "https://github.com/HasiniNavindya/Currency_Convert_Site",
      tech: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    },
    {
      title: "Coffee Cafe",
      description: "A small static site for a coffee shop showcasing menu, location and contact — implemented with HTML, CSS and JavaScript for quick, responsive delivery.",
      image: "cofee.png",
      github: "https://github.com/HasiniNavindya/Cafe-web",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Travel Explorer",
      description: "A simple travel explorer front-end demonstrating destination discovery and search. Implemented using HTML, CSS and JavaScript (can be extended to a SPA).",
      image: "travel.png",
      github: "https://github.com/HasiniNavindya/travel-explorer",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page: 1 on very small screens, 2 on small, 3 on md+
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1);
      else if (w < 768) setItemsPerPage(2);
      else setItemsPerPage(3);
      setCurrentIndex(0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex((ci) => ci + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((ci) => ci - itemsPerPage);
    }
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-gray-950 text-white py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center">My Projects</h2>

        {/* Inline horizontal cards - stack on small screens */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 w-full sm:w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={currentIndex + index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col"
              >
                {/* Project image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons: GitHub and optional Post (LinkedIn) */}
                  <div className="w-full flex flex-col sm:flex-row gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.51.11-3.15 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.64.23 2.85.11 3.15.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.4-5.27 5.68.42.37.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                        View on GitHub
                      </a>
                    ) : null}

                    {project.post ? (
                      <a
                        href={project.post}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-center border border-white/20"
                      >
                        View Post
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= projects.length}
            className="flex-shrink-0 w-full sm:w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerPage) === pageIndex
                  ? "bg-white w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>

        {/* (CTA buttons moved to a separate component `ProjectCTAs`) */}
      </div>
    </section>
  );
}
