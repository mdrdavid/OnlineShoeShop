import React, { useEffect, useState } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import "./singleproduct.css"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../../Redux/Actions/ProductActions"
import ProductCount from './productcount/ProductCount'
import RatingSection from './ratingsection/RatingSection'
import Loading from '../../components/loadingError/Loading'
import Message from '../../components/loadingError/Error'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ProductQuantityButton = ({ onClick, children }) => {
    return (
        <button className="btn" onClick={onClick}>{children}</button>
    )
}

// export const QuantityK = ({product, onChange}) => {
//     const [quantity, setQuantity]= useState(1)
//     const handleQantity = (e) => {
//         setQuantity(e.target.value)
//         onChange=handleQantity()
//     }
//     return (
//         <div className='quantity' >
//             <h6>Quantity</h6>
//             <select
//                 value={quantity}
//                 onChange={onChange}
//             >
//                 {[...Array(product.countInStock).keys()].map((x) => (
//                     <option key={x + 1} value={x + 1}>
//                         {x + 1}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     )

// }

const SingleProduct = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))

    }, [dispatch, id]);

    const [quantity, setQuantity] = useState(1)
    const onClick = (e) => {
        e.preventDefault()
        navigate(`/cart/${id}?quantity=${quantity}`
        )
    }

    const handleQantity = (e) => {
        setQuantity(e.target.value)
    }
    return (
        <>
            <Header />
            <div className='single-product'>

                {loading ? (
                    <Loading />
                )
                    : error ? (
                        <Message variant="alert-danger">{error}</Message>)
                        :
                        (
                            <div className='product'>
                                <div className='single-image'>
                                    <img src={product.image || product.imageFile || product.imageUrl} alt={product.name}
                                        style={{ whith: "500px", height: "300px" }} />
                                </div>
                                {/* <ProductDetail product={product} key={product._id}/> */}
                                <div className='product-detail'>
                                    <div className='product-info'>
                                        <div className='product-name'>{product.name}</div>
                                    </div>
                                    <p>{product.description}</p>
                                    <div className='product-count'>
                                        <ProductCount product={product} />
                                        <ProductQuantityButton className='btn' onClick={onClick}>
                                            Add To Cart
                                        </ProductQuantityButton>
                                    </div>

                                    {product.countInStock > 0 ? (
                                        <>
                                            <div className='quantity' >
                                                <h6>Quantity</h6>
                                                <select
                                                    value={quantity}
                                                    onChange={handleQantity}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </>
                                    ) : null}

                                </div>
                                {/* Rating */}
                                <div className='rating'>
                                    <RatingSection />
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}
export default SingleProduct
