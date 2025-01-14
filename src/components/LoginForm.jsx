import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners"; // Import du spinner
import photo from "../assets/login.jpg";
import { login } from "@/services/authService";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour la soumission
  const [apiError, setApiError] = useState(""); // État pour les erreurs de l'API
  const [redirectToHome, setRedirectToHome] = useState(false); // État pour redirection après login
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Adresse e-mail invalide")
        .required("L'e-mail est obligatoire"),
      password: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .required("Le mot de passe est obligatoire"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setApiError(""); // Réinitialise l'erreur de l'API

      try {
        // Envoi des données au backend Laravel pour l'authentification
        const data = await login(values.email,values.password);
        setRedirectToHome(true);
      } catch (error) {
        // Gestion des erreurs du backend
        if (error.response && error.response.data) {
          setApiError("Connexion échouée. Veuillez vérifier vos informations." || "Erreur inconnue");
        } else {
          setApiError("Erreur lors de la demande. Veuillez réessayer.");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  if (redirectToHome) {
    return window.location.href = '/';
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row font-poppins"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Image */}
      <motion.div
        className="hidden lg:block lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-center rounded-md shadow-md"
        style={{ backgroundImage: `url(${photo})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      ></motion.div>

      {/* Section Formulaire */}
      <motion.div
        className="lg:w-1/2 w-full p-6 sm:p-8 flex flex-col items-start"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Connexion
        </h2>
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">
          Connectez-vous à votre compte.
        </p>

        {apiError && (
          <motion.p
            className="text-sm text-red-500 mr-2 mt-2 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {apiError}
          </motion.p>
        )}

        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
          {/* Champ Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              className={`dark:text-blue-900 border ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                formik.errors.email && formik.touched.email
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-900"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </motion.div>

          {/* Champ Mot de passe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-6"
          >
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className={` dark:text-blue-900 border ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                formik.errors.password && formik.touched.password
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-900"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
            )}
          </motion.div>

          {/* Bouton de soumission avec spinner */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg px-4 py-2 text-lg font-poppins cursor-pointer ${
                  isSubmitting
                    ? "bg-blue-800 text-white hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
                    : "bg-blue-800 text-white hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
                } transition duration-300 ease-in-out`}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <ClipLoader size={26} color="#ffffff" />
              </div>
            ) : (
              "Se connecter"
            )}
          </motion.button>
        </form>

        {/* Lien Inscription */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-sm text-center p-1 text-gray-500 mt-4"
        >
          Vous n'avez pas de compte ?{" "}
          <Link to="/register" className="text-[#1c78c0] hover:text-[#166f98]">
            Inscrivez-vous
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
