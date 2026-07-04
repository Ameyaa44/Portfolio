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
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      className={dark
        ? "relative bg-gray-950 text-white flex flex-col items-center text-center px-6 pt-50 pb-24 min-h-screen overflow-hidden"
        : "relative bg-white text-black flex flex-col items-center text-center px-6 pt-50 pb-24 min-h-screen overflow-hidden"
      }
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          opacity: dark ? 0.25 : 0.15,
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          opacity: dark ? 0.25 : 0.15,
        }}
      />

      {/* Status badge — sticker style */}
      <div
        style={{ ...anim(0), fontSize: "11px" }}
        className={dark
          ? "relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 bg-gray-900 font-semibold tracking-[0.2em] text-gray-300 mb-3 shadow-lg"
          : "relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 bg-white text-xs font-semibold tracking-[0.2em] text-black mb-3 shadow-lg"
        }
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        OPEN TO WORK
      </div>

      {/* Headline */}
      <div style={anim(0.1)} className="relative z-10">
        <h1 className="font-black tracking-tight leading-none text-4xl sm:text-3xl lg:text-5xl gradient-text">
          AMEYA SAJEEVAN
        </h1>
      </div>

      {/* Role statement */}
      <p
        style={anim(0.2)}
        className={dark
          ? "relative z-10 text-xl md:text-2xl font-semibold text-gray-200 mt-4 mb-1"
          : "relative z-10 text-xl md:text-2xl font-semibold text-gray-900 mt-4 mb-1"
        }
      >
        Aspiring Full-Stack Developer, <span className="gradient-text">MERN &amp; MEAN</span>.
      </p>

      {/* Sub-text */}
      <p
        style={anim(0.3)}
        className={dark
          ? "relative z-10 text-gray-400 text-base max-w-lg mb-8 leading-relaxed"
          : "relative z-10 text-gray-700 text-base max-w-lg mb-8 leading-relaxed"
        }
      >
        I learn by building — turning ideas into real, working apps. Bringing
        curiosity, fast adaptability, and clean code to my first team.
      </p>


      <div style={anim(0.4)} className="relative z-10 flex flex-wrap gap-4 justify-center">
        <button className="hero-button flex items-center gap-2 text-white font-bold uppercase text-sm tracking-wide px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200">
          <a href="#projects">See my work</a>
          <ArrowRight size={16} />
        </button>
        <button
          className={dark
            ? "flex items-center gap-2 border-2 border-gray-700 px-5 py-3 rounded-full font-bold uppercase text-sm tracking-wide hover:border-gray-400 text-gray-300 hover:text-white transition-all duration-200"
            : "flex items-center gap-2 border-2 border-gray-300 px-5 py-3 rounded-full font-bold uppercase text-sm tracking-wide hover:border-black text-black transition-all duration-200"
          }
        >
          <Mail size={16} />
          <a href="#contact">Get in touch</a>
        </button>
      </div>

      {/* Social Icons */}
      <div style={anim(0.4)} className="flex items-center gap-4 mt-4">
        
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

      {/* Scroll cue */}
      <div
        style={anim(0.6)}
        className={dark
          ? "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-[10px] tracking-[0.3em] animate-bounce"
          : "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-[10px] tracking-[0.3em] animate-bounce"
        }
      >
        SCROLL
        <span>↓</span>
      </div>
    </section>
  );
}