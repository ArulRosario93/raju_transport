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
                <ServicesThird note="Southern India" h1="India" h2="Logistics Hub." p="Navigating the bustling cities of Mumbai, Tamil Nadu, Kerala, and Hyderabad, our transport services redefine efficiency. Seamlessly connecting businesses, we offer reliable logistics and swift deliveries, ensuring your cargo reaches its destination promptly. Your trusted partner in Southern India's dynamic transportation landscape."/>
                <ServicesFourth note='cargo' image="https://www.sightline.org/wp-content/uploads/2020/07/two-friends-walking-in-city-wearing-protective-masks-during-corona-virus-crisis-city-two-people_t20_gL0znY-scaled.jpg" h1="Diverse" h2="Fleet for" h3="Every Cargo" p="Our diverse fleet, featuring 6 to 14-wheel lorries, 10-wheel Taurus, and 19 to 22 feet open hi-tech body vehicles, ensures tailored solutions for every cargo. Servicing Mumbai, Tamil Nadu, Kerala, and Hyderabad, we guarantee efficient and secure transportation, meeting the unique demands of your business." />
                <ServicesThird note="vehicle" image="https://www.sightline.org/wp-content/uploads/2020/07/two-friends-walking-in-city-wearing-protective-masks-during-corona-virus-crisis-city-two-people_t20_gL0znY-scaled.jpg" h1="Versatile" h2="Container" h3="Transport Fleet." p="With container sizes ranging from 17 to 26 feet, our transport fleet offers versatile solutions for your cargo needs. Whether it's Mumbai, Tamil Nadu, Kerala, or Hyderabad, trust us to deliver excellence in logistics, ensuring the safe and efficient transportation of goods across diverse distances." />
                <Footer />
        </div>
    );
};

export default Services;