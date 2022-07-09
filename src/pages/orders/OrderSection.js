import React from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import { Link } from 'react-router-dom'
import { BsPaypal } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { RiTruckFill } from "react-icons/ri"
import { FaUserAlt } from "react-icons/fa"
import './oders.css'

const OrderSection = () => {
    return (
        <>
            <Header />
            <div className='order-container'>
                <div className='order-details'>
                    <div className='icons-section'>
                            <div className='alert-success order-box'>
                                <i className='fas fa-user icon'><FaUserAlt /></i>
                            </div>
                        <div className='info'>
                            <h5>
                                <strong>Customer</strong>
                            </h5>
                            <p>Admin David</p>
                            <p>
                                <a href={`mailto:admin@example.com`}>admin@example.com</a>
                            </p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='icons-section'>
                        <div className='alert-success order-box'>
                            <i className='fas fa-truck-moving icon'><RiTruckFill /></i>
                        </div>
                        <div className='info'>
                            <h5>
                                <strong>Order info</strong>
                            </h5>
                            <p>Shipping: Uganda</p>
                            <p>Pay method: Paypal</p>
                            <div className='bg-info'>
                                <p className='paid'>
                                    Paid on Feb 12 2022
                                </p>
                            </div>
                        </div>
                    </div>
                {/* 3 */}
                    <div className='icons-section'>
                        <div className='alert-success order-box'>
                            <i className='fas fa-map-marker-alt icon'><GoLocation /></i>
                        </div>
                        <div className='info'>
                            <h5>
                                <strong>Deliver to</strong>
                            </h5>
                            <p>Address: Mityana Ug, Central Division</p>
                            <p>P.O.BOX 1245 Mityana UG</p>
                            <div className='bg-danger'>
                                <p className='notdelivered'>
                                    Not Delivered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' order-product'>
                    <div className='order'>
                        <div className='col-md-3 col-6'>
                            <img src="/assets/images/shoes/shoe12.jpg" alt='product'
                                style={{ width: "50px", height: "50px" }} />
                        </div>
                        <div className='col-md-5 d-flex'>
                            <Link to={"/"}>
                                <h6>Gilrs Nike Shoes</h6>
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
                            <BsPaypal amount={345} />
                        </div>
                    </div>
                </div>
        </>
    )
}
export default OrderSection