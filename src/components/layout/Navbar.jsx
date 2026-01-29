import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/01project/src/pages/Home.jsx" },
    { label: "Services", path: "/01project/src/pages/ServicesSection.jsx" },
    { label: "Projects", path: "/01project/src/pages/Project.jsx" },
    { label: "Blogs", path: "/01project/src/pages/Blogs.jsx" },
    { label: "About Me", path: "/01project/src/pages/AboutSection.jsx" },
    { label: "Testimonials", path: "/01project/src/pages/Testimonials.jsx" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black">
            S
          </div>
          <span className="text-white text-lg font-semibold tracking-wide">
            Sejal
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm text-gray-300">
        {navLinks.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `transition hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition">
            ⚙
          </button>

          <NavLink
            to="/contact"
            className="px-6 py-2 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition"
          >
            Let’s Talk
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col items-center gap-6 py-8 text-gray-300">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="hover:text-lime-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="mt-4 px-8 py-2 rounded-full bg-lime-400 text-black font-semibold"
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
