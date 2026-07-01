import { GraduationCap } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../ThemeProvider";

const education = [
  {
    institution: "Luminar Technolab",
    degree: "MEAN & MERN Stack Internship",
    period: "2025 — 2026",
    description:
      "Hands-on training in full-stack development. Built real-world projects using MongoDB, Express, React, Angular, and Node.js.",
  },
  {
    institution: "Kannur University",
    degree: "B.Sc. in Computer Science",
    period: "2022 — 2025",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, databases, and software engineering principles.",
  }
];

export default function Education() {
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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={dark
        ? "bg-gray-950 text-white px-6 py-20 max-w-6xl mx-auto"
        : "bg-white text-black px-6 py-20 max-w-6xl mx-auto"
      }
    >

      {/* Label */}
      <p
        className={dark
          ? "text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
          : "text-xs uppercase tracking-[0.3em] text-black mb-2"
        }
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.1s",
        }}
      >
        04 / Experience & Education
      </p>

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-extrabold gradient-text mb-14"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.2s",
        }}
      >
        Where I learned the <br /> fundamentals
      </h2>

      {/* List */}
      <div
        className="flex flex-col gap-5"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.5s, transform 0.9s ease 0.5s",
        }}
      >
        {education.map((item) => (
          <div key={item.institution} className="flex items-start gap-5">

            {/* Icon */}
            <div
              className={dark
                ? "mt-1 w-9 h-9 rounded-full flex items-center justify-center text-cyan-400 shrink-0 border border-gray-700"
                : "mt-1 w-9 h-9 rounded-full flex items-center justify-center text-cyan-600 shrink-0 border border-gray-300"
              }
              style={{ background: "linear-gradient(135deg, #06b6d415, #3b82f615)" }}
            >
              <GraduationCap size={16} />
            </div>

            {/* Card */}
            <div
              className={dark
                ? "flex-1 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] transition-all duration-300"
                : "flex-1 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] transition-all duration-300"
              }
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">

                {/* Left */}
                <div>
                  <h3 className={dark ? "text-lg font-bold text-white mb-1" : "text-lg font-bold text-black mb-1"}>
                    {item.institution}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ background: "linear-gradient(to right, #06b6d4, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {item.degree}
                  </p>
                  <p className={dark ? "text-gray-400 text-sm leading-relaxed" : "text-black text-sm leading-relaxed"}>
                    {item.description}
                  </p>
                </div>

                {/* Year */}
                <span className={dark ? "text-sm text-gray-500 shrink-0" : "text-sm text-black shrink-0"}>
                  {item.period}
                </span>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}