import React from 'react'
import homeimg from '../../../Assets/Userhomeimg.jpg'
import './HomeBar.css'
import { Container } from 'react-bootstrap'

function HomeBar() {
  return (
    <div className='home-bar-main'>
    <div className='home-image'>
    <img src={homeimg} />
    </div>
    <div className='home-bar'>
    <Container>
    <div className='home-bar-item'>
    <div className='home-text'>
    <a href='#'>Home</a>
    </div>
    <div className='home-bar-list'>
    <ul>
    <li><a href='#'>Message</a></li>
    <li><a href='#'> Company Information</a></li>
    <li><a href='#'>Projects & Services</a></li>
    <li><a href='#'>Gallery</a></li>
    <li><a href='#'>CSR</a></li>
    <li><a href='#'>Download</a></li>
    <li><a href='#'>Contact US</a></li>                                  
    </ul>
    </div>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default HomeBar