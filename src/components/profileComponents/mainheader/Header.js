import React from 'react'
import { Link } from "react-router-dom"
import TopHeader from '../topheader/TopHeader';
import logo from "../../../assets/images/logo.jpg"
import { useState } from "react"
import "./header.css"
import {AiFillShopping} from "react-icons/ai"

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
                        <img alt='logo' src={logo} width={60} height={60}/>
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
                            search
                        </button>
                    </form>
                    </div>
                    <div className='col-md-3 d-flex align-items-center justify-content-end'>
                        <div className='btn-group'>
                            <button
                                type='button'
                                className='name-button dropdown-toggle'
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false" >
                                <i className='fas fa-user'></i>
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
                            <span className='badge'>4</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default Header
