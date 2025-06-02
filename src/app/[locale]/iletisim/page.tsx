"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { usePathname } from "next/navigation";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzgbvpd");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  // Translations for different locales
  const translations = {
    en: {
      title: "Contact",
      namePlaceholder: "Your Name (Optional)",
      emailLabel: "Email Address",
      emailRequired: "*",
      emailPlaceholder: "Your Email Address",
      messageLabel: "Message",
      messageRequired: "*",
      messagePlaceholder: "Your Message",
      submitButton: "Submit",
      successMessage: "Your message has been sent successfully.",
      errorMessage: "There was an error!",
    },
    tr: {
      title: "İletişim",
      namePlaceholder: "Adınız (İsteğe Bağlı)",
      emailLabel: "E-posta Adresi",
      emailRequired: "*",
      emailPlaceholder: "E-posta Adresiniz",
      messageLabel: "Mesaj",
      messageRequired: "*",
      messagePlaceholder: "Mesajınız",
      submitButton: "Gönder",
      successMessage: "Mesajınız başarıyla gönderildi!",
      errorMessage: "Bir hata oluştu!",
    },
    de: {
      title: "Kontakt",
      namePlaceholder: "Ihr Name (Optional)",
      emailLabel: "E-Mail-Adresse",
      emailRequired: "*",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      messageLabel: "Nachricht",
      messageRequired: "*",
      messagePlaceholder: "Ihre Nachricht",
      submitButton: "Absenden",
      successMessage: "Ihre Nachricht wurde erfolgreich gesendet.",
      errorMessage: "Es gab einen Fehler!",
    },
  };

  // Get translated text based on locale
  const t = translations[locale] || translations.tr;

  return (
    <PageTemplate title={t.title}>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            {t.namePlaceholder}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t.namePlaceholder}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            {t.emailLabel}{" "}
            <span className="text-red-500">{t.emailRequired}</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder={t.emailPlaceholder}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold"
          >
            {t.messageLabel}{" "}
            <span className="text-red-500">{t.messageRequired}</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            rows="6"
            placeholder={t.messagePlaceholder}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 transition"
          >
            {t.submitButton}
          </button>
        </div>

        {state.result ? (
          state.succeeded ? (
            <p>{t.successMessage}</p>
          ) : (
            <p>{t.errorMessage}</p>
          )
        ) : null}
      </form>
    </PageTemplate>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
