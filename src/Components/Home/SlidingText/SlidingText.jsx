import React from "react";
import "./SlidingText.css";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SlidingText = () => {
    return(
        <div className="SlidingText">
            <Fade>
                <Slide left>
                    <p className="SlidingTextPara"><span className="Bold">Streamlined </span>transport services</p>
                    <p  className="SlidingTextPara">for your convenience.</p>
                </Slide>
            </Fade>
        </div>
    )
}

export default SlidingText;