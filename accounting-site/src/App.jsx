import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
