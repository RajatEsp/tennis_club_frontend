import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import Demo from './demo';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  value: 4,
  edit: true
};

export default class coartbooking extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coartid :'',
      coart_name:'',
      phone: '',
      address: '',
      Summary: '',
      coartphotos_list :[],
      slot_list : [],
      tandc_list :[],
      ratings : ''
                 }
    const { match: { params } } = this.props;
    this.coartid = params.coartid;
  this.ratingChanged = this.ratingChanged.bind(this)
       }

  componentDidMount() {
   
      this.setState({
        coartid : this.coartid
      })
      
    this.getcoartData(this.coartid);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
  }

  ratingChanged = (newRating) => {
   alert(`my rating ${newRating} for  tennis`)
    console.log(newRating);
    const ratings =  newRating
    console.log('A',ratings);
    this.setState({
      ratings: newRating
  })
  };


  async getcoartData(coartid) {
    await axios({
      method: 'get',
      url: `${config.apiUrl}getcoartid/`+coartid
      
    })
      .then(response => {
        console.log("123",response.data.slot)
        console.log("ABC",response.data.images)
        if (response.data.success === true) {
          let coartData = response.data.response;
          let coartphoto = response.data.images;
          let coartslot = response.data.slot;
          let coarttandc = response.data.tandc;
          this.setState({
            coart_name : coartData.coart_name,
            phone : coartData.phone,
            address : coartData.address,
            Summary:coartData.Summary,
            coartphotos_list : coartphoto,
            slot_list : coartslot,
            tandc_list : coarttandc
          })

        }
      })
  }



    render() {
        return (
 
         <>
             <div className="boxed_wrapper">
         
         <Header/>

<section className="pricing-plan-area pt-5">
<div className="container">
  <div className="sec-title text-center">
    {/* <h3>Pricing & Plans</h3> */}
    <h1>{this.state.coart_name}</h1>
  </div>
  <div className="row">
    <div className="col-sm-8">
      <div className="fl newdesignleft">
        <div className="address marb0">{this.state.address}</div>
        <div className="bottom-bar" />
        <div className="review">
          <span>4 Ratings</span>
          <ReactStars
    count={5}
    onChange={this.ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
          {/* <ReactStars {...firstExample} /> */}
         {/* <i className="fa fa-star-o whitestar" />
          <i className="fa fa-star-o whitestar" />
          <i className="fa fa-star-o whitestar" />
          <i className="fa fa-star-o whitestar" />
          <i className="fa fa-star-o whitestar" /> */}
        </div>
      </div>
    </div>
  </div>
  <div className="booking-tab">
    <div className="row">
      <div className="col-sm-12">
        <div className="product-tab-box mt-5">
          <ul className="nav nav-tabs tab-menu">
            <li className="active"><a href="#overview" data-toggle="tab">Overview</a></li>
            <li><a href="#review" data-toggle="tab">Read Reviews</a></li>
            <li><a href="#get-direction" data-toggle="tab">Get Directions</a></li>
            <li><a href="#photos" data-toggle="tab">Photos</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="overview">
              <div className="storedetail">
                <div className="leftpart">
                  <div className="detailphone">
                    <div className="phone" />
                    <div className="rightdetail">  {this.state.phone}
                     
                    </div>
                  </div>
                  <div className="clear" />
                  <div className="detailweb">
                    <div className="web" />
                    <div className="rightdetail"><a href="https://www.sportobuddy.com/sports-venues" target="_blank">https://www.sportobuddy.com/sports-venues</a></div>
                  </div>
                  <div className="clear" />
                  <div className="detailemail">
                    <div className="email" />
                    <div className="rightdetail"><a href="mailto:chitrakoot@sportobuddy.com">chitrakoot@sportobuddy.com</a></div>
                    <div className="clear" />
                  </div>
                </div>
                <div className="rightpart">
                  <div className="detailaddress">
                    <div className="map" />
                    <div className="rightdetail">
                    {this.state.address}
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="synopsis">
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="heading">Summary</h6>
                    <p><font size={3}>
                      <font face="verdana" style={{color: 'rgb(35, 35, 35)'}}>The facility has 6 turfs for multi sports (Football, Cricket, etc.)<br /></font></font><font size={3}><font face="verdana" style={{color: 'rgb(35, 35, 35)'}}>Area of each turf is 60' ft X 120' ft&nbsp;<br /></font></font><font size={3}><font face="verdana" style={{color: 'rgb(35, 35, 35)'}}>LED Lights installed for evening and early morning slots&nbsp;<br /></font></font><font size={3}><font face="verdana" style={{color: 'rgb(35, 35, 35)'}}>Bathroom / Changing rooms are available (Men &amp; Women)&nbsp;<br /></font></font>
                      {/* <font size={3}>
                        <font face="verdana" style={{color: 'rgb(35, 35, 35)'}}>Timings: 6AM - 2AM (Last slot is from 1AM to 2AM)
                        </font></font> */}
                   </p>
                    <p><font size={3}><font face="verdana" style={{color: 'rgb(35, 35, 35)'}}><br /></font></font></p>

                  </div>
                  
                  <div className="col-sm-6">
                  <h6 className="heading">Timing Slot</h6>
                  <table className='tableTime'>
                    <tr>
                      <th>Time start</th>&nbsp; &nbsp;<th>Time end</th>
                    </tr>
                    {this.state.slot_list.map (item =>(
                    <tr>
                     <td className='timeData_start'>
                      {item.start_time.slice(0,5)}                                       
                      </td>
                       <td className='timeData_start'>
                       {item.end_time.slice(0,5)}                                          
                       </td>
                   
                    </tr>
                       ))}
                  </table>
                  </div>
               </div>
              </div> 

              <div className="row">
                <div className="col-sm-5">
                  <div className="detail-sidebar">
                    <div className="bottompart">
                     
                      <div className="clear" />
                      <div className="faciliti">
                        <div className="heading">Facilities Available</div>
                        <ul className="dolessmore">
                          <li>Changing Room</li>
                          <li>Wash Room</li>
                          <li>First Aid</li>
                          <li>Cash on Venue</li>
                          <li>Online Payment</li>
                          <li>Open Ground</li>
                          <li>Lights</li>
                          <li>Boundary Netting</li>
                        </ul>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="detail-rightpart">
                    <div className="tandc">
                      <div className="heading">Terms &amp; Conditions</div>
                      <p />
                      <ul>
                      {this.state.tandc_list.map (item =>(
                        <li><span style={{fontFamily: 'verdana', fontSize: 'small', backgroundColor: 'initial', color: 'rgb(97, 97, 97)'}}>{item.terms}</span></li>
                        ))}
                        
                       
                      </ul>
                      <div><font color="#616161" face="verdana" size={2}><br /></font></div>

                      <p />
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div className="tab-pane " id="review">
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
            </div>
            <div className="tab-pane" id="get-direction">
              <div className="location">
                
              </div>
            </div>
            <div className="tab-pane" id="photos">
              <div className="gallery">
                <div id>
                  <div className="viewport">
                    <ul className="overview venue-img demo">

                    {this.state.coartphotos_list.map (item =>(
                      <li><a href="#" className="thumbnail" title>
                          <img src={`${config.imageUrl}`+item?.avatar} className="loading" />
                        </a>
                      </li>
                     ))}

                   </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
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