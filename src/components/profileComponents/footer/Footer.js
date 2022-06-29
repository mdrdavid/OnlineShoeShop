import React from 'react'
import "./footer.css"
import mastercard from "../../../assets/images/mastercard.jpg"
import visa from "../../../assets/images/visa.jpg"
import paypal from "../../../assets/images/paypal.jpg"
import card from "../../../assets/images/card.jpg"
import discover from "../../../assets/images/discover.jpg"

const Footer= ()=> {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='card-name'>
          <img src={mastercard}
          alt='Master card' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={visa}
          alt='Visa' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={paypal}
          alt='paypal' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={card}
          alt='express' width={40} height={30}/>
        </div>
        <div className='card-name'>
          <img src={discover}
          alt='discver' width={40} height={30}/>
        </div>
      </div>
    </div>
  )
}
export default Footer
