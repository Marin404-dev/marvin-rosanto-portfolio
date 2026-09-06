import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import ExtraAndCertifications from './components/ExtraAndCertifications.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative min-h-screen">
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
    </div>
  </StrictMode>
);

