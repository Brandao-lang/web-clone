import React from 'react'
import './Title.css'

export default function Title (props) {
    return (
        <div className="section-main">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}