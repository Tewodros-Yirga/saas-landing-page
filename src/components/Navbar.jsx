import { useState, useContext } from "react";
import { FaMoon, FaSun, FaChevronDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const { user, logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation(); // Use translation hook

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="flex justify-between items-center p-6 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">TaskFlow</div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-600 dark:text-gray-300"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <button onClick={() => handleScroll("features")} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t("features")} {/* Translated text */}
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("pricing")} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t("pricing")} {/* Translated text */}
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("testimonials")} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t("testimonials")} {/* Translated text */}
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("faq")} className="hover:text-blue-600 dark:hover:text-blue-400">
            {t("faq")} {/* Translated text */}
          </button>
        </li>
        <li className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
          >
            {t("more")} <FaChevronDown className="ml-1" /> {/* Translated text */}
          </button>
          {showDropdown && (
            <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("blog")}</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("careers")}</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("support")}</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <button onClick={() => handleScroll("features")} className="hover:text-blue-600 dark:hover:text-blue-400">
                {t("features")} {/* Translated text */}
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("pricing")} className="hover:text-blue-600 dark:hover:text-blue-400">
                {t("pricing")} {/* Translated text */}
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("testimonials")} className="hover:text-blue-600 dark:hover:text-blue-400">
                {t("testimonials")} {/* Translated text */}
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("faq")} className="hover:text-blue-600 dark:hover:text-blue-400">
                {t("faq")} {/* Translated text */}
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t("more")} <FaChevronDown className="ml-1" /> {/* Translated text */}
              </button>
              {showDropdown && (
                <div className="mt-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("blog")}</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("careers")}</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t("support")}</a></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* User Actions (Login/Logout, Language Switcher, and Dark Mode Toggle) */}
      <div className="flex items-center space-x-4">
        {/* Language Switcher */}
        <button
          onClick={() => changeLanguage(i18n.language === "en" ? "am" : "en")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {i18n.language === "en" ? "አማ" : "EN"}
        </button>

        {user ? (
          <div className="flex items-center space-x-2">
            <FaUser className="text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">{user.email}</span>
            <button onClick={logout} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              {t("logout")} {/* Translated text */}
            </button>
          </div>
        ) : (
          <button onClick={() => setShowAuthModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            {t("login")} {/* Translated text */}
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </nav>
  );
}