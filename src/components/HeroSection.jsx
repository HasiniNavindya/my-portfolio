import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left: Label + Heading + Copy + CTAs */}
          <div className="text-left pt-6">
            <p className="text-sm uppercase tracking-wide font-medium text-primary-dark mb-4">UI/UX Designer</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I'm
              <span className="block"><span className="text-primary">Hasini Navindya</span></span>
            </h1>

            <p className="mt-6 text-base text-gray-700 dark:text-gray-300 max-w-lg">
              Frontend Developer passionate about crafting beautiful, responsive web experiences.
              I build accessible interfaces and delightful interactions. You can add more information on the about page.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md shadow"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="inline-block border-2 border-primary-dark text-primary-dark px-4 py-2 rounded-md bg-transparent"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: organic blob + portrait */}
          <div className="relative flex justify-end items-center pt-6">
            {/* SVG blob background — uses primary color with low opacity */}
            <svg viewBox="0 0 600 600" className="hidden md:block absolute right-0 w-[520px] h-[520px] -z-10" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(300,300)">
                <path d="M120,-158C150,-130,155,-80,166,-20C177,40,194,110,164,152C134,194,56,208,-6,210C-68,212,-135,202,-168,160C-201,118,-200,44,-183,0C-166,-44,-133,-77,-105,-111C-77,-145,-54,-180,-13,-194C28,-208,56,-206,120,-158Z" fill="rgba(0,119,182,0.14)" />
              </g>
            </svg>

            <div className="relative w-full">
              {/* circular framed portrait: vertically centered on the right */}
              <div className="absolute top-1/2 right-6 md:right-12 lg:right-20 -translate-y-1/2">
                <div className="relative">
                  {/* circular ring with image filling the circle */}
                  <div className="w-56 md:w-80 lg:w-[420px] aspect-square rounded-full ring-8 ring-primary bg-white dark:bg-gray-950 shadow-2xl overflow-hidden">
                    <Image
                      src="/Profilepic.png"
                      alt="Profile"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
