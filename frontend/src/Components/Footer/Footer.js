import React from 'react'
import './Footer.css'
import { assets } from '../../Assests/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <h1 className='logo'>ChocoBox</h1>
            <p>Stay up to date with the latest features and releases by joining our newsLetter</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile App</li>
                <li>Contact US</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94-035351222</li>
                <li>chocobox@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-coppyright'>Copyright 2024 &copy; Chocobox.com - All Right Reserved.</p>
    </div>
  )
}
export default Footer
