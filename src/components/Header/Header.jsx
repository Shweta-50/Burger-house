import { useState } from 'react'
import './Header.css'

const Header = () => {
   const[isVisible,setIsVisible] =useState(false)
  return (
    <header id="header">
    <nav className="navbar affix-top affix">
        <div id="navbar_content">
            <div className="navbar-header">
                <a className="navbar-brand custom-primary" href="#"><img src="./img/logo.png" alt="logo"/> Burger House</a>
                <a href="#" className="cd-nav-trigger  burger-menu-icon"  onClick={()=>setIsVisible(!isVisible)}>
                    <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-right">
                    <div className="call-delivery">
                        <img src="./img/delivery-icon.png" alt="" className="call-delivery-icon" />
                        <span className="call-delivery-number custom-primary">Express Delivery
                            <a href="#"> +1800 55 5589</a>
                        </span>
                    </div>
                    <ul className= "nav navbar-nav">
                        <li><a className="page-scroll" href="#">Home</a></li>
                        <li><a className="page-scroll" href="#menu">Menu</a></li>
                        <li><a className="page-scroll" href="#events">Our Story</a></li>
                        <li><a className="page-scroll" href="#contact">Contact Us</a></li>
                    </ul>

                   

                </div>
            </div>
            <div className={isVisible? "mobile-nav ":"d-none"}>
                    <ul className=" d-flex flex-column">
                        <li><a className="page-scroll" href="#">Home</a></li>
                        <li><a className="page-scroll" href="#menu">Menu</a></li>
                        <li><a className="page-scroll" href="#events">Our Story</a></li>
                        <li><a className="page-scroll" href="#contact">Contact Us</a></li>
                    </ul>
         </div>
        </div>
    </nav>
</header>
  )
}

export default Header