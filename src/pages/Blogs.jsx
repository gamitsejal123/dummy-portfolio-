const blogs = [
  {
    title: "How to Build Modern UI with Tailwind CSS",
    desc: "Learn how to create beautiful and responsive UI using Tailwind CSS and React.",
    date: "Jan 15, 2026",
    image: "https://picsum.photos/600/400?random=31",
  },
  {
    title: "React Performance Optimization Tips",
    desc: "Best practices and techniques to optimize React app performance.",
    date: "Jan 20, 2026",
    image: "https://picsum.photos/600/400?random=32",
  },
  {
    title: "Complete Guide to Portfolio Website",
    desc: "Design and develop a professional portfolio website step by step.",
    date: "Jan 25, 2026",
    image: "https://picsum.photos/600/400?random=33",
  },
  {
    title: "Why Tailwind CSS is Better Than Bootstrap",
    desc: "Comparison between Tailwind CSS and Bootstrap for modern web projects.",
    date: "Feb 01, 2026",
    image: "https://picsum.photos/600/400?random=34",
  },
  {
    title: "Frontend Roadmap for Beginners",
    desc: "Complete learning roadmap for frontend developers.",
    date: "Feb 05, 2026",
    image: "https://picsum.photos/600/400?random=35",
  },
  {
    title: "How React Works Internally",
    desc: "Deep dive into React internals and rendering behavior.",
    date: "Feb 10, 2026",
    image: "https://picsum.photos/600/400?random=36",
  },
];

function Blogs() {
  return (
    <section className="bg-black text-white min-h-screen pt-40 pb-24">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="inline-flex items-center gap-2 text-lime-400 text-sm mb-4">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          Blogs
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Latest <span className="text-lime-400">Articles</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Insights, tutorials and guides about frontend development,
          UI design and web technologies.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-lime-400 transition"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-lime-400 transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {blog.desc}
              </p>

              <button className="text-lime-400 text-sm font-semibold hover:underline">
                Read More →
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Blogs;
