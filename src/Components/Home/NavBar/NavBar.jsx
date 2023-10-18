import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="NavBar">
            <div className="NavBarLogo">
                <p className="NavLink">Raju Transports</p>
            </div>
            <div className="NavBarTabs">
                <div className="NavBarTabsLinks">
                    <p className="NavLink">Services</p>
                </div>
                <div className="NavBarTabsLinks">
                    <p className="NavLink">About Us</p>
                </div>
                <div className="NavBarTabsLinks">
                    <Link className="linkFound" to={"/contactus"}><p className="NavLink">Contact Us</p></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;