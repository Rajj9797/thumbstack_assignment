import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="links-div">
                <p>APURA CLOUD</p>
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
                    <img src="../../Assets/social-media-icons.png" alt="social media icons" />
                    <p>&rarr; &copy; 2025 Apura Cloud. All rights reserved.</p>
                </div>
            </div>


            <div className="footer-img-div">
                <img src="../../Assets/EuropeanMap.png" alt="footer map" />
            </div>
        </div>
    )
}

export default Footer;