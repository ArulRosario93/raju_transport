import React from 'react';
import './AboutUs.css';
import FirstAboutUs from './FirstAboutUs/FirstAboutUs';
import NavBar from '../Home/NavBar/NavBar';
import SecondAboutUs from './SecondAboutUs/SecondAboutUs';
import ThirdAboutUs from './ThirdAboutUs/ThirdAboutUs';
import FourthAboutUs from './FourthAboutUs/FourthAboutUs';

const AboutUs = () => {
    return(
        <div className='AboutUs'>
            <NavBar />
            <FirstAboutUs />
            <ThirdAboutUs />
            <SecondAboutUs />
            <FourthAboutUs />
        </div>
    )
};

export default AboutUs;
