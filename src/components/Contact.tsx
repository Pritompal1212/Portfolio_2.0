// old one
// "use client";
// import React from "react";

// const Contact = () => {
//   return (
//     <section className="w-full min-h-screen bg-black px-4 pt-10 md:pt-20 flex items-center justify-center">

//       <div className="max-w-4xl w-full text-white space-y-12">
//         <h2 className="text-4xl font-bold text-center text-green-500">
//           Get in Touch
//         </h2>

//         <p className="text-center text-gray-400 max-w-xl mx-auto">
//           Have a project in mind, want to collaborate, or just say hi? Drop a message and I’ll get back to you soon.
//         </p>

//         <form className="space-y-6 max-w-xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//             />
//           </div>

//           <textarea
//             rows={5}
//             placeholder="Your Message"
//             className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//           ></textarea>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-lg font-semibold text-white"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


//new with background effect


// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log(data);
//       toast.success("Message sent successfully!");
//       reset();
//     } catch (error) {
//       toast.error("Failed to send message.");
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 pt-10 md:pt-20">
//       <Toaster position="top-right" />
      
//       {/* Animated Background Gradient Blobs */}
//       <div className="absolute w-full h-full overflow-hidden z-0">
//         <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-ping"></div>
//       </div>

//       {/* Contact Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 max-w-4xl w-full text-white space-y-12"
//       >
//         <h2 className="text-4xl font-bold text-center text-green-400">
//           Get in Touch
//         </h2>

//         <p className="text-center text-gray-400 max-w-xl mx-auto">
//           Have a project in mind, want to collaborate, or just say hi? Drop a
//           message and I’ll get back to you soon.
//         </p>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-6 max-w-xl mx-auto bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="relative">
//               <FaUser className="absolute top-4 left-4 text-gray-500" />
//               <input
//                 {...register("name", { required: "Name is required" })}
//                 type="text"
//                 placeholder="Your Name"
//                 className="pl-10 w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//               />
//               {errors.name?.message && (
//                 <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
//               )}
//             </div>

//             <div className="relative">
//               <FaEnvelope className="absolute top-4 left-4 text-gray-500" />
//               <input
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: "Invalid email address",
//                   },
//                 })}
//                 type="email"
//                 placeholder="Your Email"
//                 className="pl-10 w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//               />
//               {errors.email?.message && (
//                 <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <textarea
//               {...register("message", { required: "Message cannot be empty" })}
//               rows={5}
//               placeholder="Your Message"
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
//             ></textarea>
//             {errors.message?.message && (
//               <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
//             )}
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all px-6 py-3 rounded-lg font-semibold text-white shadow-md"
//             >
//               <FaPaperPlane />
//               Send Message
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



//my fav

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 pt-16 pb-24 flex items-center justify-center">
      <Toaster position="top-right" />
      
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 space-y-8 text-white">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">Contact Me</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Feel free to reach out for collaborations, projects, or just a friendly hello.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
              {errors.name?.message && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-1 block">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
              {errors.email?.message && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Message</label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              rows={5}
              placeholder="Your Message"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
            ></textarea>
            {errors.message?.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
