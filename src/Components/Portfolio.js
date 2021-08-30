import React, { useState } from 'react'
import '../Styles/Portfolio.css'

export default function Portfolio (props) {
    const [visible, setVisible] = useState('none')

    function displayer() {
        setVisible("block")
    }
    
    function hider() {
        setVisible("none")
    }

    return (
        <div className="portfolio-main">
            <section>
                <img onMouseOver={displayer} onMouseOut={hider} src={props.src} alt="portfolio-image"></img>
                <svg onMouseOver={displayer} style={{display:visible}}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </section>
            <h2>{props.title}</h2>
            <span>{props.text}</span>
        </div>
    )
}