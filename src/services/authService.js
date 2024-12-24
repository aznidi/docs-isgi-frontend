// src/api/authService.js
import apiClient from "./index"; // axios client déjà configuré

// Connexion
export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token); // Sauvegarde du token
  return response.data;
};

// Inscription
export const register = async (name, email, password, confirmPassword) => {
  const response = await apiClient.post("/auth/register", {
    name,
    email,
    password,
    password_confirmation: confirmPassword,
  });
  return response.data;
};

// Déconnexion
export const logout = async () => {
  await apiClient.post("/auth/logout");
  localStorage.removeItem("token"); // Suppression du token
};
