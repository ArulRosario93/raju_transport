import React from "react";
import "./ServicesHome.css";
import image from "./image1.jpg";
const ServicesHome = () => {

    return (
        <div className="ServicesHome">
            <div className="ServicesHomeContainer">
                <img className="ServicesHomeContainerImg" src={image} alt="placeholder" />
                <div className="ServicesHomeContent">
                    <h1 className="ServicesHomeHEAD">WE DELIVER.</h1>
                    <h1 className="ServicesHomeHEAD">EVERY TIME.</h1>
                </div>
            </div>
        </div>
    );

};

export default ServicesHome;