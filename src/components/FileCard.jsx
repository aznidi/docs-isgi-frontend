import React from "react";
import { AiOutlineDownload, AiOutlineSave, AiOutlineLink } from "react-icons/ai";

const FileCard = ({ image, moduleName, type, instructor, year, description, fileUrl }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:-translate-y-2 flex flex-col space-y-4 w-full sm:w-[300px]">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={moduleName}
          className="w-20 h-20 rounded-lg object-cover border border-gray-200 shadow-sm transition-transform transform hover:scale-110"
        />
        <div className="flex flex-col space-y-1">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white font-poppins">
            {moduleName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{type}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {instructor} - {year}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => window.open(fileUrl, "_blank")}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <AiOutlineLink className="w-5 h-5" />
            <span className="font-poppins">Ouvrir</span>
          </button>
          <button
            onClick={() => alert("Fichier sauvegardé !")}
            className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <AiOutlineSave className="w-5 h-5" />
            <span className="font-poppins">Sauvegarder</span>
          </button>
        </div>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileUrl.split("/").pop();
            link.click();
          }}
          className="flex items-center justify-center w-full sm:w-auto px-4 py-2 text-yellow-500 hover:text-yellow-600 bg-yellow-100 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <AiOutlineDownload className="w-5 h-5" />
          <span className="font-poppins">Télécharger</span>
        </button>
      </div>
    </div>
  );
};

export default FileCard;
