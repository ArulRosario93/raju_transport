import React, { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import SlidingText from "./SlidingText/SlidingText";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import SpecialComp from "./SpecialComp/SpecialComp";
import Footer from "../Footer/Footer";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

    return(
        <div className="RajuTransport">
            <div className="Home">
                <NavBar />
                <div className="insideHome">
                    <SlidingText />
                </div>
            </div>
            <AboutUs />
            <SpecialComp />
            <Services />
            <Footer />
        </div>
    )
}

export default Home;