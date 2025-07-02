import React from "react";
import SkillCard from "../components/SkillCard";
import { faReact, faGitAlt, faJs, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';



const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full h-full bg-gray-900 pb-16 id='skills'">
        <section className="flex flex-col items-center pt-16">
          <h1 className="text-center font-bold text-4xl text-white">
            Technical <span className="text-blue-300">Skills</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 ">
            <div className="flex flex-col items-center justify-center mt-16 bg-gray-800 rounded-lg p-8 border-2 border-transparent hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/color/48/tailwindcss.png"
                alt="tailwindcss"
              />
              <h2 className="text-2xl font-bold text-white mt-4">
                Tailwind CSS
              </h2>
            </div>
            
            <SkillCard icon={faReact} label="React" />
            <SkillCard icon={faGitAlt} label="Git" />
            <SkillCard icon={faJs} label="JavaScript" />
            <SkillCard icon={faHtml5} label="HTML" /> 
            <SkillCard icon={faCss3Alt} label="CSS" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
