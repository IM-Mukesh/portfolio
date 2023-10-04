import React from "react";
import "./Skills.css";
import { skills } from "./constants";
import SkillContainer from "./SkillContainer";
const Skills = () => {
  return (
    <div className="skill-main">
      <h3 id="skill-heading">Skills</h3>
      <p>
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="skill-boxes">
        {skills.map((skill) => {
          return <SkillContainer title={skill.title} skill={skill.skills} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
