import React, { useEffect } from 'react';
import './AboutUs.css';
import FirstAboutUs from './FirstAboutUs/FirstAboutUs';
import NavBar from '../Home/NavBar/NavBar';
import SecondAboutUs from './SecondAboutUs/SecondAboutUs';
import ThirdAboutUs from './ThirdAboutUs/ThirdAboutUs';
import FourthAboutUs from './FourthAboutUs/FourthAboutUs';
import Footer from '../Footer/Footer';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

    return(
        <div className='AboutUs'>
            <NavBar />
            <FirstAboutUs />
            <ThirdAboutUs />
            <SecondAboutUs />
            <FourthAboutUs />
            <Footer />
        </div>
    )
};

export default AboutUs;
