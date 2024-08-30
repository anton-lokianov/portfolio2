import { IoMdMail } from "react-icons/io";
import { FaProjectDiagram, FaUser } from "react-icons/fa";
import { IoHome, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaSass,
  FaCss3,
  FaHtml5,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiJavascript,
  SiMicrosoftazure,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMongodb, DiFirebase, DiMysql, DiJqueryLogo } from "react-icons/di";

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
    icon: <IoHome />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <FaUser />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <IoMdMail />,
  },
];

type SocialLink = {
  url: string;
  icon: React.ReactNode;
};

export const socialLinks: SocialLink[] = [
  {
    url: "https://www.linkedin.com/in/anton-lokianov/",
    icon: <IoLogoLinkedin style={{ height: "24px", width: "24px" }} />,
  },
  {
    url: "https://github.com/anton-lokianov",
    icon: <IoLogoGithub style={{ height: "24px", width: "24px" }} />,
  },
];

export type Experience = {
  title: string;
  description: string[];
  stack: { name: string; icon: React.ReactNode }[];
  images: string[];
  logo: string;
  name: string;
  url: string;
};

export const experience: Experience[] = [
  {
    title: "2024",
    description: [
      "full-stack developer self-employed",
      "working on saas product for the game industry in israel similar to Faceit",
      "the product is a platform for organizing and participating in tournaments",
      "still in the early stages of development",
      "for now we are team of 4 people but we are looking to grow",
    ],
    stack: [
      { name: "react", icon: <FaReact /> },
      { name: "typescript", icon: <SiTypescript /> },
      { name: "node.js", icon: <FaNodeJs /> },
      { name: "express", icon: <SiExpress /> },
      { name: "react-query", icon: <SiReactquery /> },
      { name: "mongodb", icon: <DiMongodb /> },
      { name: "firebase", icon: <DiFirebase /> },
      { name: "tailwindcss", icon: <RiTailwindCssFill /> },
    ],
    images: [],
    logo: "/ugl.png",
    name: "UGL",
    url: "https://ugl.co.il",
  },
  {
    title: "early 2024",
    description: [
      "full-stack developer freelancer",
      "working on a project for a MALAM team",
      "the project is a platform for easy managing and organizing microsoft calendars",
      "me and another developer create the idea and the design of the platform",
      "worked with microsoft graph api connect to our algorithm",
    ],
    stack: [
      { name: "react", icon: <FaReact /> },
      { name: "javascript", icon: <SiJavascript /> },
      { name: "node.js", icon: <FaNodeJs /> },
      { name: "express", icon: <SiExpress /> },
      { name: "react-query", icon: <SiReactquery /> },
      { name: "mongodb", icon: <DiMongodb /> },
      { name: "firebase", icon: <DiFirebase /> },
      { name: "tailwindcss", icon: <RiTailwindCssFill /> },
      { name: "microsoft azure", icon: <SiMicrosoftazure /> },
    ],
    images: [],
    logo: "/malam.png",
    name: "MALAM",
    url: "https://www.malamteam.com/",
  },
  {
    title: "2023",
    description: [
      "front-end developer at a startup temporary apprentice",
      "working on a job search platform in israel",
      "the platform is for job seekers and employers",
      "wanted to learn more about the industry and the work",
    ],
    stack: [
      { name: "react", icon: <FaReact /> },
      { name: "typescript", icon: <SiTypescript /> },
      { name: "redux", icon: <SiRedux /> },
      { name: "sass", icon: <FaSass /> },
    ],
    images: [],
    logo: "/noviopus.png",
    name: "Noviopus",
    url: "https://noviopus.com/en",
  },
  {
    title: "github",
    description: [
      "my github profile",
      "you can see my projects and contributions",
      "I am always looking for new opportunities and challenges",
      "always looking to learn new things and improve my skills",
    ],
    stack: [
      { name: "react", icon: <FaReact /> },
      { name: "typescript", icon: <SiTypescript /> },
      { name: "next.js", icon: <RiNextjsFill /> },
      { name: "tailwindcss", icon: <RiTailwindCssFill /> },
      { name: "mongodb", icon: <DiMongodb /> },
      { name: "node.js", icon: <FaNodeJs /> },
      { name: "express", icon: <SiExpress /> },
      { name: "mysql", icon: <DiMysql /> },
      { name: "jquery", icon: <DiJqueryLogo /> },
      { name: "css", icon: <FaCss3 /> },
      { name: "html", icon: <FaHtml5 /> },
      { name: "javascript", icon: <SiJavascript /> },
      { name: "react-query", icon: <SiReactquery /> },
    ],
    images: [],
    logo: "/github.png",
    name: "GitHub",
    url: "https://github.com/anton-lokianov",
  },
];
