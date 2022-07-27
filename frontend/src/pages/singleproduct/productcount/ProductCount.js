import React, { useState } from "react"
import { useParams} from "react-router-dom"
import Rating from "../../../components/homeComponents/Rating"


const ProductCount = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const { productId } = useParams
    const AddToCartHandler = (e) => {
        e.preventDefault()
        setQuantity(
    `/cart${productId}?quantity=${quantity}`
        )
    }
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
            {product.countInStock > 0 ? (
                <>
                    <div className='quantity'>
                        <h6>Quantity</h6>
                        <select>
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='btn' onClick={AddToCartHandler}>
                        Add To Cart
                    </button>
                </>
            ) : null }
            </div>
    )
}
export default ProductCount
