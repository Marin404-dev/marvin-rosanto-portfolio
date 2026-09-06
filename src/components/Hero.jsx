// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Mail, MapPin } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import marvinImg from '../assets/marvin.jpg';

export default function Hero() {
  return (
    <section id="home" className="page-container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-7">Marvin Rosanto / Portfolio</p>
        <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,7.4rem)] font-bold leading-[0.9] tracking-[-0.075em]">
          Web developer
          <span className="block text-[var(--accent)]">with a quality mindset.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
          I build reliable, user-focused web experiences with a foundation in development and quality assurance.
          I am currently working as an Computer Programmer at BGHMC in Baguio City.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="button-primary">
            View selected work
            <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://drive.google.com/file/d/1R-aT4PxAg6LrEt58cSKNE679-KfzkAGU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Download resume
            <Download size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
          <a href="https://github.com/Marin404-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <span className="hidden h-4 w-px bg-[var(--line)] sm:block" aria-hidden="true" />
          <a href="https://www.linkedin.com/in/marvin-rosanto/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <span className="hidden h-4 w-px bg-[var(--line)] sm:block" aria-hidden="true" />
          <a href="mailto:marvrosanto@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]">
            <FaEnvelope aria-hidden="true" /> Email
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-md lg:ml-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="mb-5 flex items-start justify-between font-sans text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
          <span>01 / Intro</span>
          <span>Current chapter</span>
        </div>
        <div className="image-frame ml-3">
          <img src={marvinImg} alt="Marvin Rosanto wearing a white shirt and black tie" className="relative aspect-[4/5] w-full object-cover grayscale-[0.12]" />
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-[var(--muted)]">
          <MapPin size={16} className="text-[var(--accent)]" aria-hidden="true" />
          <span>Baguio City, Philippines</span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          <Mail size={14} aria-hidden="true" />
          <span>Open to thoughtful collaborations</span>
        </div>
      </motion.div>
    </section>
  );
}
