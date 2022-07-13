import React, { useState } from 'react'
import "./calltoAction.css"



const  CalltoActionSection= () =>{
    const [email,setEmail]= useState('')
    const handleChange =(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setEmail('')
    }

  return (
    <div className='subscription-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className='subscribe-head'>
                        <h5>DO you need more tips</h5>
                        <p>Signup for free and get the latest tips</p>
                        <form className='form-section' onSubmit={handleSubmit}>
                            <input className="input" type="text" name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder='Your email...'/>
                            <input  className="btn-submit"type="submit" name="subscribe" value="Yes i want"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CalltoActionSection