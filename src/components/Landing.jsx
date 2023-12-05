import React from 'react'
import './Landing.css'
import landingImage from '../assets/land.png'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
            <div className='landing-section bg-white'>
                <div className='landing-container container '>
                    <div className='land-left'>
                        <h1><span className='text-color-1'>Help</span><span className='text-color-2'> & Save Life By <br /> Donating</span><span className='text-color-1'> Blood</span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae error natus debitis qui earum itaque repudiandae porro eum officia tenetur libero, odit quia quasi commodi. Provident illum non dolores!</p>
                        <div>
                            <Link to='/login'> <button className='landing-login'>Login</button></Link>
                            <Link to='/register'><button className='landing-signup'>Register</button></Link>
                        </div>
                    </div>

                    <div className='land-right animate__animated animate__fadeIn'>
                        <img src={landingImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing