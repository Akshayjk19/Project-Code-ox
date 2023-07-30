import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import LetsTalk from '../MainComponents/Home/LetsTalk'

function Footer() {
  return (
    <div>
    <div className='footer'>
    
    <Container>
    <div className='footer-talk'><LetsTalk/></div>
    <div className='footer-about-us'>
    <div className='footer-para'>
    <h3>About </h3>
    <h2>Sunrise Oasis Lighting LLC</h2>
    <p>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
   
    <div className='footer-icons'><FaInstagram className='icon'/><FaFacebookSquare className='icon'/><FaLinkedin className='icon'/><FaYoutubeSquare className='icon'/><FaWhatsappSquare className='icon' /><FaTwitterSquare className='icon' /></div>
    </div>

    <div className='footer-list'>
    <ul>
    <h2>Indoor</h2>
    <li>Downlights</li>
    <li> Spot Light</li>
    <li> Modular Lights</li>
    <li> Recessed Linear Lights</li>
    <li> Magnetic Track Lights</li>
    <li> Linear Pendant Lights</li>
    <li>Track Lights</li>
  <li> Mirror Lights</li>
    </ul>
    </div>

    <div className='footer-list'>
    <ul>
    <h2>Outdoor</h2>
    <li>Bollard Lights</li>
    <li> Spike Lights</li>
    <li> Step Lights</li>
    <li> Street Lights</li>
    <li> Wall Mounted Lights</li>
    <li>Flood Lights </li>
    <li>High Bay</li>
  <li> Parking Lights</li>
    </ul>
    </div>

    <div className='footer-list'>
    <ul>
    <h2>Decorative</h2>
    <li>Pendant Lights</li>
    <li> Decorative Wall Lights</li>
    <li> Floor & Table Lights</li>
    <li> Curve Series</li>
    </ul>
    </div>
    
    <div className='footer-list'>
    <ul>
    <h2>Facad Lights</h2>
    <li>Strip Lights</li>
    <li>Neon Lights</li>
    </ul>
    </div>

    <div className='footer-list'>
    <ul>
    <h2>Accessories</h2>
    <li>Aluminium Profiles</li>
    <li> Frames</li>
    <li> Connectors</li>
    <li> Lamps</li>
    <li>LED Driver</li>
    <li>Switches</li>
    </ul>
    </div>

    <div className='footer-list'>
    <ul>
    <h2>Brands</h2>
    <li>Tecno-light</li>
    <li> Giomilano</li>
    <li> ArtDna</li>
    <li> Echips</li>
    <li> Ltech</li>
    </ul>
    </div>
    </div>

    <div className='footer-contact'>
    <div className='footer-contact-info'>
    <div className='footer-info'><h1>Head Office</h1> <p>Al Quoz Ind Area 4, Al Kahrman 4 Street, Dubai
    P.O Box 186021 Ware House No 13
    +971 4 2232 332 +971 4 323 6088
    </p></div>
    <div className='footer-info'><h1>Branch -  Abu Dhabi</h1> <p>Mussafah 34 - near New Labour Court
    Abu Dhabi - U.A.E
    +971 55 892 4364
    | +971 2 883 6637</p></div>
    <div className='footer-info'><h1>Showroom</h1> <p>Nakheel Street 41, Deira - Dubai UAE,
    +971 4 250 2810</p></div>
    </div>

    <div className='footer-contact-info'>
    <div className='footer-info'><h1>Reach US</h1> <p>info@sunriseoasislighting.com
    </p></div>
    <div className='footer-info'><h1>Branch -  Saudi Arabia</h1> <p>Al Malaz, Riyadh - Saudi Arabia
    +966 57 226 4809</p></div>
    <div className='footer-info'><h1>Logistic Centre</h1> <p>Warehouses Lands - Sharjah, UAE
    +971 558966670</p></div>
    </div>
    
    </div>
    <div className='footer-copy-right'>
    <div className='footer-text'><h2>© 2023. All Rights Reserved.</h2></div>
    <div className='footer-text'><h2>Designed by : Akshay JK</h2></div>
    <div className='footer-text'><h2>Powered by Tecfuge</h2></div>
    </div>

    </Container>
    </div>
    </div>
  )
}

export default Footer