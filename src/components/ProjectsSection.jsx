// src/components/ProjectsSection.jsx
export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind CSS.",
      image: "/projects/portfolio.png", // Put project images inside public/projects/
      link: "https://github.com/hasininavindya/my-portfolio",
    },
    {
      title: "Todo App",
      description: "A simple Todo app using React and local storage.",
      image: "/projects/todo.png",
      link: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather app using React and OpenWeather API.",
      image: "/projects/weather.png",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow hover:scale-105 transform transition duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
