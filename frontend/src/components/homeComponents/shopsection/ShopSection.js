import React ,{useEffect, useState}from 'react'
import Rating from '../Rating'
// import Pagination from '../../homeComponents/pagination/Pagination'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./shopsection.css"
import { URL } from '../../Constants'

const Product = (props) => {
    console.log(props)
    const { product } = props
    console.log(product.imageUrl || product.imageFile || product.image)
    return (
        <div
            className='shop'
            key={product._id} >
            <div className='border-product'>
                <Link to={`/products/${product._id}`}>
                    <div className='shopBack'>
                        <img src={product.imageUrl || product.imageFile || product.image} alt={product.name}
                            style={{ width: "100%", height: "200px" }} />
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
    const [products, setProducts] =useState({})
    useEffect(()=>{
const fetchproduct =async ()=>{
const {data} = await axios.get(`${URL}/api/products`)
setProducts(data)
};
fetchproduct();
    },[])

    return (
            <div className='shopsection'>
                <div className='shopContainer'>
                {
                    Array.isArray(products) ? 
                    products.map(product => (
                        <Product product={product} key={product._id} />
                    )): null}
                    {/* <Pagination/> */}
                </div>
            </div>
    )
}
export default ShopSection
