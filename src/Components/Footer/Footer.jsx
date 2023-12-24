import React, { useState } from "react";
import "./footer.css";
import { GoogleMap, Marker } from 'react-google-maps';
import { Link } from "react-router-dom";

const Footer = ({ sub }) => {

    const [location, setLocation] = useState({
        lat: 12.921748,
        lng: 80.240352,
      });

    return (
        <>
            {
                sub? <h2 className="quote">Rise up. Live a life</h2>: null
            }
            <div className="footer">
                <div className="footertabs">
                    <h2 className="footertabsh2">Raju Transport</h2>
                    <h3 className="footertabsh3">Madhavaram Chennai - 600019</h3>
                </div>
                <div className="footeroffice">
                    <h3 className="footerofficeHead">Location</h3>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.281654682546!2d80.22394855044072!3d13.14462560346381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264e689ff7ffd%3A0x5b14cdae9af9b78!2sRaju%20Transports!5e0!3m2!1sen!2sin!4v1703402742943!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe className="MapLocation" title="Kcg College Of Technology"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.281654682546!2d80.22394855044072!3d13.14462560346381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264e689ff7ffd%3A0x5b14cdae9af9b78!2sRaju%20Transports!5e0!3m2!1sen!2sin!4v1703402742943!5m2!1sen!2sin"
                    width="100%"
                    height="100"
                    style={{border:0,}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <div className="">
                    <h2 className="contact">Contact Us</h2>
                    <h3 className="contacth2">Email: iaehgpin@gmail.com</h3>
                    <h3 className="contacth2">Phone No: 9233650235</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;