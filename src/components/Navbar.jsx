import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/authContext";
import { doSignOut } from "@/firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scrolling
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

  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Close menu function
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins ${
        scrolled
          ? "backdrop-blur-lg bg-transparent dark:bg-transparent shadow-md"
          : "bg-transparent dark:bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-1/2 aspect-[1000/800] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/ofppt.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        {/* Desktop Links */}
        <motion.div
          className="hidden lg:flex items-center space-x-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Accueil */}
          <Link
            to="/"
            className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative"
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
          </Link>

          {/* Cours Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("cours")}
              className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 flex items-center transition-all duration-300"
            >
              Cours <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen["cours"] && (
              <motion.div
                className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/cours/hard-skills"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                >
                  Hard Skills
                </Link>
                <Link
                  to="/cours/soft-skills"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                >
                  Soft Skills
                </Link>
              </motion.div>
            )}
          </div>

          {/* EFM Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("efm")}
              className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 flex items-center transition-all duration-300"
            >
              EFM <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen["efm"] && (
              <motion.div
                className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/efm/regionaux"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                >
                  Régionaux
                </Link>
                <Link
                  to="/efm/locaux"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg[#1E3A8A] hover:text-white rounded transition-all duration-300"
                >
                  Locaux
                </Link>
              </motion.div>
            )}
          </div>

          {
            userLoggedIn 
              ?
              <>
                {/* Profile Button */}
                <Link
                  to="/profile"
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 transition-all duration-300 relative"
                >
                  Profile
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
                </Link>
          
                {/* Logout Button */}
                <Button
                  variant="outline"
                  onClick={() => 
                    {doSignOut().then(() => {
                       navigate('/')
                      }) 
                    }}
                    className="
                    text-red-900 rounded-md
                    dark:text-red-100 border-red-900
                    hover:bg-red-900 dark:hover:bg-red-700 
                    hover:text-white transition-all duration-300
                  "                  
                >

                    Déconnexion
                </Button>
              </>
              :
              <>
                {/* Login Button */}
              <Button
                variant="outline"
                onClick = {(() => navigate('/login'))}
                className="
                text-blue-900 rounded-md
                dark:text-gray-100 border-[#1E3A8A] hover:bg-blue-900
                  dark:hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                >
               Se Connecter
              </Button>
              </>
              


          }
        </motion.div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden lg:block text-blue-800 dark:text-yellow-400 transition-all duration-300 focus:outline-none"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-800 dark:text-gray-200 lg:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          className="fixed bg-transparent inset-0 bg-opacity-50 dark:bg-transparent backdrop-blur-lg shadow-md dark:bg-opacity-70 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeMenu}  // Close the menu when clicking outside
        >
          <motion.div
            className="bg-white dark:bg-gray-900 w-3/4 h-full flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 space-y-6 p-4 font-poppins"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside
          >
            <Link
              to="/"
              className="text-xl font-medium hover:text-blue-900 dark:hover:text-blue-500 transform hover:scale-105 transition duration-300 relative"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-500 hover:w-full"></span>
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("cours")}
                className="text-xl font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 flex items-center transition-all duration-300"
              >
                Cours <FaChevronDown className="ml-1" />
              </button>
              {dropdownOpen["cours"] && (
                <motion.div
                  className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/cours/hard-skills"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                  >
                    Hard Skills
                  </Link>
                  <Link
                    to="/cours/soft-skills"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                  >
                    Soft Skills
                  </Link>
                </motion.div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("efm")}
                className="text-xl font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-500 flex items-center transition-all duration-300"
              >
                EFM <FaChevronDown className="ml-1" />
              </button>
              {dropdownOpen["efm"] && (
                <motion.div
                  className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/efm/regionaux"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                  >
                    Régionaux
                  </Link>
                  <Link
                    to="/efm/locaux"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#1E3A8A] hover:text-white rounded transition-all duration-300"
                  >
                    Locaux
                  </Link>
                </motion.div>
              )}
            </div>
            <Button
              variant="primary"
              className="px-5 py-3 rounded-md bg-[#1E3A8A] dark:bg-blue-500 hover:bg-[#1E3A8A] dark:hover:bg-blue-600 text-white shadow-md"
            >
              Se Connecter
            </Button>
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
