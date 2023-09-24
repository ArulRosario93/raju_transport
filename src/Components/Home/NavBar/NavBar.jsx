import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return(
        <div className="NavBar">
            <div className="NavBarLogo">
                <p>Raju Transports</p>
            </div>
            <div className="NavBarTabs">
                <div className="NavBarTabsLinks">
                    <p>Services</p>
                </div>
                <div className="NavBarTabsLinks">
                    <p>About Us</p>
                </div>
                <div className="NavBarTabsLinks">
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;