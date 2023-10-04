import React from "react";
import { DiCssdeck } from "react-icons/di";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-main">
      <div>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            // marginBottom: "20;",
            cursor: "pointer",
          }}
        >
          <DiCssdeck size="3rem" />
          <h4>Portfolio</h4>
        </a>
      </div>
      <div className="navigation-links">
        <Link to="#abc">About</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#experience">Experience</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#education">Education</Link>
      </div>
      <div className="github-button">
        <Link to="/abc">Github Profile</Link>
      </div>
    </div>
  );
};

export default Header;
{
  /* <a href="#abc">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a> */
}
