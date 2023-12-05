import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css'
import 'animate.css';
import Landing from '../components/Landing'

function Home() {
  return (
    <>
        <Header/>
        <Landing/>
        <Footer/>
    </>
  )
}

export default Home