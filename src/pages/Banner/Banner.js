import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner1 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">Welcome to Hungry Naki?</h1>
                                    <h2 className="title-sm">Empow­er­ing your every food moment</h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner2 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">Just Order</h1>
                                    <h2 className="title-sm">Order your favorite food. Super fast delivery to your home or office. </h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner3 d-flex  align-items-center ">
                            <div className="row container">
                                <div className="col-md-8">
                                    <h1 className="title">Find Online Food Order</h1>
                                    <h2 className="title-sm"> Faster, Better & Smarter at Just Eat Now!</h2>
                                    <button className="learn-btn">Learn More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;