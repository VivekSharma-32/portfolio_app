import React, { useContext } from "react";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext"; // adjust path if needed
import { Link } from "react-router-dom";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="about"
      className={`py-20 px-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 max-w-6xl mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:basis-1/2"
        >
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
          >
            Crafting Code, Creating Impact
          </h2>
          <p
            className={`text-lg leading-relaxed text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hi, I’m{" "}
            <span className="text-yellow-400 font-semibold">Vivek Sharma</span>,
            a <span className="text-teal-400">Full-Stack Developer</span>{" "}
            passionate about transforming ideas into powerful, scalable, and
            user-friendly digital solutions.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                title: "Front-End Magic:",
                text: "React, JavaScript (ES6+), HTML5, CSS3, Bootstrap",
              },
              {
                title: "Back-End Power:",
                text: "Node.js, Express.js, PHP (CodeIgniter, Laravel)",
              },
              {
                title: "Databases:",
                text: "MySQL, PostgreSQL, MongoDB",
              },
              {
                title: "Other Skills:",
                text: "Secure coding, REST APIs, Git/GitHub, Cloud deployment",
              },
            ].map((item, idx) => (
              <p key={idx} className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">✔</span>
                <span>
                  <span className="font-semibold">{item.title}</span>{" "}
                  {item.text}
                </span>
              </p>
            ))}
          </div>

          {/* Contact Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#hireme"
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
                         text-black shadow-lg transition-all duration-300 
                         hover:shadow-yellow-400/50 hover:scale-105 hover:text-white
                         relative overflow-hidden group"
            >
              <span className="relative z-10">Let’s Connect</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:basis-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              className="w-full max-w-md rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              src="/assets/images/banner/about-banner.avif"
              alt="About"
            />
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                         flex items-end justify-center pb-6"
            >
              <p className="text-yellow-400 text-lg font-semibold italic">
                “Building experiences, not just applications.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
