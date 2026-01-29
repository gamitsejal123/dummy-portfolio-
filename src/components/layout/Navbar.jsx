import { useState } from "react";

 function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Services",
    "Projects",
    "Blogs",
    "About Me",
    "Testimonials",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black ">
            S
          </div>
          <span className="text-white text-lg font-semibold tracking-wide">
            Sejal
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-lime-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Theme Icon */}
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition">
            ⚙
          </button>

          {/* CTA Button */}
          <button className="px-6 py-2 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
            Let’s Talk
          </button>
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
              <a
                key={item}
                href="#"
                className="hover:text-lime-400 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <button className="mt-4 px-8 py-2 rounded-full bg-lime-400 text-black font-semibold">
              Let’s Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Navbar