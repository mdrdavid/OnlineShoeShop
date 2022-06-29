import React from "react";
import {Link} from "react-router-dom";
const TopHeader = ()=>{
    return (
        <div>
            <div className='Announcement'>
        <div className='container'>
          <div className='col-md-6 d-flex align-items-center display-none'>
            <p>+256 771626807</p>
            <p>david775@gmail.com</p>
          </div>
          <div className='col-md-6 d-flex align-items-center display-none'>
            <Link to="">
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to="">
              <i className='fab fa-instagram'></i>
            </Link>
            <Link to="">
              <i className='fab fa-linkedin-in'></i>
            </Link>
            <Link to="">
              <i className='fab fa-youtube'></i>
            </Link>
            <Link to="">
              <i className='fab fa-pinterest-p'></i>
            </Link>
          </div>
        </div>
      </div>
        </div>
    )

}
export default TopHeader;