import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Tools() {
  return (
    <section className="bg-black text-white py-24 w-full">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">

        <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-3">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          My Favorite Tools
        </span>

        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-lime-400">Exploring the Tools</span> <br />
          Behind My Designs
        </h2>

      </div>

      {/* TOOLS GRID */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">

        <ToolCard icon={<FaHtml5 />} label="HTML5" />
        <ToolCard icon={<FaCss3Alt />} label="CSS3" />
        <ToolCard icon={<FaJs />} label="JavaScript" />
        <ToolCard icon={<FaReact />} label="React" />
        <ToolCard icon={<SiTailwindcss />} label="Tailwind" />
        <ToolCard icon={<FaNodeJs />} label="Node.js" />
        <ToolCard icon={<FaGitAlt />} label="Git" />
        <ToolCard icon={<FaGithub />} label="GitHub" />

      </div>

    </section>
  );
}

export default Tools;


/* ------------ TOOL CARD ------------ */

function ToolCard({ icon, label }) {
  return (
    <div className="group bg-[#0b0b0b] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center hover:border-lime-400/40 hover:shadow-[0_0_30px_rgba(132,204,22,0.25)] transition">

      <div className="text-4xl text-lime-400 mb-3 group-hover:scale-110 transition">
        {icon}
      </div>

      <span className="text-sm text-gray-300">{label}</span>

    </div>
  );
}
