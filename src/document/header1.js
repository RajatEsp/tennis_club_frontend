import React, { Component } from 'react';
import Cookies from 'js-cookie'
import config from '../config/config'

export default class Header1 extends Component {


  constructor(props) {
    super(props)
    this.state = {
     
    }
    this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'))
   
  }


  logout() {
    Cookies.remove('loginSuccess')
    setTimeout(() => {
      window.location.href = `${config.baseUrl}`
    });
  }

     
      render() {
        return (

  <>
  <section className="mainmenu-area stricky">
  <div className="container">
  <div className="row">
    <div className="col-lg-12 clearfix">
      {/* <div className="logo pull-left" id="after">
        <a href="index.html">
          <img src="images/resources/logo-light.png" alt="Awesome Logo" />
        </a>
      </div> */}
      {Cookies.get('loginSuccess') ?
      <>
       <div className="logo pull-left" id="after_login">
        <a href={`${config.baseUrl}`}>
          <img src="images/resources/logo-light.png" alt="Awesome Logo" />
        </a>
      </div>
      <nav className="main-menu pull-right">
        <div className="navbar-header">     
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
           <div className="navbar-collapse collapse clearfix" id="login_ul">
          <ul className="navigation clearfix">
            <li className="current"><a href={`${config.baseUrl}myprofile`}>My Profile</a></li>
            <li className="dropdown"><a href={`${config.baseUrl}background`}>My Bookings</a>
            </li>
            <li><a href={`${config.baseUrl}packagesplan`}>Package Plans</a></li>
            <li><a href="#">Payment Methods</a></li>
            {/* <li><a href="#">Feedback</a></li> */}
            <li><a href="#">Privacy Settings</a></li>
            <li><a href={`${config.baseUrl}support`}>Contact</a></li>
            <li className="avtar_li">
            <div class="dropdown">
  <a href='' class="dropdown-toggle logos" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="images/avatar.png"/>
  </a>
  <div class="dropdown-menu droplogos" aria-labelledby="dropdownMenuButton">
             <ul>
              <li><a href={`${config.baseUrl}myprofile`} className='dropdown-item profile_a'><i class="fa fa-cogs"></i>Profile</a></li>
               <li><a href='#' className='dropdown-item profile_a'><i class="fa fa-check-circle-o"></i>My Booking</a></li>
               <li><a href='#' className='dropdown-item profile_a'><i class="fa fa-search"></i>Find an Apponent</a></li>
               <li><a href={`${config.baseUrl}`}  onClick={this.logout.bind(this)} className='dropdown-item profile_a'><i class="fa fa-sign-out"></i>Logout</a></li>
              </ul>
              
            </div>
          </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mainmenu-right-box pull-right">
        <div className="appointment-button">
        {/* <a className="thm-btn bgclr-1" href={`${config.baseUrl}`}  onClick={this.logout.bind(this)}>Logout</a> */}
        {/* <div class="dropdown">
  <a href='' class="dropdown-toggle logos" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="images/avatar.png"/>
  </a>
  <div class="dropdown-menu droplogos" aria-labelledby="dropdownMenuButton">
             <ul>
              <li><a href='#' className='dropdown-item profile_a'><i class="fa fa-cogs"></i>Profile</a></li>
               <li><a href='#' className='dropdown-item profile_a'><i class="fa fa-check-circle-o"></i>My Booking</a></li>
               <li><a href='#' className='dropdown-item profile_a'><i class="fa fa-search"></i>Find an Apponent</a></li>
               <li><a href={`${config.baseUrl}`}  onClick={this.logout.bind(this)} className='dropdown-item profile_a'><i class="fa fa-sign-out"></i>Logout</a></li>
              </ul>
              
            </div>
          </div> */}
        </div>
        
      </div> 
      </>:
<>
<div className="logo pull-left">
        <a href={`${config.baseUrl}`}>
          <img src="images/resources/logo-light.png" alt="Awesome Logo" />
        </a>
      </div>
<nav className="main-menu pull-left">
<div className="navbar-header">     
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </button>
</div>
   <div className="navbar-collapse collapse clearfix">
  <ul className="navigation clearfix">
    <li className="current"><a href={`${config.baseUrl}`}>Home</a></li>
    <li className="dropdown"><a href={`${config.baseUrl}background`}>Background</a>
    </li>
    <li><a href={`${config.baseUrl}packagesplan`}>Package Plans</a></li>
    <li><a href="#">Book</a></li>
    <li><a href={`${config.baseUrl}support`}>Contact</a></li>
   </ul>
  </div>
  </nav>
  <div className="mainmenu-right-box pull-right">
  <div className="appointment-button">
  <a className="thm-btn bgclr-1" href={`${config.baseUrl}signup`}>Signup</a>
  </div>
  <div className="appointment-button">
   <a className="thm-btn bgclr-1" href={`${config.baseUrl}Login`}>Login</a>
  </div>
  </div> 
  </>
      }

    </div>   
  </div>
</div>
</section>
</>
        )
    }
} 