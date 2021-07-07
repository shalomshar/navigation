import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import logo from './logod.jpg'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="main">
                <div>
                <img className="app-logo" src={logo} alt='logo'/>
                    <p className="company">
                        Deposit
                    </p>
                </div>
                <div className="pages">
                <NavLink  to="/" exact>
                    Welcome
                </NavLink>
                <NavLink className="sub"  to="/subscribe" exact>
                    subscribe
                </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
