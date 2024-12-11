import React, { useState } from "react";
import { FaSearch, FaSave, FaDownload } from "react-icons/fa";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [results, setResults] = useState([]);

  const modules = [
    { id: 1, name: "Mathématiques", type: "controls", description: "Cours d'algèbre", logo: "https://via.placeholder.com/50" },
    { id: 2, name: "Physique", type: "tps", description: "Travaux pratiques en mécanique", logo: "https://via.placeholder.com/50" },
    { id: 3, name: "Informatique", type: "controls", description: "Introduction à la programmation", logo: "https://via.placeholder.com/50" },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = modules.filter((module) =>
      module.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
      (filter === "all" || module.type === filter)
    );
    setResults(filtered);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    const filtered = modules.filter((module) =>
      module.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (newFilter === "all" || module.type === newFilter)
    );
    setResults(filtered);
  };

  return (
    <>
      <section className="relative isolate min-h-screen flex bg-[#F8F8F8] dark:bg-[#1F2937] 
        flex-col items-center justify-center overflow-hidden px-6 py-12">

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[50%] aspect-[4000/1000] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-50 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem] animate-pulse"
          />
        </div>

        <div className="w-full max-w-2xl">
          <div className="flex items-center bg-white dark:bg-[#374151] border border-gray-300 dark:border-gray-600 rounded-md p-4 shadow-lg">
            <FaSearch className="text-2xl text-[#1E3A8A] dark:text-white mr-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Recherchez un module..."
              className="w-full text-lg font-poppins bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 border-none focus:outline-none"
            />
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            {['all', 'controls', 'tps'].map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`px-4 py-2 text-sm font-poppins rounded-md ${filter === type ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'} 
                  dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-white hover:bg-blue-700 hover:text-white transition-all`}
              >
                {type === "all" ? "Tous" : type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
          {results.map((module) => (
            <div key={module.id} className="bg-white dark:bg-[#374151] rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={module.logo} alt={module.name} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 font-poppins mb-2">{module.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins mb-4">{module.description}</p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center space-x-2 hover:bg-green-700 transition">
                  <FaSave /> <span>Sauvegarder</span>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
                  <FaDownload /> <span>Télécharger</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && searchQuery && (
          <p className="text-gray-500 dark:text-gray-400 mt-6 font-poppins">Aucun module trouvé pour "{searchQuery}".</p>
        )}
      </section>
    </>
  );
};

export default Courses;