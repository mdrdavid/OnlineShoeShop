import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./register.css"

const Register= ()=> {
    const [inputValue, setInputValue]= useState({
        name: "",
        email: "",
        password: ""
    })
    // const [password, setPassword]= useState('')
    // const [name, setName]= useState('')
    // const handleUserName= (e)=>{
    //     setName(e.target.value)
    // }
    const handleChange=(e)=>{
        setInputValue((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    // const handlePassword=(e)=>{
    //     setPassword(e.target.value)
    // }
    const handleSubmit= (e)=>{
        e.preventDefault()
        if(inputValue.password ===''){
            return 
        }
        else{
            setInputValue({ name: "",
            email: "",
            password: ""})
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
            name='name'
            value={inputValue.name}
            onChange={handleChange}/>
            <input 
            type="email" 
            placeholder="Email" 
            name='email'
            className='input-field'
            value={inputValue.email}
            onChange={handleChange}/>
            <input 
            type="password" 
            name='password'
            placeholder="Password" 
            className='input-field'
            value={inputValue.password}
            onChange={handleChange}/>
            
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