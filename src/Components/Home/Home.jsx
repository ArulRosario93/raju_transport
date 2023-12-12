import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import SlidingText from "./SlidingText/SlidingText";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import SpecialComp from "./SpecialComp/SpecialComp";
import Footer from "../Footer/Footer";

const Home = () => {

    const [came, setcame] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

    return(
        <div className="RajuTransport">
            <div className="Home">
                <NavBar came={came}/>
                <div className="insideHome">
                    <SlidingText />
                </div>
            </div>
            <AboutUs />
            <SpecialComp />
            <Services setcame={setcame}/>
            <Footer sub={true}/>
        </div>
    )
}

export default Home;