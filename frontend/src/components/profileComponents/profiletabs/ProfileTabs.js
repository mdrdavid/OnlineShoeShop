import React, {useState} from 'react'
import "./profiletabs.css"

const ProfileTabs = ()=> {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
const message ="Profile Update successful"
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
    <div className='form-containers'>
        <div className='forms'>
            <div className='form-inputs'>
                <label htmlFor='acount-fn'>UserName</label>
                <input className='form-control' type="text" required/>
            </div>
            <div className='form-inputs'>
            <label htmlFor='acount-fn'>E-mail Address</label>
                <input className='form-control' 
                type="emial"
                value={email}
                onChange={handleEmail}/>
            </div>
        </div>
        <div className='forms'>
            <div className='form-inputs'>
            <label htmlFor='acount-fn'>New Password</label>
                <input className='form-control' 
                type="password"
                value={password}
                onChange={handlePassword}/>
            </div>
            <div className='form-inputs'>
            <label htmlFor='acount-fn'>Confirm Password</label>
                <input className='form-control' 
                type="password"
                value={password}
                onChange={handlePassword}/>
            </div>
        </div>
    </div>
    <button type='submit' className ="submit-button" onSubmit={handleSubmit}>Update Profile</button>
    </>
  )
}
export default ProfileTabs