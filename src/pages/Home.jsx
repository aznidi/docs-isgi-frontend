import React from "react";
import { motion } from "framer-motion"; // Importation de Framer Motion
import Hero from "../components/Hero";
import BestCourseContainer from "@/components/BestCourseContainer";
import StatistiquesContainer from "@/components/StatistiquesContainer";

const Home = () => {
  return (
    <main className="relative isolate bg-[#F8F8F8] dark:bg-[#1F2937] overflow-hidden">
      {/* Section Hero */}
      <section className="relative isolate min-h-screen flex 
      flex-col items-center justify-center overflow-hidden rounded-xl shadow-sm">
        <Hero />
      </section>

      {/* Section Statics */}
      <StatistiquesContainer />

      {/* Décoration arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 aspect-[900/2000] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Section Best Courses */}
      <BestCourseContainer />


    </main>
  );
};

export default Home;
