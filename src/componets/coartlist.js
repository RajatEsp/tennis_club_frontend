import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';

export default class coartlist extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            coart_list : [],
                    }
        // this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'));
        // this.token = (!Cookies.get('token')) ? [] : JSON.parse(Cookies.get('token'));
        // this.handleSubmit = this.handleSubmit.bind(this)
        
    }


    componentDidMount() {
        this.getcoartlist();
       
      }
       


    async getcoartlist() {
        await    axios.get(`${config.apiUrl}getcoartdetails`, {}, )
                .then(result => {
                    
                    if (result.data.success === true) {
                        this.setState({
                            coart_list: result.data.response
                        })
                           }
                        else if (result.data.success === false) {
                        }
                })
                   .catch(err => {
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
                  <h1>Court</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="breadcrumb-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="left pull-left">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><i className="fa fa-angle-right" aria-hidden="true" /></li>
                    <li className="active">Court</li>
                  </ul>
                </div>
                <div className="right pull-right">
                  <a href="#">
                    <span><i className="fa fa-share-alt" aria-hidden="true" />Share</span> 
                  </a>   
                </div>    
              </div>
            </div>
          </div>
        </section> */}
        <section className="meet-our-professional">
          <div className="container">
            <div className="sec-title text-center">
              <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                  <h3>Court</h3>
                  {/* <h1>Meet Our Professional Trainers</h1> */}
                  <p>All MBPSPORTS coaches hold international coaching/teaching Certifications and use our globally applauded MBPSPORTS Coaching Methodology (MBPSCM).</p>
                </div>
                <div className="col-sm-2">
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-40" id="Coach_list">
            <div className="col-sm-12">
              <div className="row mt-30">

              {this.state.coart_list.map (item =>(
                <div className="col-md-4 col-sm-6 pl-0 pr-0">
                  <a href={`${config.baseUrl}coartbooking/${item.coartid}`}>  
                    <div className="box17">
                    <img src={`${config.imageUrl}`+item?.avatar} alt="" />
                      <div className="box-content">
                        <h3 className="title">{item.coart_name}</h3>
                        {/* <span className="post">Senior Trainer</span> */}
                      </div>
                    </div>
                  </a>
                </div>
                     ))}
              
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