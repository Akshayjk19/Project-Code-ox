import React from 'react'
import { Container } from 'react-bootstrap'
import './ProductCategory.css'
import LetsTalk from './LetsTalk'

function ProductCategory() {
    const productcategory = [
        {id:1,title:"Downlights"},
        {id:2,title:"Spot Lights"},
        {id:3,title:"Modular Lights"},
        {id:4,title:"Recessed Linear Lights"},
        {id:5,title:"Magnetic Track Lights"},
        {id:6,title:"Linear Pendant Lights"},
        {id:7,title:"Cabinet Lights"},
        {id:8,title:"Track Lights"},
        {id:9,title:"Mirror Lights"},
        {id:10,title:"Outdoor Lights"},
        {id:11,title:"Industrial Lights"},
        {id:12,title:"Decorative Lights"},
        {id:13,title:"Facad Lights"},
        {id:14,title:"Strip & Neon Lights"},
        {id:14,title:"Accessories"},
        {id:14,title:"Street Lights"},
    ]
  return (
    <div>
    <div className='product-category'>
    <Container>
    <div className='product-category-div'>
    <div className='product-category-text'>
    <h1>Product Categories</h1>
    <p>Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
    Shop now and brighten up your home with our stunning lighting fixtures!</p>
    </div>
    <div className='product-category-table'>
    {productcategory.map((e)=>(
   <div className='category-div'>
   <div className='category-texts'>
   <div className='texts'>
   <div>
   <h1>{e.title}</h1>
   </div>
   </div>
   <div className='bottom-line'></div>
   </div>
   <div className='right-line'></div>
   
   </div>
    ))}
    </div>
    <div className='talk'>
    <LetsTalk/>
    </div>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default ProductCategory