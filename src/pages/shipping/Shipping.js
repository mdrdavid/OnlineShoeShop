import React from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import {Link} from "react-router-dom"
import "./shipping.css"

const Shipping= ()=> {
    const submitHandler =(e)=>{
        e.prevenetDefaulr()
    }
return (
    <>
    <Header/>
    <div className='container f-flex login'>
        <form 
        className='form-login'
        onSubmit={submitHandler}>
            <h6>DELIVERY ADDRESS</h6> 
            <input type="text" placeholder="Enter address" className="input"/>
            <input type="text" placeholder="Enter city" className="input"/>
            <input type="text" placeholder="Enter postal address" className="input"/>
            <input type="text" placeholder="Enter country" className="input"/>

            <button type="submit" className ="btn">
                <Link to="/payments" className="link-continue">
                    Continue
                </Link>
            </button>



        </form>
    </div>
    </>
)
}
export default Shipping