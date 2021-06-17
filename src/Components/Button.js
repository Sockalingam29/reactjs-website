import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const style=['btn-primary','btn-secondary'];
const size=['btn-small','btn-large'];

export default function Button({child,btnStyle,btnSize,onClick,type})
    
{
    const setStyle=style.includes(btnStyle) ? btnStyle : style[0];
    const setSize=size.includes(btnSize) ? btnSize : size[0];

    return (
        <div>
            <Link to='/signup' className="btn-mobile">
                <button type={type} className={`btn ${setStyle} ${setSize}`} onClick={onClick} type={type}>
                    {child}
                </button>
            </Link>
        </div>
    )
}
