import React from "react";
import "./Experience.css";
const Experience = () => {
  const data = [
    {
      title: "Software Engineer",
      company_name: "Borderfree Technologies",
      date: "Feb 2022 - Aug 2023",
      desc: "Worked on React native application from scratch and React.js website.",
      skills: [
        "React Native",
        "React.js",
        "Javascript",
        "Typescript",
        "Node.js",
        "Android studio",
        "AWS",
      ],
      url: "https://media.licdn.com/dms/image/C4D0BAQHl5YbhlV_B2g/company-logo_200_200/0/1627040035050?e=2147483647&v=beta&t=4oaoQRmkTtKGcNU24fNytFKxgtiZEcajtMoKjBlRC2g",
    },
    {
      title: "Full stack developer Intern",
      company_name: "The 10x Academy",
      date: "July 2021 - Feb 2022",
      desc: "Acquired a comprehensive understanding of data structures, honed my expertise in both front-end and back-end development, and further solidified my skills through the completion of numerous substantial projects.",
      skills: [
        "Data Structure",
        "Python",
        "Javascript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "HTML",
        "CSS",
      ],
      url: "https://www.the10xacademy.com/assets/images/favicon-2.jpeg",
    },
  ];
  return (
    <div className="exp-main">
      <h2 id="exp-heading">Experience</h2>
      <p id="exp-para">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>
      {data.map((item, index) => {
        return (
          <div className="single-exp" key={`exp-` + index}>
            <div className="exp-left-div">
              <div className="circle"></div>
              {index !== data.length - 1 && <div className="line"></div>}
            </div>
            <div className="exp-contain">
              <div className="top-detail">
                <img src={item.url} alt={item.title} />
                <div>
                  <h4>{item?.title}</h4>
                  <h5>{item?.company_name}</h5>
                  <h6>{item?.date}</h6>
                </div>
              </div>
              <p>{item?.desc}</p>
              <div className="exp-skill-area">
                <h4>Skills:</h4>
                <ul>
                  {item?.skills?.map((s, idx) => {
                    return <li key={`skill-` + idx}>{s}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
