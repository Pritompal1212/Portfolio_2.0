"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/pritom", icon: "🔗" },
  { name: "GitHub", url: "https://github.com/pritom", icon: "🐙" },
  { name: "Twitter", url: "https://twitter.com/pritom", icon: "🐦" },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[80vh] bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-100 flex items-center py-12 px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="relative w-52 h-52 rounded-3xl overflow-hidden shadow-xl ring-4 ring-green-500 ring-opacity-60 hover:scale-105 transition-transform duration-500">
          <Image
            src="/hero.jpg"
            alt="Pritom Pal"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 opacity-20 mix-blend-multiply animate-gradient-x"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-xl space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-400">
            Hey, I&apos;m Pritom 👋
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            A Software Engineer passionate about crafting modern, high-performance apps. I focus on building smooth UIs and scalable backends that solve real-world problems.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            I enjoy exploring emerging tech, contributing to open source, and creating seamless user experiences powered by React, Next.js, Node.js, and beyond.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mt-3">
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-600 font-medium transition-colors"
                aria-label={name}
              >
                <span className="text-xl">{icon}</span> {name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="mt-6">
            <button
              onClick={() => window.open("mailto:pritom@example.com", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Say Hello
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
