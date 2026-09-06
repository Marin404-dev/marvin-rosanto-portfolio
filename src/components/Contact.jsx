// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="editorial-section pb-10">
      <div className="page-container grid gap-12 lg:grid-cols-[0.24fr_0.76fr] lg:gap-20">
        <div>
          <span className="section-index">06</span>
          <p className="mt-7 max-w-[12rem] text-sm leading-relaxed text-[var(--muted)]">Have a thoughtful project or opportunity in mind?</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow mb-4">Contact / Let&apos;s talk</p>
          <h2 className="max-w-3xl text-5xl font-bold leading-[0.92] tracking-[-0.07em] sm:text-7xl">Let&apos;s make something useful.</h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="max-w-sm text-base leading-relaxed text-[var(--muted)]">I&apos;m open to discussing web development, quality assurance, creative ideas, and opportunities to contribute to meaningful work.</p>
              <div className="mt-8 space-y-4 border-y border-[var(--line)] py-6">
                <a href="mailto:marvrosanto@gmail.com" className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                  <Mail size={17} className="text-[var(--accent)]" aria-hidden="true" />
                  marvrosanto@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <MapPin size={17} className="text-[var(--accent)]" aria-hidden="true" />
                  Baguio City, Philippines
                </div>
              </div>
              <div className="mt-6 flex gap-5">
                <a href="https://github.com/Marin404-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--accent)]">
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/marvin-rosanto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--accent)]">
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a href="mailto:marvrosanto@gmail.com" aria-label="Email Marvin Rosanto" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--accent)]">
                  <FaEnvelope aria-hidden="true" /> Email
                </a>
              </div>
            </div>

            <form action="mailto:marvrosanto@gmail.com" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="eyebrow mb-2 block">Your name</label>
                <input id="name" type="text" name="name" placeholder="John Doe" required className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 font-serif text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow mb-2 block">Your email</label>
                <input id="email" type="email" name="email" placeholder="john@example.com" required className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 font-serif text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">Your message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required rows={4} className="w-full resize-none border-b border-[var(--line)] bg-transparent px-0 py-3 font-serif text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none" />
              </div>
              <button type="submit" className="button-primary">
                <Send size={16} aria-hidden="true" /> Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
