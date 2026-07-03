import { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeProvider";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { dark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tags = ["MongoDB", "Express.js", "React", "Angular", "Node.js"];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={dark
        ? "bg-gray-950 text-white px-6 py-24 max-w-6xl mx-auto overflow-hidden"
        : "bg-white text-black px-6 py-24 max-w-6xl mx-auto overflow-hidden"
      }
    >
      <p
        className={dark
          ? "text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
          : "text-xs uppercase tracking-[0.3em] text-black mb-2"
        }
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        01 / About
      </p>

      <h2
        className="text-4xl md:text-5xl font-extrabold gradient-text mb-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
        }}
      >
        Who I Am
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
        {/* Photo — circular, spans 5 cols */}
        <div
          className="md:col-span-5 flex justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div
              className="absolute inset-0 rounded-full shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #3b82f6 100%)",
                padding: "4px",
              }}
            >
              <div
                className={dark
                  ? "w-full h-full rounded-full overflow-hidden relative bg-gray-900"
                  : "w-full h-full rounded-full overflow-hidden relative bg-gray-100"
                }
              >
                <img
                  src="src/assets/Image.jpeg"
                  alt="Ameya"
                  className="w-full h-full object-cover grayscale-15"
                  // style={{ filter: "grayscale(80%) contrast(1)" }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 45%)" }}
                />
              </div>
            </div>

            {/* Floating badge — fresher-appropriate */}
            <div
              className={dark
                ? "absolute -bottom-2 -right-2 rounded-2xl bg-gray-900 border border-gray-700 px-3 py-2 shadow-xl flex items-center gap-2"
                : "absolute -bottom-2 -right-2 rounded-2xl bg-white border border-gray-200 px-3 py-2 shadow-xl flex items-center gap-2"
              }
              // style={{ transform: "rotate(3deg)" }}
            >
              <span className="text-lg leading-none">👋</span>
              <div className="leading-none">
                <p className={dark ? "text-xs font-bold text-gray-100" : "text-xs font-bold text-gray-900"}>
                  Let's Connect
                </p>
                <p className={dark ? "text-[10px] text-gray-500 mt-0.5" : "text-[10px] text-gray-600 mt-0.5"}>
                  actively job hunting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text — spans 7 cols */}
        <div
          className="md:col-span-7"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          <p
            className={dark
              ? "text-2xl md:text-3xl font-semibold leading-snug text-gray-100 mb-6"
              : "text-2xl md:text-3xl font-semibold leading-snug text-gray-900 mb-6"
            }
          >
            Building my way into,{" "}
            <span className="gradient-text">tech</span>.
          </p>

          <p className={dark ? "text-gray-400 text-base leading-relaxed mb-4" : "text-gray-700 text-base leading-relaxed mb-4"}>
            I'm Ameya, a computer science graduate who learns by building. That's shaped up as full-stack projects across the MERN and MEAN stacks — a service marketplace, an e-commerce app, a recipe platform — each one taken from database to deployed UI.
          </p>

          <p className={dark ? "text-gray-400 text-base leading-relaxed mb-8" : "text-gray-700 text-base leading-relaxed mb-8"}>
            I'm early in my career, but I learn fast, communicate clearly, and work well with a team. I break problems down, manage my time, and care about getting the details right — and I'm excited to bring that to a real team.
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={dark
                  ? "text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-800 text-gray-300 bg-gray-900/60"
                  : "text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-200 text-gray-700 bg-gray-50"
                }
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.4s ease ${0.45 + i * 0.05}s, transform 0.4s ease ${0.45 + i * 0.05}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold text-white px-6 py-2.5 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #3b82f6 100%)" }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className={dark
                ? "inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200"
                : "inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black transition-all duration-200"
              }
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}