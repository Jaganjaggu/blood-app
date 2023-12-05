import React from 'react'
import './Footer.css'
import footerLogo from '../assets/logo5-removebg-preview.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div    >
                <div className='footer-section'>
                    <div className='footer-left-section'>
                        <img className='w-100' src={footerLogo} alt="" />
                    </div>
                    <div className='footer-right-section'>
                        <div className='footer-input-layer'>
                            <input type="text" placeholder='Your e-mail' className='' />
                            <button>Subscribe Now!</button>
                        </div>

                        <div className='footer-right-section-second'>
                            <div>
                                <h6>Partnership</h6>
                                <ul style={{padding:'0px'}}>
                                    <li>Webistes</li>
                                    <li>Social Media</li>
                                    <li>Branding</li>
                                </ul>
                            </div>
                            <div>
                                <h6>About</h6>
                                <ul style={{padding:'0px'}}>
                                    <li>Our Projects</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Support</h6>
                                <ul style={{padding:'0px'}}>
                                    <li>Support Request</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>

                        <div className='footer-right-section-third'>
                            <div className='split-line'></div>
                            <div className='footer-socialmedia'>
                                <p>All rights recerved 2020</p>
                                <div className='footer-socialmedia-icons'>
                                    <div><FaFacebookF style={{ color: 'white' }}/></div>
                                    <div><FaInstagram style={{ color: 'white' }}/></div>
                                    <div><FaTwitter style={{ color: 'white' }}/></div>
                                    <div><FaYoutube style={{ color: 'white' }}/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='split-line'></div>
                <div style={{display:'flex',justifyContent:'center'}}><p >Copyright © 2023 Bloody App. Built with React.</p></div>
            </div>
        </>
    )
}

export default Footer