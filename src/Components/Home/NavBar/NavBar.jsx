import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [navBar, setNavBar] = useState(false);

    const handleNavBarClick = () => {
        setNavBar(!navBar);
    }

    return(
        <div className="nav">
            <div className="MobileNav">
                <p className="NavLinkMobile">Raju Transports</p>
                <p className="NavLinkMobileBar" onClick={() => handleNavBarClick()} style={{display: navBar? 'none': 'block'}}>|||</p>
            </div>

            <div className="navBarForMobile" style={{height: navBar? '100vh': '0vh', display: navBar? 'block': 'none'}}>
                <p className="MobileCloseBar" onClick={() => handleNavBarClick()}>X</p>
                <h2 className="HeadHeadForMobilebar">Raju Transports</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="navBarForMobileLinks">
                    <p className="NavLinkMobileLink">Services</p>
                </div>
                <div className="navBarForMobileLinks">
                    <Link className="linkFound" to={"/aboutus"}><p className="NavLinkMobileLink">About Us</p></Link>
                </div>
                <div className="navBarForMobileLinks">
                    <Link className="linkFound" to={"/contactus"}><p className="NavLinkMobileLink">Contact Us</p></Link>
                </div>
            </div> 

        <div className="NavBar">
            <div className="NavBarLogo">
                <p className="NavLink">Raju Transports</p>
            </div>
            <div className="NavBarTabs">
                <div className="NavBarTabsLinks">
                    <p className="NavLink">Services</p>
                </div>
                <div className="NavBarTabsLinks">
                <Link className="linkFound" to={"/aboutus"}><p className="NavLink">About Us</p></Link>
                </div>
                <div className="NavBarTabsLinks">
                    <Link className="linkFound" to={"/contactus"}><p className="NavLink">Contact Us</p></Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar;