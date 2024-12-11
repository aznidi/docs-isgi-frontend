import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUsers, FaDownload } from "react-icons/fa";
import { gsap } from "gsap";

const Statistiques = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".stats-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1 }
    );
  }, []);

  const stats = [
    { id: 1, label: "Total de documents", value: 1500, icon: <FaFileAlt /> },
    { id: 2, label: "Utilisateurs inscrits", value: 250, icon: <FaUsers /> },
    { id: 3, label: "Téléchargements", value: 320, icon: <FaDownload /> },
  ];

  const countUpAnimation = (endValue, elementId) => {
    const duration = 1000; // Durée de l'animation en ms
    const increment = Math.ceil(endValue / (duration / 16)); // Augmentation par frame (~60fps)
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < endValue) {
        currentValue += increment;
        if (currentValue > endValue) currentValue = endValue; // Ajuste la dernière valeur
        document.getElementById(elementId).innerText = `+${currentValue}`;
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    stats.forEach((stat) => countUpAnimation(stat.value, `stat-${stat.id}`));
  }, []);

  return (
    <section className="stats-section p-8 relative font-poppins">
      {/* Animation de dégradé en arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1500/900] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-30 sm:w-[72.1875rem] animate-pulse"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="stats-card flex flex-col items-center justify-center font-poppins 
            bg-transparent backdrop-blur-md transition-all duration-300 
            text-blue-900 dark:text-[#F8F8F8] ease-in-out  cursor-pointer
            hover:shadow-3xl hover:scale-105 rounded-md shadow-md p-6 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p
              id={`stat-${stat.id}`}
              className="text-3xl font-bold"
            >
              +0
            </p>
          </motion.div>
        ))}
        {/* Animation de dégradé en arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1500/900] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-30 sm:w-[72.1875rem] animate-pulse"
        />
      </div>
      </div>
    </section>
  );
};

export default Statistiques;
