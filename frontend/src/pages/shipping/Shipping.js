import React, { useState } from 'react'
import Header from '../../components/profileComponents/mainheader/Header'
import { Link } from "react-router-dom"
import "./shipping.css"

const Shipping = () => {
    const [input, setInput] = useState({
        address: " ",
        city: " ",
        postal: "",
        country: ""
    })

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const message = "Submited"
        if (input.address === '') {
            alert('Filled required')
        } else {
            alert(message)
            setInput({
                address: "",
                city: "",
                postal: "",
                country: ""
            });
        }

    }
    return (
        <>
            <Header />
            <div className='container f-flex login'>
                <form
                    className='form-login'
                    onSubmit={handleSubmit}>
                    <h6>DELIVERY ADDRESS</h6>
                    <input type="text"
                        name='address'
                        value={input.address}
                        placeholder="Enter address"
                        className="input"
                        onChange={handleChange} />
                    <input type="text"
                        name='city'
                        value={input.city}
                        placeholder="Enter city" className="input"
                        onChange={handleChange} />
                    <input type="text"
                        name='postal'
                        value={input.postal}
                        placeholder="Enter postal address" className="input"
                        onChange={handleChange} />
                    <input type="text"
                        name='country'
                        value={input.country}
                        placeholder="Enter country" className="input"
                        onChange={handleChange} />

                    <button type="submit" className="btn" onClick={handleSubmit}>
                        <Link to="/payments" className="link-continue">
                            Continue
                        </Link>
                    </button>
                </form>
            </div>
        </>
    )
}
export default Shipping