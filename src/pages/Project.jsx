import project1 from "../assets/images/projects/portfolio-web.png";
import project2 from "../assets/images/projects/pizza hub-web.png";
import project3 from "../assets/images/projects/Travel Bee-web.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "Web",
      image: project1,
    },
    {
      id: 2,
      title: "pizza hub website",
      category: "Web",
      image: project2,
    },
    {
      id: 3,
      title: "Travel Bee Website",
      category: "Web",
      image: project3,
    },
  ];

  return (
    <section className="bg-black text-white py-24 w-full">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-3">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          My Work
        </span>

        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-lime-400">Projects</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          A selection of projects showcasing my skills in frontend development,
          UI design, and performance optimization.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}

export default Projects;


/* ------------ CARD COMPONENT ------------ */

function ProjectCard({ item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#0b0b0b] border border-white/5 hover:border-lime-400/40 transition">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">

        <div className="p-6">
          <span className="text-xs text-lime-400">{item.category}</span>
          <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
        </div>

      </div>

    </div>
  );
}
