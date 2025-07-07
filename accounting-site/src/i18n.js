import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

// Check localStorage for saved language, fallback to 'en'
const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: savedLanguage, // 👈 Use saved language
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
