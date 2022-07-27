import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./cartscreen.css"
import {useParams} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { addToCart } from '../../Redux/Actions/CartActions'
import {useDispatch, useSelector} from 'react-redux'


const  CartSection= ({match})=> {
    const dispatch = useDispatch()
    const location = useLocation;
    // console.log(location);
    const {productId} =useParams();

    // const productId =match.paramis.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1
    // console.log(productId)
    // console.log(qty)


    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart;
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    
  return (
      <>
    <Header/>
    <div className='container'>

        {
            cartItems.length === 0 ? (
                <div className='alert-text'>
                    Your cart is empty
                    <Link className='btn -btn-success'
                    to="/"
                    style={{fontSize: "12px"}}>
                        SHOPPING NOW
                    </Link>
                </div>
            )
            :
            (
                <>
                     <div className='alert-info'>
            Total Cart Products
            <Link className='text-success' to="/cart">
                ({cartItems.length})
            </Link>
        </div>
        {/* cartItem */}
        {
           
        //    Array.isArray(products) ?
        //     products.map(product => (
        //         <Product product={product} key={product._id} />
        //     )) : null

            Array.isArray(cartItems) ?
            cartItems.map((item)=>{
        return  <div className='cart-items'>
            <div className='remove-button'>
                <i className='fas fa-times'></i>
            </div>
            <div className='cart-image'>
                {/* <img src={"/assets/images/shoes/shoe16.jpg"} alt='nike' */}
                <img src={item.imgageUrl} alt={item.name}
                style={{width:"250px", height:"200px"}}/>
            </div>
            <div className='cart-text'>
                <Link to={`/poducts/${item.product}`} className='shoe-link'>
                <h4 className='shoe-name'>{item.name}</h4>
                </Link>
            </div>
            <div className='cart-qty'>
                <h6>QUANITY</h6>
                <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className='cart-price'>
                <h6>SUB TOTAL</h6>
                <h4>$456</h4>
            </div>
        </div>
            })
            :
            null
        }
        

        <div className='total'>
            <span className='subtotal'>total</span>
            <span className='total-price'>$567</span>
        </div>
        <hr/>
        <div className='cart-buttons'>
            <div className='continue-shop'>
            <Link to="/" className='continue-shopping'>
                <button className='continue'>Continue Shopping</button>
            </Link>
            </div>
            <div className='ship'>
                <button className='shipping'>
                    <Link to="/shipping" className='text'>
                        Checkout
                    </Link>
                </button>
            </div>
        </div>
                </>
            )
        }
    </div>
    </>
  )
}
export default CartSection