import React from 'react'
import "./about.css"
import icon1 from '../../../Asserts/image/html-5.svg'
import icon2 from '../../../Asserts/image/css-3.svg'
import icon3 from '../../../Asserts/image/javascript.png'
import icon4 from '../../../Asserts/image/reactjs.svg'
import icon5 from '../../../Asserts/image/redux.svg'
import icon6 from '../../../Asserts/image/bootstrap.png'
import icon7 from '../../../Asserts/image/nodejs.svg'
import icon8 from '../../../Asserts/image/mongodb.png'
import icon9 from '../../../Asserts/image/mysql.png'

function about() {
  const frontend = [
    { id: 1, title: 'HTML', img: icon1 },
    { id: 2, title: 'CSS', img: icon2 },
    { id: 3, title: 'JavaScript', img: icon3 },
    { id: 4, title: 'React', img: icon4 },
    { id: 5, title: 'Redux-toolkit', img: icon5 },
    { id: 6, title: 'BootStrap', img: icon6 },
    { id: 7, title: 'Node', img: icon7 },
    { id: 8, title: 'MongoDB', img: icon8 },
    { id: 9, title: 'MySQL', img: icon9 }
  ]
  return (
    <>
      <div className='about-layout'>
        <div className='about-details' data-aos="fade" data-aos-delay="25" data-aos-duration="1000">
          <h1>About me</h1>
          <p className='description'>I'm a passionate and results-oriented web developer with a strong foundation in HTML, CSS, JavaScript, and React. 
            I'm eager to leverage my skills to create visually appealing, user-friendly web experiences. I'm a quick learner with a problem-solving mindset,
             constantly exploring new technologies and frameworks to stay ahead of the curve.</p>
          <h2>Skills</h2>
          <div className='container'>
              {frontend.map(data => (
                <div key={data.id} className='card' data-aos="flip-right" data-aos-delay="25" data-aos-duration="1000">
                  <img src={data.img} alt={`${data.title} icon`} className='card-img'></img>
                  <h4 className='card-title'>{data.title}</h4>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </>
  )
}
export default about
