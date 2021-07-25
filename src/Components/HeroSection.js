import React from 'react'
import "./HeroSection.css"
import Button from './Button';
 

export default function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Trek the Himalayas</h1>
            <p>Explore the world from the highest mountain!</p>
            <div className="hero-btns">
                <Button child="Get-Started" btnStyle='btn-secondary' btnSize='btn-large' />
                <Button child="Watch trailer" btnSize='btn-large'/>
            </div>
        </div>
    )   
}
