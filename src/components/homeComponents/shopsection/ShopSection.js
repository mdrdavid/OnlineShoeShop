import React from 'react'
import Rating from '../Rating'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import Products from '../../data/Products'

 const  ShopSection= ()=> {
    //  const products =["sneakers", "jeans", "sandles"]
  return (
    <div className ="container">
        <div className='section'>
            <div className='row'>
                <div className='col-lh-12 col-md-12 article'>
                    <div className='shopContainer row'>
                        {Products.map(Products=>(
                            <div 
                            className='shop col-lf-4 col-md-6 col-sm-6'
                            key={Products._id}
                            // key={product}
                            >
                                <div className='border-product'>
                                    <Link to={'/products/${product._id'}>
                                    {/* <Link to={'/products/${product'}> */}
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
                                            text= {`${Products.numReviews} reviews`}/>
                                            <h3>${Products.price}</h3>
                                            </div>
                                    </div>
                                    </div>
                        ))}
                        <Pagination/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ShopSection
