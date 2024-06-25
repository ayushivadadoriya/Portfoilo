/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Navbar from "./Componant/navbar/navbar"

import Home from "./Componant/pages/home/home"
import About from "./Componant/pages/about/about"
import Experience from "./Componant/pages/experience/experience"
import Project from "./Componant/pages/project/project"
import Contact from "./Componant/pages/contact/contact"

import Footer from "./Componant/footer/footer"

function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
