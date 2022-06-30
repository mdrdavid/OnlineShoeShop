import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/profileComponents/mainheader/Header';

const Login= ()=> {
    const [value, setValue]= useState({
        password: '',
        email: ''
    })
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        setValue('')
    }
  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type="email"
            value={value}
            className="input"
            onChange={handleChange}
            placeholder='Email'/>
            <input type="pasword"
            value={value}
            className="input"
            onChange={handleChange}
            placeholder='pasword'/>
            <button type='btn-submit'>Submit</button>
            <p>
                <Link to={to="/register"}>Create Account</Link>
            </p>

        </form>

    </div>
  )
}
export default Login;
