import React from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Thankyou from './components/Thankyou/Thankyou'

function App() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Routes>
        {/* <Route path="/" element={<Contact/>} /> */}
        <Route path='/Thankyou' element={<Thankyou/>}/>
      </Routes>
    </div>
  )
}

export default App