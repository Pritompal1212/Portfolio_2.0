"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
            Proficient Web and Mobile App Developer with a focus on Data
            Analytics.
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ">
            Resume
          </button>

          <div className="flex gap-4 text-green-400 mt-4">
            <FaGithub size={24} className="hover:text-white cursor-pointer" />
            <FaLinkedin size={24} className="hover:text-white cursor-pointer" />
            <FaTwitter size={24} className="hover:text-white cursor-pointer" />
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
