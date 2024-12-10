import React from 'react'
import Statistiques from './Statistiques'
import { motion } from "framer-motion";

function StatistiquesContainer() {
  return (
    <motion.section
      className="relative isolate min-h-2.5 sm:px-8 rounded-b-xl shadow-sm mb-12"
      initial={{ opacity: 0 }}  // Initial opacity (invisible at first)
      whileInView={{ opacity: 1 }} // Fade in when it enters the view
      transition={{ opacity: { duration: 1 } }} // Smooth transition
      viewport={{ once: true }} // Trigger only once during scrolling
      >

      {/* Intégration du formulaire */}
      <div className="w-full max-w-7xl bg-transparent overflow-hidde border-transparent border-t-0 border-l-0 border-r-0 mx-auto">
        <Statistiques />
      </div>
      </motion.section>
  )
}

export default StatistiquesContainer