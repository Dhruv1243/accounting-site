import React, { useState } from "react";
import "./ContactForm.css";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const { t } = useTranslation();
  const [state, submitToFormspree] = useForm("manjgnpp");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("form.required");
    if (!formData.email.trim()) newErrors.email = t("form.required");
    if (!formData.service) newErrors.service = t("form.required");
    if (!formData.message.trim()) newErrors.message = t("form.required");
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // also important to prevent default form reload

    const validationErrors = validate(); // ✅ define it first

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await submitToFormspree(formData);

    // show toast on success
    toast.success(t("form.success") + " " + t("form.spamWarning"));

    // reset form
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">{t("form.name")}</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t("form.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="validation-error">{errors.name}</p>}

        <label htmlFor="email">{t("form.email")}</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t("form.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="validation-error">{errors.email}</p>}

        <label htmlFor="phoneNumber">{t("form.phone")}</label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          placeholder={t("form.phonePlaceholder")}
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <label htmlFor="service">{t("form.service")}</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">{t("form.servicePlaceholder")}</option>
          <option value="bookkeeping">{t("service1.title")}</option>
          <option value="startup">{t("service2.title")}</option>
          <option value="taxes">{t("service3.title")}</option>
          <option value="payroll">{t("service4.title")}</option>
          <option value="income-tax">{t("service5.title")}</option>
        </select>
        {errors.service && <p className="validation-error">{errors.service}</p>}

        <label htmlFor="message">{t("form.message")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("form.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="validation-error">{errors.message}</p>}

        <button type="submit" disabled={state.submitting}>
          {t("form.submit")}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default ContactForm;
