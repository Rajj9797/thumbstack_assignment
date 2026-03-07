import React from "react";
import "./linkSection.css";

const LinkSection = () => {
    return (
        <div className="link-section">
            <div className="link-section-content">
                <div className="link-title">Join the future of data sovereignty</div>
                <div className="input-div">
                    <input type="email" placeholder="Enter your email address" className="email-input" />
                    <button className="join-button">Join</button>
                </div>
                
            </div>

            <div className="border-div"></div>

            <div className="brief">
                <div className="brief-title">APURA is an ecosystem dedicated to the privacy and security of their users;
                    completely build from scratch.
                </div>
            </div>

            <div className="border-div"></div>

        </div>
    )
}

export default LinkSection;