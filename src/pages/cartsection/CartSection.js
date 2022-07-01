import React from 'react'
import { Link } from 'react-router-dom'

const  CartSection= ()=> {
  return (
    <div className='container'>
        <div className='alert-info'>
            Total Cart Products
            <Link className='text-success' to="/cart">
                (4)
            </Link>
        </div>
        <div className='cart=items'>
            <div className='remove-button'>
                <i className='fas fa-times'></i>
            </div>
            <div className='cart-image'>
                <img src='' alt='nike image'/>
            </div>
            <div className='cart-text'>
                <Link to="#">
                <h4>Nike Girls Shoe</h4>
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

        <div className='total'>
            <span className='subtotal'>total</span>
            <span className='total-price'>$567</span>
        </div>
        <hr/>
        <div className='cart-buttons'>
            <Link to="/" className='continue-shopping'>
                <button>Continue Shopping</button>
            </Link>
            <div className='shipping'>
                <button>
                    <Link to="shipping" className='text-white'>
                        Checkout
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}
export default CartSection