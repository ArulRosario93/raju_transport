import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
    return(
        <div className="AboutUsHome">
            <div className="AboutUsHomeContent">
                <h2 className="AboutUsHomeContentHeading">Welcome to Raju Transports</h2>
                <br />
                <br />
            </div>
            <div className="AboutUsHomeContentShownRow">  
                <div className="AboutUsHomeContentShown">
                    <p className="AboutUsHomeContentPara">
                        SMR is a global company with a high level of innovation. Originally coming from the pure mirror business, today SMR is specialist in rear view mirror systems as well as pioneer in intelligent camera systems for automotive applications. Our goal is to actively help forming the future of the automotive industry – with innovative technologies that make driving more comfortable and safer.
                    </p>
                    <br />
                    <p className="AboutUsHomeContentPara">As part of the Motherson Group, we are optimally networked for reacting quickly to customer requirements and making use of synergy effects. For example, we work closely with our sister companies SMP, MSSL, SMIA, SMRC, PKC and Motherson Innovations. SMR offers a creative working environment, in which everyone can participate actively and develop in line with his or her individual abilities and preferences.</p>
                </div>
                <div className="AboutUsHomeImage">
                    <div className="AboutUsHomeImageMain">
                        <img className="AboutUsHomeImageMainImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/1200px-Sundar_Pichai_%282023%29_cropped.jpg" alt="personalLogo"/>
                        <div className="AboutUsHomeImageMainPerosonalref">
                            <h3 className="AboutUsHomeImageMainPerosonalrefHeadaing">Raju Peter</h3>
                            <p className="AboutUsHomeImageMainPerosonalrefPara">Proprietor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;