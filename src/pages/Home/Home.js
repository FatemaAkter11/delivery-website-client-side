import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                {/*banner part */}
                <Banner></Banner>
                {/* services area*/}
                <div className="row">
                    <h1 className="fw-bold fs-1 mb-5">Our Offerings</h1>
                    <div className="col-md-12">
                        {/* service data load */}
                        <div className="row ms-4">
                            {/* {
                            services.slice(0, 6)?.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        } */}
                        </div>
                    </div>
                </div>
                {/* dr area */}
                <div className="row my-5 mx-auto">
                    <div className="col-md-6">
                        {/* <img src={dr} alt="" /> */}
                    </div>
                    <div className="col-md-5 mt-5">
                        <h1 className="text-primary fw-bold">Dr. Catherine P. Phillippi</h1>
                        <small>Dr. Phillippi joined TrustCare in 2021. She earned the Bachelor of Science in Biology from Mississippi College in 1994 and her medical degree from the University of Mississippi School of Medicine in 1999. Dr. Phillippi completed her pediatric training at the University of Arkansas for Medical Sciences/Arkansas Children’s Hospital. Prior to joining TrustCare, Dr. Phillippi practiced at Children’s Medical Group in Jackson, Mississippi, and spent time in Birmingham, Alabama. Dr. Phillippi is married to Dr. Mark Phillippi, a nephrologist at Central Nephrology Clinic.</small>
                        <button className="learn-btn mb-3">About Me</button>
                    </div>
                </div>
                {/* another area */}
                <div className="row my-5 mx-auto" style={{ backgroundColor: "aquamarine" }}>
                    <div className="col-md-6 mt-4">
                        <h2>Let Us Help You Feel Better Faster™</h2>
                        <p>Our goal is to provide quality care, get you in and out within 1 hour, and help you Feel Better Faster™.</p>
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