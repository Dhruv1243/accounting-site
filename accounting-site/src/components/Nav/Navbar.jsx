import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng); //this will just load the language when the page is reloaded
  };
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="nav-links">
        <h1 className="navlink">
          <a href="#home">{t("nav-home")}</a>
        </h1>
        <h1 className="navlink">
          <a href="#about">{t("nav-about")}</a>
        </h1>
        <h1 className="navlink">
          <a href="#services">{t("nav-services")}</a>
        </h1>
        <h1 className="navlink">
          <a href="#location">{t("nav-location")}</a>
        </h1>
        <h1 className="navlink">
          <a href="#contact">{t("nav-contact")}</a>
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
