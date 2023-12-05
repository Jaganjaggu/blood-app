import React, { useState } from 'react'
import loginImg from '../assets/requestblood-2.jpg'
import { Link } from 'react-router-dom';
import './RequestBlood.css'

function RequestBlood() {

    const [selectBloodGroup, setSelectBloodGroup] = useState("Blood Group");
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const [bloodGroupSelected, setBloodGroupSelected] = useState(null)
    const bloodGroupOptions = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]

    const handleOptionSelect = (option) => {
        setBloodGroupSelected(option)
        setSelectBloodGroup(option)
    }

    return (
        <>
            <div className="request-blood">
                <img src={loginImg} alt="image" className="request-blood__bg" />

                <form action="" className="request-blood__form">
                    <h1 className="request-blood__title">Request Blood</h1>

                    <div className="request-blood__inputs">

                        <div className="request-blood__box">
                            <input type="text" placeholder="User Name" required className="request-blood__input" />
                            <i class="ri-user-line"></i>
                        </div>

                        <div className="request-blood__box">
                            <input type="email" placeholder="Email ID" required className="request-blood__input" />
                            <i className="ri-mail-fill"></i>
                        </div>

                        <div className="request-blood__box">
                            <input type="text" placeholder="Location" required className="request-blood__input" />
                            <i class="ri-map-2-line"></i>
                        </div>
                        <div className="request-blood__box">
                            <input type="password" placeholder="Password" required className="request-blood__input" />
                            <i className="ri-lock-2-fill"></i>
                        </div>

                        <div className='request-blood__box '>
                            <div className='request-blood__input' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className='selected-option'>
                                    <div> 
                                        <i class="ri-map-pin-user-line"></i>{selectBloodGroup}
                                    </div>

                                </div>
                                {dropdownOpen && (
                                    <ul className='dropdown-content '>
                                        {bloodGroupOptions.map(option => (
                                            <li  key={option} onClick={() => handleOptionSelect(option)}>{option}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <i class="ri-arrow-down-s-line"></i>

                        </div>

                        <div className="request-blood__box">
                            <input type="text" placeholder="Blood Group" required className="request-blood__input" />
                            <i class="ri-heart-fill"></i>
                        </div>
                    </div>
                    <button type="submit" className="request-blood__button">Request Blood</button>

                </form>
            </div>
        </>
    )
}

export default RequestBlood