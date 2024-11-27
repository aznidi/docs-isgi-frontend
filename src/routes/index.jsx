import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Routes administratives */}
        <Route path="/admin/*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
