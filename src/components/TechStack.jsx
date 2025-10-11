import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman, SiExpress, SiMysql, SiSelenium, SiCypress } from "react-icons/si";
import { FaTheaterMasks } from "react-icons/fa";

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
      { name: 'Playwright', icon: <FaTheaterMasks /> },
    ],
  },
];

function TechStack() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">Tech Stack & Tools</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          These are the tools I’ve used throughout my academic projects, internship, and self-study.
        </p>
      </motion.div>


      {techCategories.map((category, i) => (
        <motion.div
          key={i}
          className="relative w-full mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div key={i} className="relative w-full mb-10">
            {/* Clipping header */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 px-3 bg-black text-white dark:bg-white dark:text-black text-sm font-semibold whitespace-nowrap">
              <span>{category.title}</span>
            </div>

            {/* Outlined box */}
            <div className="border-2 border-black dark:border-white/40 pb-6 px-4">
              {/* Grid content */}
              <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 justify-center">
                {category.items.map((tech, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-40 h-28 flex flex-col items-center justify-center rounded-xl 
                  backdrop-blur-sm dark:border-white/40 border-2 border-black/20 text-white hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <div className="text-4xl mb-2 text-black dark:text-white">{tech.icon}</div>
                    <span className="text-sm font-medium text-black dark:text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default TechStack;
