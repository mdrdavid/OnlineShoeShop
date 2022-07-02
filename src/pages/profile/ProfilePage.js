import React from 'react'
import Header from "../../components/profileComponents/mainheader/Header"
import Orders from "../orders/OrderSection"
import ProfileTabs from "../../components/profileComponents/ProfileTabs"
import { BrowserRouter } from 'react-router-dom'
import "./profile.css"


const ProfilePage= ()=> {
  return (
    <>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    
    <div className='conatainer'>
      <div className='row align-items-start'>
        <div className='col-lg-4 shadow'>
          <div className='author-card-cover'></div>
          <div className='author-card-avatar'>
            <img src='image' alt='userprofileimage'/>
          </div>
          <div className='author-card-details'>
            <h5 className='author-card-name'>
              <strong>Admin David</strong>
            </h5>
            <span className='author-card-position'>
              <>Joined Dec 12 2021</>
            </span>
          </div>
        </div>
      </div>
      <div className='wizard'>
        <div className='d-flex align-items-center'>
          <div
          className='nav flex-colum items-start'
          id="v-pills-tab"
          role="tablist"
          aria-orientation='vertical'>
            <button
            className='nav-link active'
            id='v-pills-home-tab'
            data-bs-target="v-pills-home"
            type='button'
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true">
              Profile Settings
            </button>
            <button
            className='nav-link d-flex justify-content-between'
            id='v-pills-home-tab'
            data-bs-target="pills"
            type='button'
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false">
              Orders List
              <span className='badget2'>3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='tab-content'
    id='v-pills-tabcontent'>
    </div>
    </>
  )
}
export default ProfilePage