import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./payments.css"

const Payments= ()=> {
    const submitHandler= (e)=>{
        e.preventDefault()
    }
  return (
      <>
      <Header/>
    <div className='container'>
        <form className='login2' onSubmit={submitHandler}>
            <h6 className='select-pay'>SELECT PAYMENT METHOD</h6>
            <div className='payment-container'>
                <div className='radio-container'>
                    <input className='form-check-input' type="radio" value="paypal"/>
                    <label className='form-check-label'>Mobile Money or Credit Card</label>
                </div>
            </div>
            <button type='submit' className='button'>
            <Link to="/placeorder" className='text-continue'>Continue</Link>
            </button>
           
        </form>
    </div>
    </>
  )
}
export default Payments