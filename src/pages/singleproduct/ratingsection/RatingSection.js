import React, {useState}from "react";
import { Link } from "react-router-dom";
import Rating from "../../../components/homeComponents/Rating";
import Message from '../../../components/loadingError/Error'

const RatingSection =() =>{
    const [comment, setComment] =useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        setComment(" ")
    }
    const handleChange =()=>{
        setComment()
    }

    return(
<div className='rating'>
                <div className='reviews'>
                    <h6 className='mb-3'>REVIEWS</h6>
                    <Message variant={"alert-info"} className="message">No Reviews</Message>
                    <div className='description'>
                        <strong>Admin David</strong>
                        <Rating/>
                        <span>Jan 12 2022</span>
                        <div className='alert alert-info'>
                        Only an occasional maid in silk and lace tripped along the 
                        street in high-heeled shoes and clocked stockings, 
                        and no coach and four was in sigh
                        </div>
                    </div>
                </div>
                <div className='customer-review'>
                    <h6>WRITE A CUSTOMER REVIEW</h6>
                    <form className="ratings" onSubmit={handleSubmit}>
                        <div className='ratings'>
                            <strong>Rating</strong>
                            <select className='bg-light'>
                                <option value="">Selecty....</option>
                                <option value="1">1 - poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <div className='my-4'>
                            <strong>Comment</strong>
                            <textarea
                            row="3"
                            className='bg-light'
                            value={comment}
                            onChange={handleChange}/>
                        </div>
                        <button className="btn">SUBMIT</button>
                    </form>
                    <div className="link-review">
                    <Link to="/login" className="login-review">Please <span>"Login"</span> to write a review</Link>
                    </div>
                </div>
            </div>
    )
}
export default RatingSection