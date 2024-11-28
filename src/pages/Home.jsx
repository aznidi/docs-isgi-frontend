import React from "react";
import Hero from "../components/Hero";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <main className="relative isolate bg-[#F8F8F8] dark:bg-[#1F2937] overflow-hidden">
      {/* Section Hero */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* Gradient de transition */}
      <div
        className="relative z-0 h-32 bg-gradient-to-b from-[#F8F8F8] dark:from-[#1F2937] via-[#F4F4F4] dark:via-[#1E293B] to-[#F8F8F8] dark:to-[#1F2937]"
        aria-hidden="true"
      />

      
    </main>
  );
};

export default Home;
