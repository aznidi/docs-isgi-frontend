import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners"; // Import du spinner
import photo from "../assets/register.jpg";
import { register } from "@/services/authService";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour la soumission
  const [apiError, setApiError] = useState(""); // État pour stocker les erreurs de l'API
  const [redirectToLogin, setRedirectToLogin] = useState(false); // Pour rediriger vers la page de login après inscription

  // Validation du formulaire avec Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "", // Ajout du champ nom
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Le nom est obligatoire"), // Validation du nom
      email: Yup.string()
        .email("Adresse e-mail invalide")
        .required("L'e-mail est obligatoire"),
      password: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .required("Le mot de passe est obligatoire"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Les mots de passe doivent correspondre")
        .required("La confirmation du mot de passe est obligatoire"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setApiError(""); // Réinitialiser les erreurs précédentes

      try {
        // Envoi des données au backend Laravel pour l'inscription
        const data = await register(values.name, values.email, values.password, values.confirmPassword);
      
        // Vérification de la réponse
        if (data.message) {
          setRedirectToLogin(true); // Rediriger vers la page de login après l'inscription
        }
      } catch (error) {
        // Gérer les erreurs du backend
        
        if (error.response && error.response.data) {
          const { email } = error.response.data;
      
          // Vérifier si une erreur spécifique à l'email existe
          if (email && Array.isArray(email) && email.length > 0) {
            setApiError("Cette adresse e-mail est déjà utilisée.");
          } else {
            setApiError("Erreur inconnue. Veuillez réessayer.");
          }
        } else {
          setApiError("Erreur lors de la demande. Veuillez réessayer.");
        }
      } finally {
        setIsSubmitting(false);
      }
      
      
    },
  });

  // Si l'utilisateur est inscrit avec succès, rediriger vers la page de login
  if (redirectToLogin) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <motion.div
        className="relative isolate flex flex-col items-center justify-center w-full pt-8 font-poppins"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Formulaire d'inscription */}
        <motion.div
          className="flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section gauche */}
          <motion.div
            className="lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-center rounded-md shadow-md"
            style={{
              backgroundImage: `url('${photo}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>

          {/* Section droite */}
          <motion.div
            className="lg:w-1/2 w-full p-6 sm:p-8 pt-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Inscrivez-vous
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">
              Créez votre compte rapidement et facilement.
            </p>
            {/* Gérer les erreurs de l'API */}
            {apiError && (
              <p className="text-sm text-red-500 mt-4 mb-4">{apiError}</p>
            )}

            <form onSubmit={formik.handleSubmit}>
              {/* Nom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mb-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="dark:text-blue-900 border border-gray-300 rounded-lg 
                  px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mb-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Votre e-mail"
                  className="dark:text-blue-900 border border-gray-300 rounded-lg px-4 
                  py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                )}
              </motion.div>

              {/* Mot de passe */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="mb-4"
              >
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  className="dark:text-blue-900 border border-gray-300 rounded-lg
                   px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                )}
              </motion.div>

              {/* Confirmation mot de passe */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="mb-6"
              >
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  className="dark:text-blue-900 border border-gray-300 rounded-lg px-4 py-2 
                  w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.confirmPassword}</p>
                )}
              </motion.div>

              {/* Bouton d'inscription */}
              <motion.button
                type="submit"
                disabled={isSubmitting} // Désactiver le bouton pendant la soumission
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
                  "S'inscrire"
                )}
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="text-sm text-start text-gray-500 mt-4"
            >
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-[#1c78c0] hover:text-[#166f98]">
                Connectez-vous
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default RegisterForm;
