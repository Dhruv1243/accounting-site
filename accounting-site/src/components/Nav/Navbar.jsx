import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <h1 className="navlink">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            {t("nav-home")}
          </a>
        </h1>
        <h1 className="navlink">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("nav-about")}
          </a>
        </h1>
        <h1 className="navlink">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {t("nav-services")}
          </a>
        </h1>
        <h1 className="navlink">
          <a href="#location" onClick={() => setMenuOpen(false)}>
            {t("nav-transparency")}
          </a>
        </h1>
        <h1 className="navlink">
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("nav-contact")}
          </a>
        </h1>
        <div className="language-switcher-mobile">
          <button
            onClick={() => changeLanguage("en")}
            className={currentLang === "en" ? "active-lang" : ""}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={currentLang === "fr" ? "active-lang" : ""}
          >
            FR
          </button>
        </div>
      </div>

      {/* Language switcher (Desktop) */}
      <div className="language-switcher desktop-only">
        <button
          onClick={() => changeLanguage("en")}
          className={currentLang === "en" ? "active-lang" : ""}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className={currentLang === "fr" ? "active-lang" : ""}
        >
          FR
        </button>
      </div>
    </div>
  );
}

export default Navbar;
