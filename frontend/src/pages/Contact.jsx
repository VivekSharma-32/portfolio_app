import React from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20"
      id="contact"
    >
      {/* Section Heading */}
      <h2 className="text-4xl text-center font-extrabold italic mb-12 tracking-wide">
        Get in Touch
      </h2>

      {/* Contact Container */}
      <div className="max-w-2xl mx-auto grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Phone */}
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-teal-500/20 text-teal-400">
            <FaPhoneAlt size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-300">8493018103 / 6006552260</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-red-500/20 text-red-400">
            <FaEnvelope size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <a
              href="mailto:vivek.sharma1275@gmail.com"
              className="text-gray-300 hover:text-red-400 hover:underline transition-colors"
            >
              vivek.sharma1275@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 md:col-span-2">
          <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
            <FaLinkedin size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/vivek-sharma-737672160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 hover:underline transition-colors"
            >
              Vivek Sharma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
