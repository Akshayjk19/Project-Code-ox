import React from 'react'
import './Home.css'
import Layouts from '../../Layouts/Layouts'
import HomeMain from './HomeMain'
import ProductBrand from './ProductBrand'
import FeaturedProduct from './FeaturedProduct'
import ProductCategory from './ProductCategory'
import ApplicationArea from './ApplicationArea'
import AboutUs from './AboutUs'
import Testimonial from './Testimonial'
import News from './News'


function Home() {
  return (
    <div>
    <Layouts>
    <HomeMain/>
    <ProductBrand/>
    <FeaturedProduct/>
    <ProductCategory/>
    <FeaturedProduct/>
    <ApplicationArea/>
<AboutUs/>
<Testimonial/>
<News/>
    </Layouts>
    </div>
  )
}

export default Home