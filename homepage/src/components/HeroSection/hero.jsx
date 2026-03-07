import React from "react";
import './hero.css';


const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-heading">By Europeans, for Europeans</h1>
                <p className="hero-subheading">Privacy and security that europeans need, demand and expect. Without giving other nations control over our data.</p>
            </div>
            <div className="specifications">
                <div className="specification">
                    <div className="border-first"></div>
                    <h2 className="specification-heading first">No interference</h2>
                    <p className="specification-description first">No third party interference</p>
                </div>
                <div className="specification">
                    <div className="border-second"></div>
                    <h2 className="specification-heading second">1st cloud platform</h2>
                    <p className="specification-description second">To allow data control and ownership</p>
                </div>
                <div className="specification">
                    <div className="border-third"></div>
                    <h2 className="specification-heading third">1st cloud infrastructure</h2>
                    <p className="specification-description third">To provide transparency over your data streams</p>
                </div>
                <div className="specification">
                    <div className="border-forth"></div>
                    <h2 className="specification-heading forth">Dynamic infrastructure</h2>
                    <p className="specification-description forth">Cloud, hybrid, and on-prem form</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;