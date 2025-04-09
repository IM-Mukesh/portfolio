import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Code, Layout, Database } from "lucide-react";

const LandingPage: React.FC = () => {
  // Hero section animations
  const heroControls = useAnimation();
  const skillsControls = useAnimation();
  const featuredControls = useAnimation();

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [featuredRef, featuredInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (skillsInView) skillsControls.start("visible");
    if (featuredInView) featuredControls.start("visible");
  }, [
    heroInView,
    skillsInView,
    featuredInView,
    heroControls,
    skillsControls,
    featuredControls,
  ]);

  const skills = [
    {
      icon: <Code className="text-indigo-500" size={40} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    },
    {
      icon: <Database className="text-indigo-500" size={40} />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and various database technologies.",
    },
    {
      icon: <Layout className="text-indigo-500" size={40} />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user experiences with attention to detail and accessibility.",
    },
  ];

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
      image: "/api/placeholder/600/400",
      link: "/projects",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills.",
      image: "/api/placeholder/600/400",
      link: "/projects",
    },
  ];

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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={container}
        className="min-h-screen flex items-center bg-gradient-to-br from-indigo-100 to-white pt-16"
      >
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div variants={item} className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Creative <span className="text-indigo-600">Developer</span> &
                Designer
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                I build modern, responsive web applications that deliver
                exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-colors group"
                >
                  View Projects
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-50 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div variants={item} className="md:w-1/2">
              <img
                src="/api/placeholder/600/600"
                alt="Hero illustration"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsControls}
        variants={container}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              I specialize in creating modern web applications using
              cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        ref={featuredRef}
        initial="hidden"
        animate={featuredControls}
        variants={container}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Take a look at some of my recent work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    to={project.link}
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-700 transition-colors"
                  >
                    View Project
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="text-center mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium inline-flex items-center hover:bg-indigo-700 transition-colors group"
            >
              View All Projects
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
