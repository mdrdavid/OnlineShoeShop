import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./register.css"

const Register= ()=> {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [name, setName]= useState('')
    const handleUserName= (e)=>{
        setName(e.target.value)
    }
    const handleChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        if(password ===''){
            return 
        }
        else{
            setEmail('')
            setPassword('')
            setName('')
        }
    }

return (
    <>
    <Header/>
    <div className='register-container d-flex flex-column'>
        <form className='register-form ' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Username" 
            className='input-field'
            value={name}
            onChange={handleUserName}/>
            <input 
            type="email" 
            placeholder="Email" 
            className='input-field'
            value={email}
            onChange={handleChange}/>
            <input 
            type="password" 
            placeholder="Password" 
            className='input-field'
            value={password}
            onChange={handlePassword}/>
            
            <button type='submit' className='btn'>Register</button>
            <p>
                <Link to={"/login"} className="tologin">
                    I Have An Account <strong>Login</strong>
                </Link>
            </p>
        </form>
    </div>
    </>
  )
}
export default Register