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
    <div className='container f-flex'>
        <form className='login2' onSubmit={submitHandler}>
            <h6>SELECT PAYMENT METHOD</h6>
            <div className='payment-container'>
                <div className='radio-container'>
                    <input className='form-check-input' type="radio" value="paypal"/>
                    <label className='form-check-label'>paypal or Credit Card</label>
                </div>
            </div>
            
            <button type='submit'>
            <Link to="/placeorder" className='text-white'></Link>
            </button>
           
        </form>
    </div>
    </>
  )
}
export default Payments