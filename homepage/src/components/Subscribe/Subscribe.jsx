import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className="subscribe-main-div">
            <div className="supporter-div">
                <p className="supporter-head">Become a supporter and help us on our Journey</p>
                <button className="supporter-button">Read more about how to <span className="subscribe-arrow-div"></span></button>

            </div>

            <div className="subscribe-div">
            <h1 className="subscribe-head">Subscribe to our Newsletter</h1>
            <p className="subscribe-para">If you want to follow our progress on developing what Europeans want and need, done by Europeans.</p>
            <div className="input-div">
                <input type="email" placeholder="Enter your email" className="email-input"/>
                <button className="subscribe-button">Subscribe</button>
            </div>
        </div>

        </div>
        
    )
}

export default Subscribe;