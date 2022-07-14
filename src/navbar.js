import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBeer } from 'react-icons/fa';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
            <div className='logo-container'>
            <Link to="/" className="navbar-logo" >
                GOKU<img src='https://imgs.search.brave.com/QuPMzRIFsveoQidq3JuY3fSiDfqDWHkbkowltLPPL9k/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5KMWF3dlpP/eUQycDlFNENHUW15/MDZnSGFFSyZwaWQ9/QXBp' className='image-logo' alt="image not Realoaded" />
               
            </Link>
            </div>

            
            <div className='navbar-container'>
            
            {/* {click ? 'fas fa-times' : 'fas fa-bars'} */}
            {/* {click ? 'nav-menu active' : 'nav-menu'} */}
            
            <ul className= 'nav-menu active' >

            <div className='brand-name'>
                <p className='name'> Pachhauri</p>

            </div>

                {/* <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li> */}
                
                <li className='nav-item'>
                    <Link to='/Products' className='nav-links'>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' >
                        Sign Up
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Cart' className='nav-links'>
                    <FaBeer className='cart'/> Cart(0)
                    </Link>
                </li>
               
                <div className='container'>
                <input type="text" className='search-text' placeholder='Search...' />

                <div className='icon'>
                    
                </div>
               </div>
               

                


            </ul>
                

        </div>
    </nav>
    </>

   


  )
}
export default Navbar;