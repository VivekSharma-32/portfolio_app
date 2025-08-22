import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Card = ({ icon, heading, content, height }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-5 shadow-sm flex flex-col items-center max-w-sm p-6 rounded-xl shadow-md border-1 ${height}
                  transition-transform duration-300 ease-in-out hover:shadow-xl hover:shadow-teal-500/30 hover:border-teal-400
                  ${
                    theme === "dark"
                      ? "bg-transparent text-white border-gray-700"
                      : "bg-white text-black border-gray-300"
                  }`}
    >
      <div className="mb-2">{icon}</div>
      <div>
        <h2 className="text-xl text-center mb-1 font-bold">{heading}</h2>
        <p className="text-justify text-sm py-2">{content}</p>
      </div>
    </div>
  );
};

export const ProductCard = ({ heading, content, imgUrl }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`shadow-sm md:flex sm:block md:flex-col max-w-sm rounded-xl shadow-md border-1
                  transition-transform duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 hover:border-teal-400
                  ${
                    theme === "dark"
                      ? "bg-transparent text-white border-gray-700"
                      : "bg-white text-black border-gray-300"
                  }`}
    >
      <div className="h-[200px]">
        <img
          src={imgUrl}
          alt={heading}
          className="w-full h-full rounded-t-xl object-cover"
        />
      </div>
      <div className="text-center px-5 pt-2">
        <h2 className="text-xl text-center mb-1 font-bold">{heading}</h2>
        <p className="text-justify text-sm py-2">{content}</p>
      </div>
    </div>
  );
};

export default Card;
