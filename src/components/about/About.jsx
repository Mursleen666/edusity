import React from 'react'
import "./About.css"
import aboutImage from "../../assets/about.png"
import playIcon from "../../assets/play-icon.png"


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImage} className='about-img' alt="" />
        <img src={playIcon} className='play-icon' alt="" />

      </div>
      <div id='about' className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>we believe in more than just textbooks. We believe in ideas, collaboration, and bold dreams. Join a vibrant community of learners, leaders, and changemakers."</p>
        <p>With a rich legacy of academic excellence and a forward-thinking approach, we offer a transformative learning experience that equips students for success in a rapidly evolving world. From diverse programs to a supportive campus culture, everything here is designed to help you grow."</p>
        <p>This college is more than a place of education—it's a home for ambition, creativity, and lifelong connections. As you begin this exciting journey, know that you're stepping into a community that values your voice, supports your dreams, and is committed to your success."</p>
      </div>
    </div>
  )
}

export default About
