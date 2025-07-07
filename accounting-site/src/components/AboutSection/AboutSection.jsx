import React from "react";
import "./AboutSection.css";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">{t("why")}</h2>
          <p className="about-text">{t("why-desc")}</p>
          <p className="about-text">{t("why-desc2")}</p>
          <ul className="about-list">
            <li>{t("federal")}</li>
            <li>{t("quebec")}</li>
          </ul>
          <p className="about-text">{t("why-desc3")}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
