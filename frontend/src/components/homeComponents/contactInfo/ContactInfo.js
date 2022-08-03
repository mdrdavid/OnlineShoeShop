import React from 'react'
import "./contactinfo.css"
import { BiPhoneCall } from "react-icons/bi"
import { FaRegBuilding } from "react-icons/fa"
import { FaFax } from "react-icons/fa"

const ContactInfo = () => {
    return (
        <div className='contacts'>
            <div className='contact-Box'>
                <div className='box-info'>
                    <div className='info-image'>
                        <i className='phone'><BiPhoneCall /></i>
                    </div>
                    <h5>call us 24*7</h5>
                    <p>+256 702629361</p>
                </div>
            </div>
            <div className=' contact-Box'>
                <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-map-market-alt'><FaRegBuilding /></i>
                    </div>
                    <h5>Heatquarter</h5>
                    <p>Kampala Uganda</p>
                </div>
            </div>
            <div className=' contact-Box'>
                <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-fax'><FaFax /></i>
                    </div>
                    <h5>Fax</h5>
                    <p>0771626807</p>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo 