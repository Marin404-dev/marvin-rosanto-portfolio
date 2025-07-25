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
    <Header />
    <Hero />
    <AboutMe />
    <TechStack />
    <Projects />
    <ExtraAndCertifications />
  </StrictMode>,
)
