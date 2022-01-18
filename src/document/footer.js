import React, { Component } from 'react';

import config from '../config/config'

export default class Footer extends Component {
     
    render() {
        return (

<>
<footer className="footer-area">
<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="single-footer-widget martop-minus pd-bottom50">
        <div className="footer-logo">
          <a href="index.html">
            <img src="images/footer/logo-light.png" alt="Awesome Footer Logo" />
          </a>
        </div>
        <ul className="footer-contact-info">
          <li>
            <div className="icon-holder">
              <span className="flaticon-arrows" />
            </div>
            <div className="text-holder">
              <h5>Address: 121, Park Drive, Varick<br />Str, New York, NY 10012, USA</h5>
            </div>
          </li>
        </ul>
        <br />
        <ul className="footer-social-links pull-left">
          <li><a href="https://facebook.com/"><i className="fa fa-facebook" /></a></li>
          <li><a href="https://twitter.com/"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://myaccount.google.com/"><i className="fa fa-google-plus" /></a></li>
          <li><a href="https://linkedin.com/"><i className="fa fa-linkedin" /></a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="single-footer-widget pd-bottom50">
        <div className="title">
          <h3>Explore</h3>
          <span className="border" />
        </div>
        <ul className="usefull-links fl-lft">
          {/* <li><a href={`${config.baseUrl}`}>Home</a></li> */}
          <li><a href={`${config.baseUrl}background`}>Background</a></li>
          <li><a href={`${config.baseUrl}packagesplan`}>Package Plan</a></li>
          <li><a href="#">Booking</a></li>
        </ul>
        <ul className="usefull-links">
          <li><a href={`${config.baseUrl}privacyandpolicy`}>Privacy Policy</a></li>
          <li><a href={`${config.baseUrl}termsandcondn`}>Terms and Condition</a></li>
          <li><a href={`${config.baseUrl}faq`}>FAQ</a></li>
          
        </ul>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="single-footer-widget clearfix">
        <div className="title">
          <h3>Working Hours</h3>
        </div>
        <ul className="working-hours">
          <li>Mon-Friday: <span>9.00 to 18.00</span></li>
          <li>Saturday: <span>9.00 to 18.00</span></li>
          <li>Sunday: <span className="closed">Closed</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</footer>  
<section className="footer-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="copyright-text">
                    <p>Copyrights © 2021 All Rights Reserved, Powered by <a href="#">Tennis Coching.</a></p> 
                  </div>
                </div>
                <div className="col-md-4">
                  <ul className="footer-social-links">
                    <li><a href="https://facebook.com/"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://twitter.com/"><i className="fa fa-twitter" /></a></li>
                    <li><a href="https://myaccount.google.com/"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="https://linkedin.com/"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
</>
        )
    }
} 