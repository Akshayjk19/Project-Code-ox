import React from 'react'
import './AboutUs.css'
import { Container } from 'react-bootstrap'
import image from '../../../Assets/Rectangle 145.png'
import LetsTalk from './LetsTalk'

function AboutUs() {
  return (
    <div>
    <div className='about'>
    <Container>
    <div className='about-div'>
    <div className='about-info'>
    <div className='about-pic'>
    <div className='image part1'></div>
    <div className='image part2'></div>
    <div className='image part3'></div>
    <div className='image part4'></div>
    </div>
    <div className='about-us'>
    <div className='about-text'>
    <div className='about-header'>
    <h1>About US</h1>
    </div>
    <div className='about-para'>
    <p>Tecnolight is one of the world’s largest online retailer of modern and contemporary lighting and furnishings, as well as a popular destination for modern design fans. Tecnolight has spent years establishing itself as the leading online and offline supplier of high-end designer products with a fresh and contemporary appearance. Tecnolight’s range of over 18,000 modern lights includes everything from legendary mid-century modern lighting to cutting-edge contemporary lighting for today’s homes.</p>
    <button>Learn More About US</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='about-image'>
    <img src={image} />
    </div>
    <div className='about-talk'>
    <LetsTalk/>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default AboutUs