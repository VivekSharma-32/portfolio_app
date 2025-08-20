import React from "react";
import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-black text-white py-10 px-5" id="about">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 max-w-6xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="md:basis-1/2">
          <h1 className="text-3xl font-bold border-b-2 border-yellow-500 pb-2 mb-5 italic flex items-center gap-2 justify-center md:justify-start">
            <MdComputer /> About Me
          </h1>
          <p className="text-justify text-lg leading-relaxed italic">
            I am a Computer Science graduate with over 4.5 years of hands-on
            experience in software development, specializing in full-stack web
            application design and implementation. My expertise includes
            front-end technologies such as HTML5, CSS3, JavaScript (ES6+),
            React, and Bootstrap, along with back-end development using Node.js,
            Express.js, and PHP frameworks like CodeIgniter and Laravel. I have
            worked extensively with relational and non-relational databases,
            including MySQL, PostgreSQL, and MongoDB. Skilled in using
            Git/GitHub, REST APIs, and Postman. I am also experienced in secure
            coding practices, authentication mechanisms, and cloud deployment on
            Linux environments, with a focus on building scalable, efficient,
            and user-friendly solutions.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:basis-1/2 flex justify-center">
          <img
            className="w-full max-w-md rounded-xl shadow-lg"
            src="https://t4.ftcdn.net/jpg/01/80/58/87/360_F_180588791_fchL6FWwOB1Vl9QngsKgzz6kIxVffayA.jpg"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
