import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFirebase,
  SiCanva,
  SiCplusplus,
} from "react-icons/si";

import { MdOutlineDesignServices } from "react-icons/md";

export const getSkillIcon = (skill: string) => {
  const icons: Record<string, any> = {
    HTML: FaHtml5,

    CSS: FaCss3Alt,

    Javascript: FaJs,

    Typescript: SiTypescript,

    React: FaReact,

    "Next JS": SiNextdotjs,

    Tailwind: SiTailwindcss,

    "Node Js": FaNodeJs,

    "Express Js": SiExpress,

    MongoDB: SiMongodb,

    MySQL: SiMysql,

    Git: FaGitAlt,

    GitHub: FaGithub,

    Bootstrap: FaBootstrap,

    Figma: FaFigma,

    Firebase: SiFirebase,

    Canva: SiCanva,

    Illustrator: MdOutlineDesignServices,

    Photoshop: MdOutlineDesignServices,

    "C++": SiCplusplus,

    DSA: MdOutlineDesignServices,
  };

  return icons[skill] || MdOutlineDesignServices;
};

export const getSkillColor = (skill: string) => {
  const colors: Record<string, string> = {
    HTML: "#E34F26",

    CSS: "#1572B6",

    Javascript: "#F7DF1E",

    Typescript: "#3178C6",

    React: "#61DAFB",

    "Next JS": "#ffffff",

    Tailwind: "#06B6D4",

    "Node Js": "#339933",

    "Express Js": "#ffffff",

    MongoDB: "#47A248",

    MySQL: "#4479A1",

    Git: "#F05032",

    GitHub: "#ffffff",

    Bootstrap: "#7952B3",

    Figma: "#F24E1E",

    Firebase: "#FFCA28",

    Canva: "#00C4CC",

    Illustrator: "#FF9A00",

    Photoshop: "#31A8FF",

    "C++": "#00599C",

    DSA: "#EF4444",
  };

  return colors[skill] || "#EF4444";
};