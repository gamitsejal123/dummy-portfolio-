import Picture from "../../assets/images/Home-image/About image.png";

function About() {
  return (
    <section className="bg-black text-white py-24 w-full">

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">

        {/* LEFT IMAGE */}
      <div className="relative flex justify-center lg:justify-start">


          {/* GREEN GLOW */}
          <div className="absolute w-80 h-80 bg-lime-400/40 blur-3xl rounded-full"></div>

          {/* IMAGE */}
          <img
            src={Picture}
            alt="about profile"
            className="relative z-10 w-72 md:w-80 rounded-full border-4 border-lime-400/40"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center lg:items-start">

          <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-3">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who is <span className="text-lime-400">Sejal gamit ?</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10">
            I create visually stunning, user-focused digital experiences.
            My passion lies in designing interfaces that are intuitive,
            functional, and impactful across platforms.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <Stat value="600+" label="Projects Completed" />
            <Stat value="50+" label="Happy Clients" />
            <Stat value="18+" label="Years Experience" />
          </div>

          <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
            Download CV
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;


/* ---------- SMALL COMPONENTS ---------- */

function Tag({ text, className }) {
  return (
    <span
      className={`absolute px-4 py-1 rounded-full bg-lime-400 text-black text-xs font-semibold shadow-lg ${className}`}
    >
      {text}
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-lime-400">{value}</h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}
