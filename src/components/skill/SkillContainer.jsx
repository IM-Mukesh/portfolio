import React from "react";
import "./SkillContainer.css";
const SkillContainer = ({ title, skill }) => {
  console.log("hey", title, skill);
  return (
    <div className="skill-container-main">
      <h3>{title}</h3>
      <div className="skill-box">
        {skill.map((s) => {
          return (
            <div className="single-skill">
              <img src={s.image} alt="" />
              <h6>{s.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillContainer;
