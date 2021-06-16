import React from 'react';
import header from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={header} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Review</a>
                <a href="/Inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;