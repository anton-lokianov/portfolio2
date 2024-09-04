"use client";

import React from "react";
import { FlipWords } from "../ui/flipWords";
import { fadeIn } from "@/lib/variants";
import {
  Card,
  CardAbout,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

const About = () => {
  const words = [
    "Software developer",
    "Fullstack developer",
    "Frontend developer",
  ];

  return (
    <article className="w-full xl:w-1/2 lg:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 absolute lg:static top-28">
      <Card
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        className="p-3">
        <CardAbout className="bg-accent border border-black">
          About Me
        </CardAbout>
        <CardHeader>
          <CardTitle className="text-3xl">Hey, I&apos;m Anton.</CardTitle>
          <FlipWords
            className="text-3xl md:text-4xl xl:text-5xl"
            words={words}
          />
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg text-gray-300">
            College Graduated developer from Israel.
          </p>
          <p className="text-base sm:text-lg text-gray-300 text-pretty">
            A passionate developer who loves to create and learn new things, and
            always looking for new challenges and opportunities to grow
            professionally.
          </p>
        </CardContent>
      </Card>
    </article>
  );
};

export default About;
