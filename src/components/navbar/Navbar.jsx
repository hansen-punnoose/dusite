import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/dubigclean.svg';


const Menu = () => (
  <>
    <p><a href = "#home"> Home </a></p>
    <p><a href = "#features"> About </a></p>
    <p><a href = "#what"> Recruitment </a></p>
    <p><a href = "#possibility"> Philanthropy </a></p>
    <p><a href = "#blog"> Alumni </a></p>
  
  
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='du__navbar'>
      <div className='du__navbar-links'>
        <div className='du__navbar__links-_logo'>
          <img src={logo} alt='logo' />

        </div>
       <div className='du__navbar-links_container'>
        <Menu />
         </div> 
      </div>
      <div className='du__navbar-sign'>
        <p>Sign in</p>
        <button type = "button"> Newsletter</button> 

      </div>
      <div className='du__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color = "#fff" size = {27} onClick={() => setToggleMenu(false)} /> 
          :  <RiMenu3Line color = "#fff" size = {27}  onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='du__navbar-menu_container scale-up-center'>
              <div className='du__navbar-menu-container-lengths'>  
              <Menu />
                <div className='du__navbar-menu_container-links-sign'>
                 <p>Sign in</p>
                 <button type = "button"> Newsletter</button> 

                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar