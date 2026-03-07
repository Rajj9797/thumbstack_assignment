import React, { useState } from "react";

import "./ProductCard.css";

const products = [
    {
        firstline: "Run safely.",
        name: "Apura Iaas.",
        description: "Apura Iaas is our service allowing customers to develop applications on our secured data ownership focused platform."
    },
    {
        firstline: "Work privately.",
        name: "Apura Workspace.",
        description: "Apura Workspace is. our alternaative for. Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy."
    },
    {
        firstline: "Share confidently.",
        name: "Apura Socials.",
        description: "Is our introductin of social media application that are essentials to us these days."
    }
]

const ProductCard = () => {


    const [activeCard, setActiveCard] = useState(false);

    return (
        <div>
            <div className="heading-product">Our Products</div> 
            <div className="product-card">
                {products.map((product, index) => (
                    <div className="card" key={index} onFocus={() => setActiveCard(true)} onBlur={() => setActiveCard(false)}>
                        <div className="firstline">{product.firstline}</div>
                        <div className="name">{product.name}</div>
                        <div className="description">{product.description}</div>
                        <button className="read-more">Read more</button>
                        {activeCard && <button className="demo-button">Book a demo</button>}
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default ProductCard;