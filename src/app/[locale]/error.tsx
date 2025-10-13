"use client";
import Modal from "@/components/Modal/Modal";
import { useParams } from "next/navigation";
import React from "react";

function ErrorBoundary() {
  const errorMessages = {
    tr: {
      title: "Bir hata oluştu",
      modalContent: "Bir hata oluştu. Lütfen ana sayfaya dönün.",
    },
    en: {
      title: "An error occurred",
      modalContent: "An error occurred. Please return to the homepage.",
    },
    de: {
      title: "Ein Fehler ist aufgetreten",
      modalContent:
        "Ein Fehler ist aufgetreten. Bitte kehren Sie zur Startseite zurück.",
    },
  };
  const params = useParams();

  return (
    <div className="h-[90vh]">
      <Modal
        title={errorMessages[params.locale].title}
        modalContent={errorMessages[params.locale].modalContent}
        onClick={() => {}}
        isError={true}
      />
    </div>
  );
}

export default ErrorBoundary;
