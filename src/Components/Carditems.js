import React from 'react'
import {Link} from 'react-router-dom'
import "./Cards.css"

export default function Carditems(props) {
    return (
        <>
        <li className="card-item">
        <Link className="card-item-link" to={props.path}>    
        <figure className="card-item-fig">
            <img 
            src={props.src}
            alt="Himalayas Image" 
            className="card-item-fig-img" />
        </figure>
        <div className="card-item-txt">
            <div>{props.text}</div>
        </div>
        </Link>
        </li>   
        </>
    )
}
