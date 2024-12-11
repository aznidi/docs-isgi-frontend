import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/authContext";
import { SyncLoader } from "react-spinners";

function Navbar() {
  const navigate = useNavigate();
  const { userLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "dark";
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true); // Affiche le spinner
    try {
      await logout(); // Appelle la fonction logout (supposée retourner une Promise)
      navigate("/login"); // Redirige après le logout réussi
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    } finally {
      setIsLoading(false); // Désactive le spinner en cas d'erreur ou succès
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins ${scrolled ? "backdrop-blur-lg bg-transparent shadow-md" : "bg-transparent"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex items-center">
          <motion.img
            src="/ofppt.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        <motion.div
          className="hidden lg:flex items-center space-x-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative">
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
          </Link>

          <Link to="/cours" className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative">
            Cours
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
          </Link>

          <Link to="/efm" className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative">
            EFM
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
          </Link>

          {userLoggedIn ? (
            <>
              <Link to="/profile" className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative">
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-red-900 rounded-md dark:text-red-100 border-red-900 hover:bg-red-900 dark:hover:bg-red-700 hover:text-white transition-all duration-300 min-w-[120px]" // Ajustez la largeur si nécessaire
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <SyncLoader size={5} color={`${darkMode ? '#F8F8F8' : '#1F2937'}`} />
                  </div>
                ) : (
                  "Déconnexion"
                )}
              </Button>

            </>
          ) : (
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="text-blue-900 rounded-md dark:text-gray-100 border-[#1E3A8A] hover:bg-blue-900 dark:hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
            >
              Se Connecter
            </Button>
          )}
        </motion.div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden lg:block text-blue-800 dark:text-yellow-400 transition-all duration-300 focus:outline-none"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-800 dark:text-gray-200 lg:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeMenu}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 w-3/4 h-full flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 space-y-6 p-4"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="/" className="text-xl font-medium hover:text-blue-900 dark:hover:text-blue-500 transition duration-300">Accueil</Link>
            <Link to="/cours" className="text-xl font-medium hover:text-blue-900 dark:hover:text-blue-500 transition duration-300">Cours</Link>
            <Link to="/efm" className="text-xl font-medium hover:text-blue-900 dark:hover:text-blue-500 transition duration-300">EFM</Link>
            {userLoggedIn ? (
              <>
                <Link to="/profile" className="text-xl font-medium hover:text-blue-900 dark:hover:text-blue-500 transition duration-300">Profile</Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="text-red-900 rounded-md dark:text-red-100 border-red-900 hover:bg-red-900 dark:hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="text-blue-900 rounded-md dark:text-gray-100 border-[#1E3A8A] hover:bg-blue-900 dark:hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
              >
                Se Connecter
              </Button>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-blue-800 dark:text-yellow-400 transition-all duration-300 focus:outline-none"
            >
              {darkMode ? <FaSun size={28} /> : <FaMoon size={28} />}
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;