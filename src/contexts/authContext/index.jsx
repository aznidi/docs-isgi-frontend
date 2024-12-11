import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners"; // Importer SyncLoader

// Créer le contexte d'authentification
export const AuthContext = createContext();

// Créer le fournisseur de contexte
export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "dark";
  });

  // Vérifier si l'utilisateur est connecté au moment du chargement
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      checkAuthStatus();
    } else {
      setUserLoggedIn(false);
      setLoading(false);
    }
  }, []);

  // Vérification de l'état de l'authentification de l'utilisateur
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user");
      if (response.data) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'authentification", error);
      setUserLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", { email, password });
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUserLoggedIn(true);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.Authorization;
      setUserLoggedIn(false);
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  if (loading) {
    // Afficher le spinner au centre de la page pendant le chargement
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: `${darkMode ? '#1F2937' : '#F8F8F8'}`,
          alignItems: "center",
          minHeight: "100vh", // Utilisation de minHeight
          width: "100vw",
          margin: 0, // Supprime les marges par défaut
          padding: 0, // Supprime les paddings par défaut
          boxSizing: "border-box", // Inclure padding et bordure dans les calculs de taille
          transform: "translateY(-50px)", // Lever légèrement le spinner
        }}
      >
        <SyncLoader size={15} color={`${darkMode ? '#F8F8F8' : '#1F2937'}`} /> {/* Couleur blue-900 */}
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};
