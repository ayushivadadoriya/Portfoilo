/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

function navbar() {
  const style = { color: "black" }
  const [showmediaicon, setShowmediaicon] = useState(false);

    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      const scrollY = window.scrollY;

      if (scrollY > 0) { 
          nav.classList.add('has-shadow');
      } else {
          nav.classList.remove('has-shadow');
      }
  });

  return (
    <>
      <nav>
        <div className='logo'>
          <h1>Portfolio</h1>
        </div>
        <div className={showmediaicon ? " manu mobile-manu" : "manu"}>
          <div className='xmark' onClick={() => { setShowmediaicon(false) }}>
            <FaXmark />
          </div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='hamburger-manu'>
          <Link onClick={() => setShowmediaicon(!showmediaicon)}><GiHamburgerMenu style={style} /></Link>
        </div>
      </nav>
    </>
  )
}

export default navbar
