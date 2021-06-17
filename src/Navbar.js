import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [click, setclick] = useState(false);
    
    const menuHandler=()=>{setclick(!click);}

    const closeMobileMenu=()=>{setclick(false);}


    return (
        <div>
            
            <nav className="nav">
                <Link to='/' className="nav-logo">
                    Website<i class="ri-remixicon-line" />
                </Link>
                <div className="nav-menu-icon" onClick={menuHandler}>
                    <i className={click ? "ri-close-line" : "ri-menu-line"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links-signup" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
