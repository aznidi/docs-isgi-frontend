import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
