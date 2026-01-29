import { FaPaintBrush, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

function Services() {
  return (
    <section className="bg-black text-white py-24 w-full">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6 mb-16 text-center lg:text-left">
        
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-3">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            My Specialization
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-lime-400">Services</span> I Provide
          </h2>
        </div>

        <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
          View All Services
        </button>

      </div>

      {/* SERVICE CARDS */}
     <div className="max-w-7xl mx-auto px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {/* CARD 1 */}
        <ServiceCard
          icon={<FaPaintBrush />}
          title="UI/UX Design"
          desc="I create user-friendly interfaces and seamless experiences for web and mobile platforms."
        />

        {/* CARD 2 */}
        <ServiceCard
          icon={<FaMobileAlt />}
          title="Application Design"
          desc="I design modern, clean and high-performance mobile & desktop applications."
        />

        {/* CARD 3 */}
        <div className="md:col-span-2 md:mx-auto lg:col-span-1">
        <ServiceCard
          icon={<FaLaptopCode />}
          title="Website Design"
          desc="I build responsive, fast and visually stunning websites for brands and startups."
        />
        </div>

      </div>

    </section>
  );
}

export default Services;


/* ---------------- CARD COMPONENT ---------------- */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="relative bg-[#0b0b0b] border border-white/5 rounded-2xl p-8 hover:border-lime-400/40 transition group">

      {/* LEFT GREEN LINE */}
      <span className="absolute left-0 top-6 h-12 w-1 bg-lime-400 rounded-r"></span>

      {/* ICON */}
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-lime-400 text-2xl mb-6 group-hover:scale-110 transition">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {desc}
      </p>

      {/* LINK */}
      <span className="inline-flex items-center gap-2 text-sm text-lime-400 font-semibold cursor-pointer">
        Learn More <span className="text-lg">+</span>
      </span>

    </div>
  );
}
