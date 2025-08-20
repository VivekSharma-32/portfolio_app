import React from "react";

const Card = ({ icon, heading, content, height }) => {
  return (
    <div
      className={`p-5 shadow-sm flex flex-col items-center max-w-sm p-6 bg-transparent rounded-xl shadow-md text-white border ${height}`}
    >
      <div className={`mb-2 `}>{icon}</div>
      <div>
        <h2 className="text-xl text-center mb-1 font-bold">{heading}</h2>
        <p className="text-justify text-sm mb-2">{content}</p>
      </div>
    </div>
  );
};

export const ProductCard = ({ heading, content, imgUrl }) => {
  return (
    <div
      className={`shadow-sm md:flex sm:block md:flex-col max-w-sm bg-transparent rounded-xl shadow-md text-white `}
    >
      <div className={`h-50 `}>
        <img
          src={imgUrl}
          className="w-full h-full rounded-t-xl border-1 border-b-0"
        />
      </div>
      <div className="text-center px-5 border-x-1 border-b-1 pt-2">
        <h2 className="text-xl text-center mb-1 font-bold">{heading}</h2>
        <p className="text-justify text-sm mb-2">{content}</p>
      </div>
    </div>
  );
};

export default Card;
