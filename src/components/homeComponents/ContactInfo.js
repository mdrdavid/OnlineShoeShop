import React from 'react'

const ContactInfo = ()=> {
  return (
    <div className='contactinfo container'>
        <div className='row'>
            <div className='col-12 col-md-4 conatct-Box'>
                <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-phone=alt'></i>
                    </div>
                    <h5>call us 24*7</h5>
                    <p>+256 702629361</p>
                </div>
            </div>
            <div className='col-12 col-md-4 contact-Box'>
            <div className='box-info'>
                    <div className='info-image'>
                        <i className='fas  fa-map-market-alt'></i>
                    </div>
                    <h5>Heatquarter</h5>
                    <p>Kampala Uganda</p>
                </div>
            </div>
            <div className='col-12 col-md-4 contact-Box'>
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