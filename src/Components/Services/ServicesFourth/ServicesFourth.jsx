import React from "react";
import "./ServicesFourth.css";

const ServicesFourth = ({ image, note, h1, h2, h3, p }) => {
    return (
        <div className="ServicesFourth">
            <div className="ServicesFourthImg">
                <img className="ServicesFourthImgImg" src={image} alt="ServicesFourth" />
            </div>
            <div className="ServicesFourthContent">
            <p className="ServicesThirdContentNote">{note}</p>
                <h1 className="ServicesFourthContentHead">{h1}</h1>
                <h1 className="ServicesFourthContentHead">{h2}</h1>
                <h1 className="ServicesFourthContentHead">{h3}</h1>
                <p className="ServicesFourthContentP">
                    {p}
                </p>
            </div>
        </div>
    );
};

export default ServicesFourth;