import React, { useEffect, useState} from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import "./singleproduct.css"
import {useDispatch, useSelector } from "react-redux"
import {listProductDetails} from "../../Redux/Actions/ProductActions"
import ProductCount from './productcount/ProductCount'
import RatingSection from './ratingsection/RatingSection'
import Loading from '../../components/loadingError/Loading'
import Message from '../../components/loadingError/Error'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const SingleProduct= ()=> {
    const navigate = useNavigate()
    // const [product, setProduct] =useState({ })
    const { id } = useParams();

    const dispatch = useDispatch()

    const productDetails = useSelector((state)=>state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
        // const fetchproduct = async () =>{
        //     // const {data} = await axios.get(`${URL}/api/products/:id${match.params.id}`)
        //     const {data} = await axios.get(`${URL}/api/products/:id`)
        //     setProduct(data)
        // };
        // fetchproduct()

    }, [dispatch, id]);


    const [quantity, setQuantity] = useState(1)
    const addToCartHandler = (e) => {
        e.preventDefault()
        navigate( `/cart/${id}?quantity=${quantity}`
        )
    }

    const handleQantity =(e)=>{
        setQuantity(e.target.value)
    }
    return (
        <>
            <Header />
            <div className='single-product'>

                { loading ? (
                    <Loading/>
                ) 
                :error ? (
                    <Message variant="alert-danger">{error}</Message>)
                :
                (
                    <div className='product'>
                    <div className='single-image'>
                        <img src={product.image || product.imageFile || product.imageUrl} alt={product.name}
                            style={{ whith: "500px", height: "300px" }} />
                    </div>
                    <div className='product-detail'>
                        <div className='product-info'>
                            <div className='product-name'>{product.name}</div>
                        </div>
                        <p>{product.description}</p>
                        <div className='product-count'>
                            <ProductCount product={product} />
                            <button className='btn'onClick={addToCartHandler}>
                        Add To Cart
                    </button>
                        </div>
                        
                        {product.countInStock > 0 ? (
                <>
                    <div className='quantity' >
                        <h6>Quantity</h6>
                        <select
                        value={quantity}
                        onChange ={handleQantity}
                        >
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            ) : null }

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
