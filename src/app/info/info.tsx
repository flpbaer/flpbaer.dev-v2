export const timelineItems = [
  {
    title: "Segala's Alimentos",
    role: "Full-Stack Developer",
    time: "2022 - Present",
    description: (
      <>
        <p>
          A significant part of my early journey at Segalas involved learning
          how to apply programming skills in real-world applications. I began
          with foundational projects using JavaScript, HTML, and CSS. Over time,
          I transitioned to React, where I built my stack and played a key role
          in developing an ecommerce platform from the ground up, which I
          continue to maintain today. At Segalas, I work as a full-cycle
          developer, primarily focused on front-end development.
        </p>
        <br />
        <p>
          My work includes software development and the creation of interactive
          interfaces, leveraging agile methodologies and modern technologies. I
          specialize in front-end development using React with TypeScript,
          Tailwind CSS, and Test-Driven Development (TDD). Additionally, I
          incorporate UI/UX design principles using Figma and ensure seamless
          deployment through CI/CD pipelines.
        </p>
        <br />
        <span className="opacity-85">
          <span className="font-bold">Technologies:</span> ReactJS, NodeJS,
          NestJS, TypeScript, NextJS, Tailwind CSS
        </span>
        <br />
        <span className="opacity-85">
          <span className="font-bold">Tools:</span> GitHub, Atlassian, AWS
        </span>
      </>
    ),
  },
  {
    title: "Fornos JUNG",
    role: "Assistant IT",
    time: "2020/09 - 2021/12",
    description: (
      <>
        <p>
          I worked as an IT assistant, focused only on taking courses, I didn’t
          work directly at the company.
        </p>
        <br />
        <p>
          I delved deeper into web development and introduction to computer
          networks courses. I learned the basics of HTML and CSS, I was
          introduced to the world of networks using CISCO services, how
          communication between servers works, I created connections, etc.
        </p>
      </>
    ),
  },
];

// techs

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiGithubLine, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiSpring, SiTypescript } from "react-icons/si";

export const techItems = [
  {
    icon: <FaReact className="w-8 h-8" />,
    name: "React.js",
  },
  {
    icon: <TbBrandNextjs className="w-8 h-8" />,
    name: "Next.js",
  },
  {
    icon: <RiGithubLine className="w-8 h-8" />,
    name: "Github",
  },
  {
    icon: <SiNestjs className="w-8 h-8" />,
    name: "Nest.js",
  },
  {
    icon: <FaNodeJs className="w-8 h-8" />,
    name: "Node.js",
  },
  {
    icon: <FaAws className="w-8 h-8" />,
    name: "AWS",
  },
  {
    icon: <SiSpring className="w-8 h-8" />,
    name: "Java + Spring",
  },
  {
    icon: <SiTypescript className="w-8 h-8" />,
    name: "Typescript",
  },
  {
    icon: <RiTailwindCssFill className="w-8 h-8" />,
    name: "TailwindCSS",
  },
];
