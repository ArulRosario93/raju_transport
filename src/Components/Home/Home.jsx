import React from "react";
import NavBar from "./NavBar/NavBar";
import SlidingText from "./SlidingText/SlidingText";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import Services from "./Services/Services";

const Home = () => {
    return(
        <div className="RajuTransport">
            <div className="Home">
                <NavBar />
                <SlidingText />
            </div>
            <AboutUs />
            <Services />
        </div>
    )
}

export default Home;