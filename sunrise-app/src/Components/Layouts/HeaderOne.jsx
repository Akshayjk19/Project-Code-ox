import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { IoCallSharp, IoCart } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import './HeaderOne.css'

function HeaderOne() {
  return (
    <div >
    <Navbar expand="lg" className="header-One">
    <Container >
      <div className='header-one-left'>
      <div className='company-info'>
      <IoCallSharp className='icon'/><span>042232332 043236088</span>
      </div>
      <div className='company-info'>
      <HiOutlineMail className='icon'/><span>sales@sunriseoasislighting.com</span>
      </div>
      </div>

      <div className='header-one-right'>
      <div className='header-cart'><IoCart className='icon'/><span>Your Cart</span></div>
      <div className='line'></div>
      <div className='medias'><FaInstagram className='icon'/><FaFacebookSquare className='icon'/><FaLinkedin className='icon'/><FaYoutubeSquare className='icon'/><FaWhatsappSquare className='icon' /><FaTwitterSquare className='icon' /></div>
      </div>

   
    </Container>
  </Navbar>
    </div>
  )
}

export default HeaderOne