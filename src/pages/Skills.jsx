import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "../ThemeProvider";

const skills = [
  {
    title: "Frontend",
    icons: [
      { icon: <SiReact className="text-sky-400" />, name: "React.js" },
      { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
      { icon: <SiAngular className="text-red-500" />, name: "Angular" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
      { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <SiCss className="text-blue-500" />, name: "CSS3" },
      { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
      { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend & Database",
    icons: [
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-black dark:text-gray-300" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
  },
  {
    title: "Tools & Platforms",
    icons: [
      { icon: <SiGit className="text-orange-600" />, name: "Git" },
      { icon: <SiGithub className="text-black dark:text-white" />, name: "GitHub" },
      { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
      { icon: <SiVercel className="text-black dark:text-white" />, name: "Vercel" },
    ],
  },
];

function Skills() {
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
      id="skills"
      ref={sectionRef}
      className={dark
        ? "bg-gray-950 text-white px-6 pb-40 max-w-7xl mx-auto"
        : "bg-white text-black px-6 pb-40 max-w-7xl mx-auto"
      }
    >
      {/* Section Label */}
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
        02 / Skills
      </p>

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold gradient-text mb-14"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.2s",
        }}
      >
        My Tech Stack
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Frontend — full width */}
        <div
          className={dark
            ? "md:col-span-2 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
            : "md:col-span-2 p-6 rounded-2xl bg-gray-200/50 border border-gray-200 hover:border-cyan-500/40 transition-all duration-300"
          }
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <h3 className={dark ? "text-lg font-bold text-white mb-6" : "text-lg font-bold text-black mb-6"}>
            Frontend
          </h3>
          <div className="flex flex-wrap gap-5">
            {skills[0].icons.map((item) => (
              <div key={item.name} className="group flex flex-col items-center gap-2">
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <span
                  className={dark
                    ? "text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                    : "text-xs text-black group-hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Database, Tools — half width each */}
        {skills.slice(1).map((skill, index) => (
          <div
            key={skill.title}
            className={dark
              ? "p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
              : "p-6 rounded-2xl bg-gray-200/50 border border-gray-200 hover:border-cyan-500/40 transition-all duration-300"
            }
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.8s ease ${0.6 + index * 0.15}s, transform 0.8s ease ${0.6 + index * 0.15}s`,
            }}
          >
            <h3 className={dark ? "text-lg font-bold text-white mb-6" : "text-lg font-bold text-black mb-6"}>
              {skill.title}
            </h3>
            <div className="flex flex-wrap gap-5">
              {skill.icons.map((item) => (
                <div key={item.name} className="group flex flex-col items-center gap-2">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                  <span
                    className={dark
                      ? "text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                      : "text-xs text-black group-hover:text-gray-700 transition-colors duration-300"
                    }
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills