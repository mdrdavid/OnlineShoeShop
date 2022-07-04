import React from 'react'
import "./footer.css"
import flexpay from "../../../assets/images/flexpay.png"
import chapchap from "../../../assets/images/chapchap.png"
import airtel from "../../../assets/images/airtel.jpeg"
import payway from "../../../assets/images/payway.png"
import mtn from "../../../assets/images/mtn.png"

const Footer= ()=> {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='card-name'>
          <img src={flexpay}
          alt='Master card' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={chapchap}
          alt='Visa' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={airtel}
          alt='paypal' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={payway}
          alt='express' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={mtn}
          alt='discver' width={40} height={30}/>
        </div>
      </div>
    </div>
  )
}
export default Footer
