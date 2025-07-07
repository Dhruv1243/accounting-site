import React from "react";
import "./ContactSection.css";
import Phone from "../../assets/phone.png";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm/ContactForm";

function ContactSection() {
  const { t } = useTranslation();
  return (
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
  );
}

export default ContactSection;
