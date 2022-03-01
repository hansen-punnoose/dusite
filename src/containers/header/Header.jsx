import React from 'react'

   
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './header.css';
import ai from '../../assets/duhouse.jpg';


const Header = () => {
  return (
    <div className='du__header section__padding' id="home">
      <div className='du__header-content'>
      <div className='du__header-image'>
      
         <img src={ai} />
        </div>

        
        <h1>Building Better Men Since 1905</h1>
        
        
  
      </div>
    </div>
  )
}

export default Header