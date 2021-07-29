import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css'

let about=['Founders','Testimonials','Careers','Investors','Terms of Service'];
let contact=['Contact','Support','Destinations','Sponsorships'];
let videos=['Submit Video','Ambassadors','Agency','Influencer']
let region=['India','USA','Australia','Japan']
let contents={'About Us':about,'Contact Us':contact,'Change Region':region,'Videos':videos};

export default function Footer() {
    return (
    <div className="footer">
    <div className="footer-subs">
        <h1>Join the Adventure newsletter to receive our best deals</h1>
        <h1><small>You can unsubscribe at any time.</small></h1>
        <div className="subs-flex">
            <input placeholder="Your E-mail" className="subs-input"></input>
            <Button btnStyle="btn-secondary" child="Subscribe" />
        </div>
    </div>
    
    <div  className="footer-component" >
    {Object.keys(contents).map((key,item)=>{       
        return (
            <div className="footer-container">
                <ul className="list-container">
                    <li><h2 className="footer-head">{key}</h2>
                <ul className="list-container">{contents[key].map((element)=>{
                return <li><Link className="footer-link"to='/'>{element}</Link></li>;})} 
                </ul>
                </li>
                </ul>
                </div>
            )})} 
    </div>
    <div className="footer-final">
        <Link to='/' className="footer-logo">
            e-domize<i class="ri-remixicon-line" />
        </Link>
        <div className="footer-copyright"><small>All rights reserved © 2021</small></div>    
        <div className="footer-social">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
            <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
        </div>
    </div>
    </div>
    )
}
