import React, { Component } from 'react';
import facebook from '../../image/facebook.svg';
import instagram from '../../image/instagram.svg';
import linkedin from '../../image/linkedin.svg';
import whatsapp from '../../image/whatsapp.svg';
class Section2 extends Component {
    render() {
        return (
            <div className="section section-2 bg-gray min-600">
                <div className="pure-u-1-2  bg-grey bg-section left-side"/>
                <div className="pure-u-1-2 bg-red bg-section right-side"/>
                <div className="main-container">
                    <div className="bg-section2 pure-u-md-1-4 bg-red "></div>
                    <div className="pure-u-md-1-2">
                        sfdfs
                </div>
                    <div className="pure-u-md-1-2 p-relative right-side">
                        <div className="my-name">
                            <h2>farsi losa</h2><h2>werdiansyah</h2>
                        </div>
                        <div className="bio pure-g">
                            <div className="pure-u-1-2 border-right txt-right pr-24">
                                <p className="about-me">ABOUT ME</p>
                                <div className="sosmed">
                                    <a href="">
                                        <img src={facebook} alt="fb" />
                                    </a>
                                    <a href="">
                                        <img src={instagram} alt="fb" />
                                    </a>
                                    <a href="">
                                        <img src={linkedin} alt="fb" />
                                    </a>
                                    <a href="">
                                        <img src={whatsapp} alt="fb" />
                                    </a>
                                </div>
                            </div>
                            <div className="pure-u-1-2 pl-24 txt-thin">
                                15 May 1990<br/><br/>
                                Taman Wisma Asri 2, Bekasi Utara<br/><br/>
                                085710351530<br/><br/>
                                jackderiver@gmail.com
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2;
