import { useState } from 'react';
import Header from './components/Header.jsx';
import LoadingIntro from './components/LoadingIntro.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import ExtraAndCertifications from './components/ExtraAndCertifications.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function applyInitialTheme() {
  if (typeof window === 'undefined') return;

  const storedTheme = window.localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

  document.documentElement.classList.toggle('dark', shouldUseDark);
}

applyInitialTheme();

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen">
      {!introComplete && <LoadingIntro onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <>
          <Header />
          <main>
            <Hero />
            <Projects />
            <AboutMe />
            <TechStack />
            <ExtraAndCertifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
