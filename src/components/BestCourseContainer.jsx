import React from 'react'
import { motion } from 'framer-motion'
import BestCourses from "@/components/BestCourses";


function BestCourseContainer() {
  return (
    <motion.section
      className="relative isolate min-h-80 px-4 sm:px-8 lg:px-16"
      initial={{ opacity: 0 }}  // Initial opacity (invisible at first)
      whileInView={{ opacity: 1 }} // Fade in when it enters the view
      transition={{ opacity: { duration: 1 } }} // Smooth transition
      viewport={{ once: true }} // Trigger only once during scrolling
      >
      {/* Décoration arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 aspect-[1500/500] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Titre séparé de la carte */}
      <h1 className="mt-3 mb-14 text-center text-3xl sm:text-6xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#FAFAFA] font-poppins">
        Le document le plus consulté cette semaine
      </h1>

      {/* Intégration du formulaire */}
      <div className="w-full max-w-4xl bg-transparent overflow-hidden mx-auto">
        <BestCourses />
      </div>
      </motion.section>
  )
}

export default BestCourseContainer