import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <Outlet /> {/* Rend les pages enfants */}
      </main>
      <footer className="footer">
        <p>© 2024 ISGI Library</p>
      </footer>
    </>
  );
};

export default MainLayout;
