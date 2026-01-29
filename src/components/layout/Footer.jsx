import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
   <footer className="bg-[#050505] text-white border-t border-lime-400/20 relative">
    {/* GLOW DIVIDER */}
<div className="absolute -top-1 left-0 w-full h-px bg-linear-to-r from-transparent via-lime-400 to-transparent blur-[0.5px]"></div>



      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid gap-12 grid-cols-1 md:grid-cols-3 text-center md:text-left">

        {/* LEFT — BRAND */}
      <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black">
              O
            </div>
            <h3 className="text-xl font-bold">Oliver</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            I design and build modern web experiences with a strong focus on
            performance, usability, and clean UI.
          </p>
        </div>

        {/* CENTER — LINKS */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-lime-400 transition cursor-pointer">Home</li>
            <li className="hover:text-lime-400 transition cursor-pointer">Services</li>
            <li className="hover:text-lime-400 transition cursor-pointer">Projects</li>
            <li className="hover:text-lime-400 transition cursor-pointer">About Me</li>
            <li className="hover:text-lime-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* RIGHT — SOCIAL */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>

          <div className="flex gap-4">
            <SocialIcon icon={<FaGithub />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Oliver. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;


/* --------- SMALL COMPONENT --------- */

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-lime-400 hover:bg-lime-400 hover:text-black hover:scale-110 transition cursor-pointer">
      {icon}
    </div>
  );
}
