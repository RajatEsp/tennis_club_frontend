
import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    const { match: { params } } = this.props;
    this.token = params.token    

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    if (this.token) {
      this.verifyAccountAPI()
    }
  }

  async verifyAccountAPI() {
    axios.post(`${config.apiUrl}verifyAccount/` + this.token)
      .then(result => {

        if (result.data.success === true) {
          toast.success(result.data.msg, {
                  })
        }
        if (result.data.success === false) {
          toast.error(result.data.msg, {

          });
        }
      })
      .catch(err => {
        toast.error(err.response.data?.msg,

        );
      });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //================================================  Login API integrate  =============

  async submitForm(e) {
    e.preventDefault()
    const data = this.state
    axios.post(`${config.apiUrl}login`, data)
      .then(response => {
        if (response.data.success === true) {
          // if (!response.data.data.enableTwoFactor) {
              toast.success('Login Successfully.', {
                style: {
                  icon:  "🏀",
                  border: '1px solid #713200',
                  padding: '20px',
                  color: 'green',
                },
                iconTheme: {
                  primary: 'blue',
                  secondary: 'white',
                },
              });
              Cookies.set('loginSuccess', JSON.stringify(response.data.data));
              Cookies.set('token', JSON.stringify(response.data.Token));
              setTimeout(() => {
                window.location.href = `${config.baseUrl}packagesplan`
              }, 2000);
          // }
               }
      else if (response.data.success === false) {
          toast.error(response.data.msg, {
                });
            }
      })
     .catch(err => {
       toast.error(err.response.data?.msg, {
          style: {
           
            border: '1px solid #713200',
            padding: '20px',
            color: 'red',
          },
          iconTheme: {
            primary: 'red',
            secondary: 'white',
          
          },
        });

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
 <Toaster/>
  <Header/>
  <section className="contact-form-area">
    <div className="white-section paddings ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-lg-3">
          </div>
          <div className="col-md-6 col-lg-6 pl-5 pr-5">
            <div className="login-wrap ml-5 mr-5 p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user" />
              </div>
              <h2 className="text-center mb-4">Sign In</h2>
              <form onSubmit={this.submitForm} className="login-form">
              <Toaster
                            position="top-center"
                            reverseOrder={false}
                          />
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control rounded-left" name="email" placeholder="Email" value={this.state.email}  onChange={this.onChange} required />
                </div>
                <div className="form-group ">
                  <label>Password</label>
                  <input type="password" className="form-control rounded-left" name="password" placeholder="Password" value={this.state.password}  onChange={this.onChange} required />
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary rounded submit px-3">Login</button>
                </div>
                <div className="form-group d-md-flex">
                 
                  <div className="w-50">
                    <a href={`${config.baseUrl}forgot`} style={{color:'black'}}>Forgot Password ?</a>
                  </div>
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

<div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-chevron-circle-up" /></div>

</div>
</>
        )
    }
}