import React from 'react'
import "./footer.css"

const Footer= ()=> {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='card-name'>
          <img src="/assets/images/flexpay.png"
          alt='Master card' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src="/assets/images/chapchap.png"
          alt='Visa' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src="/assets/images/airtel.jpeg"
          alt='paypal' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src="/assets/images/payway.png"
          alt='payway' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src="/assets/images/mtn.png"
          alt='discver' width={40} height={30}/>
        </div>
      </div>
    </div>
  )
}
export default Footer
