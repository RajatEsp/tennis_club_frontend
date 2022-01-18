
import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';


export default class Forgot extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}

onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = event => {
    event.preventDefault();
    const { email} = this.state;
    axios.post(`${config.apiUrl}forgot`, { email })
        .then(result => {
            if (result.data.success === true) {
                toast.success(result.data.msg, {
                    style: {
                        border: '1px solid #713200',
                        padding: '20px',
                        color: 'green',
                    },
                    iconTheme: {
                        primary: 'purple',
                        secondary: '#FFFAEE',
                    },
                });
                setTimeout(() => {
                  window.location.reload()
              }, 3000);                
            } else {
                toast.error(result.data.msg,
                    {
                        style: {
                            border: '1px solid #713200',
                            padding: '20px',
                            color: 'red',
                        },
                        iconTheme: {
                            primary: 'purple',
                            secondary: '#FFFAEE',
                        },
                    });
            }
        }).catch(err => {
            toast.error(err.result?.msg,
                {
                    style: {
                        border: '1px solid #713200',
                        padding: '20px',
                        color: 'red',
                    },
                    iconTheme: {
                        primary: 'purple',
                        secondary: '#FFFAEE',
                    },
                });
        })
}



      
     
render() {
  const { email} = this.state;
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
  <section className="contact-form-area">
    <div className="white-section paddings ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-lg-3">
          </div>
          <div className="col-md-6 col-lg-6 pl-5 pr-5">
            <div className="login-wrap ml-5 mr-5 p-4 p-md-5">
              {/* <div className="icon d-flex align-items-center justify-content-center"> */}
                {/* <span className="fa fa-user" /> */}
                <h2>Generate Your Password</h2>
                <br/>
              {/* </div> */}
              Enter your email address below. If we have it on file, we will send you a reset email.
              <form onSubmit={this.handleSubmit} className="login-form">
              <Toaster
                            position="top-center"
                            reverseOrder={false}
                          />
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control rounded-left" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                  <button type="submit" disabled={!this.state.email} className="form-control btn btn-primary rounded submit px-3">REQUEST RESENT LINK</button>
                </div>
                <div className="form-group d-md-flex">
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
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
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
<div className="scroll-to-top scroll-to-target" data-target="html">
  <span className="fa fa-chevron-circle-up" />
</div>
</div>
</>
        )
    }
}