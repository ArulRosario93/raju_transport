import React from "react";
import "./FirstAboutUs.css";
import { Link } from "react-router-dom";
import image from "../imaage.jpg";

const FirstAboutUs = () => {
    return(
        <div className="FirstAboutUs">
            <img className="FirstAboutUsImg" src={image} alt="About-Us-1" border="0" />
            <div className="FirstAboutUsContent">
                <div className="FirstAboutUsContentIn">
                    <h2 className="FirstAboutUsContentInHead">We Keep Your</h2>
                    <h2 className="FirstAboutUsContentInHead">Business Moving</h2>
                    <br />
                    <p className="FirstAboutUsContentInpara">Transportations & more</p>
                    <br />
                    {/* <br /> */}
                    <Link className="linkFound" to={"/contactus"}><p className="FirstAboutUsContentInHeadbtn">Contact Us</p></Link>
                </div>
            </div>
        </div>
    );
};

export default FirstAboutUs;