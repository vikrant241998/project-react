import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { MenuItems } from './MenuItems';
// import MenuItems from './MenuItems';
export default function Navbar() {
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <div>
        


        <header>
            <div className="logo">
            <img src="logo.png" alt="" />
            </div>
            
    
            <nav ref={navRef}>
                <Link to="/#">Home<i className="fas fa-caret-down" /></Link>
                <Link to="/about">About</Link>
                <Link to="/themes">Themes<i className="fas fa-caret-down" /></Link>
                <Link to="/pages">Pages<i className="fas fa-caret-down" /></Link>
                <Link to="/contact">Contact</Link>
                <Link to="/items"> <i className="fas fa-shopping-cart" />&nbsp;&nbsp;0 &nbsp;items</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='navBar-btn'><img src="user.png" alt="" /><span>&nbsp;&nbsp;My Account</span> </button>
                

        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
                {/* <button><i class="fas fa-shopping-cart"></i>0 items</button> */}
            </nav>
            <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
        </header>
    </div>
  )
}
