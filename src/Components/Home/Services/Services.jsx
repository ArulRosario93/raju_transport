import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = ({ setcame }) => {

    return(
        <div className="services" onMouseOver={() => setcame(true)} onMouseOut={() => setcame(false)}>
            <h2 className="ServicesHead">Services Provided</h2>
            <div className="ServicesInner">
                <div className="ServicesInnerContainer">
                    <h2 className="ServicesFoundHead">THE RIGHT THINGS. THE RIGHT WAY.</h2>
                    <div className="ServicesInMobile">
                        <div className="ServicesFound">
                            <p className="ServicesFoundPara">Open Hi-tech solutions revolutionize the trucking industry with real-time tracking, autonomous vehicles, and eco-friendly innovations, optimizing logistics and enhancing safety in the fast-evolving transportation sector.</p>
                            <Link to={"/services"} style={{textDecoration: 'none'}}><div className="ServicesFoundView">View</div></Link>
                        </div>
                        <div className="ServicesFoundImg">
                            <img className="ServicesFoundImgImg" src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?cs=srgb&dl=pexels-quintin-gellar-2199293.jpg&fm=jpg" alt="Services" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ServicesInner">
                <div className="ServicesInnerContainerRight">
                    <h2 className="ServicesFoundHeadR">Southern India Logistics Hub</h2>
                    <div className="ServicesInMobileRight">
                        <div className="ServicesFoundImg">
                            <img className="ServicesFoundImgImg" src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?cs=srgb&dl=pexels-quintin-gellar-2199293.jpg&fm=jpg" alt="Services" />
                        </div>
                        <div className="ServicesFoundRight">
                            <p className="ServicesFoundPara">
Explore excellence in transport with our Southern India Logistics Hub. From versatile containers to diverse fleets, we ensure secure, efficient, and timely cargo solutions in Mumbai, Tamil Nadu, Kerala, and Hyderabad.</p>
                            <Link to={"/services"} style={{textDecoration: 'none'}}><div className="ServicesFoundView">View</div></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="ServicesInner">
                <div className="ServicesInnerContainer">
                    <div className="ServicesFound">
                        <h1 className="ServicesFoundHead">Open Hi-Tech</h1>
                        <p className="ServicesFoundPara">Open Hi-tech solutions revolutionize the trucking industry with real-time tracking, autonomous vehicles, and eco-friendly innovations, optimizing logistics and enhancing safety in the fast-evolving transportation sector.</p>
                        <div className="ServicesFoundView">View</div>
                    </div>
                    <div className="ServicesFoundImg">
                        <img className="ServicesFoundImgImg" src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?cs=srgb&dl=pexels-quintin-gellar-2199293.jpg&fm=jpg" alt="Services" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Services;