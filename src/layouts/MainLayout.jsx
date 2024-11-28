import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <Outlet /> {/* Rend les pages enfants */}
      </main>
        <Footer />
      
    </>
  );
};

export default MainLayout;
