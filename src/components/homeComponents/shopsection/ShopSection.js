import React from 'react'
import Rating from '../Rating'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import Products from '../../data/Products'
import "./shopsection.css"

const Product = (props) => {
    const { product } = props
    console.log(product.imageUrl || product.imageFile || product.image)
    return (
        <div
            className='shop'
            key={product._id}
        >
            <div className='border-product'>
                <Link to={`/products/${product._id}`}>
                    <div className='shopBack'>
                        <img src={product.imageUrl || product.imageFile || product.image} alt={product.name}
                            style={{ width: "200px", height: "200px" }} />
                    </div>
                </Link>
                <div className='shoptext'>
                    <p>
                        <Link to={`/products/${product._id}`}>
                            {product.name}
                        </Link>
                    </p>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        image={product.imageFile} />
                    <h3>${product.price}</h3>
                </div>
            </div>
        </div>
    )
}
const ShopSection = () => {

    return (
        <div className="container">
            <div className='shopsection'>
                <div className='shopContainer'>
                    {Products.map(product => (
                        <Product product={product} key={product._id} />
                    ))}
                    {/* <Pagination/> */}
                </div>
            </div>
        </div>
    )
}
export default ShopSection
