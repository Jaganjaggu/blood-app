import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import hospitalImage from '../assets/land.png'
import { Link } from 'react-router-dom'
import './Hospital.css'

function Hospital() {
  return (
    <>
      <Header />
      <div>
        <div className='hospital-section bg-white'>
          <div className='hospital-container container '>
            <div className='land-left'>
              <h1><span className='text-color-1'>Help</span><span className='text-color-2'> & Save Life By <br /> Donating</span><span className='text-color-1'> Blood</span> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae error natus debitis qui earum itaque repudiandae porro eum officia tenetur libero, odit quia quasi commodi. Provident illum non dolores!</p>
              <div className='hospital-pages-section'>
                <div>
                  <i class="ri-contrast-drop-2-line"></i>
                  Donations
                </div>
                <div style={{backgroundColor:'#12486B',color:'white',borderColor:'white'}}>
                  <i class="ri-add-circle-fill"></i>
                  Requests
                </div>
                <div> 
                  <i class="ri-dashboard-line"></i>
                  Dashboard
                </div>
              </div>
            </div>

            <div className='land-right animate__animated animate__fadeIn'>
              <img src={hospitalImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Hospital