import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeLine";
import { type Experience, experience } from "@/lib/constants";
import {
  Card,
  CardAbout,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { LinkPreview } from "../ui/linkPreview";
import { FaLink } from "react-icons/fa6";

const Experience = () => {
  const generateContent = (item: Experience) => {
    return (
      <Card
        initial={{ x: "30%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="max-w-xl w-full hover:shadow-xl transition-all duration-300"
      >
        <CardAbout className="absolute top-2 right-2">
          <Image
            src={item.logo}
            alt={item.name}
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-700 shadow-md p-1 sm:p-2"
          />
        </CardAbout>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">
            {item.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {item.description.map((desc, index) => (
            <p
              key={index}
              className="text-white text-xs sm:text-sm md:text-lg mb-2 sm:mb-4 leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
          {item.stack.map((tech, index) => (
            <div
              key={index}
              className="text-white flex flex-col items-center gap-1 sm:gap-2 bg-gray-700 rounded-md p-1 sm:p-2 shadow-inner"
            >
              <span className="text-base sm:text-lg">{tech.icon}</span>
              <span className="text-xs sm:text-sm">{tech.name}</span>
            </div>
          ))}
        </CardFooter>
        <div className="flex justify-center mb-3">
          <LinkPreview url={item.url}>
            <Button className="flex items-center bg-red-400 hover:bg-red-400/90 py-2 gap-1 px-4">
              <span>
                <FaLink />
              </span>
              <span>Link</span>
            </Button>
          </LinkPreview>
        </div>
      </Card>
    );
  };

  const mappedData = experience.map((item) => ({
    title: item.title,
    content: generateContent(item),
  }));

  return (
    <section id="experience" className="h-full w-full overflow-hidden">
      <Timeline data={mappedData} />
    </section>
  );
};

export default Experience;
