import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.section
      className="relative isolate min-h-[400px] bg-[#F8F8F8] dark:bg-[#1F2937] flex flex-col items-center justify-center px-6 sm:px-8 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Gradient with Blur effect */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl backdrop-blur-lg"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="text-center z-10 mx-auto px-6 sm:px-8">
        {/* Logo ISGI */}
        <motion.img
          src="/public/ofppt.png"
          alt="Logo ISGI"
          className=" w-24 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Restez informé et rejoignez notre communauté !
        </motion.p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <motion.a
            href="https://www.linkedin.com/company/isgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#0e76a8] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/isgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#3b5998] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/isgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#C13584] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@isgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#69C9D0] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaTiktok />
          </motion.a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center sm:space-x-12 mb-8">
          <div className="text-center mb-4 sm:mb-0 w-full sm:w-auto ">
            <p className="text-sm font-poppins">
              Email:{" "}
              <a href="mailto:isgi@ofppt.ma" className="underline">
                isgi@ofppt.ma
              </a>
            </p>
            <p className="text-sm font-poppins mt-1">Téléphone: +212 5 22 22 22 22</p>
            <p className="text-sm font-poppins mt-1">
              <FiMapPin className="inline-block mr-2" />
              Rue de l'Innovation, ISGI, Rabat, Maroc
            </p>
          </div>
        </div>

        {/* ISGIHub Community Section */}
        <div className="mt-6 text-center">
          <p className="text-sm font-poppins">
            Rejoignez notre communauté sur <strong>ISGIHub</strong>
          </p>
          <a
            href="https://www.isgihub.com"
            target="_blank"
            className="font-poppins text-lg font-semibold hover:underline"
          >
            Visitez ISGIHub
          </a>
        </div>

        {/* Privacy Policy & Useful Links */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm font-poppins">
            <a href="/privacy" className="text-blue-500 hover:underline">
              Politique de confidentialité
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-blue-500 hover:underline">
              Conditions d'utilisation
            </a>
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm sm:text-base font-poppins">
          <p>© 2024 ISGI. Tous droits réservés.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
