// src/api/authService.js
import apiClient from "./index";

// Fonction de connexion
export const login = async (email, password) => {
  const response = await apiClient.post("/login", { email, password });
  localStorage.setItem("token", response.data.token); // Sauvegarder le token
  return response.data; // Retourner les données reçues
};

// Fonction d'inscription
export const register = async (name, email, password, confirmPassword) => {
  const response = await apiClient.post("/register", {
    name,
    email,
    password,
    password_confirmation: confirmPassword,
  });
  return response.data; // Retourner les données reçues
};

// Fonction de déconnexion
export const logout = async () => {
  await apiClient.post("/logout");
  localStorage.removeItem("token"); // Supprimer le token
};
