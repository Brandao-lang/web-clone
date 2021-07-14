import React from 'react'
import '../Styles/Title.css'

export default function Title (props) {
    return (
        <div className="section-main">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}