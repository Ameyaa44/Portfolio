import { useTheme } from "../ThemeProvider";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer className={dark
      ? "bg-gray-950 border-t border-gray-800 px-6 py-5"
      : "bg-white border-t border-gray-200 px-6 py-5"
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
                ? "hover:text-white cursor-pointer transition-colors duration-200"
                : "hover:text-gray-700 cursor-pointer transition-colors duration-200"
              }
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className={dark ? "w-full h-px bg-gray-800" : "w-full h-px bg-gray-200"} />

        {/* Copyright */}
        <p className={dark ? "text-xs text-gray-600 text-center" : "text-xs text-black text-center"}>
          © {new Date().getFullYear()} Ameya Sajeevan. All rights reserved. Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}