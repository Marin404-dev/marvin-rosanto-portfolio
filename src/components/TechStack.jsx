// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import { FaCss3Alt, FaDocker, FaHtml5, FaJava, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { FaTheaterMasks } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiCypress, SiExpress, SiMysql, SiPostgresql, SiPostman, SiSelenium } from 'react-icons/si';

const techCategories = [
  {
    title: 'Web development',
    note: 'Interfaces and frontend systems',
    items: [
      { name: 'HTML', icon: <FaHtml5 aria-hidden="true" /> },
      { name: 'CSS', icon: <FaCss3Alt aria-hidden="true" /> },
      { name: 'JavaScript', icon: <FaJsSquare aria-hidden="true" /> },
      { name: 'React', icon: <FaReact aria-hidden="true" /> },
      { name: 'Vue', icon: <FaVuejs aria-hidden="true" /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill aria-hidden="true" /> },
    ],
  },
  {
    title: 'Backend development',
    note: 'Services and application logic',
    items: [
      { name: 'Node.js', icon: <FaNodeJs aria-hidden="true" /> },
      { name: 'Express.js', icon: <SiExpress aria-hidden="true" /> },
      { name: 'Laravel', icon: <FaLaravel aria-hidden="true" /> },
      { name: 'Java', icon: <FaJava aria-hidden="true" /> },
      { name: 'PHP', icon: <FaPhp aria-hidden="true" /> },
    ],
  },
  {
    title: 'Test automation',
    note: 'Quality checks and API testing',
    items: [
      { name: 'Selenium', icon: <SiSelenium aria-hidden="true" /> },
      { name: 'Postman', icon: <SiPostman aria-hidden="true" /> },
      { name: 'Cypress', icon: <SiCypress aria-hidden="true" /> },
      { name: 'Playwright', icon: <FaTheaterMasks aria-hidden="true" /> },
    ],
  },
  {
    title: 'Data management',
    note: 'Relational data and persistence',
    items: [
      { name: 'MySQL', icon: <SiMysql aria-hidden="true" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql aria-hidden="true" /> },
      { name: 'MSSQL', icon: <Database aria-hidden="true" /> },
    ],
  },
  {
    title: 'DevOps & development',
    note: 'Containers and delivery tools',
    items: [{ name: 'Docker', icon: <FaDocker aria-hidden="true" /> }],
  },
];

export default function TechStack() {
  return (
    <section className="editorial-section" aria-labelledby="tech-stack-title">
      <div className="page-container grid gap-12 lg:grid-cols-[0.24fr_0.76fr] lg:gap-20">
        <div>
          <span className="section-index">04</span>
          <p className="mt-7 max-w-[12rem] text-sm leading-relaxed text-[var(--muted)]">The tools I use to build, test, and ship thoughtful web experiences.</p>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-4">Capabilities / Tools</p>
            <h2 id="tech-stack-title" className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl">A practical stack, always in progress.</h2>
          </motion.div>

          <div className="mt-14">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="grid gap-5 border-t border-[var(--line)] py-6 sm:grid-cols-[0.45fr_0.55fr] sm:gap-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div>
                  <h3 className="font-sans text-lg font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{category.note}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span key={tech.name} className="inline-flex items-center gap-2 border border-[var(--line)] px-3 py-2 font-sans text-xs font-semibold text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                      <span className="text-base text-[var(--accent)]">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
