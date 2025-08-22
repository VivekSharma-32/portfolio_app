import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const navigation = [
  { id: 1, name: "About", active: "yes", link: "#about" },
  { id: 2, name: "What I Do", active: "yes", link: "#whatido" },
  { id: 3, name: "Projects", active: "yes", link: "#projects" },
  { id: 4, name: "Skills", active: "yes", link: "#skills" },
  { id: 5, name: "Hire Me", active: "yes", link: "#hireme" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* HEADER TOP */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        {/* LOGO */}
        <img
          src={
            theme === "dark"
              ? "/assets/images/white.jpg"
              : "/assets/images/black.jpg"
          }
          alt="Logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain cursor-pointer"
        />

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul
            className={`flex items-center gap-6 py-4 rounded-full ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100 shadow-md"
            }`}
          >
            {navigation.map(
              (item) =>
                item.active === "yes" && (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className={`font-medium px-4 sm:px-6 py-4 rounded-full transition-all duration-300 ease-in-out 
                        ${
                          theme === "dark"
                            ? "hover:bg-gray-700 hover:text-yellow-400"
                            : "hover:bg-gray-200 hover:text-orange-600"
                        }`}
                    >
                      {item.name}
                    </a>
                  </li>
                )
            )}
          </ul>
        </nav>

        {/* MOBILE + THEME BUTTON */}
        <div className="flex items-center gap-2">
          {/* DARK/LIGHT MODE BUTTON (Desktop Only) */}
          <button
            className="hidden md:flex text-2xl p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300/20"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>

          {/* DARK/LIGHT MODE BUTTON (Mobile Only) */}
          <button
            className="md:hidden text-2xl p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300/20"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>

          {/* HAMBURGER ICON (Mobile Only) */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen
            ? theme === "dark"
              ? "max-h-96 opacity-100 bg-gray-900"
              : "max-h-96 opacity-100 bg-gray-200"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navigation.map(
            (item) =>
              item.active === "yes" && (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`font-medium block px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
                      theme === "dark"
                        ? "hover:bg-gray-800 hover:text-teal-300"
                        : "hover:bg-gray-300 hover:text-orange-600"
                    }`}
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
        className="relative min-h-[30vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center text-center italic
          bg-[url(/assets/images/banner/coder.avif)] bg-top sm:bg-center bg-no-repeat bg-cover"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-bold not-italic px-2 sm:px-4">
          <TypeAnimation
            sequence={[
              "Hi, I'm Vivek Sharma",
              2000,
              "Full-Stack Developer",
              2000,
              "Building Modern Web Apps",
              2000,
              "Frontend & Backend Enthusiast",
              2000,
              "React, Node.js & Cloud Lover",
              2000,
              "Passionate About Problem Solving ",
              2000,
            ]}
            speed={50}
            wrapper="div"
            className="text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent 
             block max-w-[90%] sm:max-w-[80%] md:max-w-3xl 
             mx-auto whitespace-pre-line break-words text-center
             h-[4rem] sm:h-[5rem] md:h-[6rem] flex items-center justify-center"
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
