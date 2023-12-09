import React, { useState } from "react";
import "./footer.css";
import { GoogleMap, Marker } from 'react-google-maps';

const Footer = () => {

    const [location, setLocation] = useState({
        lat: 12.921748,
        lng: 80.240352,
      });

    return (
        <div className="footer">
            <div className="footertabs">
                <h2 className="footertabsh2">Raju Transport</h2>
                <h3 className="footertabsh3">Madhavaram Chennia - 600019</h3>
            </div>
            <div className="footeroffice">
                <h3>Location</h3>
                {/* <div> */}
                {/* <GoogleMap
                    defaultZoom={13}
                    defaultCenter={location}
                    >
                    <Marker position={location} />
                </GoogleMap> */}
                {/* </div> */}
            </div>
            <div className="">
                <h2 className="contact">Contact Us</h2>
                <h3 className="contacth2">Email: iaehgpin@gmail.com</h3>
                <h3 className="contacth2">Phone No: 9233650235</h3>
            </div>
        </div>
    );
}

export default Footer;