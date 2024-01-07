import React, { useEffect, useState } from 'react';
import "./ContactUs.css";
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import image from "./image.webp"
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const Navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [CompanyEmail, setCompanyEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Message, setMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)        
    }, []);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleCompanyEmail = (e) => {
        setCompanyEmail(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit =  async (e) => {
    
        e.preventDefault();
        if (FirstName === '' || LastName === '' || CompanyEmail === '' || Message === '' || PhoneNumber === '') {
            alert('Please fill all the fields');
            console.log(PhoneNumber);
            console.log(FirstName, LastName, CompanyEmail, Message, PhoneNumber);
        }else{
            await emailjs
            .send('service_a64i2qg', 'template_oimzkxf', {
                from_name:`${FirstName} ${LastName}`,
                message:   Message,
                mail:      CompanyEmail,
                phonenum:  PhoneNumber,
            }, "hyAjedp6DcR80d_AL")
            .then((response) => {
                alert('Your message has been sent successfully. We will contact you soon.');
                setCompanyEmail('');
                setFirstName('');
                setLastName('');
                setMessage('');
                setPhoneNumber('');
                Navigate('/');
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            });
        }
    }

    return (
        <div className='ContactUs'>
            <NavBar />
            <div className='MainContainer'>
                <div className='ContainItImg'>
                    <img className='ContainItImgImg' src={image} alt='ContainIt'/>
                    <p className='noteforbottom'>We would love to get in touch</p>
                </div>
                <div className="divider"></div>
                <div className='ContainIt'>
                    <h1 className='ContactUsHead'>Talk with our team</h1>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>First Name *</p>
                            <input className='ContactUsContaininp' onChange={handleFirstName} type='text' placeholder='e.g., John '/>
                        </div>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Last Name *</p>
                            <input className='ContactUsContaininp' onChange={handleLastName} type='text' placeholder='Smith'/>
                        </div>
                    </div>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Company Email *</p>
                            <input className='ContactUsContaininp' onChange={handleCompanyEmail} type='email' placeholder='name@company.com'/>
                        </div>
                        <div className='ContactUsContain'>
                            <p className='ContactUsContainP'>Phone Number</p>
                            <input className='ContactUsContaininp' onChange={handlePhoneNumber} type='number' placeholder='+91 90393 84729'/>
                        </div>
                    </div>
                    <div className='ContactUsContainer'>
                        <div className='ContactUsContaintextArea'>
                        <p className='ContactUsContainP'>What would you like to discuss? *</p>
                            <textarea className='ContactUsContaintextArea' onChange={handleMessage} rows={5} placeholder='Tell us about your team and provide some details about a project or process you would like to track in Raju Transport.'/>
                        </div>
                    </div>
                    <div className='ContactUsSubmit' onClick={handleSubmit}>SUBMIT</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
