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
      flex-col items-center justify-center overflow-hidden ">
        <Hero />
      </section>

      {/* Section Statics */}
      <StatistiquesContainer />

      

      {/* Section Best Courses */}
      <BestCourseContainer />


    </main>
  );
};

export default Home;
