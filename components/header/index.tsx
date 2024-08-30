import React from "react";
import Image from "next/image";
import NavLinks from "./navlinks";
import DropDown from "./dropDown";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-30 w-full top-0 flex items-center h-16 lg:px-14 px-4 backdrop-filter backdrop-blur-sm bg-opacity-30 justify-between bg-primary/10">
      <Link href="/" legacyBehavior passHref>
        <a className="cursor-pointer">
          <Image
            src="/anton-lokianov-logo.png"
            alt="Logo"
            width={190}
            height={190}
            style={{
              height: "auto",
              width: "auto",
            }}
          />
        </a>
      </Link>
      <NavLinks />
      {/* DropDown for mobile */}
      <div className="block lg:hidden">
        <DropDown />
      </div>
    </header>
  );
};

export default Header;
