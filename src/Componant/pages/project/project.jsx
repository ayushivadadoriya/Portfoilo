import React from 'react'
import './project.css'
import project1 from "../../../Asserts/image/Project1.png"
import project2 from "../../../Asserts/image/Project2.png"

function project() {
  const projects = [
    {
      image: project1,
      title: "LoginPage",
      description: "These Project developed using HTML and CSS.This is a ui base login page for a bettement of advanced CSS",
      link: "https://github.com/ayushivadadoriya/Carbidder",
    },
    {
      image: project2,
      title: "CarBidder",
      description: "These Project developed using React,Nodejs and mongoDB.The functionality such as login authentication,email contact,api fetch,etc included in project.",
      link: "https://github.com/ayushivadadoriya/Login-page",
    }
  ];
  return (
    <>
      <div className='pro-layout' data-aos="fade-down" data-aos-delay="25" data-aos-duration="1000">
        <h1>Project</h1>
        <div className='pro'>
          {
            projects.map((data, index) => (
              <div className='pro-card' key={index.id} data-aos="zoom-out-left" data-aos-delay="25" data-aos-duration="1000">
                <h2>{data.title}</h2>
                <img src={data.image} alt={`${data.title}`} className="pro-img" width="500px" />
                <h3>{data.description}</h3>
                <a href={data.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default project
