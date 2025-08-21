import Card from "../components/Card/Card";
import skills from "../utils/skills";

const Skills = () => {
  return (
    <div className="bg-black text-white py-16" id="skills">
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            icon={<skill.icon size={40} color={skill.color} />} // bigger icons
            heading={skill.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
