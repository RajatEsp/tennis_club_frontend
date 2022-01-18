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








export default class faq extends Component {

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
        <h1>FAQ’s</h1>
      </div>
    </div>
  </div>
</div>
</section>

<section className="faq-content-area">
<div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Accordion>
        
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    What is your makeup/cancellation policy?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    All students need to register and pay prior to the first lesson to be confirmed. There is a 48-hour cancellation policy for all lessons.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Do you offer private or semi-private lessons?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Yes, go to the private lesson tab listed on the website
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Do you offer tennis lessons during the winter/do you have indoor tennis courts?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We do not have indoor tennis courts. Our tennis program is seasonal, meaning we offer lessons late April through the end of October.

November 1-March 31st, Platform (Paddle) Tennis is offered at Pine Manor College. Platform tennis is a game played by tennis players during the winter months. It’s lots of fun and improves one’s tennis game.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can I get a discounted rate for a second or third family member in a summer camp session?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>                 
                    Yes, please contact Shelly at brooklinetennis.com for more information regarding sibling discounts.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What happens if I’m late or unable to attend a class I’ve registered for?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>                 
                    It is better to come late than not at all, and if you know you’ll miss your class, please try to let Shelly know 48 hours in advance. You can attend a makeup class if you miss class. Check website for available classes based on what you’ve registered for and attend a comparable class.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
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