import React from "react";
import EuropeanMap from "../../Assets/EuropeanMap.png";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div id="our-mission">
            <div className="content-div">
                <div className="text-content">
                    <h1 className="about-head">About Us</h1>
                    <div className="text-div">
                        <p className="heading">By Europeans, for Europeans</p>
                        <p className="subheading">Our Vision is to empower government, organizations and individuals with control and independence in the online realm.</p>
                        <button className="read-button">Read more about us &rarr;</button>
                    </div>
                </div>
                
                <div className="img-div"><img src={EuropeanMap} alt="About Us" className="map-img"/></div>
            </div>
        </div>
    )
}

export default AboutUs;