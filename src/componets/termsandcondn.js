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



export default class termsandcondn extends Component {

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
        <h1>Terms of use</h1>
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
        <h1 className="page-header__title">Terms of Use</h1>
      </div>
    <div className="article-content">
        <p><strong>1.	General</strong> </p>
        <p>
          1.2 	By accessing this website and any pages thereof, you shall be deemed to have agreed to be legally bound by the Terms of Use below. If you do not agree to the Terms of Use, please discontinue your access.</p>
        1.3 	SportSG reserves the right to change the Terms of Use from time to time at its sole discretion. All changes will be posted on this page and your use of this website after such changes have been posted will constitute your agreement to the modified Terms of Use and all of the changes. Hence, you should read these Terms of Use carefully each time you visit this website. <br />
        <br />
        <strong>2.	Contents</strong><br />
        <br />
        2.1	This website contains contents which are owned by and/or licensed to SportSG. The contents, including but not limited to the logos, software applications, artwork, photographs, graphics, videos, audio and documents, are protected by applicable intellectual property laws, including copyright and trademark laws. <br />
        <p>
          2.2	SportSG and its third party providers reserve all copyright, trademarks and other intellectual property rights in and to the website and its contents. No part hereof may be reproduced, distributed, adapted, modified, republished, displayed, broadcast, hyperlinked, framed or transmitted in any manner or by any means or stored in an information retrieval system without the prior written permission of SportSG and/or the relevant third party proprietor(s). </p>
        <br />
        <strong>3.	Disclaimer of Warranties and Liability</strong><br />
        <br />
        3.1	This website and its contents are provided on an "as is" basis and without warranties of any kind. To the fullest extent permitted by law, SportSG does not warrant and hereby disclaims any warranty:<br />
        <p>
          (i)	as to the accuracy, adequacy, completeness correctness, reliability, timeliness, non-infringement, title, merchantability, quality and/or fitness for any particular purpose of this website and/or its contents; and</p>
        (ii)	that access to this website or any of its contents will be provided uninterrupted or free from errors or that any identified defect will be corrected, or that this website and/or its contents are free from any virus or other malicious, destructive or corrupting code, programme or macro.<br />
        <p>
          3.2	SportSG shall in no event be liable for any damages loss or expense including without limitation, direct, indirect, special, or consequential damage, or economic loss arising from or in connection with (i) any access, use or the inability to access or use this website or reliance on the contents of and/or any information in this website;(ii) any system, server or connection failure, error, omission, interruption, delay in transmission, or computer virus; and/or(iii) any use of or access to any other website linked to this website. </p>
        <br />
        <strong>4.	Hyperlinks to Third Party Sites</strong><br />
        <br />
        4.1	This website may contain hyperlinks to other websites which are not maintained by SportSG and are provided as a convenience only. These links do not signify that SportSG endorses the websites or imply any kind of association or affiliation with those websites. SportSG does not take responsibility for the content of any external website linked from within our website.<br />
        <br />
        <strong>5.	Right of Access</strong><br />
        <br />
        5.1	SportSG reserves all rights to deny or restrict access to this website to any particular person, or to block access from a particular Internet address to this website, at any time, without ascribing any reasons whatsoever.
        [Optional- For websites with customer portal<br />
        <br />
        <strong>6.	Feedback</strong><br />
        <br />
        <p>
          6.1	By submitting any feedback to SportSG, including but not limited to ideas or suggestions, you acknowledge and agree that: (a) SportSG is not under any obligation of confidentiality, express or implied, with respect to the feedback; (b) SportSG shall be free to use or disclose such feedback for any purpose, in any way (c) your feedback automatically become the property of SportSG without any obligation of SportSG to you; and (d) you are not entitled to any compensation, royalty fee or reimbursement of any kind from SportSG under any circumstances. </p>
        <strong>7.	Governing Law</strong><br />
        <br />
        8.1	These Terms of Use shall be governed and construed in accordance with laws of Singapore.<br />
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