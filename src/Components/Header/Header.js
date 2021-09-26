import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <h1>Concert <span id="hub">Hub</span></h1>
                <h2>Contact Us For Arrange Any Concert, We will Make Your Program Beautiful!!!</h2>
                <h3>Mininum Budget: <span id="hub"> $1000</span></h3>
            </div>
        </div>
    );
};

export default Header;