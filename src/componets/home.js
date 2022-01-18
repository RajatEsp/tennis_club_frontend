import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
// import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';


export default class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
         id: '',
        name : '',
        email: '',
        message : '',
        service :'',
        slider_list : [],
        story_content : [],
        contactusdetails_list : [],
        getservice_list : [],
        ourservice_list : [],
        trainer_list : [],
        court_list : [],
        certificate_list : [],
        testimonial_list : [],
        additionalservice_list : [],
        responsive: {
          superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 4
          },
          desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
          },
          tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
          },
          mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
          }
      },
      responsive1: {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    },
  
    }
    this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'));
    this.token = (!Cookies.get('token')) ? [] : JSON.parse(Cookies.get('token'));
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)  
}

  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
   }) 
   }

   componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
     this.getcontactusdetail();
     this.getserviceslist();
     this.gettrainerlist();
     this.getcourtlist();
     this.getcertificatelist();
     this.gettestimoniallist();
     this.hometopslider();
     this.homestorycontent();
     this.ourservices();
     this.gethomeservicesection();
   }
    
handleSubmit = async  (e)=> {
  e.preventDefault()
 
 const {name,email,service,message} = this.state
  const token = this.token
   await axios({
       method: 'post',
       url: `${config.apiUrl}insertcontactusdetails`,
      //  headers: { authorization: token},
       data: {"name":name,"email":email,"service":service,"message":message,} })
       .then(result => {
          if (result.data.success === true) {
              toast.success(result.data.msg, {
                  // position: toast.POSITION.TOP_CENTER , 
                      })
                  setTimeout(() => {
                    window.location.href = `${config.baseUrl}`
                  }, 2000);
            //  this.setState({
            //     name:'',
            //     email:'',
            //     message:'',
            //     service:''
            //  })
          }
          else if (result.data.success === false) {
            toast.error(result.data.msg, {

            });
          }
       }).catch(err => {
       });
  }

  async hometopslider() {
    await    axios.get(`${config.apiUrl}gethomeslider`, {}, )
            .then(result => {
                
                if (result.data.success === true) {
                    this.setState({
                        slider_list: result.data.response
                    })
                       }
                    else if (result.data.success === false) {
                    }
            })
               .catch(err => {
            })
    }

    async homestorycontent() {
      await    axios.get(`${config.apiUrl}getwebsitecontentdetails`, {}, )
              .then(result => {
                  
                  if (result.data.success === true) {
                      this.setState({
                          story_content: result.data.response[0]
                      })
                         }
                      else if (result.data.success === false) {
                      }
              })
                 .catch(err => {
              })
      }

      async ourservices() {
        await    axios.get(`${config.apiUrl}getoverservicesdetails`, {}, )
                .then(result => {
                    
                    if (result.data.success === true) {
                        this.setState({
                            ourservice_list: result.data.response
                        })
                           }
                        else if (result.data.success === false) {
                        }
                })
                   .catch(err => {
                })
        }

  async getcontactusdetail() {
    await    axios.get(`${config.apiUrl}getcontactusdetails`, {}, )
            .then(result => {
                
                if (result.data.success === true) {
                    this.setState({
                        contactusdetails_list: result.data.response[0]
                    })
                       }
                    else if (result.data.success === false) {
                    }
            })
               .catch(err => {
            })
    }
   
    async getserviceslist() {
      await    axios.get(`${config.apiUrl}getAllservices`, {}, )
              .then(result => {
                  
                  if (result.data.success === true) {
                      this.setState({
                          getservice_list: result.data.response
                      })
                         }
                      else if (result.data.success === false) {
                      }
              })
                 .catch(err => {
              })
      }
     
      async gettrainerlist() {
        await    axios.get(`${config.apiUrl}getmycoachimages`, {}, )
                .then(result => {
                    
                    if (result.data.success === true) {
                        this.setState({
                            trainer_list: result.data.response
                        })
                           }
                        else if (result.data.success === false) {
                        }
                })
                   .catch(err => {
                })
        }
       

        async getcourtlist() {
          await   axios.get(`${config.apiUrl}getmycourtimages`, {}, )
                  .then(result => {
                      
                      if (result.data.success === true) {
                          this.setState({
                              court_list: result.data.response
                          })
                             }
                          else if (result.data.success === false) {
                          }
                  })
                     .catch(err => {
                  })
          }

          async gethomeservicesection() {

            await   axios.get(`${config.apiUrl}gethomeservicesection`, {}, )
                    .then(result => {
                        
                        if (result.data.success === true) {
                        
                            this.setState({
                                additionalservice_list: result.data.response[0]
                            })
                               }
                            else if (result.data.success === false) {
                            }
                    })
                       .catch(err => {
                    })
            }

          async gettestimoniallist() {
            await   axios.get(`${config.apiUrl}getTestimonials`, {}, )
                    .then(result => {
                        
                        if (result.data.success === true) {
                            this.setState({
                                testimonial_list: result.data.response
                            })
                               }
                            else if (result.data.success === false) {
                            }
                    })
                       .catch(err => {
                    })
            }

          async getcertificatelist() {
            await    axios.get(`${config.apiUrl}getcertificateimages`, {}, )
                    .then(result => {
                        
                        if (result.data.success === true) {
                            this.setState({
                                certificate_list: result.data.response
                            })
                               }
                            else if (result.data.success === false) {
                            }
                    })
                       .catch(err => {
                    })
            }



     
    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
        };

       var properties = {
          duration: 2000,
          indicators: true,
        };

        
        return (

     <>
      
        <div className="boxed_wrapper">
         
         <Header/>
       
          <section className="">
            <div id="slider1" className="" data-version={5.0}>

            <div>
        <Slide {...properties} easing="ease">
        {this.state.slider_list.map((item) =>(
          <div className="each-slide">
           
            <img src={`${config.imageUrl}`+item.images}   style={{height:'700px', width:"1920" , dataBgposition:"top center", dataBgFit:"cover", dataBgrepeat:"no-repeat", dataBgparallax:"1"}} />
            <span className="heading1">{item.heading1}</span>
            <span className="heading2">{item.heading2}</span>
             <Link to={`${config.baseUrl}background`} >
                      <button className="btn btn-lg" >Know More</button>        
                      </Link>
            {/* <div className="tp-caption tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-135} data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start={500}>
                    <div className="slide-content-box middle-slide">
                      <h2>We have 20 years of experience with</h2>
                    </div>
                  </div>
                  <div className="tp-caption  tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-35} data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={1500}>
                    <div className="slide-content-box middle-slide">
                      <h1>Certified Personal Trainers</h1>
                      <p>We have a true passion for tennis and coaching. Learn how to play tennis <br /> or improve your game. </p>
                    </div>
                  </div>
                  <div className="tp-caption tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={90} data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={2300}>
                    <div className="slide-content-box middle-slide">
                      <div className="button">
                      <a className href={`${config.baseUrl}background`}>Know More</a>   
                       </div>    
                    </div>
                  </div> */}
           
          </div>
            ))}
          </Slide>
      </div>

  
              

            </div>
          </section>

             {/* {this.state.slider_list.map((item) =>(
                 <li data-transition="fade">
                 <img src="images/slides/slide2.jpg" alt="" width={1920} height={700} data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={1} />
                 <div className="tp-caption tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-135} data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start={500}>
                   <div className="slide-content-box middle-slide">
                     <h2>We have 20 years of experience with</h2>
                   </div>
                 </div>
                 <div className="tp-caption  tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={-35} data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={1500}>
                   <div className="slide-content-box middle-slide">
                     <h1>Certified Personal Trainers</h1>
                     <p>We have a true passion for tennis and coaching. Learn how to play tennis <br /> or improve your game. </p>
                   </div>
                 </div>
                 <div className="tp-caption tp-resizeme" data-x="center" data-hoffset={0} data-y="center" data-voffset={90} data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={2300}>
                   <div className="slide-content-box middle-slide">
                     <div className="button">
                     <a className href={`${config.baseUrl}background`}>Know More</a>   
                            
                     </div>    
                   </div>
                 </div>
               </li>
                  ))} */}


          <section className="callto-action-area sec-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="text-holder">
                    <div className="sec-title text-right">
                      <h3>{this.state.story_content.heading}</h3>
                      <h1>{this.state.story_content.heading1}</h1>
                      <p>{this.state.story_content.description}</p>
                    </div> 
                    <div className="row text-box">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-text-box pdr-30 text-right">
                          <h3>Our Mission</h3>
                          <p>{this.state.story_content.overmissiondesc}</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-text-box pdl-30 text-left">
                          <h3>Our Vision</h3>
                          <p>{this.state.story_content.overvisiondesc}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="signature-readmore">
                         
                        </div>
                      </div>
                    </div>   
                  </div>
                </div> 
                <div className="col-md-5">
                  <div className="img-holder wow slideInRight text-center">
                    <img src={`${config.imageUrl}`+this.state.story_content.images} alt="Awesome Image" className="callto-action" />
                  </div>
                </div>   
              </div>
            </div>
          </section>
          <section className="service-area">
            <div className="container">
              <div className="sec-title">
                <h3>What We Do</h3>
                <h1>Our Services</h1>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="servicecarousel">
                  <Carousel responsive={this.state.responsive1}
                                        autoPlay={true}
                                    >
                   {this.state.ourservice_list.map((item) => (
                    <div className="single-service-item">
                      <div className="img-holder">
                        <img src={`${config.imageUrl}`+item.image1} alt="Awesome Image" />
                        <div className="content">
                          <div className="text-holder text-center">
                            <div className="inner">
                              <div className="inner-content">
                                <h3>{item.servicename}</h3>
                                <p>{item.descrption.substr(0,50)} </p>
                                <a className="thm-btn bgclr-1" target="_blank" href={`${config.baseUrl}detail/${item.id} `}>Read More</a>
                              </div>
                            </div>    
                          </div>
                          <div className="text-holder-1 text-center">
                            <div className="inner">
                              <div className="inner-content">
                                <h3>{item.servicename}</h3>
                              </div>
                            </div>  
                          </div>
                        </div>
                      </div>
                    </div>
                                       ))}
                      </Carousel>
     
                  </div>
                </div>    
              </div>
            </div>
          </section>
          <section className="meet-our-professional">
            <div className="container">
              <div className="sec-title text-center">
                <div className="row">
                  <div className="col-sm-6">
                    <img src="images/services-bg-cut.png" width="100%" />
                  </div>
                  <div className="col-sm-6">
                    <div className="additional-services">
                      <div className="sec-title text-left">
                        <h3>{this.state.additionalservice_list.heading1}</h3>
                        <h1>{this.state.additionalservice_list.heading2}</h1>
                      </div>
                      <ul className="lte-icon-space-md lte-icon-color-main ">
                        <li className="col-xl-12 col-xs-12">
                          <div className="lte-inner">
                            <i className="lte-icon-text">01.</i>
                            <span className="lte-icon-content"> 
                              <span className="lte-header lte-h5">{this.state.additionalservice_list.discrption_name_1}</span> 
                              <span className="lte-descr">{this.state.additionalservice_list.discrption_1}</span>
                            </span>
                          </div>
                        </li>
                        <li className="col-xl-12 col-xs-12">
                          <div className="lte-inner">
                            <i className="lte-icon-text">02.</i>
                            <span className="lte-icon-content"> 
                              <span className="lte-header lte-h5">{this.state.additionalservice_list.discrption_name_2}</span> 
                              <span className="lte-descr">{this.state.additionalservice_list.discrption_2}</span>
                            </span>
                          </div>
                        </li>
                        <li className="col-xl-12 col-xs-12">
                          <div className="lte-inner">
                            <i className="lte-icon-text">03.</i>
                            <span className="lte-icon-content"> 
                              <span className="lte-header lte-h5">{this.state.additionalservice_list.discrption_name_3}</span> 
                              <span className="lte-descr">{this.state.additionalservice_list.discrption_3}</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>  
          <section className="slogan-area" style={{backgroundImage: 'url(https://hamptonracquet.com/wp-content/uploads/2016/02/large-banner-tennis.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="inner-content text-center">
                    <h1>A Natural way of improving your health.</h1>
                    <p>Marina Tennis Center look at exercise, eating, wellness and food not just as calories and weight</p>
                    <p>loss, but also emotional, mental and physical.</p>
                    <a className="thm-btn bgclr-1" href="#">Make an Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </section>  
          <section className="choosing-area">
            <div className="container">
              <div className="sec-title text-center">
                <h3>Our Qualification</h3>
                <h1>Why People Choosing Us</h1>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>Nutrition Strategies</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-food" />
                      </div>
                      <div className="text">
                        <p>Provides a professional dietary and service aimed to helping you achieve your goal.</p>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>Workout Routines</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-sports-1" />
                      </div>
                      <div className="text">
                        <p>Finding a workout is as easy scrolling down, picking out the session that matches your goals.</p>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>Support &amp; Motivation</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-line" />
                      </div>
                      <div className="text">
                        <p>We cannot always expect each of our clients to maintain a consistent level of motivation, no matter.</p>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>First Hand Advice</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-note-1" />
                      </div>
                      <div className="text">
                        <p>The key areas to refine include: agility, balance, speed, strength, and flexibility specific to tennis.</p>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>Individual Coaching</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-exercise-1" />
                      </div>
                      <div className="text">
                        <p>Reach your wellness goals quick with personalized coaching. We focus on turning weight loss, stress.</p>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-item">
                    <div className="title">
                      <h3>Certified Company</h3>
                    </div> 
                    <div className="text-holder">
                      <div className="iocn">
                        <span className="flaticon-business" />
                      </div>
                      <div className="text">
                        <p>Provides a professional Tennis and nutrition aimed to helping you achieve your goal.</p>
                      </div>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
          </section>  
          <section className="upcomming-matches pt-5">
            <div className="container">
              <div className="col-sm-12">
                <div className="sec-title text-center">
                  <div className="row">
                    <div className="col-sm-6 pl-0 pr-0 bg-upcomming">
                      <div className="lte-events-sc hasDivider">
                        <div className="lte-item">
                          <div className="lte-event-date"><span>21 Oct 2021</span></div>
                          <h5 className="lte-header"><a href="#">Marcus Crown – German Stiller</a></h5>
                          <span className="lte-event-time">03:00</span><span className="lte-event-venue">Court 01</span>
                        </div>
                        <div className="lte-item">
                          <div className="lte-event-date"><span>21 Nov 2021</span></div>
                          <h5 className="lte-header"><a href="#">Andreas Medvedev – Antony Fonsteur</a></h5>
                          <span className="lte-event-time">06:00</span><span className="lte-event-venue">Court 01</span>
                        </div>
                        <div className="lte-item">
                          <div className="lte-event-date"><span>28 Dec 2021</span></div>
                          <h5 className="lte-header"><a href="#">Serena Larsson – Olivia Schneider</a></h5>
                          <span className="lte-event-time">08:00</span><span className="lte-event-venue">Court 01</span>
                        </div>
                      </div>
                      <a className="thm-btn bgclr-1 ml-auto mr-auto " style={{width: 'fit-content!important'}}>View More</a>
                    </div>
                    <div className="col-sm-6 pl-0 pr-0">
                      <img src="images/player.jpg" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
           
          <section className="meet-our-professional">
            <div className="container">
              <div className="sec-title text-center">
                <div className="row">
                  <div className="col-sm-2">
                  </div>
                  <div className="col-sm-8">
                    <h3>Coach</h3>
                    <h1>Meet Our Professional Trainers</h1>
                    <p>All MBPSPORTS coaches hold international coaching/teaching Certifications and use our globally applauded MBPSPORTS Coaching Methodology (MBPSCM).</p>
                  </div>
                  <div className="col-sm-2">
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-40">
              <div className="col-sm-12">
                <div className="row mt-30">
                 {this.state.trainer_list.map (item =>(
                  <div className="col-md-4 col-sm-6 pl-0 pr-0">
                         <Link to={`${config.baseUrl}trainerdetails/${item.id}`}>
                    <div className="box17">
                      <img src={`${config.imageUrl}`+item?.avatar} alt="" />
                      <div className="box-content">
                        <h3 className="title">{item.name}</h3>
                        <span className="post">Senior Trainer</span>
                      </div>
                    </div>
                    </Link>
                  </div>
                   ))}
                  
                </div>
              </div>
              <a href={`${config.baseUrl}trainerlist`}><button class="btn btn-primary see_all_btn">See All <span class="fa fa-chevron-right "></span></button></a>
            </div>
          </section>  

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
            <div className="container mt-40">
              <div className="col-sm-12">
                <div className="row mt-30">
                {this.state.court_list.map (item =>(
                  <div className="col-md-4 col-sm-6 pl-0 pr-0">
                     <Link to={`${config.baseUrl}coartbooking/${item.coartid}`}>
                    <div className="box17">
                       <img src={`${config.imageUrl}`+item?.avatar} alt=""/>
                      <div className="box-content">
                        <h3 className="title">{item.coart_name}</h3>
                        <span className="post">Singapore</span>
                      </div>
                      </div>
                    </Link>
                  </div>
                ))}
                  
                </div>
              </div>
              <a href={`${config.baseUrl}coartlist`}><button class="btn btn-primary see_all_btn">See All <span class="fa fa-chevron-right "></span></button></a>
            </div>
          </section>  

          <section className="testimonial-area">
          <div className="container">
           <div className="sec-title">
            <h3>Testimonials</h3>
            <h1>Successful Stories</h1>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="certificates">

              <Carousel responsive={this.state.responsive}
                                        autoPlay={true}
                                    >
              {this.state.testimonial_list.map((item) => (

                <div className="single-testimonial-item text-center">
                  <div className="img-holder">
                    <img src={`${config.imageUrl}`+item?.images} alt="Awesome Image" />
                  </div>
                  <div className="text-holder">
                    <h3>{item.title}</h3>
                    <p>{item.descrption}</p>
                  </div>
                  <span className="border" />
                  <div className="name">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                     ))}
                        </Carousel>

               </div>
            </div>
          </div>
        </div>
      </section>

           <section className="certificates-area">
            <div className="container">
              <div className="sec-title">
                <h3>Achivements</h3>
                <h1>Our Certificates</h1>
              </div>
             
             <div className="row">
            <div className="col-md-12">
             <div className="certificates">

               {/* {this.state.certificate_list.map((item) => (
                    <div className="single-item">
                      <a href="#">
                        <div className="single-item">
                          <img src={`${config.imageUrl}`+item?.images} alt="Awesome Image" />
                        </div>
                      </a>
                    </div>
                  
                  ))} */}

             <Slider {...settings}>
              {this.state.certificate_list.map((item) => (
               <div className="single-item">
                      <a href="#">
                        <div className="single-item">
                        <img src={`${config.imageUrl}`+item?.images} alt="Awesome Image" />
                        </div>
                      </a>
                    </div>
                       ))} 
                        </Slider>
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