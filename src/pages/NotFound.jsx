import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolate min-h-screen bg-[#F8F8F8] dark:bg-[#1F2937] flex flex-col items-center justify-center px-6 sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
        />
      </div>

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-white font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-red-600">404</span> - Page Introuvable
      </motion.h1>

      <motion.p
        className="text-center text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mt-4 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Désolé, la page que vous recherchez n'existe pas.
      </motion.p>

      <motion.button
        onClick={() => navigate("/")}
        className="mt-5 px-9 py-2 text-xl font-poppins cursor-pointer bg-blue-800 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Retour à l'accueil
      </motion.button>
    </section>
  );
};

export default NotFound;
