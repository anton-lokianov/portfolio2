"use client";

import React from "react";
import { navLinks } from "@/lib/constants";
import Social from "../global/social";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerVariants } from "@/lib/variants";

const NavLinks = () => {
  return (
    <nav className="hidden lg:flex gap-10">
      <motion.ul
        className="flex gap-4"
        initial="hidden"
        animate="show"
        variants={staggerVariants()}
      >
        {navLinks.map(({ name, icon, href }) => (
          <motion.li
            className="whitespace-nowrap transition-all duration-300 p-2 rounded-lg hover:bg-secondary/70"
            key={name}
            variants={staggerVariants()}
          >
            <Link href={href} legacyBehavior passHref>
              <a className="flex items-center gap-2 curser-pointer">
                <span className="text-accent">{icon}</span>
                <span>{name}</span>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <Social />
    </nav>
  );
};

export default NavLinks;
