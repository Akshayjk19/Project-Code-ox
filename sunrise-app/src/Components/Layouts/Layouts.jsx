import React from 'react'
import HeaderOne from './HeaderOne'
import HeaderTwo from './HeaderTwo'
import Footer from './Footer'

function Layouts({children}) {
  return (
    <div>
    <HeaderOne/>
    <HeaderTwo/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layouts