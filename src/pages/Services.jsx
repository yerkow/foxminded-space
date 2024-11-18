import React from "react";
import Header from "../components/Header";

const Services = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content d-flex align-center justify-between">
                <div>
                    <img className="background-svg" src="/img/services_bg.png" alt="services_bg"/>
                </div>

                <button className="elliptical-button"><img src="/svg/arrow.svg" alt="arrow"/></button>
            </div>
        </div>
    );
};

export default Services;
