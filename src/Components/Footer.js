import React from 'react'

let about=['H','I','J'];
let contact=['C','P'];
let contents=[about,contact];
let sections=["about","contact"]
export default function Footer() {
    return (
    <div>
    Subscribe
    
    {contents.map((item)=>{       
        return (
            <div>
                {sections.map((section)=>{return <div><h4>{section}</h4>
                <ul>
                {item.map((element)=>{return <li>{element}</li>;})} 
                </ul>
                </div>
            })}
            </div>)})} 
    </div>
    )
}
