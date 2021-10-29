import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import detail from '../../images/home.jpg';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                {/*banner part */}
                <Banner></Banner>
                {/* services area*/}
                <div className="row">
                    <h1 className="fw-bold fs-1 mb-5 mt-3">Our Services</h1>
                    <div className="col-md-12">
                        {/* service data load */}
                        <div className="row ms-4">
                            {
                                <Services></Services>
                            }
                        </div>
                    </div>
                </div>
                {/* website details area */}
                <div className="row my-5 mx-auto">
                    <div className="col-md-6 detail">
                        <img src={detail} alt="" />
                    </div>
                    <div className="col-md-5 mt-5">
                        <h1 className="text-primary fw-bold">Order food from the best Hungry-Naki website</h1>
                        <small>Are you hungry? Did you have a long and stressful day? Interested in getting a food delivered to your office or looking to avoid the weekly shop? Then hungry-naki Bangladesh is the right destination for you! just offers you a long and detailed list of the best online delivered foods.</small>
                        <button className="learn-btn mb-3">About Us</button>
                    </div>
                </div>

                {/* another area */}
                <div className="row my-5 mx-auto" style={{ backgroundColor: "aquamarine" }}>
                    <div className="col-md-6 mt-4">
                        <h2>Let Us Help You Feel Better Faster Food Delivery™</h2>
                        <p>Our goal is to provide quality food care, get you in and out within 1 hour.</p>
                    </div>
                    <div className="col-md-6 mb-5">
                        <button className="learn-btn">View Locations</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;