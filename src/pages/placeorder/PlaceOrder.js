import React from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import{FaUserAlt} from "react-icons/fa"
import {RiTruckFill} from "react-icons/ri"
import {Link} from "react-router-dom"
import {GoLocation} from "react-icons/go"
// import{BsPaypal} from "react-icons/bs"
import "./placeorder.css"
const PlaceOrder= ()=> {
    const placeOrderHandler =(e)=>{
        e.preventDefault()
    }
  return (
      <>
      <Header/>
    <div className='container'>
        <div className='order-detail'>
                <div className='user'>
                    <div className='icon-section'>
                        <div className='alert-success order-box'>
                            <i className='fa-user icon'><FaUserAlt/></i>
                        </div>
                    </div>
                    <div className='info-section'>
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>Admin David</p>
                        <p>dmatovu775@gmail.com</p>
                    </div>
                </div>
            {/* 2 */}
                <div className='user'>
                    <div className='icon-section'>
                        <div className='alert-success order-box'>
                            <i className='fasn fa-truck-moving icon'><RiTruckFill/></i>
                        </div>
                    </div>
                    <div className='info-section'>
                        <h5>
                            <strong>Order info</strong>
                        </h5>
                        <p>Shipping: Uganda</p>
                        <p>Pay method: paypal</p>
                    </div>
                </div>
            {/* 3 */}
                <div className='user'>
                    <div className='icon-sectionr'>
                        <div className='alert-success order-box'>
                            <i className='fasn fa-location icon'><GoLocation/></i>
                        </div>
                    </div>
                    <div className='info-section'>
                        <h5>
                            <strong>Deliver to</strong>
                        </h5>
                        <p>Mityana District</p>
                        <p>Mityana ug , P.O.BOX 345 mityana ug</p>
                    </div>
                </div>
        </div>

        <div className='order-products'>
                <div className='order-product' >
                    <div className='col-md-3'>
                        <img src="/assets/images/shoes/shoe12.jpg" alt='product'
                        style={{width: "50px", height: "50px"}}/>
                    </div>
                    <div className='page-link'>
                        <Link to={"/"} className="page-link">
                            <h6>Girls Nike shoes</h6>
                        </Link>
                    </div>
                    <div className='subtotal-info'>
                        <h4>Quantity</h4>
                        <h6>4</h6>
                    </div>
                    <div className='subtotal-info'>
                        <h4>SUBTOTAL</h4>
                        <h6>#567</h6>
                    </div>
                </div>
            {/* total */}
            <div className=' subtotal-order'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Products</strong>
                            </td>
                            <td>#456</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Shipping</strong>
                            </td>
                            <td>$567</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Tax</strong>
                            </td>
                            <td>$3</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>$567</td>
                        </tr>
                    </tbody>
                </table>
                {/* <div>
                   <BsPaypal amount ={345}/>
                </div> */}
                <button type='submit' onClick={placeOrderHandler} className="place-order">
                    <Link to="/order" className='place-order'>
                        Place Order
                    </Link>
                </button>
            </div>
        </div>
        </div>
    </>
  )
}
export default PlaceOrder
