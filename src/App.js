import React from 'react'

import {Footer, Blog, Possibility, Features, What, Header } from './containers';
import {CTA, Brand, Navbar, Slideshow } from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            
            <Header />
            <Brand />
        </div>
        <Features />
        <What />
        
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      
    </div>
  )
}

export default App