import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com" },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:contact@example.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-indigo-400">Portfolio</h3>
            <p className="text-gray-300">
              Showcasing my work and projects built with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-indigo-400">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-indigo-400">Contact</h3>
            <p className="text-gray-300">Feel free to reach out anytime</p>
            <p className="text-gray-300">Email: contact@example.com</p>
            <p className="text-gray-300">Location: City, Country</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
