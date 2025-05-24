"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-[#d1d5db] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-xl font-semibold text-emerald-400">Pritom Pal</h3>
          <p className="text-sm text-gray-400">
            Software Engineer | Web & Mobile App Developer | Data Analytics Enthusiast
          </p>

          {/* Contact + Resume */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 mt-2 text-sm">
            <a
              href="mailto:pritom@example.com"
              className="flex items-center gap-2 hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope size={16} /> pritom@example.com
            </a>
            <a
              href="/Pritom_Pal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
              aria-label="Resume"
            >
              <FaFilePdf size={16} /> View Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-4 text-sm text-emerald-400 hover:underline transition"
          >
            ↑ Back to Top
          </button>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-center md:text-right text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pritom Pal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
