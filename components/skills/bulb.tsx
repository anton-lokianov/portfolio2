"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Bulb = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      whileInView={{ rotate: "12deg" }}
      transition={{ duration: 1 }}
      className="absolute -left-36 -bottom-0 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]"
    >
      <Image
        src="/bulb.png"
        alt=""
        width={260}
        height={200}
        className="w-full h-full"
        draggable={false}
      />
    </motion.div>
  );
};

export default Bulb;
