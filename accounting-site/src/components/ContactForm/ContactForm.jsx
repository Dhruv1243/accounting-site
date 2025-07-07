import React from "react";
import "./ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const [state, handleSubmit] = useForm("manjgnpp");
  const { t } = useTranslation();
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" placeholder="Enter your name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        placeholder="Enter your phone number"
      />
      <ValidationError
        prefix="Phone Number"
        field="phoneNumber"
        errors={state.errors}
      />
      <label htmlFor="service">Service Type</label>
      <select id="service" name="service" required>
        <option value="">-- Please choose an option --</option>
        <option value="bookkeeping">{t("service1.title")}</option>
        <option value="startup">{t("service2.title")}</option>
        <option value="taxes">{t("service3.title")}</option>
        <option value="payroll">{t("service4.title")}</option>
        <option value="income-tax">{t("service5.title")}</option>
      </select>
      <ValidationError prefix="Service" field="service" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Enter your message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
