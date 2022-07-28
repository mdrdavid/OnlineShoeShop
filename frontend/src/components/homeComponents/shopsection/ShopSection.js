import React ,{useEffect}from 'react'
import Loading from "../../loadingError/Loading"
import Message from "../../loadingError/Error"
import {useDispatch, useSelector } from "react-redux"
import "./shopsection.css"
import { listProduct} from '../../../Redux/Actions/ProductActions'
import { Product } from './Product';


const ShopSection = () => {
    const dispatch = useDispatch()

    //productList from store.js
    const productList = useSelector((state)=>state.productList)
    const {loading, error, products}= productList
    useEffect(()=>{
        dispatch(listProduct())
    },[dispatch])

    return (
        <div className='shopsection'>
            <div className='shopContainer'>
                {loading ? (
                <div className='loading'><Loading/></div>) 
                : 
                error ? (<p><Message variant= "alert danger">{error}</Message></p>)
                    : (
                        Array.isArray(products) ?
                            products.map(product => (
                                <Product product={product} key={product._id} />
                            )) : null
                    )
                }
                {/* <Pagination/> */}
            </div>
        </div>
    )
}
export default ShopSection
