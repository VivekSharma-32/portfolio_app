import { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card/Card";
import skills from "../utils/skills";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  // Calculate the total width for sliding (number of cards * card width + gap)
  const cardWidth = 240; // same as w-60 in px
  const gap = 24; // Tailwind gap-6 in px
  const totalWidth = skills.length * (cardWidth + gap);

  return (
    <div
      id="skills"
      className={`py-16 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Skills
      </h2>

      {/* Auto Sliding Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -totalWidth / 2] }} // move right → left
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {skills.concat(skills).map((skill, idx) => (
            <motion.div key={idx} className="flex-shrink-0 w-60">
              <Card
                icon={<skill.icon size={40} color={skill.color} />}
                heading={skill.heading}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
