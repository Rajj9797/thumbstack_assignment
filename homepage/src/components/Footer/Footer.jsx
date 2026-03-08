import React from "react";
import "./Footer.css";
import socialIcons from "../../Assets/social-media-icons.png";
import europeanMap from "../../Assets/EuropeanMap.png";

const Footer = () => {
    return (
        <div id="contact-us" className="footer-div">
            <div className="links-div">
                <p className="footer-text-title">APURA CLOUD</p>
                <div className="features-link">
                    <div className="product-link">
                        <p className="feature-title">Products</p>
                        <div className="product-categories">
                            <p className="category">Apura Iaas</p>
                            <p className="category">Apura Workspace</p>
                            <p className="category">Apura Socials</p>
                        </div>
                    </div>
                    <div className="roadmap-link">
                        <p className="feature-title">Roadmap</p>
                        <div className="roadmap-categories">
                            <p className="category">Stage 1</p>
                            <p className="category">Stage 2</p>
                            <p className="category">Stage 3</p>
                            <p className="category">Stage 4</p>
                            <p className="category">Stage 5</p>
                        </div>
                    </div>
                    <div className="policy-link">
                        <p className="feature-title"></p>
                        <div className="policy-categories">
                            <p className="category">Help us on our journey</p>
                            <p className="category">Terms & Conditions</p>
                            <p className="category">Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="socialmedia-div">
                    <img src={socialIcons} alt="social media icons" />
                    <p className="rights-text">&copy; 2025 Apura Cloud. All rights reserved.</p>
                </div>
            </div>


            <div className="footer-img-div">
                <img src={europeanMap} alt="footer map" />
            </div>
        </div>
    )
}

export default Footer;