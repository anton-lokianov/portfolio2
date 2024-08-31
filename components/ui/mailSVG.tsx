"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MailSVG() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="" ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        {/* Envelope Base */}
        <motion.path
          d="M10 30 L50 60 L90 30 L90 80 L10 80 Z"
          fill="transparent"
          strokeWidth="2"
          stroke="#F13024" // Accent color
          variants={icon}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        {/* Envelope Flap */}
        <motion.path
          d="M10 30 L50 60 L90 30"
          fill="transparent"
          strokeWidth="2"
          stroke="#F13024" // Accent color
          variants={icon}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </svg>
    </div>
  );
}

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(245, 245, 245, 0)", // White smoke with 0 opacity for hidden state
  },
  visible: {
    pathLength: 1,
    fill: "rgba(245, 245, 245, 1)", // White smoke for visible state
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
