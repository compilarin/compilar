import React from 'react'
import logo from './images/iconlogo.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={logo} alt='logo' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>We are a leading IT solution company dedicated to providing comprehensive technology solutions for businesses and individuals. With our expertise in hardware, software, security solutions, and surveillance, we strive to empower our clients with the tools they need to succeed in today's digital landscape.</p>
                    <p>Our team of skilled professionals is committed to delivering exceptional service, timely support, and personalized solutions to meet your unique needs. We collaborate closely with our clients, understanding their objectives and challenges, to provide the most effective IT solutions that drive success.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
