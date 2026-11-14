import React from 'react';

const Skills = () => {
  const skillsList = ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Python", "Django", "Git & GitHub", "SQL & MySQL"];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white py-4 px-6 rounded-xl shadow-sm font-semibold text-gray-700 border border-gray-200 hover:border-blue-500 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;