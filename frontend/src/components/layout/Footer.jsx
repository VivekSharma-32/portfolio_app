import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-5 border-t ${
        theme === "dark"
          ? "bg-black text-white border-yellow-50"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <div className="flex items-center justify-center px-4">
        <h1 className="text-lg md:text-xl font-semibold text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
          <span
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
            bg-clip-text text-transparent font-bold"
          >
            Vivek Sharma
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
