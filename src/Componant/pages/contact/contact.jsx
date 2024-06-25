import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";


function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hoqm91y', 'template_iktmnyl', form.current, {
        publicKey: 'oH_mJY6yVJBMnlpPM'
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <>
      <div className='contact-layout'>
        <div className='contact-details' data-aos="slide-left" data-aos-delay="25" data-aos-duration="1000">
          <h1>Contact us</h1>
          <h4><span><MdEmail /></span>ayushivadadoriya159@gmail.com</h4>
          <h4><span><FaPhone /></span>+91 1234567890</h4>
          <div id="logo">
            <a href='https://github.com/ayushivadadoriya'><FaSquareGithub /></a>
            <a href='https://www.instagram.com/_ayushi_159?igsh=ejFsOXJlNGN0cG12'><FaInstagramSquare /></a>
            <a href='https://x.com/Ayushi159?t=s8Z1rH8Vy-DDCpPcrRihLw&s=09'><FaSquareTwitter /></a>
            <a href='https://www.linkedin.com/in/ayushi-vadadoriya-2b7969286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin /></a>
          </div>
        </div>
        <div className='contact-main-form' data-aos="slide-right" data-aos-delay="25" data-aos-duration="1000">
          <form ref={form} className="contact-form" onSubmit={sendEmail} >
            <input type='text' name='user_name' placeholder='Your Name' required />
            <input type='email' name='user_email' placeholder='Your Email Address' required />
            <textarea name='message' cols="30" rows="10" placeholder='Message' />
            <button type='submit' className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
