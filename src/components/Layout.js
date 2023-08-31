import React from 'react'
import GreenNav from './greennav';
import OrangeNav from '.orangenav';
import Footer from './Footer'



const Layout = ({children}) => {
  return (
    <div>
      <GreenNav/>
      <OrangeNav/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
