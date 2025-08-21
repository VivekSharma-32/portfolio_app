import React from "react";
import { FaConnectdevelop, FaCode, FaAndroid } from "react-icons/fa";
import Card from "../components/Card/Card";

const Services = () => {
  return (
    <div className="py-10 bg-black" id="services">
      {/* Section Title */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Services
      </h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          icon={<FaConnectdevelop size={60} className="text-yellow-400" />}
          heading="Web Development"
          content="Responsive, secure, and scalable websites tailored to your business needs. From simple landing pages to full-stack web applications, we deliver modern solutions that engage users and drive results."
        />
        <Card
          icon={<FaAndroid size={60} className="text-green-400" />}
          heading="Mobile App Development"
          content="Custom iOS and Android apps with seamless performance, intuitive design, and scalable architecture to keep your business connected on the go."
        />
        <Card
          icon={<FaCode size={60} className="text-blue-400" />}
          heading="API Development"
          content="Robust and secure APIs designed for seamless integration. We build scalable, high-performance RESTful services that connect applications and enhance business workflows."
        />
      </div>
    </div>
  );
};

export default Services;
