import React from 'react'
import Rating from './Rating'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'

 const  ShopSection= ()=> {
  return (
    <div className ="container">
        <div className='section'>
            <div className='row'>
                <div className='col-lh-12 col-md-12 article'>
                    <div className='shopContainer row'>
                        {products.map(product=>(
                            <div 
                            className='shop col-lf-4 col-md-6 col-sm-6'
                            key={product._id}
                            >
                                <div className='border-product'>
                                    <Link to={'/products/${product._id'}>
                                        <div className='shopBack'>
                                            <img src={product.image} alt={product.name}/>
                                            </div>
                                    </Link>
                                    <div className='shoptext'>
                                        <p>
                                            {/* <Link to={`/products/${product._id}`}
                                            // {...product.name}
                                            </Link> */}
                                            </p>
                                            <Rating 
                                            value ={product.rating}
                                            text= {`${product.numReviews} reviews`}/>
                                            <h3>${product.price}</h3>
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
