import React from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from "react-router-dom";
import companyLogo from "../../assets/logo-medium.png"

function Navigation() {
const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-container">
                <span className="nav-image">
                    <button className="logo-button" onClick={() => navigate('/')}>
                    <img className="company-logo" src={companyLogo} alt="Logo van het bedrijf"/>
                        </button>
                </span>

                    <ul>
                        <div className="nav-items">
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink>
                        </li>
                        <li><NavLink to="/nieuwe-posts"
                                     className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Nieuwe post
                            maken</NavLink></li>
                        <li><NavLink to="/overzicht"
                                     className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Alle
                            posts</NavLink></li>
                        </div>
                    </ul>

            </div>
        </nav>
    );
}

export default Navigation;