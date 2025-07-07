import React from "react";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import StockImage from "../../assets/accounting-stock-image.jpg";

function HereSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t("welcome")}</h1>
          <p className="hero-subtitle">{t("subheader")}.</p>
        </div>
        <div className="hero-image">
          <img
            src={StockImage || "/placeholder.svg"}
            alt="Professional accounting services"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default HereSection;
