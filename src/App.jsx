import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gray-100 px-5 md:px-32'>
      <Header />
      <About />
      <Education />
      <Portfolio />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
