import React from 'react'
import Carditems from './Carditems'
import "./Cards.css"
import img1 from '../images/Himalayas-1.jpg'
import img2 from '../images/himalayas-2.JPG'
import img3 from '../images/Himalayas-3.jpg'
import img4 from '../images/Himalayas-4.jpg'
import img5 from '../images/Himalayas_Map.png'


export default function Cards() {
    return (
        <div className="cards">
        <h1>Explore our products</h1>
        <div className="cards-container">
        <div className='cards__wrapper'>
            <ul className="card-list-items">
                <Carditems
                src={img1}
                text='Lorem ipsum dolor sit amet'
                path='/about'/>
                <Carditems 
                text='Lorem ipsum dolor sit amet'
                path='/products'
                src={img2}/>
            </ul>
            <ul className="card-list-items">
                <Carditems 
                    text='Lorem ipsum dolor sit amet'
                    path='/products'
                    src={img3}/>
                <Carditems 
                    text='Lorem ipsum dolor sit amet'
                    path='/signup'
                    src={img4}/>
                <Carditems 
                    text='Lorem ipsum dolor sit amet'
                    path='/products'
                    src={img5}/>
            </ul>
        </div>
        </div>
        </div>
    )
}
