import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../components/profileComponents/mainheader/Header'
import "./register.css"

const Register= ()=> {
    
    <Header/>
   
  return (
    <div className='container d-flex flex-column'>
        <form className='login'>
            <input type="text" placeholder="Username" className='input'/>
            <input type="email" placeholder="Email" className='input'/>
            <input type="password" placeholder="Password" className='input'/>
            
            <button type='submit' className='btn'>Register</button>
            <p>
                <Link to={"/login"}>
                    I Have An Account <strong>Login</strong>
                </Link>
            </p>
        </form>
    </div>
  )
}
export default Register