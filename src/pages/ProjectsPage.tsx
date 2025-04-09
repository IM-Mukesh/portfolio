import { useState, useEffect } from "react";
import {
  Code,
  Server,
  Database,
  Layout,
  Smartphone,
  Terminal,
  BookOpen,
  CodepenIcon,
  Zap,
} from "lucide-react";

export default function ProjectsPage() {
  // Skills data with icons and categories
  const skills = [
    {
      name: "ReactJS",
      icon: <Layout className="mr-2" />,
      category: "frontend",
    },
    { name: "NodeJS", icon: <Server className="mr-2" />, category: "backend" },
    { name: "NextJS", icon: <Zap className="mr-2" />, category: "frontend" },
    {
      name: "React Native",
      icon: <Smartphone className="mr-2" />,
      category: "mobile",
    },
    {
      name: "JavaScript",
      icon: <Code className="mr-2" />,
      category: "language",
    },
    {
      name: "TypeScript",
      icon: <CodepenIcon className="mr-2" />,
      category: "language",
    },
    {
      name: "Python",
      icon: <Terminal className="mr-2" />,
      category: "language",
    },
    {
      name: "Data Structures",
      icon: <Database className="mr-2" />,
      category: "cs",
    },
    { name: "Algorithms", icon: <BookOpen className="mr-2" />, category: "cs" },
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with admin dashboard, user authentication, and payment processing integration.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Express"],
      image: "/api/placeholder/600/400",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social sharing features.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      image: "/api/placeholder/600/400",
      category: "mobile",
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      description:
        "Interactive dashboard for personal finance management with data visualization and budget planning tools.",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "ChartJS"],
      image: "/api/placeholder/600/400",
      category: "frontend",
    },
    {
      id: 4,
      title: "Content Management System",
      description:
        "Custom CMS with rich text editor, media management, and multi-user roles and permissions.",
      technologies: ["Python", "Django", "PostgreSQL", "ReactJS"],
      image: "/api/placeholder/600/400",
      category: "fullstack",
    },
    {
      id: 5,
      title: "AI-Powered Task Manager",
      description:
        "Task management application with AI features for task prioritization and time management suggestions.",
      technologies: ["TypeScript", "NodeJS", "TensorFlow.js", "React"],
      image: "/api/placeholder/600/400",
      category: "ai",
    },
    {
      id: 6,
      title: "Real-time Collaboration Tool",
      description:
        "Platform for real-time document editing and team collaboration with chat and video features.",
      technologies: ["NextJS", "WebSockets", "MongoDB", "TypeScript"],
      image: "/api/placeholder/600/400",
      category: "fullstack",
    },
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter categories
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
    { value: "ai", label: "AI/ML" },
  ];

  // Apply filter
  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.category === activeFilter)
        );
      }
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Animation for project cards
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div
          className={`transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Showcasing my expertise in web and mobile development using modern
            technologies and best practices.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-2 bg-gray-800 rounded-full border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:border-blue-500 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Filter */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category.value)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 ${
                isAnimating
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-700 rounded-md text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg transition-colors duration-300">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
