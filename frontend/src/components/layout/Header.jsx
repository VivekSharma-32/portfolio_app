import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons

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
        <div className="font-bold text-2xl md:text-3xl flex items-center gap-2 font-mono italic">
          <FaCode className="mt-1" /> Vivek
        </div>

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
        className="min-h-[30vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center 
        font-bold text-center bg-black text-white italic 
        bg-[url(https://img.freepik.com/premium-photo/creative-desktop-wallpaper_941097-67554.jpg)] 
        bg-top sm:bg-center bg-no-repeat bg-cover relative"
      >
        <h1 className="absolute left-0 md:left-10 text-2xl sm:text-4xl md:text-5xl w-full md:w-[50%] p-4">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Programmer",
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
