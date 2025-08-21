import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons
import { PiHandWavingFill } from "react-icons/pi";
const navigation = [
  { id: 1, name: "About", active: "yes", link: "#about" },
  { id: 2, name: "Services", active: "yes", link: "#services" },
  { id: 3, name: "Projects", active: "yes", link: "#projects" },
  { id: 4, name: "Skills", active: "yes", link: "#skills" },
  { id: 5, name: "Contact", active: "yes", link: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* HEADER TOP */}
      <div className="flex items-center justify-between w-full border-b border-yellow-50 mb-1 p-5">
        {/* LOGO */}
        <img
          src="/assets/images/white.jpg"
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
        />

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navigation.map(
              (item) =>
                item.active === "yes" && (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="italic font-medium hover:underline hover:not-italic"
                    >
                      {item.name}
                    </a>
                  </li>
                )
            )}
          </ul>
        </nav>

        {/* HAMBURGER ICON (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU (Animated) */}
      <nav
        className={`md:hidden bg-black border-b border-yellow-50 
        transition-all duration-500 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navigation.map(
            (item) =>
              item.active === "yes" && (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="italic font-medium hover:underline hover:not-italic text-lg"
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {item.name}
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[30vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center 
    font-bold text-center text-white italic
    bg-[url(/assets/images/banner/coder.avif)] bg-top sm:bg-center bg-no-repeat bg-cover"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <h1 className="relative z-10 text-2xl sm:text-4xl md:text-5xl flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            Hello <PiHandWavingFill className="text-yellow-400 animate-wave" />
          </span>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Software Developer",
              1000,
            ]}
            speed={50}
            wrapper="div"
            className="text-white"
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
