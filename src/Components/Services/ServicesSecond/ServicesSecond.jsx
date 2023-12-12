import React from "react";
import image from "./image.jpg";
import "./ServicesSecond.css";

const ServicesSecond = () => {
    return (
        <div className="ServicesSecond">
            <div className="ServicesSecondImg">
                <img className="ServicesSecondImgImg" src={image} alt="join hands" />
            </div>
            <div className="ServicesSecondContent">
                <h1 className="ServicesSecondContentHead">THE RIGHT THINGS.</h1>
                <h1 className="ServicesSecondContentHead">THE RIGHT WAY.</h1>
                <p className="ServicesSecondContentPara1">Securing loads diligently and adhering to schedules prioritize safety and timely deliveries, fostering reliability in the transportation industry.</p>
                <p className="ServicesSecondContentPara2">     
                    Ensuring the safety of transported loads and timely deliveries demands meticulous planning and adherence to best practices. Rigorous load securing procedures and a commitment to punctuality mitigate risks, safeguarding both cargo and road users. This dedication to excellence builds trust, reliability, and efficiency in the transportation network, fostering overall industry integrity.
                </p>
            </div>
        </div>
    );
};

export default ServicesSecond;