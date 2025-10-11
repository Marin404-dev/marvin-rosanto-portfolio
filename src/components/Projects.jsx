import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import ultrapark_img from '../assets/ultrapark-1.png';
import pma_pmis_img from '../assets/pma-1.png';

const projects = [
  {
    title: 'Lokalist',
    description: 'lorem ipsum',
    image: ultrapark_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }],
    type: 'Freelance Project'
  },
  {
    title: 'Personal Portfolio',
    description: 'Developing a fully responsive portfolio website using React and Tailwind CSS to showcase projects, skills, and experience. Designed with a clean UI, reusable components, and smooth navigation for an optimized user experience.',
    image: ultrapark_img,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Marin404-dev/marvin-rosanto-portfolio', icon: <FaGithub className="w-4 h-4" /> },
      { label: 'Live', href: '#', icon: <FaExternalLinkAlt className="w-4 h-4" /> }
    ],
    type: 'Personal Project'
  },
  {
    title: 'Laundry Service Platform',
    description: 'Developed a laundry management and delivery platform that streamlines customer orders, delivery tracking, and driver management. Integrated Google Maps for accurate address handling and implemented loyalty rewards to enhance user experience.',
    image: ultrapark_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Java Android', 'Google Maps API', 'Firebase', 'Figma'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }],
    type: 'Freelance Project'
  },
  {
    title: 'PMA PMIS',
    description: 'Collaborated with a team to modernize PMA’s legacy payroll system into a secure web-based platform. Improved data accuracy and reduced manual processing time through automation and optimized database integration.',
    image: pma_pmis_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    links: [],
    type: 'Internship'
  },
  {
    title: 'Ultrapark',
    description: 'Collaborated with a team to build UltraPark, a smart parking system featuring real-time slot detection and indoor navigation through a Progressive Web App. Designed and developed the Arduino-based hardware with ESP8266 for wireless data transmission and ensured system reliability through comprehensive testing.',
    image: ultrapark_img,
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Selenium'],
    links: [{ label: 'GitHub', href: '.', icon: <FaGithub className="w-4 h-4" /> }],
    type: 'Capstone Project'
  }
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 2 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 text-gray-900 dark:text-white"
      id="work"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 sm:w-20 h-1 bg-black dark:bg-white mx-auto mb-4 sm:mb-6"></div>
        <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Showcasing some of my work in web development and full-stack technologies.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Chevron*/}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className={`hidden sm:flex absolute -left-4 sm:-left-10 text-lg sm:text-2xl p-1 sm:p-2 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black hover:opacity-80 transition ${page === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          <FaChevronLeft />
        </button>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-2 sm:px-0">
          {currentProjects.map((project, i) => (
            <motion.div
              key={i}
              className="border rounded-lg shadow bg-card p-4 flex flex-col gap-3 group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col items-start gap-3">
                <span className="px-3 py-1 text-xs font-medium bg-black text-white dark:bg-white dark:text-black">
                  {project.type}
                </span>
                <h3 className="text-lg sm:text-xl font-bold group-hover:text-secondary">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 sm:px-3 py-1 font-medium border border-gray-300 bg-gray-100 dark:bg-[hsl(0,0%,10%)] dark:border-[hsl(0,0%,20%)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold border-2 border-foreground hover:bg-foreground hover:text-background"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Chevron */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className={`hidden sm:flex absolute -right-4 sm:-right-10 text-lg sm:text-2xl p-1 sm:p-2 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black hover:opacity-80 transition ${page === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Mobile Page Numbers */}
      <div className="flex sm:hidden justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition ${page === index
              ? 'bg-gray-800 text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 dark:bg-[hsl(0,0%,15%)] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[hsl(0,0%,25%)]'
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
