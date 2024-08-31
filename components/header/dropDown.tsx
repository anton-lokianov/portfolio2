"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHamburgerButton from "./animatedHamburger";
import { navLinks } from "@/lib/constants";
import Social from "../global/social";
import Link from "next/link";
import { transform } from "next/dist/build/swc";

const DropDown = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="p-8 flex items-center justify-center bg-transparent"
      ref={dropdownRef}>
      <motion.div animate={active ? "open" : "closed"} className="absolute">
        <AnimatedHamburgerButton setActive={setActive} active={active} />
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-80%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-secondary shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-10">
          <h2 className="text-center">Navigation</h2>
          {navLinks.map(({ icon, name, href }) => (
            <Option
              setActive={setActive}
              href={href}
              key={name}
              Icon={icon}
              text={name}
            />
          ))}
          <div className="flex justify-center py-4 border-t-2 border rounded-sm">
            <Social />
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
};

type OptionProps = {
  text: string;
  Icon: React.ReactNode | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
};

const Option = ({ text, Icon, setActive, href }: OptionProps) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setActive((prev) => !prev)}
      className="flex items-center gap-2 w-full p-2 text-md font-medium whitespace-nowrap rounded-md hover:bg-primary/40 text-white hover:text-accent transition-all duration-300 cursor-pointer">
      <Link href={href} legacyBehavior passHref className="w-full">
        <a className="flex items-center gap-2">
          <motion.span variants={actionIconVariants} className="text-accent">
            {Icon}
          </motion.span>
          <span>{text}</span>
        </a>
      </Link>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
