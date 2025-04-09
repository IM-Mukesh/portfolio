import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Animation for form elements with inline style for delay
  const getAnimationClass = (index: number) => {
    const delay = Math.min(index * 100, 1000); // prevent going over allowed delays
    return `transition-all duration-1000 transform delay-[${delay}ms] ${
      visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-4">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div
          className={getAnimationClass(0)}
          style={{ transitionDelay: "0ms" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`${getAnimationClass(1)} space-y-8`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 bg-opacity-20 rounded-lg">
                <Mail className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-gray-300">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-600 bg-opacity-20 rounded-lg">
                <Phone className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Phone</h3>
                <p className="text-gray-300">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-600 bg-opacity-20 rounded-lg">
                <MapPin className="text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-medium text-lg mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="text-pink-400" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 mt-8">
              <h3 className="font-medium text-lg mb-2">Current Availability</h3>
              <p className="text-gray-300 mb-2">
                I'm currently available for freelance work and new
                opportunities.
              </p>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                70% Available for New Projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={getAnimationClass(2)}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              {submitted ? (
                <div className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="font-medium text-lg mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-400">
                    What is your typical project timeline?
                  </h4>
                  <p className="text-gray-300 text-sm mt-1">
                    Depending on project complexity, most websites take 3-6
                    weeks from start to finish.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-400">
                    Do you offer maintenance services?
                  </h4>
                  <p className="text-gray-300 text-sm mt-1">
                    Yes, I offer ongoing maintenance packages to keep your site
                    secure and up-to-date.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-400">
                    What is your preferred tech stack?
                  </h4>
                  <p className="text-gray-300 text-sm mt-1">
                    I specialize in React, Next.js, and Node.js, but can adapt
                    based on project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-12">
        <div
          className={`w-full h-64 md:h-96 rounded-xl overflow-hidden ${getAnimationClass(
            3
          )}`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Placeholder for map, in a real project you'd use Google Maps or similar */}
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-blue-500 mb-2" />
              <p className="text-lg font-medium">Map Location Placeholder</p>
              <p className="text-sm text-gray-400">
                Replace with a real map in production
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div
          className={`max-w-2xl mx-auto ${getAnimationClass(4)}`}
          style={{ transitionDelay: "800ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 mb-8">
            I'm excited to hear about your project and how we can bring your
            ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              View My Portfolio
            </button>
            <button className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
