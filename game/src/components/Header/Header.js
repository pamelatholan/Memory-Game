// IMPORTS
import React from 'react';
import "./Header.css";
import Popover from 'react-bootstrap/Popover';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Button from 'react-bootstrap/Button';
// 
const popoverLeft = (
    <Popover id="popover-positioned-left">
        <strong>Game Instructions</strong><br />
        Click on a character to earn points, but don't select a character more than once!
    </Popover>
);
// PROPS: Header
const Header = props => (
    <header className="header row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center">
            {/* <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button className="logo-button btn-dark">
                    <img src="./images/logo.jpg" className="skeletor" alt="Skeletor"/>
                </Button>
            </OverlayTrigger> */}
        </div>
        <div className="col-lg-3"></div>
    </header>
)
// EXPORT DEFAULT: Header
export default Header;