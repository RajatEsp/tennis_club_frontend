import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';

export default class background extends Component {
     
    render() {
        return (

<>
<div>
<div className="boxed_wrapper">
  
  <Header/>
    
  <section className="breadcrumb-area" style={{backgroundImage: 'url(images/resources/breadcrumb-bg.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbs">
            <h1>MBPSPORTS Methodology  &amp;  Philosophy </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  <section className="breadcrumb-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="left pull-left">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><i className="fa fa-angle-right" aria-hidden="true" /></li>
              <li className="active">methodology</li>
            </ul>
          </div>
             
        </div>
      </div>
    </div>
  </section>
  
  <section className="exercise-plan-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="video-holder">
            <img src="img/mtc-wallpaper-2.jpg" alt="Awesome Video Gallery" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="text-holder">
            <div className="sec-title">
             
              <h1>METHODOLOGY</h1>
              <p> Our Methodology is truly 21st Century with regards to sports education and has been tagged as ‘globally innovative and market-leading by the largest Educational Platform in the world.</p>
              <p>Mr Chris Mullins, our Australian born founder,  has uniquely blended  sports, academics and business to create a delivery Model that is underpinned by Key Components.</p>
              <p> MBPSPORTS has developed a best of breed sports education platform. This total educational solution has been refined over 40+ years while teaching students of all ages and levels.</p>
              <p> We understand that sports and games play an important role in achieving healthy balanced lifestyles.</p>
              <p>Studies clearly indicate that racket sports responsibly develop important physical, physiological and physiological traits.</p>
              <p>It improves physical health and also effectively refines key emotional components that improve: stress management, planning, development of productive routines/habits, problem solving and coping with success and failures.</p>
              <p>These traits are currently not appropriately targeted and progressively measured in the majority of academic curriculums.</p>
              <p>The education of sports and in particular racket sports as a key platform to nurture Emotional Learning  motivates  us  to continually revise, improve and deliver a standardized sports educational solution that we hope can one day be readily available to all.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12">
          <div className="text-holder">
            <div className="sec-title">
              
              <h1 className="mt-0">MBPSPORTS PHILOSOPHY</h1>
              <p>Ensure all our clients and site users enjoy safe, positive and productive sports interactions.</p>
              <p>Outcomes achieved by delivering progressive sessions guided by our Methodology.</p>
              <p>Knowledge, Fitness, Technique and Experience consistently Measured are key elements.</p>
              <p>Provide a sports educational experience that goes beyond keeping physically fit and healthy.</p>
              <p>Sessions are customized to meet the specific requirements of both individuals and groups.</p>
              <p>Be attentive to the important Emotional Learning “EQ” components in all sessions and pathways.</p>
              <p>Assist all clients, whether recreational or professionals to reach their full potentials.</p>
              <p>Essential character traits result from participating in cooperative &amp; competitive games.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="video-holder">
            <img src="img/book.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <br />
 
  <Footer/>
 
 
  
</div>


</div>
</>
        )
    }
}