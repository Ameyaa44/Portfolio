import { useState } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full px-4 py-4 flex items-center justify-center top-2 z-50">

      {/* Single Capsule — everything inside */}
      <div
        className={dark
          ? "hidden md:flex items-center gap-1 backdrop-blur-md bg-gray-900/60 px-4 py-3 rounded-full border border-gray-700/50 max-w-[95vw]"
          : "hidden md:flex items-center gap-1 backdrop-blur-md bg-gray-200/30 px-4 py-3 rounded-full border border-gray-300 max-w-[95vw]"
        }
      >

        {/* Logo */}
        <span className={dark ? "text-xl font-extrabold text-white px-2 mr-3 xl:mr-6 2xl:mr-15 shrink-0" : "text-xl font-extrabold text-black px-2 mr-3 xl:mr-6 2xl:mr-15 shrink-0"}>
          <span className="gradient-text">.dev</span>
        </span>

        {/* Nav Links */}
        <li onClick={() => setActive("Home")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "Home" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#home">Home</a>
        </li>
        {/* <li onClick={() => setActive("About")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "About" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#about">About</a>
        </li> */}
        <li onClick={() => setActive("Skills")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "Skills" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setActive("Projects")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "Projects" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setActive("Experience")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "Experience" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={() => setActive("Contact")} className={`list-none px-2.5 xl:px-4 py-1.5 rounded-full font-semibold text-md xl:text-md cursor-pointer transition-all duration-200 whitespace-nowrap ${active === "Contact" ? (dark ? "text-white border border-gray-600" : "text-black border border-gray-400") : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-500")}`}>
          <a href="#contact">Contact</a>
        </li>

        <div className="ml-8 flex items-center shrink-0">
          {/* Theme */}
          <button onClick={toggleTheme} className={dark ? "p-2 rounded-full text-gray-400 hover:text-yellow-200/80 mr-4" : "p-2 rounded-full text-black hover:text-blue-500 mr-4"}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume */}
          <button
            className="flex items-center gap-2 font-semibold text-white px-3 xl:px-4 py-1.5 rounded-full transition-all duration-200 text-md xl:text-md ml-1 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #3b82f6 100%)" }}
          >
            Resume <Download size={15} />
          </button>
        </div>

      </div>

      {/* Mobile Hamburger */}
      <div className={dark ? "md:hidden bg-gray-950 fixed w-full px-6 py-4 flex items-center justify-center z-50 top-0" : "xl:hidden bg-white fixed w-full px-6 py-4 flex items-center justify-center z-50 top-0"}>
        <button
          className={dark
            ? "text-gray-400 hover:text-white absolute right-6"
            : "text-black hover:text-gray-600 absolute right-6"
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Logo */}
        <span className="text-xl font-extrabold text-cyan-400 absolute left-6">A</span>

        {/* Theme */}
        <button onClick={toggleTheme} className={dark ? "p-2 rounded-full text-gray-400 hover:text-cyan-400 ml-45" : "p-2 rounded-full text-black hover:text-cyan-400 ml-45"}>
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={dark
          ? "xl:hidden absolute top-15 left-0 w-full backdrop-blur-md border-t border-gray-800 flex flex-col items-center gap-4 py-6 text-md z-50"
          : "xl:hidden absolute top-15 left-0 w-full backdrop-blur-md border-t border-gray-200 flex flex-col items-center gap-4 py-6 text-md z-50"
        }>
          <li onClick={() => { setActive("Home"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "Home" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => { setActive("About"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "About" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => { setActive("Skills"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "Skills" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => { setActive("Projects"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "Projects" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => { setActive("Experience"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "Experience" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#experience">Experience</a>
          </li>
          <li onClick={() => { setActive("Contact"); setMenuOpen(false); }} className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-200 ${active === "Contact" ? "gradient-text font-semibold" : (dark ? "text-gray-400 hover:text-white" : "text-black hover:text-gray-600")}`}>
            <a href="#contact">Contact</a>
          </li>
          <button className="flex items-center gap-2 hero-button text-white font-semibold px-5 py-2 rounded-full text-md mt-2">
            Resume <Download size={15} />
          </button>
        </ul>
      )}
    </nav>
  );
}