 import Profile from "../../assets/images/Hero image.png"
import { FaSnowflake } from "react-icons/fa";
 

 function Hero() {
  return (
    <section className=" pt-32 pb-16 bg-black text-white overflow-hidden w-full">
  {/* MAIN GRID */}
 
  <div className="max-w-7xl mx-auto px-6 py-4 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
      <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-4">
        <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
        Hello There!
      </span>

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
        I’m <span className="text-lime-400">Sejal</span>, <br />
        Web Developer <br />
        based in India.
      </h1>

      <p className="text-gray-400 max-w-lg mb-10">
        I’m an experienced web developer with years in the field,
        collaborating with various companies across domains.
      </p>

      <div className="flex flex-wrap gap-5  justify-center lg:justify-start">
        <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
          View My Work
        </button>

        <button className="px-8 py-3 rounded-full border border-white/20 hover:border-lime-400 hover:text-lime-400 transition">
          Download CV
        </button>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="relative flex justify-center">
      {/* Green Glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/30 blur-3xl rounded-full"></div>

      {/* Profile Image */}
      <img
        src={Profile}
        alt="profile"
        className="relative z-10 w-85 md:w-96 rounded-xl transition"
      />

      {/* Floating Tags */}
      {/* <span className="absolute left-4 bottom-16 bg-lime-400 text-black text-xs px-4 py-1 rounded-full font-semibold">
        Product Designer
      </span>

      <span className="absolute right-6 top-20 bg-white/10 backdrop-blur text-white text-xs px-4 py-1 rounded-full">
        UI/UX Designer
      </span> */}
    </div>
  </div>

  {/* BOTTOM GREEN STRIP */}

<div className="mt-20 bg-lime-400 text-black py-4 w-full overflow-hidden">
  <div className="flex w-max animate-marquee">

    {[1, 2, 3].map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-10 px-6 font-semibold tracking-wide whitespace-nowrap"
      >
        <span>Web Design</span>
        <FaSnowflake />
        <span>App Design</span>
        <FaSnowflake />
        <span>Dashboard</span>
        <FaSnowflake />
        <span>Wireframe</span>
        <FaSnowflake />
      </div>
    ))}

  </div>
</div>
</section>

  );
}
export default Hero