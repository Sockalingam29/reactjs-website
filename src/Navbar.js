import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [click, setclick] = useState(false);
    
    const menuHandler=()=>{
        setclick(!click);
    }

    return (
        <div>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    Website<i className="icon" />
                </Link>
                <div className="menu-icon" onClick={menuHandler}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </nav>
        </div>
    )
}
