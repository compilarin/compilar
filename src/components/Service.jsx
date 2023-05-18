import React from 'react'
import{MdDeveloperMode} from 'react-icons/md'
import{FiHardDrive} from 'react-icons/fi'
import{MdSecurity} from 'react-icons/md'
import {BsCloudCheck} from 'react-icons/bs'
import{BiCctv} from 'react-icons/bi'
import{RiCustomerService2Fill} from 'react-icons/ri'

import './Service.css'

const Service = () => {
    return (
        <div className='service' id='Service'>
            <div className="service-wrapper">
                <h1>Our Offerings</h1>

                <div className="content-box">
                    <div className="service-card">
                        
                        <MdDeveloperMode className='i' />
                        <h2>Software</h2>
                        <p>Custom software development tailored to your specific needs, including frontend and backend solutions.</p>
                    </div>

                    <div className="service-card">
                        <FiHardDrive className='i' />
                        <h2>Hardware & Networking</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta qui nesciunt hic laboriosam doloribus .</p>
                    </div>

                    <div className="service-card">
                        <MdSecurity className='i'  />
                        <h2>Managed Security</h2>
                        <p>Get 24/7 Endpoint Detection & Response solutions from our SOC team.</p>
                    </div>
                    </div>

                    <div className="content-box2">
                    <div className="service-card">
                        < BsCloudCheck className='i' />
                        <h2>Cloud Solutions</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta qui nesciunt hic laboriosam doloribus .</p>
                    </div>

                    <div className="service-card">
                        < BiCctv className='i'  />
                        <h2>Security Surveillance</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta qui nesciunt hic laboriosam doloribus .</p>
                    </div>

                    <div className="service-card">
                        <RiCustomerService2Fill className='i' />
                        <h2>Desktop Support</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta qui nesciunt hic laboriosam doloribus .</p>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Service
