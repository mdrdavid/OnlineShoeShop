import React from 'react'
import "./contactinfo.css"

const ContactInfo = ()=> {
  return (
    <div className='contactinfo container'>
        <div className='contacts'>
            <div className='contact-Box'>
                <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-phone=alt'></i>
                    </div>
                    <h5>call us 24*7</h5>
                    <p>+256 702629361</p>
                </div>
            </div>
            <div className=' contact-Box'>
            <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-map-market-alt'></i>
                    </div>
                    <h5>Heatquarter</h5>
                    <p>Kampala Uganda</p>
                </div>
            </div>
            <div className=' contact-Box'>
            <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-fax'></i>
                    </div>
                    <h5>Fax</h5>
                    <p>0771626807</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ContactInfo 