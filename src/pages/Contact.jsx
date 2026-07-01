import { useEffect, useRef, useState } from "react";
import { LuMail, LuPhone, LuGithub, LuLinkedin } from "react-icons/lu";
import { useTheme } from "../ThemeProvider";

const socials = [
  { icon: <LuMail size={18} />, label: "Email", href: "mailto:ameyasajeevan@gmail.com" },
  { icon: <LuGithub size={18} />, label: "GitHub", href: "https://github.com/Ameyaa44" },
  { icon: <LuLinkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/ameya-sajeevan" }
];

export default function Contact() {
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
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
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
            transform: isVisible ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.5s ease 0s, transform 0.5s ease 0s",
          }}
        >
          05 / Contact
        </p>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold gradient-text mb-10 pb-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
        >
          Let's build something <br /> together
        </h2>

        {/* Big Card */}
        <div
          className={dark
            ? "rounded-2xl bg-gray-900/50 border border-gray-800 p-12 flex flex-col items-center text-center gap-7"
            : "rounded-2xl bg-gray-50 border border-gray-200 p-12 flex flex-col items-center text-center gap-7"
          }
          style={{
            boxShadow: "0 0 60px rgba(6,182,212,0.05)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
          }}
        >
          {/* Description */}
          <p className={dark
            ? "text-gray-400 text-base max-w-md leading-relaxed"
            : "text-black text-base max-w-md leading-relaxed"
          }>
            Got a project in mind, or just want to connect? I'm open to full-time roles and freelance work. My inbox is open.
          </p>

          {/* Email Button */}
          
          <a  href="mailto:ameyasajeevan@gmail.com"
            className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #3b82f6 100%)" }}
          >
            <LuMail size={16} /> ameyasajeevan@gmail.com
          </a>

          {/* Phone */}
          
          <a  href="tel:+919447690002"
            className={dark
              ? "flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200"
              : "flex items-center gap-2 text-black text-sm hover:text-gray-700 transition-colors duration-200"
            }
          >
            <LuPhone size={14} /> +91 9447690002
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              
              <a  key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className={dark
                  ? "w-10 h-10 rounded-full flex items-center justify-center text-gray-400 border border-gray-700 bg-gray-800/50 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-200"
                  : "w-10 h-10 rounded-full flex items-center justify-center text-black border border-gray-300 bg-gray-100 hover:text-black hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-200"
                }
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}