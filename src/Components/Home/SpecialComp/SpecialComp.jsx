import React from 'react';
import "./SpecialComp.css";
import CountUp from 'react-countup';

const SpecialComp = () => {
    return(
        <div className='SpecialComp'>
            <div className='clients'>
                <p className='SpecialCompHead'><CountUp start={0} useEasing duration={6} end={500} />+</p>
                <p className='SpecialCompSub'>Clients</p>
            </div>
            <div className='permit'>
                <p className='SpecialCompHead'>AIP</p>
                <p className='SpecialCompSub'>All India Permit</p>
            </div>
        </div>
    )
}

export default SpecialComp;