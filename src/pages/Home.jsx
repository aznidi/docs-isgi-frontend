import React from "react";
import Hero from "../components/Hero";
import BestCourseContainer from "@/components/BestCourseContainer";
import StatistiquesContainer from "@/components/StatistiquesContainer";
import Avis from "@/components/Avis"; // Importation du composant Avis
import AddAvis from "@/components/AddAvis";

const Home = () => {
  return (
    <main className="relative isolate bg-[#F8F8F8] dark:bg-[#1F2937] overflow-hidden font-poppins">
      {/* Section Hero */}
      <section className="relative isolate min-h-screen flex 
      flex-col items-center justify-center overflow-hidden ">
        <Hero />
      </section>

      {/* Section Statics */}
      <StatistiquesContainer />

      {/* Section Best Courses */}
      <BestCourseContainer />

      {/* Section Avis */}
      <Avis />

      {/* Section Avis */}
      <AddAvis />

      
    </main>
  );
};

export default Home;
