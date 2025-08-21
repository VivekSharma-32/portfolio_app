import React from "react";

const Card = ({ icon, heading, content, height }) => {
  return (
    <div
      className={`p-5 shadow-sm flex flex-col items-center max-w-sm p-6 bg-transparent 
                  rounded-xl shadow-md text-white border-1 border-gray-700 ${height}
                  transition-transform duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 hover:border-teal-400`}
    >
      <div className="mb-2">{icon}</div>
      <div>
        <h2 className="text-xl text-center mb-1 font-bold">{heading}</h2>
        <p className="text-justify text-sm py-2 italic">{content}</p>
      </div>
    </div>
  );
};

export const ProductCard = ({ heading, content, imgUrl }) => {
  return (
    <div
      className={`shadow-sm md:flex sm:block md:flex-col max-w-sm bg-transparent 
                  rounded-xl shadow-md text-white border-1 border-gray-700
                  transition-transform duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 hover:border-teal-400`}
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
        <p className="text-justify text-sm py-2 italic">{content}</p>
      </div>
    </div>
  );
};

export default Card;
