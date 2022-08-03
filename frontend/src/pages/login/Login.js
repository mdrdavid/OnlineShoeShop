import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/profileComponents/mainheader/Header';
import "./login.css"

const Login= ()=> {
    const [input, setInput]= useState({
        email:" ",
        password:" "
    })
 
    const handleChange=(e)=>{
        setInput((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    
    
    const handleSubmit= (e)=>{
        e.preventDefault();
const message ="Login success"
        if(input.password===''){
            alert('please enter password')
        } else{
alert(message)
setInput({ email: "", password: ""});
        }
        
    }

return (
    <>
    <Header/>
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type="email"
            value={input.email}
            className="form-input"
            onChange={handleChange}
            name="email"
            placeholder='Email'/>
            <input type="pasword"
            value={input.password}
            name="password"
            className="form-input"
            onChange={handleChange}
            placeholder='Password'/>
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
