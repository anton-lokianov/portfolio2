import React from "react";
import { Button } from "./button";
import { FaFilePdf } from "react-icons/fa";

export const CvBTN = () => {
  // need to add animation to the button and change the CV in the end
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/AntonCV.docx";
    link.click();
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-accent text-white p-2 rounded-lg flex items-center justify-center gap-2 relative group h-10 w-36 overflow-hidden transition-all duration-300 ease-in-out shadow-xl shadow-secondary/40 z-50"
    >
      <span
        id="text"
        className="absolute transform transition-transform group-hover:-translate-y-20"
      >
        Download CV
      </span>
      <span
        id="pdf"
        className="absolute transform transition-transform -translate-y-20 group-hover:translate-y-0"
      >
        <FaFilePdf className="text-2xl" />
      </span>
    </Button>
  );
};
