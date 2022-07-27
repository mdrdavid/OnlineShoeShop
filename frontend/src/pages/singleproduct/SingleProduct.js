import React, { useEffect } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import "./singleproduct.css"
import {useDispatch, useSelector } from "react-redux"
import {listProductDetails} from "../../Redux/Actions/ProductActions"
import ProductCount from './productcount/ProductCount'
import RatingSection from './ratingsection/RatingSection'
import Loading from '../../components/loadingError/Loading'
import Message from '../../components/loadingError/Error'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { URL } from "../../components/Constants"


const SingleProduct= ({match})=> {
    // const [product, setProduct] =useState({ })
    const { productId } = useParams();
    // const productId = match.params.id
    const dispatch = useDispatch()

    const productDetails = useSelector((state)=>state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(productId))
        // const fetchproduct = async () =>{
        //     // const {data} = await axios.get(`${URL}/api/products/:id${match.params.id}`)
        //     const {data} = await axios.get(`${URL}/api/products/:id`)
        //     setProduct(data)
        // };
        // fetchproduct()

    }, [dispatch, productId]);

    // const { productId } = useParams
    // const AddToCartHandler = (e) => {
    //     e.preventDefault()
    //     setQuantity(
    // `/cart${productId}?quantity=${quantity}`
    //     )
    // }
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
                            <ProductCount product={product}/>
                        </div>

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
