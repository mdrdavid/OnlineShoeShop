import React, { useState, useEffect } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import "./singleproduct.css"
import ProductCount from './productcount/ProductCount'
import RatingSection from './ratingsection/RatingSection'
import axios from 'axios'
import { URL } from "../../components/Constants"


const SingleProduct= ({match})=> {
    const [product, setProduct] =useState({ })

    useEffect(() => {
        const fetchproduct = async () =>{
            // const {data} = await axios.get(`${URL}/api/products/:id${match.params.id}`)
            const {data} = await axios.get(`${URL}/api/products/:id`)
            setProduct(data)
        };
        fetchproduct()

    }, [match]);
    return (
        <>
            <Header />
            <div className='single-product'>
                <div className='product'>
                    <div className='single-image'>
                        <img src={product.image || product.imageFile || product.imageUrl} alt={product.name}
                        style={{whith: "500px", height: "300px"}} />
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
