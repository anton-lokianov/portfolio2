"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroImage = ({ backgroundY }: { backgroundY: MotionValue<string> }) => {
  return (
    <motion.div
      variants={fadeIn("down")}
      initial="hidden"
      animate="show"
      style={{
        y: backgroundY,
      }}
      className="user-drag-none absolute bottom-0 w-full lg:max-w-[1000px] max-w-[640px] mx-auto left-0 right-0 lg:left-auto mix-blend-color-dodge lg:right-0"
    >
      <Image
        width={1000}
        height={1400}
        style={{ width: "auto" }}
        src="/avatar.png"
        className="w-full user-drag-none pointer-events-none select-none"
        alt="avatar"
        priority
        draggable={false}
      />
    </motion.div>
  );
};

export default HeroImage;
