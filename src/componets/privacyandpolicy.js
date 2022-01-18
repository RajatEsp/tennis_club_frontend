import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



export default class privacyandpolicy extends Component {

render() {
    return (
    <>
     <div className="boxed_wrapper">
      <Header/>
      <Toaster/>

<section className="breadcrumb-area" style={{backgroundImage: 'url(images/resources/slogan-bg-2.jpg)'}}>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="breadcrumbs">
        <h1>Privacy and Policy</h1>
      </div>
    </div>
  </div>
</div>
</section>

<section className="faq-content-area">
<div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="page-header clearfix" itemProp="name">
        <h1 className="page-header__title">Privacy and Policy</h1>
      </div>

      <div className="article-content">
       <b> GOVERNMENT AGENCY PRIVACY STATEMENT</b>
        <p>
          1.	This is a Government Agency website.</p>
        <p>
          2.	We may use "cookies", where a small data file is sent to your browser to store and track information about you when you enter our websites. The cookie is used to track information such as the number of users and their frequency of use, profiles of users and their preferred sites. While this cookie can tell us when you enter our sites and which pages you visit, it cannot read data off your hard disk.</p>
        <p>
          3.	You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
        <p>
          4.	If you provide us with personally identifiable data, </p>
        <p>
          a.	We may share necessary data with other Government agencies, so as to serve you in the most efficient and effective way unless such sharing is prohibited by law.</p>
        <p>
          b.	We will NOT share your Personal Data with non-Government entities, except where such entities have been authorised to carry out specific Government services.</p>
        <p>
          c.	For your convenience, we may also display to you data you had previously supplied us or other Government agencies.  This will speed up the transaction and save you the trouble of repeating previous submissions. Should the data be out-of-date, please supply us the latest data. </p>
        <p>
          5.	To safeguard your Personal Data, all electronic storage and transmission of Personal Data is secured with appropriate security technologies.</p>
        <p>
          6.	This site may contain links to non-Government sites whose data protection and privacy practices may differ from ours.  We are not responsible for the content and privacy practices of these other websites and encourage you to consult the privacy notices of those sites.</p>
        <p>
          7.	Please contact us at <a href="mailto:sport_qsm@sport.gov.sg">sport_qsm@sport.gov.sg</a> if you: </p>
        <p>
          (a) have any enquires or feedback on our data protection policies and procedures,</p>
        <p>
          (b) need more information on or access to data which you have provided to us in the past.</p>
        <p>
        </p>
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