import React from 'react';
import "./ContactUs.css";
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const ContactUs = () => {
    return (
        <div className='ContactUs'>
            <NavBar />
            <div className='MainContainer'>
                <div className='ContainItImg'>
                    <img className='ContainItImgImg' src='https://thumbs.dreamstime.com/b/american-style-truck-freeway-pulling-load-transportation-theme-road-cars-174771780.jpg' alt='ContainIt'/>
                    <p>We would love to get in touch</p>
                </div>
                <div className="divider"></div>
                <div className='ContainIt'>
                    <h1 className='ContactUsHead'>Talk with our team</h1>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>First Name *</p>
                            <input className='ContactUsContaininp' type='text' placeholder='e.g., John '/>
                        </div>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Last Name *</p>
                            <input className='ContactUsContaininp' type='text' placeholder='Smith'/>
                        </div>
                    </div>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Company Email *</p>
                            <input className='ContactUsContaininp' type='email' placeholder='name@company.com'/>
                        </div>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Phone Number</p>
                            <input className='ContactUsContaininp' type='number' placeholder='+91 90393 84729'/>
                        </div>
                    </div>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContaintextArea'>
                        <p className='ContactUsContainP'>What would you like to discuss? *</p>
                            <textarea className='ContactUsContaintextArea' rows={5} placeholder='Tell us about your team and provide some details about a project or process you would like to track in Raju Transport.'/>
                        </div>
                    </div>
                    <div className='ContactUsSubmit'>SUBMIT</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
