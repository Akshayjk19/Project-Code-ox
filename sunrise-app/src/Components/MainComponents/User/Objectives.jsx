import React from 'react'
import { Container } from 'react-bootstrap'
import mission from '../../../Assets/mission.png'
import vision from '../../../Assets/Group 93.png'
import './Objectives.css'

function Objectives() {
  return (
    <div>
    <div className='company-info'>
    <Container>
    <div className='company-info-div'>
    <div className='info-div-one'>
    <div className='info-para'>
    <div className='mission'><img src={mission} /></div>
    <div className='company-texts'><h3>Mission</h3><p>At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. </p></div>
    </div>
    <div className='info-para'>
    <div className='vision'><img src={vision} /></div>
    <div className='company-texts'><h3>Vision</h3><p>At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. </p></div>
    </div>
    </div>
    <div className='values'>
    <h2>Values | Objectives</h2>
    <p>At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. </p>
    </div>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default Objectives