import React from 'react'
import './CompanyGroup.css'
import { Container } from 'react-bootstrap'

function CompanyGroup() {
    const companyGroups = [
        {id:1,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
        {id:2,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
        {id:3,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
        {id:4,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
        {id:5,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
        {id:6,title:'Group of Companies',para:'Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.'},
    ]
  return (
   
   <div className='company-group'>
   <Container>
   <div className='company-group-main'>
   <div className='company-group-text'>
   <h1>Group of Companies</h1>
   <p>Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
   Shop now and brighten up your home with our stunning lighting fixtures!</p>
   </div>
   <div className='companies'>
   {companyGroups.map((e)=>(
    <div className='companies-div' key={e.id}>
   <div className='company-group-logo'></div>
    <div className='company-group-texts'><h3>{e.title}</h3><p>{e.para}</p></div>
    </div>
    ))}
   </div>
   </div>
   </Container>
   </div> 
    
  )
}

export default CompanyGroup