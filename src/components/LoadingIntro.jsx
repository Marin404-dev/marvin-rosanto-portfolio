import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return undefined;

    const duration = 5000;
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[var(--paper)] text-[var(--ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="absolute left-6 right-6 top-6 flex justify-between font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--muted)] sm:left-10 sm:right-10 sm:top-10">
            <span>Marvin Rosanto / Portfolio</span>
            <span className="hidden sm:inline">Baguio City / Philippines</span>
          </div>

          <div className="relative flex h-48 w-[min(92vw,46rem)] items-center justify-center" aria-hidden="true">
            <motion.svg
              className="absolute h-52 w-52 text-[var(--line)] sm:h-60 sm:w-60"
              viewBox="0 0 240 240"
              fill="none"
              initial={{ opacity: 0, scale: 0.78, rotate: -18 }}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.78, 1, 1.03, 1, 1.12], rotate: [-18, 162, 342, 522, 702] }}
              transition={{
                opacity: { delay: 0.2, duration: 4.35, ease: 'easeInOut' },
                scale: { delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                rotate: { delay: 0.2, duration: 4.4, ease: 'easeInOut' },
              }}
            >
              <circle cx="120" cy="120" r="98" stroke="currentColor" strokeWidth="1" strokeDasharray="150 466" />
              <circle cx="120" cy="120" r="98" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="52 564" strokeLinecap="square" />
            </motion.svg>
            <motion.svg
              className="absolute h-36 w-36 text-[var(--accent)] sm:h-40 sm:w-40"
              viewBox="0 0 160 160"
              fill="none"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: [0, 1, 1, 0], rotate: [180, 0, -180, -360] }}
              transition={{ opacity: { delay: 0.8, duration: 3.6, ease: 'easeInOut' }, rotate: { delay: 0.8, duration: 3.6, ease: 'linear' } }}
            >
              <circle cx="80" cy="80" r="66" stroke="currentColor" strokeWidth="1" strokeDasharray="2 12" />
            </motion.svg>
            <motion.span
              className="relative z-10 font-display text-[clamp(6rem,14vw,10rem)] font-bold leading-none tracking-[-0.05em]"
              initial={{ opacity: 0, scale: 0.66, letterSpacing: '-0.12em' }}
              animate={{ opacity: 1, scale: [0.66, 1.08, 1.08, 0.96], letterSpacing: ['-0.12em', '-0.05em', '-0.05em', '-0.08em'] }}
              transition={{
                opacity: { delay: 0.3, duration: 0.7 },
                scale: { delay: 0.3, duration: 4.15, ease: 'easeInOut' },
                letterSpacing: { delay: 0.3, duration: 4.15, ease: 'easeInOut' },
              }}
            >
              MR
            </motion.span>
            <motion.div
              className="absolute h-px bg-[var(--accent)]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: ['0rem', '22rem', '22rem', '0rem'], opacity: [0, 1, 1, 0] }}
              transition={{ delay: 3.25, duration: 1.25, ease: 'easeInOut' }}
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--muted)] sm:bottom-10 sm:left-10 sm:right-10">
            <span>01 / Entry</span>
            <span>Web / QA / Full-stack</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
