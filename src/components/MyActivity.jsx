import React, { useState, useEffect } from 'react'
import hospitalLogo from '../assets/hospilat-logo.png'
import './MyActivity.css'
import Collapse from 'react-bootstrap/Collapse';


function MyActivity() {
    const [openList, setOpenList] = useState(Array(3).fill(false))

    const handleCollapse = (index) => {
        const newOpenList = [...openList]
        newOpenList[index] = !newOpenList[index]
        setOpenList(newOpenList)
    }

    return (
        <>
            <div className='my-activity-container'>
                <h2>Welcome Jagan</h2>
                <h4>Activity Status</h4>

                <div className='my-activity-section'  >
                    {openList.map((item, index) => (
                        <div className='my-activity-card'>
                            <div className='my-activity-card-left' onClick={() =>handleCollapse(index)}>
                                <div className='my-activity-drop-icon'>
                                    <i class="ri-arrow-down-s-line"></i>
                                </div>
                                <div className='my-activity-logo'>
                                    <img src={hospitalLogo} alt="" />
                                </div>
                                <div className='my-activity-titles'>
                                    <h5>Mokey D.Luffy Hospital</h5>
                                    <p>Location: Ernakular</p>
                                    <Collapse in={openList[index]}>
                                        <div id="example-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className='my-activity-card-right'>
                                <button className='btn btn-light'>Requested</button>
                            </div>
                        </div>
                    ))

                    }

                </div>
            </div>
        </>
    )
}

export default MyActivity