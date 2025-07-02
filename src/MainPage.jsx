import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import ScrollToTopArrow from './components/ScrollToTopArrow'

const MainPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <ScrollToTopArrow />
    <footer className="bg-gray-700 text-white text-center py-2">
      <p className="text-sm">© 2025 Attiqa Abbasi. All rights reserved.</p>
      </footer>
    </>
  )
}

export default MainPage