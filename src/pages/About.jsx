import React from "react";
import Header from "../components/Header";

const About = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content d-flex align-center justify-between">
                <div>
                    <img className="background-svg" src="/img/about_bg.png" alt="about_bg"/>
                </div>

                <button className="elliptical-button"><img src="/svg/arrow.svg" alt="arrow"/></button>
            </div>
        </div>
    );
};

export default About;
