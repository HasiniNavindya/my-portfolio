// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="bg-gray-950 text-white py-24 px-6" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-500 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            Hi! I’m <strong>Hasini Navindya</strong>, a passionate Frontend Developer.
            I enjoy creating responsive, user-friendly web experiences and learning
            new technologies every day.
          </p>
          <p className="text-gray-300">
            My focus is on building web applications with clean code, interactive
            UI, and smooth animations. I am constantly improving my skills and
            exploring the latest frontend technologies.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2">
          <img
            src="/profile.jpg"
            alt="About Me"
            className="rounded-xl shadow-lg border-4 border-red-500"
          />
        </div>
      </div>
    </section>
  );
}
