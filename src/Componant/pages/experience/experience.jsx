import React from 'react'
import './experience.css'

function experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Antim Technologies LLP",
      duration: "May 2024 - Present",
      description: "Developed and maintained live website using React and Redux-toolkit.",
    },
    {
      title: "Student Start-up Innovation Policy and Gujarat Knowledge Society(SSIP)-Hackthon",
      company: "Surat,Gujarat",
      duration: "Nov 2023",
      description: "Developed government application tasked with monitoring and managing complaints using Flutter and Firebase Platform in 2023.",
    },
  ];

  return (
    <>
      <div className='exp-layout' data-aos="fade" data-aos-delay="25" data-aos-duration="1000">
        <h1>Experience</h1>
        <div className='exp'>
          {
            experiences.map((data, index) => (
              <div className='exp-card' key={index.id} data-aos="zoom-in" data-aos-delay="25" data-aos-duration="1000">
                <h2>{data.title}</h2>
                <h3>{data.company}</h3>
                <h4>{data.duration}</h4>
                <p>{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default experience
