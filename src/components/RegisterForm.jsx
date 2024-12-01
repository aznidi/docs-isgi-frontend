import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners"; // Import du spinner
import photo from "../assets/register.jpg";
import { useAuth } from "@/contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "@/firebase/auth";

const RegisterForm = () => {
  const { userLoggedIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour la soumission
  const [firebaseError, setFirebaseError] = useState(""); // État pour stocker les erreurs Firebase

  const translateFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "Cette adresse e-mail est déjà utilisée.";
      case "auth/invalid-email":
        return "Veuillez entrer une adresse e-mail valide.";
      case "auth/weak-password":
        return "Le mot de passe doit contenir au moins 6 caractères.";
      case "auth/user-not-found":
        return "Aucun utilisateur trouvé avec ces identifiants.";
      case "auth/wrong-password":
        return "Le mot de passe est incorrect.";
      default:
        return "Une erreur inconnue est survenue. Veuillez réessayer.";
    }
  };
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
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
      setFirebaseError(""); // Réinitialiser les erreurs précédentes
    
      try {
        await doCreateUserWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        // Utiliser la fonction de traduction
        const translatedError = translateFirebaseError(error.code);
        setFirebaseError(translatedError); // Stocker le message traduit
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
    {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
    <motion.div
      className="relative isolate flex flex-col items-center justify-center w-full pt-8 font-poppins"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* Formulaire d'inscription */}
      <motion.div
        className=" flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden"
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
          {/* Gérer les erreurs de Firebase */}
          {firebaseError && (
                <p className="text-sm text-red-500 mt-4 mb-4">{firebaseError}</p>
              )}

          <form onSubmit={formik.handleSubmit}>

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
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitting ? ( // Afficher le spinner au lieu du texte
                <div className="flex justify-center items-center">
                  <ClipLoader size={26} color="#ffffff" /> {/* Spinner ici */}
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
            Vous avez déjà un compte ? {" "}
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
