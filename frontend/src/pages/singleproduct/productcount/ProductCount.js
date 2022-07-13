import React from "react"
import Products from "../../../components/data/Products"
import Rating from "../../../components/homeComponents/Rating"

const ProductCount =()=>{
    const product= Products
    return(
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
            {product.countInStock > 0 ? (
                <>
                    <div className='d-flex justfy-content-between'>
                        <h6>Quantity</h6>
                        <select>
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
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
    )
}
export default ProductCount