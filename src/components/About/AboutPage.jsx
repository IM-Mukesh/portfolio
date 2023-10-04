import React from "react";
import Typewriter from "typewriter-effect";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import LocalImage from "./mk_pic.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
const AboutPage = () => {
  const roles = [
    "Full Stack Developer",
    "React Native Developer",
    "UI/UX Designer",
    "Programmer",
  ];
  return (
    <div className="about-main">
      <div className="details">
        <h2 className="main-heading">Hi, I am</h2>
        <h2 className="main-heading">Mukesh Kumar</h2>

        <span className="outer-span">
          <h3>I am a</h3>
          <span className="inner-span">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </span>

        <p>
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <Link to="/" id="resume">
          Check Resume
        </Link>
      </div>
      <div className="img-area">
        <HeroBgAnimation />
        <img src={LocalImage} alt="" />
      </div>
    </div>
  );
};

export default AboutPage;
