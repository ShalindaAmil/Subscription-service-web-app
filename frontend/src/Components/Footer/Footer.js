import React from 'react'
import './Footer.css'
import { assets } from '../../Assests/assets'
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <h1 className='logo'>ChocoBox</h1>
            <p>Stay up to date with the latest features and releases by joining our newsLetter</p>
            
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <a href="#header"><li>Home</li></a>
                <a href="#explore-Menu"><li>Menu</li></a>
                <a href="#app-download"><li>Mobile App</li></a>
                <a href="#footer"><li>Contact US</li></a>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94-035351222</li>
                <a href="www.gamil.com"><li>chocobox@gmail.com</li></a>
            </ul>
            <div className='footer-social-icon'>
                <a href="www.facebook.com"><img src={assets.facebook_icon} alt="" /></a>
                <a href="www.twitter.com"><img src={assets.twitter_icon} alt="" /></a>
                <a href="www.linkedin.com"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
      </div>
      <hr/>
      <p className='footer-coppyright'>Copyright 2024 &copy; Chocobox.com - All Right Reserved.</p>
    </div>
  )
}
export default Footer
