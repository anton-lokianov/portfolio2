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
  SiMui,
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
      "Full-stack developer (self-employed)",
      "Working on a SaaS product for the gaming industry in Israel, similar to Faceit.",
      "The platform is for organizing and participating in tournaments.",
      "Currently in the early stages of development.",
      "We are a team of 4 people, but we are looking to grow.",
    ],
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Firebase", icon: <DiFirebase /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
    images: [],
    logo: "/ugl.png",
    name: "UGL",
    url: "https://ugl.co.il",
  },
  {
    title: "Early 2024",
    description: [
      "Full-stack developer (freelancer)",
      "Developed a platform for the IT support department of MALAM Team to easily manage and organize Microsoft calendars.",
      "A team of 2 developers implemented the project.",
      "Integrated the platform with Microsoft Graph API to connect with our algorithms.",
    ],
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Firebase", icon: <DiFirebase /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
    ],
    images: [],
    logo: "/malam.png",
    name: "MALAM",
    url: "https://www.malamteam.com/",
  },
  {
    title: "2023",
    description: [
      "Front-end developer (apprentice at a startup)",
      "Worked on a job search platform in Israel, targeting both job seekers and employers.",
      "Gained valuable experience and industry insights during this project.",
    ],
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Sass", icon: <FaSass /> },
      { name: "MUI", icon: <SiMui /> },
    ],
    images: [],
    logo: "/noviopus.png",
    name: "Noviopus",
    url: "https://noviopus.com/en",
  },
  {
    title: "GitHub",
    description: [
      "Explore my GitHub profile to see my projects and contributions.",
      "Always looking for new challenges and learning opportunities.",
    ],
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MySQL", icon: <DiMysql /> },
      { name: "jQuery", icon: <DiJqueryLogo /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Angular", icon: <FaAngular /> },
    ],
    images: [],
    logo: "/github.png",
    name: "GitHub",
    url: "https://github.com/anton-lokianov?tab=repositories",
  },
];

export type SkillsArr = {
  title: string;
  skills: { name: string; icon: string }[];
};

export const skillsArr: SkillsArr[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: "https://icon.icepanel.io/Technology/svg/React.svg",
      },
      {
        name: "JavaScript",
        icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
      },
      {
        name: "TypeScript",
        icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
      },
      {
        name: "React Native",
        icon: "https://icon.icepanel.io/Technology/svg/React.svg",
      },
      {
        name: "Redux",
        icon: "https://icon.icepanel.io/Technology/svg/Redux.svg",
      },
      {
        name: "Sass",
        icon: "https://icon.icepanel.io/Technology/svg/Sass.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
      },
      {
        name: "Angular",
        icon: "https://icon.icepanel.io/Technology/svg/Angular.svg",
      },
      {
        name: "HTML",
        icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      },
      { name: "CSS", icon: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://icon.icepanel.io/Technology/svg/Redux.svg",
      },
      {
        name: "Next.js",
        icon: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
      },
      {
        name: "Express",
        icon: "https://icon.icepanel.io/Technology/svg/Express.svg",
      },
      {
        name: "Python",
        icon: "https://icon.icepanel.io/Technology/svg/Python.svg",
      },
      {
        name: "MongoDB",
        icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
      },
      {
        name: "SQL",
        icon: "https://icon.icepanel.io/Technology/svg/SQL-Developer.svg",
      },
      {
        name: "Nest.js",
        icon: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
      },
    ],
  },
  {
    title: "Misc",
    skills: [
      { name: "Git", icon: "https://icon.icepanel.io/Technology/svg/Git.svg" },
      {
        name: "Microsoft SQL Server",
        icon: "https://icon.icepanel.io/Technology/svg/Microsoft-SQL-Server.svg",
      },
      { name: "AWS", icon: "https://icon.icepanel.io/Technology/svg/AWS.svg" },
      {
        name: "Docker",
        icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
      },
      {
        name: "Jira",
        icon: "https://icon.icepanel.io/Technology/svg/Jira.svg",
      },
      {
        name: "Jest",
        icon: "https://icon.icepanel.io/Technology/svg/Jest.svg",
      },
    ],
  },
];
