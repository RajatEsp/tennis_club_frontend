import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default class signup extends Component {
     
  constructor(props) {
    super(props);
     this.state={
        first_name : '',
        last_name : '',
        email : '',
        phone : '',
        password : '',
        password2 : '',
        check_cat_1: '',
        errorMsg: ''
    };
    }

handleChange = e =>{
   
  if (e.target.first_name == 'first_name') {
    this.setState({
      'first_nameError': ""
    })
  }

  if (e.target.last_name == 'last_name') {
    this.setState({
      'last_nameError': ""
    })
  }

  if (e.target.email == 'email') {
    this.setState({
      'emailError': ""
    })
  }

  if (e.target.phone == 'phone') {
    this.setState({
      'phoneError': ""
    })
  }

  if (e.target.password == 'password') {
    this.setState({
      'passwordError': ""
    })
  }

  if (e.target.password2 == 'password2') {
    this.setState({
      'password2Error': ""
    })
  }

    this.setState({
        [e.target.name] : e.target.value
     });
     if (e.target.name === 'check_cat_1' && e.target.checked === true) {
      this.setState({
        check_cat_1: e.target.checked,
        errorMsg: ''
      })
      // alert('33')
    }
    else if (e.target.name === 'check_cat_1' && e.target.checked === false) {
      this.setState({
        check_cat_1: e.target.checked,
        errorMsg: 1
      })
      // alert('33')
    }
 }
 
 validate = async () => {

  let first_nameError = ""
  let last_nameError = ""
  let emailError = ""
  let phoneError = ""
  let passwordError = ""
  let password2Error = ""

  if (this.state.first_name === '') {
    first_nameError = "First Name is required."
  }
  if (this.state.last_name === '') {
    last_nameError = "Last Name is required."
  }
  if (this.state.email === '') {
    emailError = "Email is required."
  }
  if (this.state.phone === '') {
    phoneError = "Phone is required."
  }
  if (this.state.password === '') {
    passwordError = "Password is required."
  }
  if (this.state.password.length > 6) {
    passwordError = "Password length should be 6 characters or more."
  }    
 

  else {
    return false
  }

  if (first_nameError || last_nameError || emailError || phoneError || passwordError || password2Error) {
    window.scrollTo(0, 220)
    this.setState({
      first_nameError, last_nameError, emailError, phoneError, passwordError, password2Error
    })
    return false
  }
  return true
}

handleSubmit = event =>{
    event.preventDefault();
    const isValid =  this.validate()
    console.log('isValid', isValid);
    if (!isValid) {
      return false
    }
    else {
    
    const {first_name,last_name,email,phone,password,password2 } = this.state;
    this.setState({
      errorMsg: ''
    })
       axios.post(`${config.apiUrl}register`, {first_name,last_name,email,phone,password,password2})
        .then(result=>{
             console.log('Result',result);
        if(result.data.success === true ){
        toast.success(result.data.msg, {
            position: toast.POSITION.TOP_CENTER
            });
    setTimeout(() => {
    
        window.location.href = `${config.baseUrl}login`
    }, 2000);
     }
    }).catch(err=>{
    // console.log(err);
    toast.error(err.response.data?.msg, {
        position: toast.POSITION.TOP_CENTER, autoClose:1500
    
    }, setTimeout(() => {
            
    }, 500));
 
    })
}
}


    render() {
        return (

<>

<div className="boxed_wrapper">

 <Header/>
 
  <section className="contact-form-area">
    <div className="white-section paddings ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-lg-3">
          </div>
          <div className="col-md-6 col-lg-6 pl-5 pr-5">
            <div className="login-wrap p-5 pt-2 pb-2">
              <h2 className="text-center mb-4">Signup</h2>
              <form  className="login-form" onSubmit={this.handleSubmit}>
              
              <ToastContainer/>  
                <div className="d-md-flex">
                  <div className="form-group w-50">
                    <label>First Name</label>
                    <input type="text" className="form-control rounded-left" name="first_name" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name"  />
                    <span className=""> {this.state.first_nameError}</span>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <div className="form-group w-50">
                    <label>Last Name</label>
                    <input type="text" className="form-control rounded-left" name="last_name" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name"/>
                    <span className=""> {this.state.last_nameError}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input type="text" className="form-control rounded-left" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Mobile"  onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }} />
                  <span className=""> {this.state.phoneError}</span>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control rounded-left" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="Email" />
                  <span className=""> {this.state.emailError}</span>
                </div>
                <div className="form-group ">
                  <label>Password</label>
                  <input type="password" className="form-control rounded-left" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"  />
                  <span className=""> {this.state.passwordError}</span>
                </div>
                <div className="form-group ">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control rounded-left" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Confirm Password"  />
                  <span className=""> {this.state.password2Error}</span>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100">
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox"  id="check_cat_1" onChange={this.handleChange} name="check_cat_1" />&nbsp;I agree to the <a href="#" style={{color:"#888888"}}> Terms and conditions</a>
                      <span className="checkmark" />
                    </label>
                    {this.state.errorMsg === 1 ?
                              <div className="" style={{ color: 'red' }}>Please checked</div> : ''
                            }
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit"   className="form-control btn btn-primary rounded submit px-3">Signup</button>
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

</div>

<div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-chevron-circle-up" /></div>
</>
        )
    }
}