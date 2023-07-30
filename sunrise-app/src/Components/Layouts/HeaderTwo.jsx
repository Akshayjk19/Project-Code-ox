import React from 'react'
import './HeaderTwo.css'
import { Container, Navbar } from 'react-bootstrap'
import { BiSearchAlt2 } from 'react-icons/bi'
import logo from '../../Assets/Full Logo2.png'

function HeaderTwo() {
  return (
    <div className='mt-2'>
    <Navbar expand="lg" className='HeaderTwo'>
    <Container >
    <div className='company-logo'>
    <img src={logo} alt='logo' className='logo'/>
    </div>
    <div className='list-links'>
    <ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/about'>About us</a></li>
    <li><a href='/shop'>Shop</a></li>
    <li><a href='/blog'>Blog</a></li>
    </ul>
    </div>
    <div className='buttons'>
    <div className='search-button'><BiSearchAlt2 className='icon'/></div>
   <button className='smart-touch'>Smart Touch</button>
   <button className='log-reg'>Login/Register</button>
    </div>
    </Container>
    </Navbar>
    </div>
  )
}

export default HeaderTwo