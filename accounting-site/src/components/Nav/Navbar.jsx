import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="nav-links">
        <h1 className="navlink">
          <a href="#home">Home</a>
        </h1>
        <h1 className="navlink">
          <a href="#about">About</a>
        </h1>
        <h1 className="navlink">
          <a href="#services">Services</a>
        </h1>
        <h1 className="navlink">
          <a href="#location">Location</a>
        </h1>
        <h1 className="navlink">
          <a href="#contact">Contact</a>
        </h1>
      </div>

      <div className="language-switcher">
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
