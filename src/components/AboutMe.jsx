// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Download, GraduationCap, Mail } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="editorial-section">
      <div className="page-container grid gap-12 lg:grid-cols-[0.24fr_0.76fr] lg:gap-20">
        <div>
          <span className="section-index">03</span>
          <p className="mt-7 max-w-[12rem] text-sm leading-relaxed text-[var(--muted)]">A closer look at the person behind the work.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow mb-4">About / Experience</p>
          <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl">
            Building with curiosity, testing with care.
          </h2>

          <div className="mt-9 grid gap-8 text-base leading-relaxed text-[var(--muted)] lg:grid-cols-2 lg:gap-12">
            <p>
              I work across web development and quality assurance, combining practical implementation with a close eye for how a product behaves for real people. My projects have included business discovery platforms, service systems, and internal tools.
            </p>
            <p>
              I am currently an Computer Programmer at BGHMC in Baguio City. Before that, I completed my IT degree at Saint Louis University and built experience through freelance work, internship projects, competitions, and continued self-study.
            </p>
          </div>

          <div className="mt-12 grid border-y border-[var(--line)] sm:grid-cols-2">
            <div className="flex gap-4 border-b border-[var(--line)] py-6 sm:border-b-0 sm:border-r sm:pr-8">
              <BriefcaseBusiness className="mt-1 shrink-0 text-[var(--accent)]" size={20} aria-hidden="true" />
              <div>
                <p className="eyebrow mb-2">Current role</p>
                <p className="font-sans text-lg font-semibold">Computer Programmer at BGHMC</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Baguio City, Philippines</p>
              </div>
            </div>
            <div className="flex gap-4 py-6 sm:pl-8">
              <GraduationCap className="mt-1 shrink-0 text-[var(--accent)]" size={20} aria-hidden="true" />
              <div>
                <p className="eyebrow mb-2">Education</p>
                <p className="font-sans text-lg font-semibold">Saint Louis University</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Information Technology</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1R-aT4PxAg6LrEt58cSKNE679-KfzkAGU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
            <a href="#contact" className="button-secondary">
              <Mail size={16} aria-hidden="true" /> Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
