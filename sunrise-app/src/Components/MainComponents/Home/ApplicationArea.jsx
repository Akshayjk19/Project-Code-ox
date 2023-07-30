import React from 'react'
import { Container } from 'react-bootstrap'
import './ApplicationArea.css'
import LetsTalk from './LetsTalk'

function ApplicationArea() {
    const buttons = [
        {id:1,title:'Kitchen'},
        {id:2,title:'Bedroom'},
        {id:3,title:'Hall'},
        {id:4,title:'Office'},
        {id:5,title:'Street'},
        {id:6,title:'Cabinets'},
        {id:7,title:'Racks'},
        {id:8,title:'Garden'},
        {id:9,title:'Pathway'},
        {id:10,title:'Parking Areas'},
        {id:11,title:'Supermarket'},
        {id:12,title:'Classroom'},
        {id:13,title:'Washroom'},
        {id:14,title:'Showroom'},
        {id:15,title:'Dinning'},
        {id:16,title:'Living Room'},
    ]
  return (
    <div>
    <div className='application-area'>
    <Container>
    <div className='application-div'>
    <div className='application-info-div'>
    <div className='application-header'>
    <h1>Application Areas</h1>
    </div>
    <div className='application-para'>
    <p>Light up any space with our versatile lighting fixtures. From the living room to the bedroom and beyond, our fixtures are perfect for any area of your home.
    Shop now and discover the perfect lighting solution for every room!</p>
    </div>
    </div>
    <div className='application-buttons'>
    {buttons.map((e)=>(
    <div className='application-button'>
    <div className='application-button-row'>
    <button>{e.title}</button>
    </div>
    </div>
    ))}
    </div>
    <div className='app-talk'>
    <LetsTalk/>
    </div>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default ApplicationArea