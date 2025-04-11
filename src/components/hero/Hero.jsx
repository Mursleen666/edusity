import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div id="hero" className='hero container' >
            <div className='hero-text'>
                <h1>We Ensure better education for a better world</h1>
                <p>
                    Welcome to Edusity, a place where knowledge meets purpose, and ambition finds guidance. Our institution stands as a beacon of academic excellence, nurturing minds and shaping leaders for tomorrow. Here, students are empowered to explore, innovate, and thrive in a dynamic, inclusive environment dedicated to lifelong learning and holistic development."
                </p>
                <button className='btn'>Explore more <img src={darkarrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
