import Card from "../components/Card/Card";
import skills from "../utils/skills";

const Skills = () => {
  return (
    <div className="bg-black text-white py-16" id="skills">
      {/* Section Heading */}
      <h2 className="text-3xl text-center mb-10 font-bold italic">Skills</h2>

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
