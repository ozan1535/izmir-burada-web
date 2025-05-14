"use client";
import React, { useState } from "react";
import Modal from "../Modal";

function OpenModal({ title, modalContent }) {
  const [canModalOpen, setCanModalOpen] = useState(false);

  return (
    <div>
      <p
        onClick={() => setCanModalOpen((prev) => !prev)}
        className="hover:underline hover:cursor-pointer"
      >
        Detay
      </p>
      {canModalOpen && (
        <Modal
          title={title}
          modalContent={modalContent}
          onClick={() => setCanModalOpen((prev) => !prev)}
        />
      )}
    </div>
  );
}

export default OpenModal;
