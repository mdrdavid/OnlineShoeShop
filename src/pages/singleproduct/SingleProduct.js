import React, { useState, useEffect } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import Products from "../../components/data/Products"
import "./singleproduct.css"
import ProductCount from './productcount/ProductCount'
import RatingSection from './ratingsection/RatingSection'
// import axios from 'axios'


const SingleProduct= ({match})=> {
    // const [product, setProduct] =useState({ })
    // // const product =Products.find((p) => p._id === match.params._id)

    // useEffect(() => {
    //     const fetchproduct = async () =>{
    //         const {data} = await axios.get(`api/products/${match.params.id}`)
    //         setProduct(data)
    //     };
    //     fetchproduct()

    // }, []);
    const product= Products
    return (
        <>
            <Header />
            <div className='single-product'>
                <div className='product'>
                    <div className='single-image'>
                        <img src={product.image || product.imageFile || product.imageUrl} alt={product.name} />
                    </div>
                    <div className='product-detail'>
                        <div className='product-info'>
                            <div className='product-name'>{product.name}</div>
                        </div>
                        <p>{product.description}</p>
                        <div className='product-count'>
                            <ProductCount />
                        </div>

                    </div>
                </div>
                {/* Rating */}
                <div className='rating'>
                    <RatingSection />
                </div>
            </div>
        </>
    )
}
export default SingleProduct
