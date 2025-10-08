import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Hello</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              I'm <span className="text-primary">Hasini Navindya</span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Frontend Developer passionate about crafting beautiful, responsive web experiences.
              I build accessible interfaces and delightful interactions.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-primary hover:bg-primary text-white px-6 py-2 rounded-full transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Circular framed portrait */}
          <div className="relative flex justify-center md:justify-end">
            {/* decorative brush behind the portrait */}
            <div className="hero-brush -z-10 hidden md:block" />

            <div className="rounded-full p-1 bg-white dark:bg-gray-950 shadow-2xl hero-image-animate ring-4 ring-primary">
              <div className="relative rounded-full overflow-hidden w-64 md:w-96 lg:w-[420px] aspect-square">
                <Image
                  src="/Profilepic.png" // Place your portrait at public/profile.jpg
                  alt="Profile"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
