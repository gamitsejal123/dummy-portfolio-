import About from "../components/Home/About";

function AboutMe() {
  return (
    <div className="bg-black text-white">

      {/* PAGE HERO */}
      <section className="pt-40 pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-4">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            About Me
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting <span className="text-lime-400">Digital Experiences</span> That Inspire
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m a passionate web developer and designer focused on creating clean,
            user-friendly, and performance-driven digital products.
          </p>

        </div>
      </section>

      {/* REUSE HOME ABOUT SECTION */}
      <About />

      {/* EXTRA DETAILS SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid gap-16 lg:grid-cols-2 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-lime-400">Journey</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              I started my journey in web development with a passion for design
              and a curiosity for how things work behind the scenes. Over time,
              I developed strong skills in frontend development, UI/UX design,
              and modern web technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My goal is to build applications that not only look great but also
              deliver seamless user experiences and high performance.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6">

            <Highlight title="Frontend Development" desc="React, Tailwind, JavaScript" />
            <Highlight title="UI/UX Design" desc="Figma, Prototyping, Wireframing" />
            <Highlight title="Responsive Design" desc="Mobile-first approach" />
            <Highlight title="Performance" desc="Fast & optimized websites" />

          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutMe;


/* ---------- SMALL COMPONENT ---------- */

function Highlight({ title, desc }) {
  return (
    <div className="bg-[#0b0b0b] border border-white/5 rounded-xl p-6 hover:border-lime-400/40 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}
