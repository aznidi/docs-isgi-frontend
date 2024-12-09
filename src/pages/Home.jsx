import React from "react";
import { motion } from "framer-motion"; // Importation de Framer Motion
import Hero from "../components/Hero";
import BestCourseContainer from "@/components/BestCourseContainer";

const Home = () => {
  return (
    <main className="relative isolate bg-[#F8F8F8] dark:bg-[#1F2937] overflow-hidden">
      {/* Section Hero */}
      <section className="p-5 m-5 relative isolate min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <Hero />
      </section>

      {/* Section Best Courses */}
      <BestCourseContainer />


    </main>
  );
};

export default Home;
