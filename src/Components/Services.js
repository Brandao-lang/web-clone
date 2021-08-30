import React from 'react'
import '../Styles/Services.css';

export default function Services (props) {
    
    return (
        <div className="services-main">
           <div className="service-cards">
                <img src={props.src} alt="service-logo"></img>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div> 
         </div>
    )
}