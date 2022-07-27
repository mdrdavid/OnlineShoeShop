import React from "react"
import Rating from "../../../components/homeComponents/Rating"


const ProductCount = ({product}) => {

    console.log("product",product);
    return (
        <div className='product-count'>
            <div className='display'>
                <h6>Price</h6>
                <span>${product.price}</span>
            </div>
            <div className='display'>
                <h6>Status</h6>
                {product.countInStock > 0 ? (
                    <span>In Stack</span>
                ) : (
                    <span>unavailable</span>
                )}
            </div>
            <div className='display just-content-between'>
                <h6>Reviews</h6>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`} />
            </div>
            </div>
    )
}
export default ProductCount
