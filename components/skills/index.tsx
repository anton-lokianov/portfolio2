"use client";

import React, { useState } from "react";
import Bulb from "./bulb";
import { Card, CardAbout, CardContent } from "../ui/card";
import { useMotionValue, useTransform } from "framer-motion";
import { SkillsArr, skillsArr } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Skills = () => {
  const [cards, setCards] = useState<SkillsArr[]>(skillsArr);
  return (
    <section
      id="skills"
      className="min-h-screen relative w-full grid place-items-center overflow-hidden">
      <h2 className="text-4xl font-bold absolute top-20 border-b-2 border-accent">
        Skills
      </h2>
      {cards.map((card, idx) => (
        <SkillCard
          key={card.title}
          length={cards.length}
          setCards={setCards}
          index={idx}
          {...card}
        />
      ))}
      <Bulb />
    </section>
  );
};

export default Skills;

type SkillCardProps = {
  title: string;
  skills: { name: string; icon: string }[];
  setCards: React.Dispatch<React.SetStateAction<SkillsArr[]>>;
  length: number;
  index: number;
};

const SkillCard = ({
  title,
  skills,
  setCards,
  length,
  index,
}: SkillCardProps) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]) as any;
  const rotate = useTransform(x, [-150, 150], [-5, 5]) as any;

  const offsetY = (length - index) * 50;
  const offsetX = (length - index) * 6;

  const handleDragEnd = (idx: number) => {
    if (Math.abs(x.get()) > 50) {
      setCards((prev) => {
        if (idx === 0) {
          const copy = [...prev];
          const removed = copy.splice(idx, 1);
          copy.push(removed[0]);
          return copy;
        }
        const copy = [...prev];
        const removed = copy.splice(idx, 1);
        copy.unshift(removed[0]);
        return copy;
      });
    }
  };

  return (
    <Card
      drag="x"
      layoutId={title}
      dragConstraints={{ left: 0, right: 0 }}
      className={cn(
        "w-full max-w-xs sm:max-w-md md:max-w-xl hover:cursor-grab active:cursor-grabbing relative p-6 rounded-lg shadow-lg transition-all duration-300",
        { "border-accent/50": index === 0 }
      )}
      style={{
        x,
        opacity,
        rotate,
        gridRow: 1,
        gridColumn: 1,
        zIndex: length - index,
        top: offsetY,
        right: -offsetX,
        transition: "transform 0.0125s",
      }}
      onDragEnd={() => handleDragEnd(index)}>
      <CardAbout className="bg-accent text-white border border-black font-semibold text-center px-2 rounded-t-lg">
        {title}
      </CardAbout>
      <CardContent className="min-h-[300px] md:min-h-[500px] flex items-center place-content-center p-2 rounded-b-lg">
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-1">
              <Image
                width={50}
                height={50}
                src={skill.icon}
                alt={skill.name}
                className="object-contain"
                draggable={false}
              />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
