import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import ExtraAndCertifications from './components/ExtraAndCertifications.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative">
      {/* Blur layer */}
      <div className="fixed inset-0 z-0 backdrop-blur-[2px] dark:backdrop-blur-[3px] pointer-events-none" />
      {/* App content (above blur) */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <ExtraAndCertifications />
      </div>
    </div>
  </StrictMode>
);

