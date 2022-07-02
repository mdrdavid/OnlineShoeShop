import React from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import { BrowserRouter, Link } from 'react-router-dom'
import './notfound.css'

const  NotFound= ()=> {
  return (
      <>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    <div className='container'>
        <div className='image'>
            <h4 className='text-center'>Page Not Found</h4>
            <img
            style ={{width: "100%", height: "300px", objective: "contain"}}
            src=""
            alt="Not-found"
            />
            <button className='btn-success'>
                <Link to="/" className='text-white text-decoration- none'>
                    Home page
                </Link>
            </button>
        </div>
    </div>
    </>
  )
}
export default NotFound