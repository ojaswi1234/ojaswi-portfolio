"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Placeholder for form submission logic
    // Replace with fetch to your API endpoint (e.g., https://x.ai/api for xAI's API)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-16 px-5 sm:px-10 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 " id="contact">
            Contact Me
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-gray-600 dark:text-gray-400 text-sm md:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-gray-600 dark:text-gray-400 text-sm md:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-gray-600 dark:text-gray-400 text-sm md:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-red-500 h-32"
                  placeholder="Your Message"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500 dark:from-red-500 dark:to-yellow-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Connect with Me
            </h3>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/ojaswi-bhardwaj-962393281/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-red-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/ojaswi1234" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-red-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={32} />
              </a>
             
              <a
                href="mailto:your-email@example.com" // Replace with your email
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}