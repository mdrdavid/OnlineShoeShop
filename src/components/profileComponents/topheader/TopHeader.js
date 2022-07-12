import React from "react";
import {Link} from "react-router-dom";
import "./topheader.css"
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
const TopHeader = ()=>{
    return (
        <div>
      <div className='Announcement'>
        <div className='topcontainer'>
          <div className='toplinks'>
            <p className="tel">+256 771626807</p>
            <p className="email">dmatovu775@gmail.com</p>
          </div>
          <div className='toplinks icons'>
            <Link to="">
              <i className='fab fa-facebook-f icon '><BsFacebook /></i>
            </Link>
            <Link to="">
              <i className='fab fa-instagram icon'><AiOutlineInstagram /></i>
            </Link>
            <Link to="">
              <i className='fab fa-linkedin-in icon'><FaLinkedin /></i>
            </Link>
            <Link to="">
              <i className='fab fa-youtube icon'><BsYoutube /></i>
            </Link>
            <Link to="">
              <i className='fab fa-twitter icon'><BsTwitter/></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}
export default TopHeader;