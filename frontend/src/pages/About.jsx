import React from "react";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-6" id="about">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 max-w-6xl mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:basis-1/2"
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 italic mb-6 text-center md:text-left">
            Crafting Code, Creating Impact 🚀
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 text-justify">
            Hi, I’m{" "}
            <span className="text-yellow-400 font-semibold">Vivek Sharma</span>,
            a <span className="text-teal-400">Full-Stack Developer</span>{" "}
            passionate about transforming ideas into powerful, scalable, and
            user-friendly digital solutions.
          </p>

          <div className="mt-6 space-y-4">
            <p className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <span>
                <span className="font-semibold">Front-End Magic:</span> React,
                JavaScript (ES6+), HTML5, CSS3, Bootstrap
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <span>
                <span className="font-semibold">Back-End Power:</span> Node.js,
                Express.js, PHP (CodeIgniter, Laravel)
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <span>
                <span className="font-semibold">Databases:</span> MySQL,
                PostgreSQL, MongoDB
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <span>
                <span className="font-semibold">Other Skills:</span> Secure
                coding, REST APIs, Git/GitHub, Cloud deployment
              </span>
            </p>
          </div>

          {/* Contact Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
                         text-black shadow-lg transition-all duration-300 
                         hover:shadow-yellow-400/50 hover:scale-105 hover:text-white
                         relative overflow-hidden group"
            >
              <span className="relative z-10">📩 Let’s Connect</span>
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
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
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
