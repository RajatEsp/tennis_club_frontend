import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import Cookies from 'js-cookie';

export default class packagesplan extends Component {


  constructor(props) {
    super(props)

    this.state = ({
         get_plan1 : [],
         get_plan2 : [],
         get_plan3 : [],
         bronzeplanDetails : [],
         silverplanDetails : [],
         goldplanDetails : [],
          })
      
    // if (Cookies.get('loginSuccess')) {
    //     this.loginData = JSON.parse(Cookies.get('loginSuccess'))
    //     console.log('ABC',this.loginData.user_email)
    // } else {
    //     window.location.href = 'login'
    // }
    
    }

   componentDidMount() {
            
      this.getPlanList();
      this.getbronzePackagePlan()
      this.getsilverPackagePlan()
      this.getgoldPackagePlan()
  }

   
    async getPlanList() {
        await axios.get(`${config.apiUrl}getpricingandplans`, {},)
          .then(result => {
              const data = result.data;
              console.log(result.data);
              if (result.data.success === true) {
                  this.setState({
                      get_plan1: result.data.response[0],
                      get_plan2: result.data.response[1],       
                      get_plan3: result.data.response[2],                  
                  })
                 }

              else if (result.data.success === false) {
            }
          })

          .catch(err => {
          })
  }

 async getbronzePackagePlan() {
    await axios({
      method: 'post',
      url: `${config.apiUrl}getPackagePlan`,
      data: { "package_plan_id": 1 }
    }).then(response => {
 
      if (response.data.success === true) {
        this.setState({
          bronzeplanDetails: response.data.response
        })
      }
    })
  }

  async getsilverPackagePlan() {
    await axios({
      method: 'post',
      url: `${config.apiUrl}getPackagePlan`,
      data: { "package_plan_id": 2 }
    }).then(response => {
 
      if (response.data.success === true) {
        this.setState({
          silverplanDetails: response.data.response
        })
      }
    })
  }


  async getgoldPackagePlan() {
    await axios({
      method: 'post',
      url: `${config.apiUrl}getPackagePlan`,
      data: { "package_plan_id": 3 }
    }).then(response => {
 
      if (response.data.success === true) {
        this.setState({
          goldplanDetails: response.data.response
        })
      }
    })
  }






   render() {
        return (

<>
<div>    
<meta charSet="UTF-8" />
<title>Tennis Club</title>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

<link rel="stylesheet" href="css/style.css" />

<link rel="stylesheet" href="css/responsive.css" />

<div className="boxed_wrapper">
 
  {/* <div className="preloader" /> */}
  
  <Header/>
     
  <section className="breadcrumb-area" style={{backgroundImage: 'url(images/resources/breadcrumb-bg.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbs">
            <h1>Package plan</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="pricing-plan-area">
    <div className="container">
      <div className="sec-title text-center">
        <h3>Pricing &amp; Plans</h3>
        <h1>Package Plans</h1>
      </div>
      <div className="row">
       
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>{this.state.get_plan1.plan_name}</h3>
              </div>
              <div className="package">
                <h1><span>$</span>{this.state.get_plan1.amount}<b>/{this.state.get_plan1.duration === 1 ? 'day' : this.state.get_plan1.duration === 2 ? 'month' : 'year'}</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
              {this.state.bronzeplanDetails.map((item) => (
                <li>{item.package_details}</li>
                ))}
                {/* <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li> */}
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>{this.state.get_plan2.plan_name}</h3>
              </div>
              <div className="package">
                <h1><span>$</span>{this.state.get_plan2.amount}<b>/{this.state.get_plan2.duration === 1 ? 'day' : this.state.get_plan2.duration === 2 ? 'month' : 'year'}</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
              {this.state.silverplanDetails.map((item) => (
               <li>{item.package_details}</li>
               ))}
                {/* <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li> */}
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
          <div className="single-price-box">
            <div className="table-header">
              <div className="top">
                <h3>{this.state.get_plan3.plan_name}</h3>
              </div>
              <div className="package">
                <h1><span>$</span>{this.state.get_plan3.amount}<b>/{this.state.get_plan3.duration === 1 ? 'day' : this.state.get_plan3.duration === 2 ? 'month' : 'year'}</b></h1>
              </div>
            </div>
            <div className="price-list">
              <ul>
              {this.state.goldplanDetails.map((item) => (
                 <li>{item.package_details}</li>
                ))}
                {/* <li>Free Access to the gym/pool</li>
                <li>Diet Recommendations</li>
                <li>Support &amp; Motivation</li>
                <li>Nutrition Strategies</li> */}
              </ul>
            </div>
            <div className="table-footer">
              <a className="thm-btn bgclr-1" href="#">Book Now</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>    
  </section>
  
 <Footer/>
   
</div>
</div>
</>
        )
    }
} 