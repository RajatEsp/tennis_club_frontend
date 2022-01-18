import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';

export default class juniordetail extends Component {

    render() {
        return (
 
         <>
<div className="boxed_wrapper">
         
         <Header/>
         <Toaster/>
    <section className="breadcrumb-area" style={{backgroundImage: 'url(images/resources/breadcrumb-bg.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbs">
            <h1>Junior Tennis</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start breadcrumb bottom area*/}     
  <section className="breadcrumb-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="left pull-left">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><i className="fa fa-angle-right" aria-hidden="true" /></li>
              <li className="active">Junior Tennis</li>
            </ul>
          </div>
          {/* <div class="right pull-right">
              <a href="#">
                  <span><i class="fa fa-share-alt" aria-hidden="true"></i>Share</span> 
              </a>   
          </div>  */}   
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb bottom area*/}
  {/*Start exercise plan area*/}
  <section className="exercise-plan-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="video-holder">
            <img src="img/pre-school-classes-1024x400-1.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="text-holder">
            <div className="sec-title">
              {/* <h3>Day to Day</h3> */}
              <h1>Junior Tennis </h1>
              <p>Junior Tennis is a fun, responsible and productive way of introducing children to the sport of tennis.</p>
              <p>Fundamentals and progressions encourage positive interactions and a desire to practice and play tennis regularly.</p>
              <p>We apply proven MBPSPORTS Junior Tennis  progressions to improve Tennis proficiency.</p>
              <p>Active participation by Parents or Guardian is encouraged so they can assist the children between their scheduled training.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12">
          <div className="text-holder">
            <div className="sec-title">
              {/* <h3>Day to Day</h3> */}
              <h1 className="mt-0">Junior Groups </h1>
              <p>Junior Group Tennis is a fun and productive way of introducing groups of children to sport through tennis.</p>
              <p>We assist children to refine their strengths with a variety group activities and encourage them to share their successes and learning experiences.</p>
              <p>Competencies gained via individual sessions are reinforced in a positive yet competitive safe environment.</p>
              <p>Progressions are structured to ensure no individual is left behind and an emphasis is placed on shared success and nurturing positive and supportive interactions.</p>
              <p>Juniors continually improve their understanding and competencies of tennis fundamentals while improving general and tennis specific fitness.</p>
              <p>MBPSPORTS Kidz Tennis (typically age 2 to 5 years) encourage an active participation from parents and / or guardians in both our Junior and Group Coaching sessions.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="video-holder">
            <img src="img/kidz-tennis.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End exercise plan area*/}
  {/*Start featured area*/}
  <section className="featured-area">
    <div className="container">
      <div className="row">
        {/*Start single item*/}
        <div className="col-md-4">
          <div className="single-item text-center">
            <div className="icon-holder">
              <span className="flaticon-note-1" />
            </div>
            <div className="text-holder">
              <h3>Regular Consultation</h3>
              <p>Our financial experts help analyze financial data, to create steady financial foundation.</p>
            </div>
          </div>
        </div>
        {/*End single item*/}
        {/*Start single item*/}
        <div className="col-md-4">
          <div className="single-item text-center">
            <div className="icon-holder">
              <span className="flaticon-book" />
            </div>
            <div className="text-holder">
              <h3>On-spot traning Guidance</h3>
              <p>Electronic Materials has servd the semicondctor industry as a leading-edge materials.</p>
            </div>
          </div>
        </div>
        {/*End single item*/}
        {/*Start single item*/}
        <div className="col-md-4">
          <div className="single-item text-center">
            <div className="icon-holder">
              <span className="flaticon-computer" />
            </div>
            <div className="text-holder">
              <h3>Video - Lesson pack</h3>
              <p>Electronic Materials has served the semiconductor industry as a leading-edge materials.</p>
            </div>
          </div>
        </div>
        {/*End single item*/}
      </div>
    </div>
  </section>
  {/*End featured area*/}
  {/*Start consultations area*/}
  <section className="consultations-area" style={{backgroundImage: 'url(images/resources/consultation-bg.jpg)'}}>
    <div className="container wow zoomIn" data-wow-delay="100ms" data-wow-duration="900ms">
      <div className="sec-title text-center">
        {/* <h3>Lets Talk</h3> */}
        <h1>CONTACT US</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                <div className="consultations-form-box">
                  <form id="consultations-form" name="consultations-form" action="http://st.ourhtmldemo.com/new/Healthcoach-Preview/inc/sendmail.php" method="post">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="form_name" defaultValue placeholder="Name *" required />
                        <input type="email" name="form_email" defaultValue placeholder="Email *" required />
                        <select className="selectmenu">
                          <option selected="selected">Select Service</option>
                          <option>Balance Body Mind</option>
                          <option>Physical Activity</option>
                          <option>Support &amp; Motivation</option>
                          <option>Exercise Program</option>
                          <option>Healthy Daily Life</option>
                          <option>First Hand Advice</option>
                        </select>   
                      </div>
                      <div className="col-md-6">
                        <textarea name="form_message" placeholder="Your Message.." required defaultValue={""} />    
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bgclr-1" type="submit">Submit Now</button>   
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">   
                <div className="contact-info">
                  <h2>Contact Details</h2>
                  <ul>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-arrows" />
                      </div>
                      <div className="text-holder">
                        <h5>Address: 121, Park Drive, Varick<br />Str, New York, NY 10012, USA</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-technology" />
                      </div>
                      <div className="text-holder">
                        <h5>Phone: (123) 0200 12345 &amp;<br />1800-45-678-9012</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-note" />
                      </div>
                      <div className="text-holder">
                        <h5>Email: Mailus@Healthcoach.com</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Start pricing plan area*/}
  <section className="pricing-plan-area">
    <div className="container">
      <div className="sec-title text-center">
        <h3>Pricing &amp; Plans</h3>
        <h1>Package Plans</h1>
      </div>
      <div className="row">
        {/*Start single price box*/}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>Bronze Plan</h3>
              </div>
              <div className="package">
                <h1><span>$</span>29<b>/Mo</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
                <li>1 Month of Trainings</li>
                <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li>
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
        {/*End single price box*/}
        {/*Start single price box*/}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>Silver Plan</h3>
              </div>
              <div className="package">
                <h1><span>$</span>49<b>/Mo</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
                <li>3 Month of Trainings</li>
                <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li>
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
        {/*End single price box*/}
        {/*Start single price box*/}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>Gold Plan</h3>
              </div>
              <div className="package">
                <h1><span>$</span>99<b>/Mo</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
                <li>1 Year of Trainings</li>
                <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li>
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
        {/*End single price box*/}
      </div>
    </div>    
  </section>
  <Footer/>
        </div>
   </>
  )
       }

}