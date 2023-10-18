import React, { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import SlidingText from "./SlidingText/SlidingText";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import Services from "./Services/Services";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

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