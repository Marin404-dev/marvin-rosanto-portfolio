import React from 'react';
import ultrapark_img from '../assets/ultrapark-1.png';
import pma_pmis_img from '../assets/pma-1.png';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'Responsive web platform focused on user experience.',
    image: ultrapark_img,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }]
  },
  {
    title: 'Ultrapark',
    description: 'Responsive web platform focused on user experience.',
    image: ultrapark_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Selenium'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }]
  },
  {
    title: 'PMA PMIS',
    description: 'Project monitoring tool for internal operations.',
    image: pma_pmis_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }]
  }
];

export default function Projects() {
  return (
    <section className="w-full py-16 px-4 text-gray-900 dark:text-white" id="work">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto whitespace-normal sm:whitespace-nowrap">
          Showcasing some of my work in web development and full stack technologies.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="border rounded-lg shadow bg-card p-4 flex flex-col gap-3">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-100 object-contain rounded-md"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-[10px] mt-1">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-2 py-[2px] font-semibold bg-black text-white rounded dark:bg-white dark:text-black">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              {project.links.map((link, j) => (
                <a
                  key={j}
                  href={link.href}
                  className="text inline-flex items-center gap-1 px-2 py-1 text-[10px] font-semibold bg-gray-800 text-white rounded hover:opacity-80 dark:bg-white dark:text-black"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
