import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/profileComponents/mainheader/Header';
import "./login.css"

const Login= ()=> {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const handleChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
const message ="Login success"
        if(password===''){
            alert('please enter password')
        } else{
alert(message)
            setEmail('')
            setPassword('')
        }
    }

return (
    <>
    <Header/>
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type="email"
            value={email}
            className="form-input"
            onChange={handleChange}
            placeholder='Email'/>
            <input type="pasword"
            value={password}
            className="form-input"
            onChange={handlePassword}
            placeholder='pasword'/>
            <button type='submit' className='btn'>Login</button>
            <p> 
            <Link to={"/register"} className="toregister">Create Account</Link>
            </p>

        </form>

    </div>
    </>
)
}
export default Login;
