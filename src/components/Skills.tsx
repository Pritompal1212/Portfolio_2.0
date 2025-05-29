"use client";
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 85 },
  { name: "Python", icon: <FaPython />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "Flutter", icon: <SiFlutter />, level: 88 },
  { name: "Git", icon: <FaGitAlt />, level: 80 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <Marquee gradient={false} speed={20} className="text-8xl text-green-800/10 font-bold select-none">
          React • Node.js • Python • JavaScript • MongoDB • Tailwind • HTML • Flutter • Git • &nbsp;
        </Marquee>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-green-500 mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-500/30 transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4 text-green-400 text-3xl">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  className="bg-green-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              <p className="text-sm text-gray-400">
                <CountUp end={skill.level} duration={2} />% proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
