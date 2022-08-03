import React, { useState } from 'react'
import "./profiletabs.css"

const ProfileTabs = (e) => {

    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (e) => {
        setUserDetail((userDetail) => ({ ...userDetail, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const message = "Profile Update successful"

        if (userDetail.password === '' && userDetail.cpassword !== userDetail.password) {
            alert('please enter password')
        } else {
            alert(message)
            setUserDetail({ name: "", email: "", password: "", cpassword: "" })
        }
    }
    return (
        <>
            <div className='form-containers'>
                <div className='forms'>
                    <div className='form-inputs'>
                        <label htmlFor='acount-fn'>UserName</label>
                        <input className='form-control' type="text" required />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='acount-fn'>E-mail Address</label>
                        <input className='form-control'
                            type="emial"
                            name='email'
                            value={userDetail.email}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className='forms'>
                    <div className='form-inputs'>
                        <label htmlFor='acount-fn'>New Password</label>
                        <input className='form-control'
                            type="password"
                            name='password'
                            value={userDetail.password}
                            onChange={handleChange} />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='acount-fn'>Confirm Password</label>
                        <input className='form-control'
                            type="password"
                            name='password'
                            value={userDetail.cpassword}
                            onChange={handleChange} />
                    </div>
                </div>
            </div>
            <button type='submit' className="submit-button" onSubmit={handleSubmit}>Update Profile</button>
        </>
    )
}
export default ProfileTabs