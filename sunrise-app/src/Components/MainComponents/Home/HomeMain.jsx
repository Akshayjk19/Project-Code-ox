import React, { useState } from 'react'
import './HomeMain.css'
import { FaSearch } from 'react-icons/fa'
import { Card, Container } from 'react-bootstrap'
import image1 from '../../../Assets/pertol-pumb.png'
import image2 from '../../../Assets/image 4.png'
import image3 from '../../../Assets/project1_petrol_pump.png'


function HomeMain() {
    const [card, setcard] = useState([
        {id:1,Title:'Illuminate Your Space',pic:`${image1}`},
        {id:2,Title:'Illuminate Your Space',pic:`${image2}`},
        {id:3,Title:'Illuminate Your Space',pic:`${image3}`},
    ])
    console.log(card);
  return (
    <div>
    <div className='home'>
    <div className='home-main'>
    <Container className='home-container'>
    <div className='elements'>  
     <div className='home-search'>
    <div className='search'>
    <input type='text' placeholder='Search a Product...|' />
    <FaSearch className='icon' />
    </div>
    </div>

    <div className='home-elements'>
    <div className='para'>
    <h1>Illuminate your space
    with style and efficiency</h1>
    <p>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time.
    Shop with confidence, knowing you’re getting the best.</p>
    <button>Learn More about Project</button>
    </div>
    <div className='cards'>
    {card.map((dt)=>(
      
    <Card className="single-card text-white" key={dt.id}>
    <Card.Img src={dt.pic}  className='w-100 h-auto' alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className='card-title'>{dt.Title}</Card.Title>
    </Card.ImgOverlay>
  </Card>
  ))}
    </div>
    </div>
    </div>
 
    </Container>
    </div>
    </div>
    </div>
  )
}

export default HomeMain