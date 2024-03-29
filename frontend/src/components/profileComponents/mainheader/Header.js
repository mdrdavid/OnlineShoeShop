import React from 'react'
import { Link } from "react-router-dom"
import TopHeader from '../topheader/TopHeader';
import { useState } from "react"
import "./header.css"
import {AiFillShopping} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"

const Header = () => {
    const [search,setSearch]= useState('')
    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setSearch('')
    }
    return(
        <div className='pc-header'>
            <TopHeader />
            <div className='head-container'>
                <div className='col-md-3 col-4 d-flex align-items-center'>
                    <Link className='navbar-brand' to="/">
                        <img alt='logo' src="/assets/images/shoe10.jpg" width={60} height={60}/>
                    </Link>
                </div>
                <div className='links'>
                    <form className='input-group' onSubmit ={handleSubmit}>
                        <input
                            type="search"
                            className="search-input"
                            placeholder="Search"
                            value={search}
                            onChange={handleChange}
                        />
                        <button type="submit" className="search-button">
                           SEARCH
                        </button>
                    </form>
                    </div>
                    <div className=' buttons col-md-3 d-flex align-items-center justify-content-end'>
                        <div className='btn-groups'>
                            <button
                                type='button'
                                className='name-button dropdown-toggle'
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false" >
                                <i className='fas fa-user'><FaUserCircle/></i>
                            </button>
                            <div className='dropdown-menu'>
                                <Link className='dropdown-item' to="/profile">
                                    Profile
                                </Link>
                                <Link className='dropdown-item' to="/#">
                                    Logout
                                </Link>
                            </div>
                        </div>
                        <Link to="/cart" className='cart-mobile-icon'>
                            <i className='shopping-bag'><AiFillShopping/></i>
                            <span className='badge'><sup>4</sup></span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default Header
