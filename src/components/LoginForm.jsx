import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import photo from "../assets/login.jpg"; // Changez cette image si vous souhaitez une autre image

const LoginForm = () => {
  return (
    <motion.div
      className="shadow-full flex flex-col lg:flex-row w-full max-w-3xl bg-white shadow rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section gauche */}
      <motion.div
        className="lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${photo})`, // Remplacez ici si vous souhaitez une autre image
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      ></motion.div>

      {/* Section droite */}
      <motion.div
        className="lg:w-1/2 w-full p-6 sm:p-8 max-h-[500px] overflow-auto rounded-lg bg-[#f0f0f0]" // Changez la couleur ici
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Connexion
        </h2>
        <p className="text-sm lg:text-base text-gray-600 mb-6">
          Connectez-vous à votre compte.
        </p>
        <form>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          {/* Mot de passe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mb-6"
          >
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          {/* Bouton de soumission */}
          <motion.button
            type="submit"
            className="bg-[#1c78c0] text-white w-full py-2 rounded-lg hover:bg-[#166f98] transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Se connecter
          </motion.button>
        </form>

        {/* Lien vers inscription */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-sm text-center text-gray-500 mt-4"
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