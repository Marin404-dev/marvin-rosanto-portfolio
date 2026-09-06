import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import smartCityImg from '../assets/baguio-smart-city-1.jpg';
import tcsOneImg from '../assets/TCS-1.jpg';
import tcsTwoImg from '../assets/TCS-2.png';
import certOne from '../assets/cert-1.png';
import certTwo from '../assets/cert-2.png';
import certThree from '../assets/cert-3.png';
import certFour from '../assets/cert-4.png';

const competitionImages = [smartCityImg, tcsOneImg, tcsTwoImg];
const certificationImages = [certOne, certTwo, certThree, certFour];

const competitions = [
  {
    title: 'Baguio Smart City Challenge',
    year: '2024',
    description: 'Represented ParkInTell in the Baguio Smart City Challenge 2024, collaborating with three team members to present our capstone project.',
  },
  {
    title: 'Tata Consultancy Services (TCS) Sustainathon Philippines 2023',
    year: '2024',
    description: 'Represented Team Career Catalyst, a four-member group, and secured 3rd place out of 10 finalist teams at the TCS Sustainathon Finals 2023 in Bonifacio Global City.',
  },
];

const certifications = [
  { title: 'Digital Skills: User Experience', issuer: 'Accenture', description: 'Comprehensive training in UX principles and user-centered design methodologies.' },
  { title: 'Graphic Design Essentials', issuer: 'Canva', description: 'Mastered fundamental design principles and practical graphic design skills.' },
  { title: 'Postman API Fundamentals Student Expert', issuer: 'Postman', description: 'Validated expertise in API testing, development, and documentation.' },
  { title: 'Responsive Web Design Developer Certification', issuer: 'freeCodeCamp', description: 'Completed the Responsive Web Design curriculum, demonstrating proficiency in modern, mobile-first web layout techniques.' },
];

export default function ExtraAndCertifications() {
  const [activeTab, setActiveTab] = useState('competitions');
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveCertIndex(null);
    };

    if (activeCertIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeCertIndex]);

  return (
    <section className="editorial-section" aria-labelledby="achievements-title">
      <div className="page-container grid gap-12 lg:grid-cols-[0.24fr_0.76fr] lg:gap-20">
        <div>
          <span className="section-index">05</span>
          <p className="mt-7 max-w-[12rem] text-sm leading-relaxed text-[var(--muted)]">Proof of learning beyond the classroom and day-to-day work.</p>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-4">Achievements / Learning</p>
            <h2 id="achievements-title" className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl">Keep learning. Keep showing up.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">Competitions, certifications, and experiences that have shaped how I approach technology and collaboration.</p>
          </motion.div>

          <div className="mt-12 flex gap-6 border-b border-[var(--line)]" role="tablist" aria-label="Achievements and certifications">
            {[
              ['competitions', 'Competitions'],
              ['certifications', 'Certifications'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={activeTab === value}
                onClick={() => setActiveTab(value)}
                className={`border-b-2 pb-4 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-colors ${activeTab === value ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'}`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'competitions' && (
            <motion.div className="mt-10" role="tabpanel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              <div className="grid gap-3 sm:grid-cols-3">
                {competitionImages.map((image, index) => (
                  <img key={image} src={image} alt={`Competition documentation ${index + 1}`} className="aspect-[4/3] w-full object-cover grayscale-[0.12]" />
                ))}
              </div>
              <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {competitions.map((competition) => (
                  <article key={competition.title} className="grid gap-4 py-6 sm:grid-cols-[0.3fr_0.7fr] sm:gap-8">
                    <div>
                      <p className="eyebrow">{competition.year}</p>
                      <h3 className="mt-3 font-sans text-xl font-semibold leading-tight">{competition.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{competition.description}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div className="mt-10 grid gap-8 sm:grid-cols-2" role="tabpanel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {certifications.map((certification, index) => (
                <article key={certification.title} className="border-t border-[var(--line)] pt-5">
                  <button type="button" className="block w-full cursor-zoom-in text-left" onClick={() => setActiveCertIndex(index)} aria-label={`View ${certification.title} certificate`}>
                    <img src={certificationImages[index]} alt={`${certification.title} certificate`} className="aspect-[4/3] w-full object-contain object-left" />
                  </button>
                  <p className="eyebrow mt-5">{certification.issuer}</p>
                  <h3 className="mt-2 font-sans text-xl font-semibold leading-tight">{certification.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{certification.description}</p>
                </article>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {activeCertIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-5" role="dialog" aria-modal="true" aria-label={`${certifications[activeCertIndex].title} certificate`} onClick={() => setActiveCertIndex(null)}>
          <div className="relative max-h-[90vh] max-w-4xl overflow-auto bg-[var(--paper-elevated)] p-5" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-3 top-3 border border-[var(--line)] bg-[var(--paper-elevated)] px-3 py-1 font-sans text-xl leading-none text-[var(--ink)] hover:text-[var(--accent)]" onClick={() => setActiveCertIndex(null)} aria-label="Close certificate preview">&times;</button>
            <img src={certificationImages[activeCertIndex]} alt={`${certifications[activeCertIndex].title} certificate enlarged`} className="max-h-[72vh] w-full object-contain" />
            <p className="eyebrow mt-5 text-center">{certifications[activeCertIndex].issuer}</p>
            <h3 className="mt-2 text-center font-sans text-xl font-semibold">{certifications[activeCertIndex].title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}
