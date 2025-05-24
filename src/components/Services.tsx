//new one

"use client";
import React from "react";
import { FaCode, FaMobileAlt, FaChartLine, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, modern, and SEO-friendly websites using React, Next.js, and Tailwind CSS.",
    icon: <FaCode size={32} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with seamless UI and great performance using Flutter & React Native.",
    icon: <FaMobileAlt size={32} />,
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights using Python, Pandas, and Power BI.",
    icon: <FaChartLine size={32} />,
  },
  {
    title: "AI & ML Solutions",
    description:
      "Implement intelligent models for prediction, classification, and automation with Python & ML frameworks.",
    icon: <FaRobot size={32} />,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.7,
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-16">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg shadow-black/40 cursor-pointer
                hover:border-green-400 hover:shadow-green-400/50
                hover:-translate-y-3 transition-transform duration-300 ease-out
                group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.15 }}
            >
              <div
                className="text-green-400 mb-6 inline-block
                  group-hover:scale-110 group-hover:rotate-12
                  transition-transform duration-300"
              >
                {service.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4
                bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              >
                {service.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
              <button
                className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500
                  text-black font-semibold text-sm tracking-wide
                  hover:brightness-110 transition"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;






//old one 

// "use client";
// import React from "react";
// import { FaCode, FaMobileAlt, FaChartLine, FaRobot } from "react-icons/fa";

// const services = [
//   {
//     title: "Web Development",
//     description: "Build fast, modern, and SEO-friendly websites using React, Next.js, and Tailwind CSS.",
//     icon: <FaCode size={30} />,
//   },
//   {
//     title: "Mobile App Development",
//     description: "Cross-platform mobile apps with seamless UI and great performance using Flutter & React Native.",
//     icon: <FaMobileAlt size={30} />,
//   },
//   {
//     title: "Data Analytics",
//     description: "Transform raw data into actionable insights using Python, Pandas, and Power BI.",
//     icon: <FaChartLine size={30} />,
//   },
//   {
//     title: "AI & ML Solutions",
//     description: "Implement intelligent models for prediction, classification, and automation with Python & ML frameworks.",
//     icon: <FaRobot size={30} />,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="bg-black text-white py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-green-500 mb-12">My Services</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-6 shadow-md hover:shadow-green-400/30 transition duration-300 group"
//             >
//               <div className="text-green-400 mb-4 group-hover:scale-110 transition">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
//               <p className="text-gray-400 text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
