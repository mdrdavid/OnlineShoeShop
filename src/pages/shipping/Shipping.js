import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./shipping.css"

const Shipping= ()=> {
    const submitHandler =(e)=>{
        e.prevenetDefaulr()
    }
  return (
      <>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    <div className='container f-flex login'>
        <form 
        className='login'
        onSubmit={submitHandler}>
            <h6>DELIVERY ADDRESS</h6> 
            <input type="text" placeholder="Enter address" className="input"/>
            <input type="text" placeholder="Enter city" className="input"/>
            <input type="text" placeholder="Enter postal address" className="input"/>
            <input type="text" placeholder="Enter country" className="input"/>

            <button type="submit" className ="btn">
                <Link to="/payment" className="tezt-white">
                    Continue
                </Link>
            </button>



        </form>
    </div>
    </>
  )
}
export default Shipping