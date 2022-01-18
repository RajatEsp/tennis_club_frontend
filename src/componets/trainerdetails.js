

import React, { Component } from 'react';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class trainerdetails extends Component {


    constructor(props) {
		super(props)
		this.state = {
			time_slot: [],
			timeslot: '',
			time_slot_chk: [],
			coachid: '',
			name: '',
		};
		const { match: { params } } = this.props;
		this.coachid = params.coachid;

	}


    handleChangeImage = e => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
    
        this.setState({
          avatar: image_as_base64,
          avatarImage: image_as_files,
        })
        }
    
      componentDidMount() {
       
          this.setState({
            coachid : this.coachid
          })
          
        this.getcoachData(this.coachid);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    
      async getcoachData(coachid) {
        await axios({
          method: 'get',
          url: `${config.apiUrl}getmycoachid/`+coachid
          
        })
          .then(response => {
            if (response.data.success === true) {
              let coachData = response.data.response;
              let avatar = config.imageUrl+coachData.avatar
              this.setState({
                name : coachData.name,
                email : coachData.email,
                phone : coachData.phone,
                bio : coachData.bio,
                avatar:avatar,
                fee:coachData.fee,
                ip:coachData.ip,
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
  <section className="pricing-plan-area pt-5">
  <div className="container">
    <div className="sec-title text-center">
     
      <h1>Sportobuddy Sports Arena - Turf 4</h1>
    </div>
    <div className="row">
      <div className="col-sm-7">
        <img src={this.state.avatar} alt="" />         
      </div>
      <div className="col-sm-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="product-tab-box mt-0">
              {/* <ul className="nav nav-tabs tab-menu">
                <li className="active">
                  <a href="#overview" data-toggle="tab">Overview</a></li>
                <li><a href="#review" data-toggle="tab">Read Reviews</a></li>
              
              </ul> */}
              <Tabs>
    <TabList className="nav nav-tabs tab-menu" >
      <Tab >Overview</Tab>
      {/* <Tab>Read Reviews</Tab> */}
    </TabList>

                  <TabPanel className="tab-content">
                     <div className="storedetail">
                    <div className="leftpart" id="detail_coach">
                      <div className="namecoach">
                        <div className="coach_img"><img src={this.state.avatar} alt="" /></div>
                        <div className="coach_name">
                          <h6 className>{this.state.name}</h6>
                          <small>Tennis Coach</small>
                        </div>
                      </div>
                      <label className="coach_label">Email</label>
                      <div className="detailemail">
                        {/* <div class="email"></div> */}
                        <div className="rightdetail coach_details"><a href="mailto:chitrakoot@sportobuddy.com">{this.state.email}</a></div>
                        <div className="clear" />
                      </div>
                      <label className="coach_label">Number</label>
                      <div className="detailphone">
                        {/* <div class="phone"></div> */}
                        <div className="rightdetail coach_details"> {this.state.phone}
                        
                        </div>
                      </div>
                      <div className="clear" />
                      <div className="detailaddress">
                        <div className="map" />
                        <label className="coach_label">Bio</label>
                        <div className="rightdetail coach_details bio_coach">
                       {this.state.bio}
                        </div>
                      
                      </div>
                      <div className="detailaddress">
                        <div className="detailphone" />
                        <label className="coach_label">Fees: </label>&nbsp;<span>$ {this.state.fee}</span>
                        <div className="rightdetail coach_details bio_coach">
                  
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  </TabPanel>
                    <TabPanel className="tab-content" >
                     <div className="reviews">
                      <div className="review-viewmore"> </div>
                      <div className="noreview center">
                        <span>No reviews yet.</span><br />
                        Be the first to review <strong>Sportobuddy Sports Arena - Turf 4!</strong>
                        <div className="clear" />
                        <div className="noreview-btn">
                          <a href="#" className="blue-btn button " data-needpopup-show="#login-popup">Write a Review</a>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                  </Tabs>
              
             </div>
          </div>
        </div>
      </div>
      <div className="booking-tab">
      </div>
    </div>    
  </div>
  </section>
  <Footer/>
        </div>
  </>
       )
          }
             }