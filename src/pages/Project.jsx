import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { useTheme } from "../ThemeProvider";

const projects = [
  {
    category: "MERN STACK",
    title: "ProFixer",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    description: "A service marketplace platform where users can post and find local services. Built with MERN stack featuring auth, listings, and booking flow.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST APIs", "RBAC", "Stripe"],
    github: "https://github.com/Ameyaa44/Profixer_server",
    live: "https://profixer-frontend.vercel.app",
  },
  {
    category: "MERN STACK",
    title: "Online Bookstore",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop",
    description: "Full-stack e-commerce app for buying and managing books. Includes product listings, cart, user auth, and order management.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "OAuth", "RBAC"],
    github: "https://github.com/Ameyaa44/bookStore_fe",
    live: "https://book-store-fe-flax-seven.vercel.app",
  },
  {
    category: "REACT.JS",
    title: "Resume Builder",
    image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop",
    description: "A resume builder with live preview and export to PDF. Built with React, Material UI, and JSON Server.",
    tags: ["React", "JSON Server", "html2canvas", "JsPDF", "Axios"],
    github: "https://github.com/Ameyaa44/resumeBuilder_fe",
    live: "https://resume-builder-fe-nu.vercel.app",
  },
  {
    category: "MEAN STACK",
    title: "Cookspedia",
    image: "https://images.unsplash.com/photo-1545602608-a2071d60c6c1?q=80&w=876&auto=format&fit=crop",
    description: "A recipe discovery app with search, filters, and detailed cooking instructions. Built with Angular and TypeScript.",
    tags: ["Angular", "Node.js", "MongoDB", "Express.js", "TypeScript", "Guards", "JsPDF", "JWT"],
    github: "https://github.com/Ameyaa44/Cookspedia_frontend",
    live: "https://cookspedia-frontend.vercel.app",
  },
];

function ProjectCard({ project, index, isVisible, dark }) {
  return (
    <div
      className={dark
        ? "group relative rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 flex flex-col overflow-hidden"
        : "group relative rounded-2xl bg-gray-50 border border-gray-200 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 flex flex-col overflow-hidden"
      }
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Project Image */}
      <div className="w-full h-44 overflow-hidden bg-gray-800 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Hover icon overlay */}
        <div className="hidden md:flex absolute inset-0 flex items-center justify-center gap-3 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

          
          <a  href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900/80 border border-gray-600 text-white text-xs font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
            style={{ transition: "transform 0.3s ease 0.05s, border-color 0.2s, color 0.2s" }}
          >
            <ExternalLink size={14} />
            Live
          </a>

          
          <a  href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900/80 border border-gray-600 text-white text-xs font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
            style={{ transition: "transform 0.3s ease, border-color 0.2s, color 0.2s" }}
          >
            <LuGithub size={14} />
            GitHub
          </a>

        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between gap-5 flex-1">
        <div>
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {project.category}
          </p>
          <h3 className={dark ? "text-xl font-bold text-white mb-2" : "text-xl font-bold text-black mb-2"}>
            {project.title}
          </h3>
          <p className={dark ? "text-gray-400 text-sm leading-relaxed" : "text-black text-sm leading-relaxed"}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={dark
                ? "text-xs px-3 py-1 rounded-full border border-gray-800 text-gray-500 bg-gray-800/50"
                : "text-xs px-3 py-1 rounded-full border border-gray-300 text-black bg-gray-100"
              }
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mobile-only action buttons */}
        <div className="flex md:hidden gap-3 pt-1">
          
          <a  href={project.live}
            target="_blank"
            rel="noreferrer"
            className={dark
              ? "flex items-center justify-center gap-1.5 flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white text-xs font-medium"
              : "flex items-center justify-center gap-1.5 flex-1 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-black text-xs font-medium"
            }
          >
            <ExternalLink size={14} />
            Live
          </a>
          
          <a  href={project.github}
            target="_blank"
            rel="noreferrer"
            className={dark
              ? "flex items-center justify-center gap-1.5 flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white text-xs font-medium"
              : "flex items-center justify-center gap-1.5 flex-1 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-black text-xs font-medium"
            }
          >
            <LuGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
      
      </div>
    // </div>
  );
}

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={dark
        ? "bg-gray-950 text-white px-6 py-20 max-w-6xl mx-auto"
        : "bg-white text-black px-6 py-20 max-w-6xl mx-auto"
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
        03 / Projects
      </p>

      <h2
        className="text-4xl md:text-5xl font-extrabold gradient-text mb-14"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
        }}
      >
        Built & Deployed
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            isVisible={isVisible}
            dark={dark}
          />
        ))}
      </div>
    </section>
  );
}