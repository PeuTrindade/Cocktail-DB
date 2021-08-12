import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
          <nav className='navbar'>
           <div className='nav-center'> 
            <img className='logo' src='https://raw.githubusercontent.com/john-smilga/react-projects/181d6adf89c8c61c72a0b8c5c1a8ad6af15e6d19/15-cocktails/setup/src/logo.svg'/>  
           <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
           </ul>
           </div>
          </nav>
        </header>
    )
}

export default Navbar;
