import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutPage: React.FC = () => {
  const controls = useAnimation();
  const bioControls = useAnimation();
  const experienceControls = useAnimation();
  const educationControls = useAnimation();
  const skillsControls = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [bioRef, bioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [expRef, expInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [eduRef, eduInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    if (bioInView) bioControls.start("visible");
    if (expInView) experienceControls.start("visible");
    if (eduInView) educationControls.start("visible");
    if (skillsInView) skillsControls.start("visible");
  }, [
    inView,
    bioInView,
    expInView,
    eduInView,
    skillsInView,
    controls,
    bioControls,
    experienceControls,
    educationControls,
    skillsControls,
  ]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      description:
        "Led development of responsive web applications using React, TypeScript, and Tailwind CSS. Improved performance by 40% through code optimization.",
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained full-stack applications using MERN stack. Collaborated with design team to implement UI/UX improvements.",
    },
    {
      company: "Creative Web Agency",
      role: "Junior Developer",
      period: "2018 - 2020",
      description:
        "Assisted in building client websites and applications. Gained experience in React, JavaScript, and responsive design techniques.",
    },
  ];

  const education = [
    {
      institution: "Tech University",
      degree: "Master's in Computer Science",
      period: "2016 - 2018",
      description:
        "Focused on web technologies and user experience design. Graduated with honors.",
    },
    {
      institution: "Design Institute",
      degree: "Bachelor's in Computer Science",
      period: "2012 - 2016",
      description:
        "Specialized in web development and interactive media. Completed senior project on responsive web frameworks.",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <div className="pt-16 pb-16">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="bg-gradient-to-br from-indigo-100 to-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div variants={item} className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-indigo-600">Me</span>
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                A passionate developer with a keen eye for design and user
                experience.
              </p>
            </motion.div>
            <motion.div variants={item} className="md:w-1/2">
              <img
                src="/api/placeholder/500/500"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        ref={bioRef}
        initial="hidden"
        animate={bioControls}
        variants={container}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={item} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                I'm a full-stack web developer with over 5 years of experience
                building modern, responsive web applications. My journey in web
                development began during my university years, where I discovered
                my passion for creating digital experiences that are both
                functional and visually appealing.
              </p>
              <p>
                With a strong foundation in frontend technologies like React,
                TypeScript, and modern CSS frameworks, I enjoy bringing designs
                to life with smooth animations and intuitive user interfaces. On
                the backend, I'm experienced with Node.js, Express, and various
                database technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
                My goal with every project is to create solutions that not only
                meet the technical requirements but also provide an exceptional
                user experience.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={expRef}
        initial="hidden"
        animate={experienceControls}
        variants={container}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={item}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Work Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center text-indigo-600">
                    <Briefcase size={20} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8 border-l-2 border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-indigo-600 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={eduRef}
        initial="hidden"
        animate={educationControls}
        variants={container}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={item}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Education
          </motion.h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center text-indigo-600">
                    <GraduationCap size={20} className="mr-2" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8 border-l-2 border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-indigo-600 mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsControls}
        variants={container}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={item}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-indigo-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
