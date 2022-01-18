import React, { Component } from 'react';

import config from '../config/config'
import Footer from '../document/footer';
import Header from '../document/header';
import axios from 'axios';
import Cookies from 'js-cookie'
// import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Slider from "react-slick";
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';

// import Carousel from 'react-responsive-carousel';
var Carousel = require('react-responsive-carousel').Carousel;



export default class homeslider extends Component {

    render() {
        return (

     <>
            <section className="">
            <div id="slider1" className="" data-version={5.0}>

            <div>
            <TabProvider defaultTab="one">
        <section className="my-tabs">
          <TabList className="my-tablist">
            <Tab tabFor="one">Tab 1</Tab>
            <span className="divider">•</span>
            <Tab tabFor="two">Tab 2</Tab>
            <span className="divider">•</span>
            <Tab tabFor="three" className="my-tab">Tab 3</Tab>
          </TabList>
          <div className="wrapper">
            <TabPanel tabId="one">
              <p>Tab 1 content</p>
            </TabPanel>
            <TabPanel tabId="two">
              <p>Tab 2 content</p>
            </TabPanel>
            <TabPanel tabId="three">
              <p>Tab 3 content</p>
            </TabPanel>
          </div>
        </section>
      </TabProvider>
      </div>
      </div>


       {/* <ul>
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

                <li data-transition="fade">
                  <img src="images/slides/slide3.jpg" alt="" width={1920} height={700} data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={1} />
                  <div className="tp-caption  tp-resizeme" data-x="right" data-hoffset={0} data-y="top" data-voffset={160} data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={700}>
                    <div className="slide-content-box right-slide">
                      <h2>Be Health and Be Happy</h2>
                      <h1>We support to find a<br />healthy life</h1>
                      <p>We have a true passion for tennis and coaching. Learn how to play tennis <br /> or improve your game. </p>
                    </div>
                  </div>
                  <div className="tp-caption tp-resizeme" data-x="center" data-hoffset={165} data-y="top" data-voffset={450} data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start={2300}>
                    <div className="slide-content-box">
                      <div className="button">
                      <a className href={`${config.baseUrl}background`}>Know More</a>        
                        
                      </div>
                    </div>
                  </div>
                </li>
             </ul>  */}
          </section>


     </>

        )
    }
}