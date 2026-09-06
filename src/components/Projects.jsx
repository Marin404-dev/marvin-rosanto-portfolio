// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import ultraparkImg from '../assets/ultrapark-1.png';
import pmaPmisImg from '../assets/pma-1.png';
import portfolioImg from '../assets/portfolio-mockup.png';
import laundryImg from '../assets/laundry-mockup.png';
import lokalistImg from '../assets/lokalist-mockup.png';

const projects = [
  {
    title: 'Tourism & Local Business Discovery Web Platform',
    description: 'A web-based platform that helps users discover local businesses, attractions, and events through interactive listings, search, filtering, and maps.',
    image: lokalistImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API'],
    links: [{ label: 'Live project', href: 'https://lokalist.infinityfree.me/', icon: <ExternalLink size={15} aria-hidden="true" /> }],
    type: 'Freelance project',
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio built with React and Tailwind CSS to bring projects, skills, and experience into one focused personal system.',
    image: portfolioImg,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    links: [{ label: 'GitHub', href: 'https://github.com/Marin404-dev/marvin-rosanto-portfolio', icon: <Github size={15} aria-hidden="true" /> }],
    type: 'Personal project',
  },
  {
    title: 'Laundry Service Platform',
    description: 'A laundry management and delivery platform for customer orders, delivery tracking, driver management, maps, and loyalty rewards.',
    image: laundryImg,
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Firebase', 'Figma'],
    links: [],
    type: 'Freelance project',
  },
  {
    title: 'PMA PMIS',
    description: 'A secure web-based modernization of a legacy payroll system, improving data accuracy and reducing manual processing time.',
    image: pmaPmisImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    links: [],
    type: 'Internship',
  },
  {
    title: 'Ultrapark',
    description: 'A smart parking system with real-time slot detection and indoor navigation through a Progressive Web App, supported by ESP8266 hardware.',
    image: ultraparkImg,
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Selenium'],
    links: [],
    type: 'Capstone project',
  },
];

function ProjectImage({ project, featured = false }) {
  return (
    <div className={`overflow-hidden border border-[var(--line)] bg-[var(--paper-elevated)] ${featured ? 'aspect-[1.55/1]' : 'aspect-[1.5/1]'}`}>
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent)] hover:text-[var(--ink)]">
              {link.icon}
              {link.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const featuredProject = projects[0];

  return (
    <section id="work" className="editorial-section">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[0.24fr_0.76fr] lg:gap-20">
          <div>
            <span className="section-index">02</span>
            <p className="mt-7 max-w-[12rem] text-sm leading-relaxed text-[var(--muted)]">Selected work from freelance, academic, internship, and personal projects.</p>
          </div>
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl">Projects made to be useful.</h2>
          </div>
        </div>

        <motion.article
          className="group mt-16 grid gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <ProjectImage project={featuredProject} featured />
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Featured project / {featuredProject.type}</p>
            <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">{featuredProject.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">{featuredProject.description}</p>
            <div className="mt-7"><ProjectMeta project={featuredProject} /></div>
          </div>
        </motion.article>

        <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.title}
              className="group border-t border-[var(--line)] pt-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ProjectImage project={project} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow mb-3">{project.type}</p>
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.04em]">{project.title}</h3>
                </div>
                <span className="font-sans text-xs text-[var(--muted)]">0{index + 2}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
              <div className="mt-5"><ProjectMeta project={project} /></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
