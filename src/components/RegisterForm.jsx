import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import photo from "../assets/register.jpg";

const RegisterForm = () => {
  return (
    <motion.div
      className="relative isolate flex flex-col items-center justify-center w-full bg-[#F8F8F8] dark:bg-[#1F2937] pt-8" // Fond clair ou sombre ici
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Formulaire d'inscription */}
      <motion.div
        className="shadow-full flex flex-col lg:flex-row w-full max-w-5xl bg-white -5 shadow rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section gauche */}
        <motion.div
          className="lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-center"
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
          className="lg:w-1/2 w-full p-6 sm:p-8 bg-[#f0f0f0] pt-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Inscrivez-vous
          </h2>
          <p className="text-sm lg:text-base text-gray-600 mb-6">
            Créez votre compte et commencez dès maintenant.
          </p>
          <form>
            {/* Formulaire d'inscription */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <input
                  type="text"
                  name="firstname"
                  placeholder="Votre prénom"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <input
                  type="text"
                  name="surname"
                  placeholder="Votre nom"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            </div>

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
              />
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
              />
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
              />
            </motion.div>

            {/* Bouton de soumission */}
            <motion.button
              type="submit"
              className="bg-[#1c78c0] text-white w-full py-2 rounded-lg hover:bg-[#166f98] transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              S'inscrire
            </motion.button>
          </form>

          {/* Lien vers connexion */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="text-sm text-center text-gray-500 mt-4"
          >
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="text-[#1c78c0] hover:text-[#166f98]">
              Connexion
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterForm;