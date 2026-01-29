import Service from "../components/Home/Service";

function Services() {
  return (
    <div className="bg-black text-white">

      {/* PAGE HERO */}
      <section className="pt-40 pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-4">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            My Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-lime-400">Professional Services</span> <br />
            Tailored For Your Business
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I provide end-to-end web development services focused on performance,
            scalability, and modern user experiences.
          </p>

        </div>
      </section>

      {/* REUSE HOME SERVICES SECTION */}
      <Service/>

      {/* EXTRA DETAILS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-lime-400">My Services?</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              I focus on delivering high-quality digital solutions that not only
              look visually appealing but also perform exceptionally well.
              My approach ensures scalability, security, and long-term growth.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Clean & scalable code</li>
              <li>✔ Fully responsive design</li>
              <li>✔ Performance optimized</li>
              <li>✔ SEO friendly structure</li>
              <li>✔ Modern UI & UX approach</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard title="Fast Delivery" desc="On-time project delivery without compromising quality." />
            <FeatureCard title="Clean UI" desc="Minimal, premium and user-focused interface design." />
            <FeatureCard title="Scalable Code" desc="Future-ready architecture for long-term growth." />
            <FeatureCard title="Support" desc="Post-delivery maintenance and updates." />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;


/* ---------- SMALL COMPONENT ---------- */

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#0b0b0b] border border-white/5 rounded-xl p-6 hover:border-lime-400/40 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}
