import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ fixed, color, came }) => {

    const [navBar, setNavBar] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            if(window.innerWidth > 500) {
                setScrolled(true);
            }
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

            <div className="navBarForMobile" style={{visibility: navBar? 'visible': 'hidden', height: navBar? '100vh': '0vh',}}>
                <p className="MobileCloseBar" style={{visibility: navBar? 'visible': 'hidden', fontSize: navBar? 'large': '0px',}} onClick={() => handleNavBarClick()}>X</p>
                <h2 className="HeadHeadForMobilebar" style={{visibility: navBar? 'visible': 'hidden', fontSize: navBar? 'x-large': '0px',}}>Raju Transports</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="navBarForMobileLinks" style={{visibility: navBar? 'visible': 'hidden', fontSize: navBar? 'large': '0px',}}>
                <Link className="linkFound" to={"/services"}><p className="NavLinkMobileLink">Services</p></Link>
                </div>
                <div className="navBarForMobileLinks" style={{visibility: navBar? 'visible': 'hidden', fontSize: navBar? 'large': '0px',}}>
                    <Link className="linkFound" to={"/aboutus"}><p className="NavLinkMobileLink">About Us</p></Link>
                </div>
                <div className="navBarForMobileLinks" style={{visibility: navBar? 'visible': 'hidden', fontSize: navBar? 'large': '0px',}}>
                    <Link className="linkFound" to={"/contactus"}><p className="NavLinkMobileLink">Contact Us</p></Link>
                </div>
            </div> 

            <div className="NavBar">
                {
                    came? <div className="NavBarLogoforService" style={{fontSize: came? '3.5rem': '0rem'}}>
                        <p >SERVICES PROVIDED</p>
                    </div>: <>
                        <div className="NavBarLogo">
                            <Link className="linkFound" to={"/"}><p className="NavLink ptransition" style={{fontSize: scrolled? came? '0rem': '1.4rem': '2.4rem', letterSpacing: scrolled? '0.5px': '1px'}}>Raju Transports</p></Link>
                        </div>

                        <div className="NavBarTabs">
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/services"}><p className="NavLink ptransition" style={{fontSize: came? '0rem': '1rem'}}>Services</p></Link>
                            </div>
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/aboutus"}><p className="NavLink ptransition" style={{fontSize: came? '0rem': '1rem'}}>About Us</p></Link>
                            </div>
                            <div className="NavBarTabsLinks">
                                <Link className="linkFound" to={"/contactus"}><p className="NavLink ptransition" style={{fontSize: came? '0rem': '1rem'}}>Contact Us</p></Link>
                            </div>
                        </div>
                    </>
                }
            </div>
        
        </div>
    )
}

export default NavBar;