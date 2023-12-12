import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ fixed, color, came }) => {

    const [navBar, setNavBar] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            setScrolled(true);
            // console.log(window.scrollY)
        } else {
            setScrolled(false);
        }
    })

    const handleNavBarClick = () => {
        setNavBar(!navBar);
    }

    return(
        <div className="nav">
            <div className="MobileNav">
            <Link className="linkFound" to={"/"}><p className="NavLinkMobile">Raju Transports</p></Link>
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
                <Link className="linkFound" to={"/services"}><p className="NavLinkMobileLink">Services</p></Link>
                </div>
                <div className="navBarForMobileLinks">
                    <Link className="linkFound" to={"/aboutus"}><p className="NavLinkMobileLink">About Us</p></Link>
                </div>
                <div className="navBarForMobileLinks">
                    <Link className="linkFound" to={"/contactus"}><p className="NavLinkMobileLink">Contact Us</p></Link>
                </div>
            </div> 

            <div className="NavBar">
                {
                    came? <div className="NavBarLogoforService" style={{fontSize: came? '3.5rem': '0rem'}}>
                        <p >SERVICES PROVIDED</p>
                    </div>: <>
                        <div className="NavBarLogo">
                            <Link className="linkFound" to={"/"}><p className="NavLink" style={{fontSize: scrolled? '1.4rem': '2.4rem', letterSpacing: scrolled? '0.5px': '1px'}}>Raju Transports</p></Link>
                        </div>

                        <div className="NavBarTabs">
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/services"}><p className="NavLink">Services</p></Link>
                            </div>
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/aboutus"}><p className="NavLink">About Us</p></Link>
                            </div>
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/contactus"}><p className="NavLink">Contact Us</p></Link>
                            </div>
                        </div>
                    </>
                }
            </div>
        
        </div>
    )
}

export default NavBar;