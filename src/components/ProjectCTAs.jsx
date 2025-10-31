"use client";

import Link from "next/link";

export default function ProjectCTAs() {
  return (
    <section id="project-ctas" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-6">Want to see more of my credentials?</p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Link
            href="/certifications"
            className="inline-block w-72 sm:w-80 md:w-96 text-center bg-primary-dark text-white font-semibold text-lg px-8 py-5 rounded-2xl shadow-lg hover:scale-102 transform transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary-dark/30 border-2 border-white/20"
            aria-label="View Certifications"
          >
            View Certifications
          </Link>

          <Link
            href="/achievements"
            className="inline-block w-72 sm:w-80 md:w-96 text-center bg-white text-gray-900 font-semibold text-lg px-8 py-5 rounded-2xl shadow-lg hover:scale-102 transform transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="View Achievements"
          >
            View Achievements
          </Link>
        </div>

        <p className="text-base md:text-lg text-gray-400 mt-6">You can also find links to certificates and achievements on those pages.</p>
      </div>
    </section>
  );
}
