import React from "react";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex gap-2 items-center">
      {socialLinks.map(({ icon, url }) => (
        <Link
          key={url}
          className="transition-all duration-300 hover:text-accent"
          href={url}
          target="_blank"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};
export default Social;
