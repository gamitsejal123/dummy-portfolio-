const testimonials = [
  {
    name: "Amit Patel",
    role: "Startup Founder",
    feedback:
      "Sejal delivered an amazing website for my startup. Clean UI, fast performance, and very professional work.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    feedback:
      "Working with Sejal was a great experience. She understood our requirements perfectly and delivered beyond expectations.",
  },
  {
    name: "Rahul Mehta",
    role: "Freelance Developer",
    feedback:
      "Excellent frontend skills and attention to detail. Highly recommended for any web development project.",
  },
  {
    name: "Sneha Verma",
    role: "UI/UX Designer",
    feedback:
      "Loved the collaboration! The UI implementation was pixel-perfect and very smooth.",
  },
  {
    name: "Kunal Shah",
    role: "Business Owner",
    feedback:
      "Professional, responsive, and extremely talented. The final website quality was outstanding.",
  },
  {
    name: "Neha Joshi",
    role: "Marketing Lead",
    feedback:
      "Beautiful designs and smooth user experience. Our conversion rate improved significantly.",
  },
];

function Testimonials() {
  return (
    <section className="bg-black text-white min-h-screen pt-40 pb-24">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="inline-flex items-center gap-2 text-lime-400 text-sm mb-4">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          Testimonials
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What <span className="text-lime-400">Clients Say</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Real feedback from people I’ve worked with, showcasing trust and
          professional relationships.
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-lime-400 transition"
          >
            {/* Quote */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              “{item.feedback}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-lime-400 text-black font-bold flex items-center justify-center">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
