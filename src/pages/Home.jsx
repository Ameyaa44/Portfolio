import { useState, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { useTheme } from "../ThemeProvider";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const { dark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const anim = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section id="home" className={dark ? "bg-gray-950 text-white flex flex-col items-center text-center px-6 pt-55 min-h-screen" : "bg-white text-black flex flex-col items-center text-center px-6 pt-55 min-h-screen"}>

      {/* Status badge */}
      <div
        style={anim(0)}
        className={dark ? "flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 text-xs text-gray-400 mb-2" : "flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-xs text-black mb-2"}
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        OPEN TO WORK
      </div>

      {/* Headline */}
      <h1
        style={anim(0.1)}
        className="text-2xl md:text-5xl font-bold leading-tight gradient-text mb-2"
      >
        <span className={dark ? "text-white" : "text-black"}>AMEYA SAJEEVAN</span>
      </h1>

      {/* Sub-text */}
      <p
        style={anim(0.2)}
        className={dark ? "text-gray-400 text-lg max-w-xl mb-5 leading-relaxed" : "text-black text-lg max-w-xl mb-5 leading-relaxed"}
      >
        Full-stack developer proficient in MERN and MEAN stacks.
        Passionate about building efficient, user-focused web apps.
        Committed to clean, maintainable, and scalable code.
      </p>

      {/* CTA Buttons */}
      <div
        style={anim(0.3)}
        className="flex flex-wrap gap-4 justify-center"
      >
    
        <button className="hero-button flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full">
          <a href="#projects">See my work</a><ArrowRight size={16} />
        </button>
        <button
          className={dark
            ? "flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full hover:border-gray-400 text-gray-300 hover:text-white transition-colors duration-200"
            : "flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:border-black text-black hover:text-black transition-colors duration-200"
          }
        >
          <Mail size={16} /><a href="#contact">Get in touch</a>
        </button>
      </div>

      {/* Social Icons */}
      <div
        style={anim(0.4)}
        className="flex items-center gap-4 mt-4"
      >

        <a  href="mailto:ameyasajeevan@gmail.com"
          className={dark
            ? "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200"
            : "p-3 rounded-full bg-gray-100 border border-gray-300 text-black hover:text-black hover:border-gray-500 transition-all duration-200"
          }
        >
          <LuMail size={18} />
        </a>
        
        <a  href="https://github.com/Ameyaa44"
          target="_blank"
          rel="noreferrer"
          className={dark
            ? "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200"
            : "p-3 rounded-full bg-gray-100 border border-gray-300 text-black hover:text-black hover:border-gray-500 transition-all duration-200"
          }
        >
          <LuGithub size={18} />
        </a>

        
        <a  href="https://linkedin.com/in/ameya-sajeevan"
          target="_blank"
          rel="noreferrer"
          className={dark
            ? "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200"
            : "p-3 rounded-full bg-gray-100 border border-gray-300 text-black hover:text-black hover:border-gray-500 transition-all duration-200"
          }
        >
          <LuLinkedin size={18} />
        </a>

      </div>

    </section>
  );
}