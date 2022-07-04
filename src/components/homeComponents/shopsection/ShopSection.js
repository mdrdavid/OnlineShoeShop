import React from 'react'
import Rating from '../Rating'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import Products from '../../data/Products'
import "./shopsection.css"

 const  ShopSection= ()=> {
console.log("products",Products.image)

  return (
    <div className ="container">
        <div className='shopsection'>
                    <div className='shopContainer'>
                        {Products.map(Products=>(
                            <div 
                            className='shop'
                            key={Products._id}
                            >
                                <div className='border-product'>
                                    <Link to={'/products/${product._id'}>
                                        <div className='shopBack'>
                                            <img src={Products.image} alt={Products.name}/>
                                            </div>
                                    </Link>
                                    <div className='shoptext'>
                                        <p>
                                            {/* <Link to={`/Productss/${Products._id}`}
                                            // {...Products.name}
                                            </Link> */}
                                            <Link to={`/Products/${Products._id}`}
                                            {...Products.name}></Link>
                                            </p>
                                            <Rating 
                                            value ={Products.rating}
                                            text= {`${Products.numReviews} reviews`}
                                            image={Products.image}/>
                                            <h3>${Products.price}</h3>
                                            </div>
                                    </div>
                                    </div>
                        ))}
                        {/* <Pagination/> */}
                        </div>
                    </div>
                </div>
)
}
export default ShopSection
