"use client";
import { useState } from "react";

export const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border border-white rounded-md">
      <button
        onClick={toggleExpanded}
        className="p-2 bg-white text-left w-full"
      >
        <p className="text-lg font-semibold">{title}</p>
      </button>
      {expanded && (
        <div className="p-2 bg-white">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};
