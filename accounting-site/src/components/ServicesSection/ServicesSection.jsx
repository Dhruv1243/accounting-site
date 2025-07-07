import React from "react";
import "./ServicesSection.css";
import { useTranslation } from "react-i18next";

function ServicesSection() {
  const { t } = useTranslation();
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">{t("services")}</h2>
        <p className="section-subtitle">{t("services-desc")}</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📘</div>
            <h3 className="service-title">{t("service1.title")}</h3>
            <p className="service-description">{t("service1.desc1")}</p>
            <p className="service-description">{t("service1.desc2")}</p>
            <p className="service-description">{t("service1.desc3")}</p>
            <p className="service-description">{t("service1.desc4")}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3 className="service-title">{t("service2.title")}</h3>
            <p className="service-description">
              <p className="service-description">{t("service2.desc1")}</p>
              <p className="service-description">{t("service2.desc2")}</p>
              <p className="service-description">{t("service2.desc3")}</p>
              <p className="service-description">{t("service2.desc4")}</p>
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧾</div>
            <h3 className="service-title">{t("service3.title")}</h3>
            <p className="service-description">
              <p className="service-description">{t("service3.desc1")}</p>
              <p className="service-description">{t("service3.desc2")}</p>
              <p className="service-description">{t("service3.desc3")}</p>
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">👩</div>
            <h3 className="service-title">{t("service4.title")}</h3>
            <p className="service-description">
              <p className="service-description">{t("service4.desc1")}</p>
              <p className="service-description">{t("service4.desc2")}</p>
              <p className="service-description">{t("service4.desc3")}</p>
              <p className="service-description">{t("service4.desc4")}</p>
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏛️</div>
            <h3 className="service-title">{t("service5.title")}</h3>
            <p className="service-description">
              <p className="service-description">{t("service5.desc1")}</p>
              <p className="service-description">{t("service5.desc2")}</p>
              <p className="service-description">{t("service5.desc3")}</p>
              <p className="service-description">{t("service5.desc4")}</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
