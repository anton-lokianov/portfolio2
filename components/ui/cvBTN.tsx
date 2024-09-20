import React from "react";
import { Button } from "./button";
import { FaFilePdf } from "react-icons/fa";

export const CvBTN = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = "/AntonCV.pdf";
    link.click();
  };

  return (
    <Button
      onClick={handleClick}
      whileTap={{ scale: 0.85 }}
      className="bg-accent hover:bg-accent/80 text-white p-1.5 md:p-2 rounded-md flex items-center justify-center gap-1 md:gap-2 relative group h-8 md:h-10 w-28 md:w-36 overflow-hidden transition-all duration-300 ease-in-out shadow-lg md:shadow-xl shadow-secondary/40"
    >
      <span
        id="text"
        className="absolute transform transition-all duration-300 group-hover:-translate-y-20 text-sm md:text-base"
      >
        Download CV
      </span>
      <span
        id="pdf"
        className="absolute transform  transition-all duration-300 -translate-y-20 group-hover:translate-y-0"
      >
        <FaFilePdf className="text-xl md:text-2xl" />
      </span>
    </Button>
  );
};
