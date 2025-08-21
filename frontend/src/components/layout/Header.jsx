import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons
import { TypeAnimation } from "react-type-animation";

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
      <div className="flex items-center justify-between w-full px-6 py-4">
        {/* LOGO */}
        <img
          src="/assets/images/white.jpg"
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain p-1 cursor-pointer"
        />

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:block bg-gray-600 w-auto py-3 rounded-md shadow-md">
          <ul className="flex items-center gap-6">
            {navigation.map(
              (item) =>
                item.active === "yes" && (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="font-medium px-6 py-3 rounded-md 
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
        className={`md:hidden bg-gray-900 transition-all duration-500 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
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
        </ul>
      </nav>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[30vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center 
          text-center text-white italic
          bg-[url(/assets/images/banner/coder.avif)] bg-top sm:bg-center bg-no-repeat bg-cover"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <h1 className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-bold not-italic">
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
             bg-clip-text text-transparent"
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
