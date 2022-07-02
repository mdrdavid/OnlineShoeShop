import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import { Link } from 'react-router-dom'
import {PayPalButton} from "react-paypal-button-v2"
import './oders.css'

const  OrderSection= ()=> {
  return (
      <>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
     
    <div className='container'>
        <div className='order-detail'>
            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                    <div className='alert-success order-box'>
                        <i className='fas fa-user'></i>
                        </div>
                    </div>
                    <div className='col-8 center'>
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>Admin David</p>
                        <p>
                            <a href={`mailto:admin@example.com`}>admin@example.com</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                    <div className='alert-success order-box'>
                        <i className='fas fa-truck-moving'></i>
                        </div>
                    </div>
                    <div className='col-8 center'>
                        <h5>
                            <strong>Order info</strong>
                        </h5>
                        <p>Shipping: Uganda</p>
                        <p>Pay method: Paypal</p>
                        <div className='bg-info'>
                            <p className='text-white'>
                                Paid on Feb 12 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}

            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                    <div className='alert-success order-box'>
                        <i className='fas fa-map-marker-alt'></i>
                        </div>
                    </div>
                    <div className='col-8 center'>
                        <h5>
                            <strong>Deliver to</strong>
                        </h5>
                        <p>Address: Mityana Ug, Central Division P.O.BOX 1245 Mityana UG</p>
                        <div className='bg-danger'>
                            <p className='text-white'>
                                Not Delivered
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row order-products justify-content-between'>
            <div className='col-lg-8'>
                <div className='order-product row'>
                    <div className='col-md-3 col-6'>
                        <img src='pr' alt='product'/>
                    </div>
                    <div className='col-md-5 d-flex'>
                        <Link to={"/"}>
                        <h6></h6>Gilrs Nike Shoes
                        </Link>
                    </div>
                    <div className='d-flex align-itmes-center'>
                        <h4>Quantity</h4>
                        <h6>4</h6>
                    </div>
                    <div className='d-flex align-itmes-center'>
                        <h4>SUBTOTAL</h4>
                        <h6>$456</h6>
                    </div>
                </div>
            </div>
            {/* total */}
            <div className='d-flex  direction-column subtotal-order'>
                <table className='table table-bordered'>
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
                <div className='col-12'>
                    <PaypalButton amount={345}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default OrderSection