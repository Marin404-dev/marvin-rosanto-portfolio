import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman, SiExpress, SiMysql, SiSelenium, SiCypress } from "react-icons/si";

const techCategories = [
  {
    title: 'Web Development',
    items: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill /> },
    ],
  },
  {
    title: 'Backend & Database Development',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Test Automation',
    items: [
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Cypress', icon: <SiCypress /> },
      { name: 'Playwright', icon: '...' },
    ],
  },
];

function TechStack() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Tech Stack & Tools</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        These are the tools I’ve used throughout my academic projects, internship, and self-study.
      </p>

      {techCategories.map((category, i) => (
        <div key={i} className="relative w-full mb-10">
          {/* Clipping header */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 px-3 bg-white text-black dark:bg-black dark:text-white text-sm font-semibold">
            {category.title}
          </div>

          {/* Outlined box */}
          <div className="border-4 border-black dark:border-white/40 rounded-xl pb-6 px-4">
            {/* Grid content */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 justify-items-center items-center">
              {category.items.map((tech, idx) => (
                <div
                  key={idx}
                  className="h-28 w-40 flex flex-col items-center justify-center rounded-xl bg-white backdrop-blur-sm dark:bg-white/10 border border-black/20 text-white dark:hover:bg-[#262626] hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition duration-300 ease-in-out"
                >
                  <div className="text-4xl mb-2 text-black dark:text-white">{tech.icon}</div>
                  <span className="text-sm font-medium text-black dark:text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
