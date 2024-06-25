/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './home.css'
import Typewriter from "typewriter-effect"
import { IoMdDownload } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import image from "../../../Asserts/image/ayushi-image.jpg"
import pdf from "../../../Asserts/pdf/Ayushi Vadadoriya.pdf"
import About from "../about/about"
import Experience from '../experience/experience';
import Project from "../project/project";
import Contact from "../contact/contact"

function home() {
  const navigate = useNavigate();
  return (
    <>
      <div className='home-layout'>
        <div className='details' data-aos="slide-right" data-aos-delay="25" data-aos-duration="1000">
          <h2>Hello , I'm</h2>
          <h1><span>Ayushi </span>Vadadoriya</h1>
          <h2>
            <Typewriter options={{ autoStart: true, loop: true, delay: 50, strings: ['I am web developer.', 'I am web designer.'] }} />
          </h2>
          <p>I'm an aspiring web developer with a creative mind and a passion for building visually appealing websites.
          I've been actively learning HTML, CSS, and JavaScript fundamentals, and I'm eager to apply my skills to real-world projects.</p>
          <div className='btn'>
            <button onClick={() => navigate('/about')}>Lern more</button>
            <a href={pdf} download="Ayushi-Resume.pdf"><button>Resume <IoMdDownload /></button></a>
          </div>
        </div>
        <div className='profile-img' data-aos="slide-left" data-aos-delay="25" data-aos-duration="1000">
          <img src={image} alt='profile'></img>
        </div>
      </div>
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  )
}

export default home
