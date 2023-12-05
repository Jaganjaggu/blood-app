import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './LandingPerson.css'

function LandingPerson() {
  return (
    <>
      <Header />
      <div className='landingperson-container'>
        <div className='landingperson-session'>
          <h2 className='landingperson-heading'>Donate <span className='landingperson-blood-style'>Blood</span> <br /> Save a Life</h2>
          <button className='my-action-style'>MY ACTIONS</button>
          <div className='all-count-section'>
            <div className='action-content'>
              <h3 style={{ margin: '0' }}>30+</h3>
              <p style={{ margin: '0' }}>Hospital</p>
            </div>
            <div className='action-content'>
              <h3 style={{ margin: '0' }}>30+</h3>
              <p style={{ margin: '0' }}>Hospital</p>
            </div>
            <div className='action-content'>
              <h3 style={{ margin: '0' }}>30+</h3>
              <p style={{ margin: '0' }}>Hospital</p>
            </div>
          </div>
          <div className='donate-request'>
            <div className='donate-button'>
              <i class="ri-contrast-drop-2-line"></i>
              <div>Donate</div>
            </div>
            <div className='get-blood-button'>
              <i class="ri-heart-fill"></i>
              <div>Request Blood</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPerson