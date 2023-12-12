import React, { useEffect } from "react";
import ServicesHome from "./ServicesHome/ServicesHome";
import NavBar from "../Home/NavBar/NavBar";
import ServicesSecond from "./ServicesSecond/ServicesSecond";
import ServicesThird from "./ServicesThird/ServicesThird";
import ServicesFourth from "./ServicesFourth/ServicesFourth";
import Footer from "../Footer/Footer";

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);
    
    return (
        <div className="Services">
                <NavBar fixed={true} color="rgba(115, 0, 255, 0.745)"/>
                <ServicesHome />
                <ServicesSecond />
                <ServicesThird />
                <ServicesFourth />
                <Footer />
        </div>
    );
};

export default Services;