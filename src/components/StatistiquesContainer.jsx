import React from 'react';
import Statistiques from './Statistiques';
import { motion } from "framer-motion";

function StatistiquesContainer() {
  return (
    <motion.section
      className="relative isolate min-h-2.5 sm:px-8 mb-12"
      initial={{ opacity: 0, y: 50 }} // Initialisation avec une opacité nulle et déplacement vers le bas
      whileInView={{ opacity: 1, y: 0 }} // Fade in et remontée vers sa position initiale
      transition={{ opacity: { duration: 1 }, y: { duration: 0.6 } }} // Transition fluide pour opacité et mouvement vertical
      viewport={{ once: true }} // Animation déclenchée une seule fois lors du scroll
    >
      {/* Intégration du formulaire */}
      <div className="w-full max-w-7xl bg-transparent overflow-hidden border-transparent border-t-0 border-l-0 border-r-0 mx-auto">
        <Statistiques />
      </div>
    </motion.section>
  );
}

export default StatistiquesContainer;
