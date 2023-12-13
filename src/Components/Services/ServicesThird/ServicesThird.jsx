import React from "react";
import "./ServicesThird.css";

const ServicesThird = ({ note, h1, h2, h3, p }) => {
    return(
        <div className="ServicesThird">
            <div className="ServicesThirdContent">
                <p className="ServicesThirdContentNote">{note}</p>
                <h1 className="ServicesThirdContentHead">{h1}</h1>
                <h1 className="ServicesThirdContentHead">{h2}</h1>
                {
                    h3? <h1 className="ServicesThirdContentHead">{h3}</h1>: null
                }
                <p className="ServicesThirdContentP1">{p}</p>
            </div>
            <div className="ServicesThirdImg">
                <img className="ServicesThirdImgImg" src="https://miro.medium.com/v2/resize:fit:800/1*mlKZv3KZF2zYW6iFCT9LkA.jpeg" alt="Services" />
            </div>
        </div>
    );
};

export default ServicesThird;
