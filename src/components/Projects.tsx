//previous one project


// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Personal Portfolio",
//     image: "/portfolio.png",
//     description: "LSTM-based real-time forecasting tool with Flask + React.",
//     github: "https://github.com/pritompal/stock-forecast",
//     demo: "https://stockforecast.vercel.app",
//   },
//   {
//     title: "Loan Approval Predictor",
//     image: "/project.png",
//     description: "ML-powered loan approval system with XGBoost and Streamlit.",
//     github: "https://github.com/pritompal/loan-approval",
//     demo: "https://loanai.streamlit.app",
//   },
//   {
//     title: "Movie App",
//     image: "/OIP.jpeg",
//     description: "React + Tailwind app to explore and download movies.",
//     github: "https://github.com/pritompal/movie-app",
//     demo: "https://moviehub.vercel.app",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="bg-gray-950 text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-green-500 text-center mb-12">Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/30 transition duration-300"
//             >
//               <div className="relative group w-full h-52">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transform group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <FaGithub size={28} className="text-white hover:text-green-400" />
//                   </a>
//                   <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt size={28} className="text-white hover:text-green-400" />
//                   </a>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-green-400 mb-2">{project.title}</h3>
//                 <p className="text-gray-300 text-sm">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;








//explore new one


"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/portfolio.png",
    description: "LSTM-based real-time forecasting tool with Flask + React.",
    github: "https://github.com/pritompal/stock-forecast",
    demo: "https://stockforecast.vercel.app",
  },
  {
    title: "Loan Approval Predictor",
    image: "/project.png",
    description: "ML-powered loan approval system with XGBoost and Streamlit.",
    github: "https://github.com/pritompal/loan-approval",
    demo: "https://loanai.streamlit.app",
  },
  {
    title: "Data Science Toolkit",
    image: "/OIP.jpeg",
    description: "Real-world Python-based solutions for data wrangling, visualization, and intelligent predictions.",
    github: "https://github.com/pritompal/movie-app",
    demo: "https://moviehub.vercel.app",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-emerald-400 tracking-wide text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 12px 24px rgba(16,185,129,0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.15,
              }}
            >
              <div className="relative group w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} className="text-white hover:text-emerald-400" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={28} className="text-white hover:text-emerald-400" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;