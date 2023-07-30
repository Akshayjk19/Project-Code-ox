import React from 'react'
import './ProductBrand.css'
import { Container } from 'react-bootstrap'
import brandpic1 from '../../../Assets/technolight logo.png'
import brandpic2 from '../../../Assets/euchips logo.png'
import brandpic3 from '../../../Assets/ltech logo.png'
import brandpic4 from '../../../Assets/tridonic logo.png'
import LetsTalk from './LetsTalk'

function ProductBrand() {
    const product = [
        { id:1,pic:`${brandpic1}`},
        { id:2,pic:`${brandpic2}`},
        { id:3,pic:`${brandpic3}`},
        { id:4,pic:`${brandpic4}`},
        { id:5,pic:`${brandpic1}`},
        { id:6,pic:`${brandpic2}`},
        { id:7,pic:`${brandpic3}`},
        { id:8,pic:`${brandpic4}`},
    ]
  return (
    <div className='product'>
    <Container>
    <div className='product-brand'>
    <div className='brand-para'>
    <h1>Browse a Product by Brand</h1>
    <p>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time.
    Shop Now with confidence, knowing you’re getting the best.</p>
    </div>
    <div className='brand-logo'>
    {product.map((e)=>(
    <div className='brand-div'>
    <div className='brand-pic' key={e.id}>
    <div className='pic'>
    <div>
    <img src={e.pic}/>
    </div>
    </div>
    <div className='brand-bottom-line'></div>
    </div>
    <div className='brand-right-line'></div>
   
    </div>
    ))}
   
    </div>
    <div className='talk'>
    <LetsTalk/>
    </div>
    </div>
    </Container>
    </div>
  )
}

export default ProductBrand