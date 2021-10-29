import React from 'react';
import { Link } from 'react-router-dom';
// import logo from "../../../images/footer.png";
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                {/* <img className="w-25 text-white" src={logo} alt="" /> */}
                                <div className="mt-3">
                                    <h2>Follow Us</h2>
                                </div>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-facebook-messenger"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        It's the food and groceries you love, delivered
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <p>© HungryNaki. All rights reserved. Privacy Policy Terms & Condition</p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                                    <li className="footer-menu">  <Link className="nav-link" to="/myorder">My Orders</Link></li>
                                    <li className="footer-menu"> <Link className="nav-link" to="/manageorder">Manage Order</Link></li>
                                    <li className="footer-menu">  <Link className="nav-link" to="/newservice">New Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h2>Newsletter</h2>
                                <h3>Sign up for updates.</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Please Enter Your Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-icon">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h5>+1 8 900 666 25 26</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="footer-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <p>
                                            150 Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;