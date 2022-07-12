import React, { useState, useEffect } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import Rating from "../../components/homeComponents/Rating"
import Message from "../../components/loadingError/Error"
import Products from "../../components/data/Products"
import "./singleproduct.css"
// import axios from 'axios'


const SingleProduct= ({match})=> {
    // const [product, setProduct] =useState({ })
    // // const product =Products.find((p) => p._id === match.params._id)

    // useEffect(() => {
    //     const fetchproduct = async () =>{
    //         const {data} = await axios.get(`api/products/${match.params.id}`)
    //         setProduct(data)
    //     };
    //     fetchproduct()

    // }, []);
    const product= Products
  return (
      <>
      <Header/>
    <div className='container single-product'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='single-image'>
                    <img src={product.image || product.imageFile || product.imageUrl} alt={product.name}/>
                </div>
                <div className='col-md-6'>
                    <div className='product-dtl'>
                        <div className='product-info'>
                            <div className='product-name'>{product.name}</div>
                        </div>
                        <p>{product.description}</p>
                        <div className='product-count'>
                            <div className='d-flex'>
                                <h6>Price</h6>
                                <span>${product.price}</span>
                            </div>
                            <div className='d-flex'>
                                <h6>Status</h6>
                                {product.countInStock > 0 ? (
                                    <span>In Stack</span>
                                ) : (
                                    <span>unavailable</span>
                                )}
                            </div>
                            <div className='d-flex just-content-between'>
                                <h6>Reviews</h6>
                                <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}/>
                            </div>
                            {product.countInStock > 0 ? (
                                <>
                                <div className='d-flex justfy-content-between'>
                                    <h6>Quantity</h6>
                                    <select>
                                        {[...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x +1} value ={x +1}>
                                                {x +1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className='round-black-btn'>
                                    Add To Cart
                                </button>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/* Rating */}
            <div className='row'>
                <div className='col-md-6'>
                    <h6 className='mb-3'>REVIEWS</h6>
                    <Message variant={"alert-info mt-3"}>No Reviews</Message>
                    <div className='bg-light'>
                        <strong>Admin David</strong>
                        <Rating/>
                        <span>Jan 12 2022</span>
                        <div className='alert alert-info'>
                            loremggggggggggggggggggggg
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h6>WRITE A CUSTOMER REVIEW</h6>
                    <div className='my-4'></div>

                    <form>
                        <div className='my-4'>
                            <strong>Rating</strong>
                            <select className='bg-light'>
                                <option value="">Selecty....</option>
                                <option value="1">1 - poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <div className='my-4'>
                            <strong>Comment</strong>
                            <textarea
                            row="3"
                            className='bg-light'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default SingleProduct
