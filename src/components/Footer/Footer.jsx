import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact">
        <div class="footer-top">
            <div class="footer-logo">
                <img src="./img/logo-footer.png" alt=""/>
                <span>Burger House</span>
            </div>
        </div>
        <div class="footer-middle">
            <p class="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
            <div class="footer-contact">
                <div class="footer-contact-item">
                    <img src="./img/location.svg" alt="" class="footer-contact-icon"/>
                    <a class="footer-contact-text text-white " >Burger House, Lucknow, India</a>
                </div>
                <div class="footer-contact-item">
                    <img src="./img/email.svg" alt="" class="footer-contact-icon"/>
                    <a href="mailto:info@companyname.com" class="footer-contact-text text-white" style={{textDecoration: "none"}}>info@burgerhouse.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copyright">© BURGER HOUSE 2022. ALL RIGHTS REVERSED</p>
            <div class="footer-social">
                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook-f"></i></a>
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="whatsapp"><i class="fa fa-whatsapp"></i></a>
            </div>
        </div>

    </footer>
  
  )
}

export default Footer