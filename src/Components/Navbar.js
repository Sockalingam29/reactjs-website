/*
KNOWN ISSUES:
Logo expands more than the text space
*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true);
    
    const menuHandler=()=>{setclick(!click);}

    const closeMobileMenu=()=>{setclick(false);}

    const showButton=()=>{
        if(window.innerWidth<=600){
            setbutton(false);
        }
        else setbutton(true);
    }

    useEffect(()=>{
        showButton();
    },[button]);

    {document.addEventListener("resize",showButton);}

    return (
        <>  
            <nav className="nav">
            <div className='nav-container'>
                <Link to='/' className="nav-logo">
                    e-domize<i class="ri-remixicon-line" />
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
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li id="list-signup"className="nav-items">
                        <Link to='/signup' className="nav-links-signup" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li id="btn-signup" className="nav-items" onClick={closeMobileMenu}>
                        <Button child="Sign-up" btnStyle="btn-secondary"/>
                    </li>
                </ul>                
            </div>
            </nav>
        </>
    )

}