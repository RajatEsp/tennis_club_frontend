import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';


export default class myprofile extends Component {

    constructor(props) {
        super(props)

        this.state = ({
            currentPassword :'',
            password: '',
            password2: '',
            getUser: [],
            profileData :''
            
        })
          
        if (Cookies.get('loginSuccess')) {
            this.loginData = JSON.parse(Cookies.get('loginSuccess'))

        } else {
            window.location.href = 'login'
        }
        this.handleChange = this.handleChange.bind(this);
        this.userProfileAPI = this.userProfileAPI.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.submitprofilepic = this.submitprofilepic.bind(this)
        }


    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleChange1 = event => {

        let value = event.target.value;
        this.setState(prevState => ({
            getUser: { ...prevState.getUser, [event.target.name]: value }
        }))
    }

     //================================================  Update Profile Pic  =============
   handleImagePreviewAvatar = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0])
    let image_as_files = e.target.files[0];
    this.setState({
       image_preview: image_as_base64,
       image_file: image_as_files,
    })
 }

    componentDidMount() {
     
        this.getUserProfileAPI()
        this.getProfilePicAPI()
    
    }


   changePassword(e) {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${config.apiUrl}changepassword`,
          data: {
            'email': this.loginData.user_email, currentPassword: this.state.currentPassword, password: this.state.password, password2: this.state.password2
          }
        })
          .then(result => {
            if (result.data.success === true) {
              this.setState({
                'currentPassword': '',
                'password': '',
                'password2': ''
              })
              toast.success(result.data?.msg, {
                position: toast.POSITION.TOP_CENTER
                 });
              }
            else if (result.data.success === false) {
              toast.error(result?.data?.msg, {
                position: toast.POSITION.TOP_CENTER
                  });
            }
          }).catch(err => {
            toast.error(err?.response.data?.msg, {
                position: toast.POSITION.TOP_CENTER
                 });
              })
      }

      async getUserProfileAPI() {
        await axios({
            method: 'post',
            url: `${config.apiUrl}getuserprofile`,
            // headers: { "Authorization": this.loginData.data?.Token },
            data : { 'email' : this.loginData.user_email }
        }).then(response => {
                if (response.data.success === true) {
                    this.setState({
                        getUser: response.data.response
                    })
               }
            })
    }
    
    async userProfileAPI(e) {
        e.preventDefault()
        
        await axios({
            method: 'post',
            url: `${config.apiUrl}/updateuserprofile`,
            // headers: { "Authorization": this.loginData.data?.Token },
            data :  this.state.getUser 
        }).then(result => {
                //   console.log('result',result);
                if (result.data.success === true) {

                    toast.success(result.data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    this.getUserProfileAPI()
                }

                else if (result.data.success === false) {
                    toast.error(result.data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });

                }

            }).catch(err => {
                console.log(err);

            });
    }

    async getProfilePicAPI() {
      await axios({
         method: 'post',
         url: `${config.apiUrl}userprofilepic`,
        //  headers: { "Authorization": this.loginData.message },
         data: { "email": this.loginData.user_email}
      }).then(response => {
     
         if (response.data.success === true) {
            this.setState({
               profileData: response.data.response
            })
         }
      })
   }


   async submitprofilepic(e) {
    
    e.preventDefault()
    let formData = new FormData();
    formData.append('email', this.loginData.user_email);
    formData.append('profile_pic', this.state.image_file);
   
    axios({
       method: 'post',
       url: `${config.apiUrl}updateprofilepic`,
      //  headers: { "Authorization": this.loginData.message },
       data: formData
    })
       .then(response => {
          if (response.data.success === true) {
             toast.success(response.data.msg, {
              position: toast.POSITION.TOP_CENTER
             });
             this.getProfilePicAPI()
             setTimeout(() => {
                window.location.reload()
             }, 1000);
          }
          else if (response.data.success === false) {
             toast.error(response.data.msg, {
              position: toast.POSITION.TOP_CENTER
             });
          }
       })
       .catch(err => {
          toast.error(err?.response?.data?.msg, {
            position: toast.POSITION.TOP_CENTER
          });
       })
 }


    render() {
        return (

           <> 

        <div className="boxed_wrapper">
         <Header/>
 
     <section className="contact-form-area bg-info">
    <div className="white-section paddings">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4">
            <div className='side_tabs_area'>
             <div className='tab_box bg-light'>
               <br/>
             <div className='user_icon'>

             {/* <i class="fa fa-user icon"></i> */}

             {  this.state.profileData.profile_pic === '' || this.state.profileData.profile_pic === null ?    
  
  
  <a href='' class="dropdown-toggle logos" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <img src="images/avatar.png"/>
  </a>:

<a href='' class=""  >
<img style={{height: "80px", width: "90px"}} src={`${config.imageUrl}${this.state.profileData.profile_pic}`}/>
</a>
    }

             
             </div>
             <div className='profile_list'>
             <ul className=''>
               <li><Link to={`${config.baseUrl}myprofile`}><i class="fa fa-cogs"></i>Profile</Link></li>
               <li><a href='#'><i class="fa fa-check-circle-o"></i>My Booking</a></li>
               {/* <li><a href=''><i class="fa fa-search"></i>Find an Apponent</a></li> */}
               <li><Link to={`${config.baseUrl}packagesplan`}><i class="fa fa-google-wallet"></i>Package Plans</Link></li>
             </ul>
             </div>
             </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 pl-5 pr-5">
            <div className="login-wrap p-5 pt-2 pb-2">
              <h2 className="text-center mb-4">My Profile</h2>
              <Tabs>
    <TabList>
      <Tab ><b> Edit Profile</b></Tab>
      <Tab><b>Edit Password</b></Tab>
      <Tab><b>Avtar</b></Tab>
    </TabList>

    <TabPanel>

    <form  onSubmit={this.userProfileAPI} className="login-form">
              
              <ToastContainer/>  
                <div className="d-md-flex">
                  <div className="form-group w-50">
                    <label>First Name</label>
                    <input type="text" className="form-control rounded-left" name="first_name" onChange={this.handleChange1} value={this.state.getUser.first_name}  placeholder="First Name" required />
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <div className="form-group w-50">
                    <label>Last Name</label>
                    <input type="text" className="form-control rounded-left" name="last_name" onChange={this.handleChange1} value={this.state.getUser.last_name}   placeholder="Last Name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile</label>
                  <input type="text" className="form-control rounded-left" name="phone" onChange={this.handleChange1} value={this.state.getUser.phone} placeholder="Mobile "  required onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" readOnly className="form-control rounded-left" name="email" value={this.state.getUser.email}   placeholder="Email" required />
                </div>
               
                 <div className="form-group">
                  <button type="submit"    className="form-control btn btn-primary rounded submit px-3">Save Changes</button>
                </div>
              </form>
    </TabPanel>
    <TabPanel>
       <form onSubmit={this.changePassword}  className="login-form">
             <ToastContainer/>  
                <div className="d-md-flex">
                </div>
                <div className="form-group">
                  <label>Old Password</label>
                  <input type="password" className="form-control rounded-left" name="currentPassword" value={this.state.currentPassword}  onChange={this.handleChange}  placeholder="Old Password "  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" className="form-control rounded-left" name="password" value={this.state.password} onChange={this.handleChange}   placeholder="New Password"  />
                </div>
                <div className="form-group">
                  <label>Re-Type New Password</label>
                  <input type="password" className="form-control rounded-left" name="password2" value={this.state.password2} onChange={this.handleChange}  placeholder="Confirm password"  />
                </div>
               
                 <div className="form-group">
                  <button type="submit" disabled={!this.state.currentPassword || !this.state.password || !this.state.password2}  className="form-control btn btn-primary rounded submit px-3">Change Password</button>
                </div>
              </form>

    </TabPanel>
    <TabPanel>
       <form onSubmit={this.submitprofilepic}  className="login-form">
             <ToastContainer/>  
                <div className="d-md-flex">
                </div>
                {/* <a  class="" type="button"   > */}
  <img style={{height: "80px", width: "90px"}} src={`${config.imageUrl}${this.state.profileData.profile_pic}`}/>
  {/* </a> */}
                <div className="form-group">
                  <label>Profile Pic</label>
                  <input type="file" className="form-control rounded-left" name="profile_pic" value={this.state.profile_pic}  onChange={this.handleImagePreviewAvatar} />
                </div>
              
                <div className="form-group">
                  <button type="submit"  className="form-control btn btn-primary rounded submit px-3">Update Profile Pic</button>
                </div>
              </form>

    </TabPanel>
  </Tabs>
             
            </div>
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