import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons
import { TypeAnimation } from "react-type-animation";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"; // Dark/Light icons

const navigation = [
  { id: 1, name: "About", active: "yes", link: "#about" },
  { id: 2, name: "Services", active: "yes", link: "#services" },
  { id: 3, name: "Projects", active: "yes", link: "#projects" },
  { id: 4, name: "Skills", active: "yes", link: "#skills" },
  { id: 5, name: "Contact", active: "yes", link: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // just for icon toggle

  return (
    <div className="bg-black text-white">
      {/* HEADER TOP */}
      <div className="flex items-center justify-between w-full px-6 py-4">
        {/* LOGO */}
        <img
          src="/assets/images/white.jpg"
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain p-1 cursor-pointer"
        />

        {/* NAVIGATION DESKTOP (centered) */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 bg-gray-600 py-3 px-6 rounded-md shadow-md">
            {navigation.map(
              (item) =>
                item.active === "yes" && (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="font-medium px-6 py-2 rounded-md 
                        transition-all duration-300 ease-in-out 
                        hover:bg-gray-500 hover:text-yellow-400"
                    >
                      {item.name}
                    </a>
                  </li>
                )
            )}
          </ul>
        </nav>

        {/* DARK/LIGHT MODE BUTTON (icon only, no css switching) */}
        <button
          className="hidden md:flex text-2xl ml-4 p-2 rounded-full 
            transition-all duration-300 ease-in-out
            hover:bg-gray-300/20"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
        </button>

        {/* HAMBURGER ICON (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-96 opacity-100 bg-gray-900" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navigation.map(
            (item) =>
              item.active === "yes" && (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="font-medium block px-4 py-2 rounded-md 
                      transition-all duration-300 ease-in-out 
                      hover:bg-gray-800 hover:text-teal-300"
                  >
                    {item.name}
                  </a>
                </li>
              )
          )}
          {/* Dark/Light Mode Button inside Mobile Menu */}
          <button
            className="flex items-center gap-2 text-lg mt-4 px-4 py-2 rounded-md 
              bg-gray-700 hover:bg-gray-600 transition-all"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[30vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center 
          text-center italic
          bg-[url(/assets/images/banner/coder.avif)] bg-top sm:bg-center bg-no-repeat bg-cover"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-bold not-italic">
          <TypeAnimation
            sequence={[
              "Hi, I'm Vivek Sharma",
              1000,
              "Full-Stack Developer",
              1000,
              "Building Modern Web Apps",
              1000,
              "Frontend & Backend Enthusiast",
              1000,
              "React, Node.js & Cloud Lover",
              1000,
              "Passionate About Problem Solving ",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="div"
            className="text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent 
             block max-w-[100%] sm:max-w-[80%] md:max-w-3xl 
             mx-auto whitespace-pre-line break-words text-center
             h-[4rem] sm:h-[5rem] md:h-[6rem] flex items-center justify-center"
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
