import { useTheme } from "../ThemeProvider";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer className={dark
      ? "bg-gray-950 border-t border-gray-800 px-6 py-4"
      : "bg-white border-t border-gray-200 px-6 py-4"
    }>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Nav Links */}
        <ul className={dark
          ? "flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500"
          : "flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-black"
        }>
          {links.map((link) => (
            <li
              key={link}
              className={dark
                ? "hover:text-cyan-400/60 cursor-pointer transition-colors duration-200"
                : "hover:text-cyan-600 cursor-pointer transition-colors duration-200"
              }
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className={dark ? "w-full h-px bg-gray-800" : "w-full h-px bg-gray-200"} />

        {/* Copyright */}
        <p className={dark ? "text-sm text-gray-600 text-center" : "text-sm text-black text-center"}>
          © 2026 Ameya Sajeevan. Designed & built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}