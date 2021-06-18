import React from 'react';
import header from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={header} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review"> Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;