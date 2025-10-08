// src/components/SkillsSection.jsx
export default function SkillsSection() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section className="bg-gray-900 text-white py-24 px-6" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transform transition duration-300"
            >
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
