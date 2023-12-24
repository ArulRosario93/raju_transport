import React from "react";
import "./AboutUs.css"; 
import image from "./image.png";

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
                    Raju Transport, with over 35 years of experience, is a prominent transportation company based in Tamil Nadu, India. Boasting a robust network of contacts, the company specializes in the efficient delivery of various loads, goods, and sands to desired locations within Tamil Nadu and across India. With a wealth of experience in the industry, Raju Transport has established itself as a reliable and trusted partner in the logistics sector, ensuring timely and secure transportation services for its clientele.</p>
                    <br />
                    <p className="AboutUsHomeContentPara">With over 35 years of experience, Raju Transport is a trusted transportation company in Tamil Nadu, India. Known for its extensive network, the company specializes in timely and secure delivery of various loads, goods, and sands across Tamil Nadu and India. Committed to customer satisfaction, Raju Transport prioritizes quality, safety, and innovation, utilizing a well-maintained fleet and a skilled team. As a reliable partner in logistics, the company continues to evolve, ensuring it remains a leader in providing efficient transportation solutions for diverse needs.</p>
                </div>
                <div className="AboutUsHomeImage">
                    <div className="AboutUsHomeImageMain">
                        <img className="AboutUsHomeImageMainImg" src={image} alt="personalLogo"/>
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