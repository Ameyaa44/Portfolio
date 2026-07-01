import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <>
    
    <Navbar></Navbar>
    <Home></Home>
    <Skills></Skills>
    <Project></Project>
    <Education></Education>
    <Contact></Contact>
    <Footer></Footer>

    </>
  )
}

export default App
