import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import header from '../../images/logo.png';
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <img src={header} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review"> Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link style={{border: '1px solid white'}}  to="/login">{loggedInUser.name}</Link>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;