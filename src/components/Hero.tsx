"use client";
import React from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const LeetCodeIcon = ({ ...rest }) => (
  <svg
    {...rest}
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 ease-in-out"
  >
    <title>LeetCode</title>
    <path d="M6.75 2.25C4.58 3.74 3 6.28 3 9.19v5.62c0 3.38 2.72 6.1 6.1 6.1 3.38 0 6.1-2.72 6.1-6.1v-2.8a.75.75 0 0 0-1.5 0v2.8c0 2.56-2.08 4.64-4.64 4.64-2.56 0-4.64-2.08-4.64-4.64V9.2c0-1.72.96-3.28 2.49-4.04l3.2 3.58a.75.75 0 1 0 1.12-1L6.75 2.25zM14.97 7.9a.75.75 0 1 0-1.44.5l2.35 6.8c.07.19.23.33.43.38.23.07.46 0 .63-.16l3.66-3.44a.75.75 0 1 0-1-1.12l-3.06 2.87-1.58-4.93z" />
  </svg>
);

const GeeksForGeeksIcon = ({ ...rest }) => (
  <svg
    {...rest}
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 ease-in-out"
  >
    <title>GeeksforGeeks</title>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm3 14h-2v-4H9v4H7v-6h8v6z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between max-w-6xl w-full py-12 gap-12">
        {/* Left Side - Text Content aligned left */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className="text-green-500 font-mono overflow-hidden whitespace-nowrap border-r-4 border-white typing-effect inline-block">
              Hi, I&apos;m Pritom Pal
            </span>
            <br />
            <span className="text-gray-300">Software Engineer</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-md">
            Proficient Web and Mobile App Developer with a focus on Data Analytics.
          </p>

          <button
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600
                       hover:from-green-600 hover:to-green-700
                       text-white font-semibold py-2 px-6 rounded-lg
                       shadow-lg hover:shadow-xl
                       transition transform duration-300 ease-in-out
                       hover:scale-105"
          >
            Resume <FiDownload size={20} />
          </button>

          <div className="flex gap-6 text-green-400 mt-4">
            {/* Discord */}
            <a
              href="https://discord.com/users/your-discord-id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="transform transition duration-300 hover:text-white hover:scale-110 hover:-translate-y-1"
            >
              <FaDiscord size={28} />
            </a>

            {/* GeeksforGeeks */}
            <a
              href="https://auth.geeksforgeeks.org/user/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks"
              className="transform transition duration-300 hover:text-white hover:scale-110 hover:-translate-y-1"
            >
              <GeeksForGeeksIcon style={{ width: 28, height: 28 }} />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="transform transition duration-300 hover:text-white hover:scale-110 hover:-translate-y-1"
            >
              <LeetCodeIcon style={{ width: 28, height: 28 }} />
            </a>
          </div>
        </div>

        {/* Right Side - Centered Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-around items-center">
          <div className="relative w-64 h-64 md:w-90 md:h-90 border-animation-wrapper">
            <Image
              src="/hero.jpg"
              alt="Pritom Pal"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            {/* Border animation layers */}
            <div className="moving-border-1"></div>
            <div className="moving-border-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
