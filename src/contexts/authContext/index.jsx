import React, { createContext, useState, useEffect, useContext } from "react";
import { SyncLoader } from "react-spinners";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialisation : Vérifier si un utilisateur est connecté (par le token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserLoggedIn(!!token); // Définit l'état connecté selon la présence du token
    setLoading(false);
  }, []);

  if (loading) {
    // Spinner de chargement
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SyncLoader size={15} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
