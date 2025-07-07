import React from "react";
import "./Transparency.css";
import { useTranslation } from "react-i18next";

function TransparencySection() {
  const { t } = useTranslation();
  return (
    <section className="transparency-section" id="transparency">
      <div className="transparency-container">
        <h2 className="section-title">{t("transparency")}</h2>
        <p>{t("transparency-desc")}</p>
      </div>
    </section>
  );
}

export default TransparencySection;
