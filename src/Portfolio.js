import React from 'react'
import './Portfolio.css'

export default function Portfolio (props) {
    return (
        <div className="portfolio-main">
            <img src={props.src} alt="portfolio-image"></img>
            <h2>{props.title}</h2>
            <span>{props.text}</span>
        </div>
    )
}