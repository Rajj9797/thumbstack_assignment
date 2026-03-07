import React from "react";
import "./RoadMap.css";

const roadmapData = [
    {
        level: "Stage 1",
        title: "Cloud infrastructure",
        description: "",
        button: "Book a demo"
    },
    {
        level: "Stage 2",
        title: "Collaboration",
        description: "EU alternative to GoogleWorkspace Teams, Meet a.o.",
        button: "Try it"
    },
    {
        level: "Stage 3",
        title: "Communication",
        description: "Apura Iaas is our service allowing customers to develop applications on our secured data ownership focused platform.",
        button: null
    },
    {
        level: "Stage 4",
        title: "Connectivity",
        description: "EU alternative to LinkedIn, Instagram.",
        button: null
    },
    {
        level: "Stage 5",
        title: "Entertainment",
        description: "EU alternative to Youtube, Tiktok.",
        button: null
    }
] 

const RoadMap = () => {
    return (
        <div className="roadmap-div">
            <h1 className="roadmap-head">Our Road to Creating Data Ownership and Security</h1>

            <div className="card-roadmap">
                        {roadmapData.map((item, index) => (
                            <div className="card-div-roadmap" key={index}>
                                <div className="card-inner-div" key={index}>
                                    <h2 className="card-level">{item.level}</h2>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-description">{item.description}</p>
                                    {item.button && (
                                        <div>
                                            <button className="card-button">{item.button}</button>
                                            <div className="arrow-left"></div>

                                        </div>

                                    )}
                                    {!item.button && (
                                        <p className="coming-soon-tag">Coming Soon</p>
                                    )}

                                    
                                </div>
                                <div className="border-div-roadmap"></div>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default RoadMap;