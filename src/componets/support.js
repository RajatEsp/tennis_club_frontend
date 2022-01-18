import React, { Component } from 'react';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';

export default class support extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
     
        name : '',
        email: '',
        message : '',
        service :'',
        contactusdetails_list : [],
        getservice_list : [],
        ourservice_list : [],
      
     
     
  
  
    }
    this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'));
    this.token = (!Cookies.get('token')) ? [] : JSON.parse(Cookies.get('token'));
    this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
 }) 
 }

 componentDidMount() {
  this.getcontactusdetail();
  this.getserviceslist();
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

  handleSubmit = async  (e)=> {
    e.preventDefault()

    
   
   const {name,email,service,message} = this.state
    
     await axios({
         method: 'post',
         url: `${config.apiUrl}insertcontactusdetails`,
        
         data: {"name":name,"email":email,"service":service,"message":message,} })
         .then(result => {
            if (result.data.success === true) {
                toast.success(result.data.msg, {
                    // position: toast.POSITION.TOP_CENTER , 
                        })
                    setTimeout(() => {
                      window.location.href = `${config.baseUrl}support`
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
  

  
  <Header/>
     <Toaster/>
  <section className="breadcrumb-area" style={{backgroundImage: 'url(images/resources/breadcrumb-bg.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbs">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
   
   <section className="contact-form-area">
    <div className="container">
      {/* <div className="sec-title text-center">
        
        <h1>Contact us</h1>
      </div> */}
      <div className="row">
        <div className="col-md-12">
          <div className="inner-content">
            <div className="col-lg-8 col-md-7">
              <div className="contact-form">
              <form id="consultations-form"  >
                            <div className="row">
                              <div className="col-md-6">
                                <input className="form-control" type="text" name="name" onChange={this.handleChange} value={this.state.name} defaultValue placeholder="Name *" required />
                                <input className="form-control" type="email" name="email" onChange={this.handleChange} value={this.state.email} defaultValue placeholder="Email *" required />
                                <select className="selectmenusdfsd form-control" name="service" onChange={this.handleChange}  value={this.state.service} >
                                 
                                <option value="">- Select services -</option>
																					{this.state.getservice_list.map((item) => (
																						<option value={item.id}>{item.service}</option>
																					))}
                                  
                                </select>   
                              </div>
                              <div className="col-md-6">
                                <textarea className="form-control" name="message" value={this.state.message} placeholder="Your Message.." onChange={this.handleChange} required defaultValue={""} />    
                              </div>
                            </div>
                            <br/>
                            <div className="row">
                              <div className="col-md-12">
                                <button onClick={this.handleSubmit} className="thm-btn bgclr-1" type="submit">Submit Now</button>   
                              </div>
                            </div>
                          </form>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="contact-carousel">
                 <div className="single-item">
                  <div className="sec-title">
                    <h3>Contact Details</h3>
                  </div>
                  <ul>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-arrows" />
                      </div>
                      <div className="text-holder">
                        <p>{this.state.contactusdetails_list.address}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-technology" />
                      </div>
                      <div className="text-holder">
                        <p>{this.state.contactusdetails_list.phone1}&amp;<br />{this.state.contactusdetails_list.phone2}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon-holder">
                        <span className="flaticon-note" />
                      </div>
                      <div className="text-holder">
                        <p>{this.state.contactusdetails_list.mailaddress}</p>
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
 
  {/* <section className="contact-map-area">
    <div className="container-fluid">
      <div className="google-map-inner">
        <div className="google-map" id="contact-google-map" data-map-lat="44.529688" data-map-lng="-72.933009" data-icon-path="images/resources/map-marker.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom={12} data-markers="{
            &quot;marker-1&quot;: [44.529688, -72.933009, &quot;<h4>Head Office</h4><p>44/77 Alabama, a western U.S.A</p>&quot;]
        }">
        </div>
      </div>  
    </div>
  </section> */}
  <Footer/>
</div>
</div>
</>
        )
    }
} 