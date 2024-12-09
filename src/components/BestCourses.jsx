import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFolderOpen, FaCalendarAlt, FaTag } from "react-icons/fa"; // Import des icônes
import photo from "../assets/react.png";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

// Composant principal
const BestCourses = () => {
  const [downloads, setDownloads] = useState(0); // État pour le compteur de téléchargement

  const handleDownload = () => {
    setDownloads(downloads + 1); // Incrémente le compteur de téléchargement
  };

  return (
      <motion.div
        className="flex flex-col lg:flex-row font-poppins bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {/* Section Image */}
        <motion.div
          className="lg:w-1/2 w-full p-4 min-h-80 bg-cover bg-center mx-auto "
          style={{ backgroundImage: `url(${photo})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Image pour mobile */}
          <img
            className="lg:hidden w-full h-full object-cover rounded-md"
            src={photo}
            alt="React Course"
          />
        </motion.div>


      {/* Section Formulaire */}
      <motion.div
        className="lg:w-1/2 w-full p-6 sm:p-8 flex flex-col items-start min-h-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-[#1E3A8A] dark:text-[#1E3A8A] mb-4 flex items-center gap-2">
          React JS
        </h2>

        {/* Informations Année et Type */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaCalendarAlt className="text-gray-500 dark:text-gray-300" />
            <p className="text-sm lg:text-base">2024</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaTag className="text-gray-500 dark:text-gray-300" />
            <p className="text-sm lg:text-base">Cours</p>
          </div>
        </div>

        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">
          Apprenez à créer des applications web dynamiques avec React. Ce cours
          couvre les bases des composants, de l'état, des hooks et du routage pour
          construire des interfaces utilisateur interactives.
        </p>

        {/* Boutons Flex */}
        <div className="flex flex-col gap-4 w-full">
          {/* Bouton Télécharger */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button
              onClick={handleDownload}
              className="w-full px-9 py-2 text-lg font-poppins bg-blue-800 rounded-md
               text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:ring-2 hover:ring-blue-900
               hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
            >
              <Download /> Télécharger
            </Button>
          </motion.div>

          {/* Bouton Ouvrir */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Button
              onClick={() => alert("Cours ouvert !")}
              className="w-full px-9 py-2 text-lg font-poppins bg-[#F8F8F8] rounded-md
               text-black font-semibold transition duration-300 ease-in-out hover:bg-white
               hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
            >
              <FaFolderOpen /> Ouvrir
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BestCourses;
