// tailwind.config.js
//previous one without font family
// module.exports = {
//   content: [
//     "src/app/**/*.{js,ts,jsx,tsx}",
//     "src/pages/**/*.{js,ts,jsx,tsx}",
//     "src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
      
//       animation: {
//         shimmer: "shimmer 2s linear infinite",

        
//       },
//       keyframes: {
//         shimmer: {
//           from: {
//             backgroundPosition: "0 0",
//           },
//           to: {
//             backgroundPosition: "-200% 0",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

//new one

// tailwind.config.js
module.exports = {
  content: [
    "src/app/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
