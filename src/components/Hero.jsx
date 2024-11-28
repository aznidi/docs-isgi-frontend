import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importation de framer-motion
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

function Hero() {
  const phrases = ["Cours", "TPS", "EFM", "EFF"]; // Liste des mots à alterner
  const [currentWord, setCurrentWord] = useState("Cours"); // Mot actuellement affiché

  // Fonction pour changer le mot toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = phrases.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % phrases.length; // Cycle à travers les mots
        return phrases[nextIndex];
      });
    }, 4000); // Changer le mot toutes les 4 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

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

      <div className="text-center z-10 mx-auto px-6 sm:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1E3A8A] dark:text-[#FAFAFA] mb-6 font-poppins">
          Accéder à vos{" "}
          <span className="inline-block">
            {/* Utilisation de motion pour des animations dynamiques */}
            <motion.span
              key={currentWord} // Ajout d'une clé pour déclencher une nouvelle animation
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }} // Départ avec un effet de zoom et rotation
              animate={{ opacity: 1, scale: 1, rotate: 0 }} // Transition vers l'état normal
              exit={{ opacity: 0, scale: 0.8, rotate: -15 }} // Transition de disparition
              transition={{ duration: 1.2, ease: "easeInOut" }} // Animation fluide et plus lente
            >
              {currentWord}
            </motion.span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-poppins">
          Trouvez toutes vos ressources en quelques secondes.
        </p>

        <div className="flex items-center bg-white dark:bg-[#374151] border border-gray-300 dark:border-[#4B5563] rounded-md p-3 max-w-lg mx-auto mb-6 transition-all duration-500 ease-in-out hover:shadow-lg">
          <FaSearch className="text-2xl text-[#1E3A8A] dark:text-white mr-4" />
          <input
            type="text"
            placeholder="Recherchez un document..."
            className="border-none text-lg font-poppins bg-transparent text-[#1E3A8A] placeholder-gray-500 dark:placeholder-gray-400 outline-none w-full"
          />
        </div>

        <button
          class="mt-5 px-9 py-2 text-1xl font-poppins cursor-pointer bg-blue-800 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
        >
          Rechercher
        </button>
      </div>
    </section>
  );
}

export default Hero;
