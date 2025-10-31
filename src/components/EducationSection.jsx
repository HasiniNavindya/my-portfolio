"use client";

import { useState } from "react";

export default function EducationSection() {
  const entries = [
    {
      id: 1,
      image: "MORA.png",
      title: "University of Moratuwa",
      degree: "BSc. (Honours) in Information Technology and Management",
      period: "2023 - Present",
      paragraphs: [
        "Third-year undergraduate specializing in Information Technology and Management, with interests in software development, algorithms, and system design.",
        "Enthusiastic about combining technology and management to build innovative solutions.",
      ],
      status: { label: "IN PROGRESS", color: "emerald" },
    },
    {
      id: 2,
      image: "IMBS.png",
      title: "IMBS Green Campus",
      degree: "Diploma in Business Management",
      period: "2024 - Present",
      paragraphs: [
        "Currently pursuing a Diploma in Business Management, focusing on key areas such as organizational behavior, management practices, and leadership development.",
        "Building strong business, analytical, and communication skills through both coursework and practical projects.",
      ],
      status: { label: "IN PROGRESS", color: "emerald" },
    },
    {
      id: 3,
      image: "openuni.png",
      title: "Open University of Sri Lanka",
      degree: "Human Resource Management Course",
      period: "2022",
      paragraphs: [
     
        "Gained a solid understanding of core HR functions, including recruitment, performance management, employee well-being, and training.",
        "The course also enhanced my knowledge of ethical practices and employment law in Sri Lanka.",
      ],
      status: { label: "COMPLETED", color: "red" },
    },
    {
      id: 4,
      image: "BMMV.png",
      title: "Badulla Central College",
      degree: "G.C.E. Advanced Level",
      period: "2012 - 2021",
      paragraphs: [
        "G.C.E. Ordinary Level (2017): Successfully completed O/Ls with good academic performance and active participation in school activities.",
        "G.C.E. Advanced Level (2021): Completed A/Ls in the Arts stream and gained university entrance through strong academic achievements and dedication.",
      ],
      status: { label: "COMPLETED", color: "red" },
    },
  ];

  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(entries.length / itemsPerPage);

  const visible = entries.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <section className="py-12 px-6 bg-gray-950" id="education">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((entry) => (
            <div key={entry.id} className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -mt-2">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                    <img src={entry.image} alt={entry.title} className="w-full h-full object-contain p-2 bg-transparent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">{entry.title}</h3>
                  <div className="text-sm text-primary mt-1 font-medium">{entry.degree}</div>
                  <div className="text-xs text-gray-400 mt-2">{entry.period}</div>

                  <div className="mt-4 pl-4 border-l-2 border-gray-700/30 space-y-3">
                    {entry.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-sm text-gray-300">{p}</p>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3 items-center">
                    <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs border border-white/20 bg-transparent text-white">
                      <span
                        className={`w-2 h-2 rounded-full block ${entry.status.color === "emerald" ? "bg-emerald-400" : entry.status.color === "red" ? "bg-red-500" : "bg-gray-400"}`}
                      />
                      <span>{entry.status.label}</span>
                    </span>
                    <span className="px-3 py-1 bg-gray-800/60 text-sm rounded-lg">{entry.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1 rounded-md bg-white/10 text-white disabled:opacity-40"
          >
            Prev
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${page === i ? "bg-white" : "bg-white/30"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-1 rounded-md bg-white/10 text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
