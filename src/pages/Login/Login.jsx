import React from 'react'
import './Login.css'
import loginImg from '../../assets/login-bg.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="login">
         <img src={loginImg} alt="image" className="login__bg"/>

         <form action="" className="login__form">
            <h1 className="login__title">Login</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input type="email" placeholder="Email ID" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="login__box">
                  <input type="password" placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <div className="login__check">
               <div className="login__check-box">
                  <input type="checkbox" className="login__check-input" id="user-check"/>
                  <label for="user-check" className="login__check-label">Remember me</label>
               </div>

               <a href="#" className="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="login__button">Login</button>

            <div className="login__register">
               Don't have an account? <Link to='/register'>Register</Link>
            </div>
         </form>
      </div> 
    </>
  )
}

export default Login