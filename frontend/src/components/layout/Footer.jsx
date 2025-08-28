import { useTheme } from "../../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-10 border-t ${
        theme === "dark"
          ? "bg-black text-white border-yellow-50"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold mb-3">About</h2>
          <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Building modern web apps with passion for frontend & backend.
            Creating seamless digital experiences using React, Node.js, and
            cloud technologies.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#whatido" className="hover:text-orange-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#hireme" className="hover:text-orange-500 transition">
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/vivekSharma-32/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-sharma-737672160/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://x.com/viveksh27243288"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm border-t pt-5">
        &copy; {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
        <span className="font-semibold underline">Vivek Sharma</span>
      </div>
    </footer>
  );
};

export default Footer;
