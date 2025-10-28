import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
   return (
      <div className='footer'>
        <div className='footer-about'>
            <div>
                <h1>The Diner</h1>
                <p>Welcome to The Diner, where great taste meets comfort. Order online for pickup or delivery and enjoy your favorite dishes anytime.</p>
            </div>
            <div>
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div className='footer-contact' id="contact">
                <h3>GET IN TOUCH</h3>
                <p>+1-212-456-7890</p>
                <p>contact@thediner.com</p>
                <div>
                <a href="#"><FacebookIcon className='icon' sx={{ fontSize: "32px", color: "#1877F2", mr: "10px"}}/></a>
                <a href="#"><InstagramIcon className='icon' sx={{ fontSize: "32px", color: "#E1306C", mr: "10px"}}/></a>
                <a href="#"><TwitterIcon className='icon' sx={{ fontSize: "32px", color: "#1DA1F2"}}/></a>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>Copyright 2025 © TheDiner.com - All Right Reserved.</p>
        </div>
      </div>
   )
}

export default Footer