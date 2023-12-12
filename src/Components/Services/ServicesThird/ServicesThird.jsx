import React from "react";
import "./ServicesThird.css";

const ServicesThird = () => {
    return(
        <div className="ServicesThird">
            <div className="ServicesThirdContent">
                <p className="ServicesThirdContentNote">Performance</p>
                <h1 className="ServicesThirdContentHead">Build To</h1>
                <h1 className="ServicesThirdContentHead">Perform.</h1>
                <p className="ServicesThirdContentP1">Ensuring the safety of transported loads and timely deliveries demands meticulous planning and adherence to best practices. Rigorous load securing procedures and a commitment to punctuality mitigate risks, safeguarding both cargo and road users. This dedication to excellence builds trust, reliability, and efficiency in the transportation network, fostering overall industry integrity.</p>
            </div>
            <div className="ServicesThirdImg">
                <img className="ServicesThirdImgImg" src="https://miro.medium.com/v2/resize:fit:800/1*mlKZv3KZF2zYW6iFCT9LkA.jpeg" alt="Services" />
            </div>
        </div>
    );
};

export default ServicesThird;
