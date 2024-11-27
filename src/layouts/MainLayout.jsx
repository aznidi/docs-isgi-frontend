import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Outlet /> {/* Rend les pages enfants */}
      </main>
      <footer className="footer">
        <p>© 2024 ISGI Library</p>
      </footer>
    </div>
  );
};

export default MainLayout;
