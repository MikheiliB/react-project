import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='logo' />
            <p>Order delicious food online and fast</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="fb" />
                <img src={assets.twitter_icon} alt="x" />
                <img src={assets.linkedin_icon} alt="li" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company Info</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery info</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact us</h2>
            <ul>
                <li>+9952992599</li>
                <li>contact@Mchadi.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 Mchadi.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
