"use client";

import React from "react";
import TopLeftImage from "./topLeftImage";
import ParticlesContainer from "./particlesContainer";
import HeroImage from "./heroImage";
import { FlipWords } from "../ui/flipWords";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./about";

const Hero = () => {
  const ref = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full xl:justify-between flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, #020617 70%, #DD335C)",
        width: "100%",
      }}
    >
      <About />
      <div className="h-full w-full xl:w-1/2 relative">
        <HeroImage backgroundY={backgroundY} />
        <ParticlesContainer />
      </div>
      <TopLeftImage />
    </section>
  );
};

export default Hero;
