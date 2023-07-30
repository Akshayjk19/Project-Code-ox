import React from 'react'
import image from '../../../Assets/image 7.png'
import image2 from '../../../Assets/image 6.png'
import { Container } from 'react-bootstrap'
import './Message.css'

function Message() {
  return (
    <div className='message-main'>
    
    
    <div className='message-div'>
    
    <div >
    <Container>
    <div className='message-one'>
    <div className='message-image'>
    <div className='bg-box'>
    <img src={image} />
    </div>
    </div>
    <div className='message-text'>
    <p>At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. We are constantly diversifying our portfolio in and around the Middle East. We consistently challenge industry trends and set a pattern in our market segment, driven by our philosophy of attentive service and customer satisfaction.

    We strive to grow and improve the depth and quality of our service as we broaden our operations and reach out to new partnerships.</p>
    <h3>- Jabbar Punnakkal</h3>
    </div>
    </div>
    </Container>
    </div>
    
    
    <div >
    <Container>
    <div className='message-two'>
    <div className='message-text'>
    <p>At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. We are constantly diversifying our portfolio in and around the Middle East. We consistently challenge industry trends and set a pattern in our market segment, driven by our philosophy of attentive service and customer satisfaction.

    We strive to grow and improve the depth and quality of our service as we broaden our operations and reach out to new partnerships.</p>
    <h3>- Jabbar Punnakkal</h3>
    </div>
    <div className='message-image'>
    <div className='bg-box'>
    <img src={image2} />
    </div>
    </div>
    </div>
    </Container>
    </div>
    </div>
    </div>
  )
}

export default Message