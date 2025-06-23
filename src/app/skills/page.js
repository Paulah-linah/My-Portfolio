import React from 'react';
import {
  FaJsSquare, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaServer, FaMobileAlt, FaPalette, FaBrain, FaRobot, FaDatabase, FaCode
} from 'react-icons/fa';
import {
  SiCplusplus, SiNextdotjs, SiFlutter, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiPostman, SiVercel, SiNetlify
} from 'react-icons/si';
import Skill from '../components/Skill';

const SkillsPage = () => {
  const skills = {
    "Programming Languages": [
      { name: "JavaScript", level: "70%", icon: <FaJsSquare /> },
      { name: "Python", level: "90%", icon: <FaPython /> },
      { name: "C++", level: "70%", icon: <SiCplusplus /> },
      { name: "C#", level: "75%", icon: <FaCode /> },
      { name: "HTML", level: "95%", icon: <FaHtml5 /> },
      { name: "CSS", level: "90%", icon: <FaCss3Alt /> },
      { name: "SQL", level: "85%", icon: <FaDatabase /> }
    ],
    "Frameworks & Libraries": [
      { name: "React", level: "90%", icon: <FaReact /> },
      { name: "Next.js", level: "85%", icon: <SiNextdotjs /> },
      { name: "Node.js", level: "80%", icon: <FaNodeJs /> },
      { name: "Flutter", level: "75%", icon: <SiFlutter /> },
      { name: "Tailwind CSS", level: "95%", icon: <SiTailwindcss /> },
      { name: "Bootstrap", level: "80%", icon: <FaBootstrap /> }
    ],
    "Databases & DevOps": [
      { name: "MySQL", level: "90%", icon: <SiMysql /> },
      { name: "MongoDB", level: "75%", icon: <SiMongodb /> },
      { name: "Firebase", level: "70%", icon: <SiFirebase /> }
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", level: "90%", icon: <FaGitAlt /> },
      { name: "VS Code", level: "95%", icon: <FaCode /> },
      { name: "Postman", level: "85%", icon: <SiPostman /> },
      { name: "Vercel", level: "85%", icon: <SiVercel /> },
      { name: "Netlify", level: "80%", icon: <SiNetlify /> }
    ],
    "Soft Skills": [
      { name: "Problem Solving", level: "95%", icon: <FaBrain /> },
      { name: "Teamwork", level: "90%", icon: <FaRobot /> },
      { name: "Creativity", level: "90%", icon: <FaPalette /> }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-orange-400">My Skills</h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Here's a showcase of my technical and professional abilities.
        </p>
        
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-6 border-l-4 border-white pl-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillList.map(skill => (
                  <Skill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://github.com/Paulah-linah" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
            See My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;