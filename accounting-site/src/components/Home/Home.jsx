import "./Home.css";
import ContactForm from "../ContactForm/ContactForm";
import StockImage from "../../assets/accounting-stock-image.jpg";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container" id="home">
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

      {/* About Section */}
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

      {/* Services Section */}
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

      <section className="location-section" id="location">
        <div className="location-container">
          <h2 className="section-title">{t("transparency")}</h2>
          <p>{t("transparency-desc")}</p>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="section-title">{t("contact")}</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.3610908131727!2d-73.6422751231671!3d45.60338712414033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f77fce68ea1%3A0x1a4a780002e1aa94!2s4718%20Boul.%20Gouin%20E%2C%20Montr%C3%A9al%2C%20QC%20H1H%201G1!5e0!3m2!1sen!2sca!4v1751919063064!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location"
            />
          </div>

          <div className="contact-icons">
            <div className="icon">
              <img src={Phone} alt="An icon of a phone" />
              <p>(123) 456-7890</p>
            </div>
            {/* <div className="icon">
              <img src={Email} alt="An icon of an email" />
              <p>HvCmD@example.com</p>
            </div> */}
          </div>
          <h3 className="contact-email">Send us an email</h3>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;
