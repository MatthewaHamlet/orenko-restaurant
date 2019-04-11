import React, { Component } from 'react';
import HeaderMain from './Scss/HeaderMain.scss';
import ORENKO from './images/ORENKO.svg'

class Header extends Component {
    render() {
        return (
            <section id="header">
                    <div className="container-fluid header--image-landing">
                        <div className="container-fluid p-0 m-0">
                            <div className="navigation row">
                            <h1 className="nav--header-logo">O.Renko</h1>
                                    <ul className="nav align-items-end">
                                        <li>
                                            <a href="#home">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#menu">MENU</a>
                                        </li>
                                        <li>
                                            <a href="#blog">BLOG</a>
                                        </li>
                                        <li>
                                            <a href="#contact">CONTACT</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                    <p className="nav--sub-copy">To eat is to live, <br /> to live is to thrive</p>
                                </div>
                                    <div className="row mt-5 text-center">
                                        <div className="col-md-4" id="title-01">
                                            <h2>SIT</h2>
                                </div>
                                        <div className="col-md-4" id="title-02">
                                            <h2>EAT</h2>
                                </div>
                                        <div className="col-md-4 mt-5 pt-3" id="title-03">
                                            <h2>THRIVE</h2>
                                </div>
                            </div>
                        </div>
                        <div className="container--social-media container-fluid">
                        <div className="row d-flex justify-content-end">
                        <ul className="nav flex-column">
                            <li>
                                <img src="https://dummyimage.com/40x40/fff/aaa" alt="" /> 
                            </li>
                            <li>
                                <img src="https://dummyimage.com/40x40/fff/aaa" alt="" /> 
                            </li>
                            <li>
                                <img src="https://dummyimage.com/40x40/fff/aaa" alt="" /> 
                            </li>
                            <li>
                                <img src="https://dummyimage.com/40x40/fff/aaa" alt="" /> 
                            </li>
                        </ul>
                        </div>
                        </div>
                        <div className="container--copy-btn container">
                            <div className="row d-flex justify-content-end">
                                <div className="col-md-6 col-offset-1 float-left">
                                    <p className="p-0 m-0 float-left w-50">LOREM IPSUM the stuff that makes the design world hopeful</p>
                                    <button className="btn btn-primary float-right">CLICK</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}
export default Header;