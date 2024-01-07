import React from "react";
import "./SecondAboutUs.css";
import map from "./map.png";

const SecondAboutUs = () => {
    return(
        <div className="SecondAboutUs">
            <div className="SecondAboutUsFlex">
                <div className="SecondAboutUsFlexContent">
                    <h2 className="SecondAboutUsFlexContentHead">DEDICATED AND</h2>
                    <h2 className="SecondAboutUsFlexContentHead">DRIVEN TO DELIVER</h2>
                    <br />
                    <p className="SecondAboutUsFlexContentPara">
                    DEDICATED AND DRIVEN TO DELIVER excellence, Raju Transport is your trusted transport partner. Our fleet, manned by skilled professionals, ensures timely deliveries across all states in India. With a focus on precision and reliability, we guarantee your goods reach their destination seamlessly. Choose Raju Transport for unparalleled transportation solutions that go the extra mile.</p>
                </div>
                <div className="SecondAboutUsFlexMap">
                    <img className="SecondAboutUsFlexMapImg" alt="mapOfIndia" src={map}/>
                </div>
            </div>
        </div>
    )
}

export default SecondAboutUs;