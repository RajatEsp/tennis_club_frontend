

import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';

export default class detail extends Component {

  constructor(props) {
		super(props)
		this.state = {
      getoverservice : ''
	   		};
		const { match: { params } } = this.props;
		this.id = params.id;

	}

  componentDidMount() {
       
    this.setState({
      coachid : this.coachid
    })
    
  this.getcoachData(this.id);
  
}


async getcoachData(id) {
  await axios({
    method: 'get',
    url: `${config.apiUrl}getoverservicesid/`+id
    
  })
    .then(response => {
      console.log('ABC',response.data.response)
      if (response.data.success === true) {
        // let coachData = response.data.response;
         this.setState({
          getoverservice : response.data.response,
         
        })
      
      }
    })
}



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
         <h1>{this.state.getoverservice.servicename}</h1>
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
         <img src="img/christian-tenguan-FidoLuUvKK8-unsplash-2500x1666.jpg" alt="" />
       </div>
     </div>
     <div className="col-lg-6 col-md-12">
       <div className="text-holder">
         <div className="sec-title">
           {/* <h3>Day to Day</h3> */}
           <h1>Group Option</h1>
           <p>Tennis encourages participants to measure their relative levels directly against one another individually or in teams.</p>
           <p>MBPSPORTS customized interactive group sessions offer a pathway of measurable improvement. Our sessions are offered on a continual weekly or bi-weekly basis.  Variations include aggregate, drills, ladders and ad-hoc internal tournaments.</p>
           <p>Interactive sessions are structured in the form of drills, workshops or match play.</p>
           <p>Sessions encourage participants to sharpen competencies and gain confidence. Regular inclusion results in players in maximizing the enjoyment they gain from their social and competitive tennis played elsewhere.</p>
           <p>Interactive tennis offers a variety of challenging and enjoyable options to improve tennis and fitness while developing friendships that often last a lifetime.</p>
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
           <h1 className="mt-0">Private Option</h1>
           <p>Private sessions can be either 1:1 or 2:1 with a coach. In these sessions our coaches identify individuals specific strengths and areas that require more attention.</p><br />
           <p>Programs are designed to meet the specific level of each client to ensure the base is created to build upon for progression  and continual improvement .</p><br />
           <p>The differentiating single factor of our coaching methodology is that we encourage our students to own their future practice sessions and relative improvement by ensuring they understand all areas of our model. This guarantees they can  practice away from the direct influence of a coach / trainer and /or use the knowledge gained to effectively train others.</p>
         </div>
       </div>
     </div>
     <div className="col-lg-6 col-md-12">
       <div className="video-holder">
         <img src="img/renith-r-MLU_X1d3ofQ-unsplash-scaled.jpg" alt="" />
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

</div>
   </>
  )
  }
}