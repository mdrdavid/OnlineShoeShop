import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
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
            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fasn fa-user'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>Admin David</p>
                        <p>dmatovu775@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fasn fa-truck-moving'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Order info</strong>
                        </h5>
                        <p>Shipping: Uganda</p>
                        <p>Pay method: paypal</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className='col-lg-4'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fasn fa-user'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Deliver to</strong>
                        </h5>
                        <p>Mityana ug , P.O.BOX 345 mityana ug</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='order-products justify-content-between'>
            <div className='col-lg-8'>
                <div className='order-product d-flex' >
                    <div className='col-md-3'>
                        <img src="imgae" alt='product'/>
                    </div>
                    <div className='col-md-d d-flex'>
                        <Link to={"/"}>
                            <h6>Girls Nike shoes</h6>
                        </Link>
                    </div>
                    <div className='d-flex algin-items-center'>
                        <h4>Quantity</h4>
                        <h6>4</h6>
                    </div>
                    <div className='d-flex algin-items-center'>
                        <h4>SUBTOTAL</h4>
                        <h6>#567</h6>
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
                <button type='submit' onClick={placeOrderHandler}>
                    <Link to="/order" className='text-white'>
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
