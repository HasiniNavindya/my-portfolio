// src/components/HeroSection.jsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-950 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <Image
          src="/profile.jpg" // Put your image inside public/profile.jpg
          alt="Profile Picture"
          width={160}
          height={160}
          className="mx-auto rounded-full border-4 border-red-500 shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">
          Hi, I’m <span className="text-red-500">Hasini Navindya</span>
        </h1>
        <p className="text-lg mt-3 text-gray-300">
          Frontend Developer passionate about crafting beautiful, responsive web experiences.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-red-500 hover:bg-red-500 text-white px-6 py-2 rounded-full transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
