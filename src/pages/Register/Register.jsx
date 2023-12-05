import React, { useState } from 'react'
import './Register.css'
import loginImg from '../../assets/login-bg.png'
import { Link } from 'react-router-dom';


function Regiser() {

  const [selectUserType, setSelectUserType] = useState("User Type");
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [userTypeSelected, setUserTypeSelected] = useState(null)
  const UserTypeOptions = ["Person", "Hospital"]

  console.log(dropdownOpen);
  const handleOptionSelect = (option) => {
    setUserTypeSelected(option)
    setSelectUserType(option)
  }

  return (
    <>
      <div className="register">
        <img src={loginImg} alt="image" className="register__bg" />

        <form action="" className="register__form">
          <h1 className="register__title">Register</h1>
          {selectUserType === "User Type" &&
            <div className='chooseType-container'>
              <div onClick={() => handleOptionSelect("Person")} className='type-person'>
                <i class="ri-user-add-fill"></i>
                <div>Person</div>
              </div>
              <div onClick={() => handleOptionSelect("Hospital")} className='type-hospital'>
                <i class="ri-first-aid-kit-fill"></i>
                <div>Hospital</div>
              </div>
            </div>}

          {selectUserType !== "User Type" &&
            <>

              <div className='register-top-section d-flex align-items-center'>
                <div className='custom-select-container ' onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <div className='selected-option'><div> <i class="ri-map-pin-user-line"></i>{selectUserType}</div>
                    <i class="ri-arrow-down-s-line"></i></div>
                  {dropdownOpen && (
                    <ul className='dropdown-content'>
                      {UserTypeOptions.map(option => (
                        <li key={option} onClick={() => handleOptionSelect(option)}>{option}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>




              <div className="register__inputs">

                <div className="register__box">
                  <input type="text" placeholder={userTypeSelected === "Person" ? "Full Name" : "Hospital Name"} required className="register__input" />
                  <i class="ri-user-line"></i>
                </div>

                <div className="register__box">
                  <input type="email" placeholder="Email ID" required className="register__input" />
                  <i className="ri-mail-fill"></i>
                </div>



                <div className="register__box">
                  <input type="text" placeholder="Location" required className="register__input" />
                  <i class="ri-map-2-line"></i>
                </div>
                <div className="register__box">
                  <input type="password" placeholder="Password" required className="register__input" />
                  <i className="ri-lock-2-fill"></i>
                </div>
                {userTypeSelected === "Person" &&
                  <div className="register__box">
                    <input type="text" placeholder="Blood Group" required className="register__input" />
                    <i class="ri-heart-fill"></i>
                  </div>
                }






              </div>
              <button type="submit" className="register__button">Register</button>
            </>
          }
          <div className="register__register mt-3">
            Allready have an account? <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Regiser