// src/components/SkillsSection.jsx
"use client";
import { useEffect, useState } from "react";
import {
  // SiJava,
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
  // SiMicrosoftsqlserver,
  SiFirebase,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FaCode, FaDatabase } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function SkillsSection() {
  const categories = [
    {
      title: "Programming Languages",
      items: [
        { Icon: FaCode, title: "Java", color: "#B07219" },
        { Icon: SiC, title: "C", color: "#00599C" },
        { Icon: SiPython, title: "Python", color: "#3776AB" },
        { Icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      title: "Web Development",
      items: [
        // frontend
        { Icon: SiHtml5, title: "HTML", color: "#E34F26" },
        { Icon: SiCss3, title: "CSS", color: "#1572B6" },
        { Icon: SiReact, title: "React", color: "#61DAFB" },
        { Icon: SiNextdotjs, title: "Next.js", color: "#000000" },
        { Icon: SiTailwindcss, title: "Tailwind CSS", color: "#06B6D4" },
        // backend
        { Icon: SiNodedotjs, title: "Node.js", color: "#339933" },
        { Icon: SiExpress, title: "Express", color: "#000000" },
        { Icon: SiLaravel, title: "Laravel", color: "#FF2D20" },
      ],
    },
    {
      title: "Database & Cloud Services",
      items: [
        { Icon: SiMysql, title: "MySQL", color: "#4479A1" },
        { Icon: SiMongodb, title: "MongoDB", color: "#47A248" },
        { Icon: FaDatabase, title: "MSSQL", color: "#A91D22" },
        { Icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
      ],
    },
    {
      title: "UI/UX Design Tools",
      items: [
        { Icon: SiFigma, title: "Figma", color: "#F24E1E" },
        { Icon: SiCanva, title: "Canva", color: "#00C4CC" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState("rtl"); // rtl: new enters from right

  // Simplified layout: title, pill tabs, subtitle, centered large icon row
  const Tabs = () => (
    <div className="flex gap-4 flex-wrap justify-center mb-6">
      {categories.map((c, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={c.title}
            onClick={() => setActiveIndex(idx)}
            className={`px-6 py-3 rounded-xl text-sm md:text-base transition-shadow duration-200 ${isActive ? 'bg-gray-800 text-white shadow-xl' : 'bg-gray-800/40 text-gray-300 hover:bg-gray-800/60'}`}
            aria-pressed={isActive}
          >
            {c.title}
          </button>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-12 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        
  <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Tech Skills</h2>
        <Tabs />

        <h3 className="text-2xl font-semibold mt-6">{categories[activeIndex].title}</h3>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-12">
          {categories[activeIndex].items.map((it) => (
            <div key={it.title} className="flex flex-col items-center w-36 group">
              <div className="w-28 h-28 flex items-center justify-center rounded-xl bg-gray-800/50 p-3 border border-transparent transition-all duration-200 transform hover:scale-105 hover:border-primary">
                {it.Icon ? (
                  <it.Icon size={64} style={{ color: it.color || '#fff' }} />
                ) : (
                  <div className="w-20 h-20 bg-gray-800 rounded-full" />
                )}
              </div>
              <div className="mt-3 text-sm text-gray-300">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
