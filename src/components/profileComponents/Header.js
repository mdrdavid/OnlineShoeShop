import React from 'react'
import { Link } from "react-router-dom"
import TopHeader from '../topheader/TopHeader';

const Header = () => {
  return (
    <div>
      {/* to header */}
      <TopHeader/>
      <div className='header'>Mobile Header
        <div className='container'>
          {/* Mobile Header */}
          <div className='mobile-header'>
            <div className='container'>
              <div className='row'>
                <div className='col-6 d-flex align-items-center'>
                  <Link className='navbar-brand' to="/">
                    <img alt='logo src="images/logo.png' />
                  </Link>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <form className='input-group'>
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                  <div className='col-md-3 d-flex align-items-center justify-content-end'>
                    <div className='btn-group'>
                      <button
                        type='button'
                        className='name-button dropdown-toggle'
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" >
                        <i className='fas fa-user'></i>
                      </button>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to="/profile">
                          Profile
                        </Link>
                        <Link className='dropdown-item' to="/#">
                          Logout
                        </Link>
                      </div>
                    </div>
                    <Link to="/cart" className='cart-mobile-icon'>
                      <i className='fas fa-shopping-bag'></i>
                      <span className='badge'>4</span>
                    </Link>
                  </div>
                  <div className='col-12 d-flex align-items-center'>
                    <form className='input-group'>
                      <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Search"
                      />
                      <button type='submit' className='search-button'>
                        search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* PC HEADER */}

      <div className='pc-header'>
              <div className='row'>
                <div className='col-md-3 col-4 d-flex align-items-center'>
                  <Link className='navbar-brand' to="/">
                    <img alt='logo src="images/logo.png' />
                  </Link>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <form className='input-group'>
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                  <div className='col-md-3 d-flex align-items-center justify-content-end'>
                    <div className='btn-group'>
                      <button
                        type='button'
                        className='name-button dropdown-toggle'
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" >
                        <i className='fas fa-user'></i>
                      </button>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to="/profile">
                          Profile
                        </Link>
                        <Link className='dropdown-item' to="/#">
                          Logout
                        </Link>
                      </div>
                    </div>
                    <Link to="/cart" className='cart-mobile-icon'>
                      <i className='fas fa-shopping-bag'></i>
                      <span className='badge'>4</span>
                    </Link>
                  </div>
                  <div className='col-12 d-flex align-items-center'>
                    <form className='input-group'>
                      <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Search"
                      />
                      <button type='submit' className='search-button'>
                        search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

  )
};
export default Header
